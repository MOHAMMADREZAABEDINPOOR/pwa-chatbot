const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database.js');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fetch = require('node-fetch');
const { SocksProxyAgent } = require('socks-proxy-agent');

const app = express();
const port = 3000;

// Configure custom fetch with SOCKS proxy
const proxyFetch = (url, options = {}) => {
    const proxyAgent = new SocksProxyAgent('socks5h://127.0.0.1:10808');
    return fetch(url, { ...options, agent: proxyAgent });
};

// Configure global fetch for Gemini API
global.fetch = proxyFetch;

// Import Gemini configuration
const config = require('./config.js');

// Initialize Gemini API client
const genAI = new GoogleGenerativeAI(config.API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the 'pimxchat' directory
app.use(express.static(path.join(__dirname, '.')));

// --- API Routes ---

// GET all chat sessions
app.get('/api/chats', (req, res) => {
    const sql = "SELECT * FROM chats ORDER BY created_at DESC";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ "error": err.message });
            return;
        }
        res.json({ chats: rows });
    });
});

// GET a single chat with its messages
app.get('/api/chats/:id', (req, res) => {
    const chatId = req.params.id;
    const chatSql = "SELECT * FROM chats WHERE id = ?";
    const messagesSql = "SELECT * FROM messages WHERE chat_id = ? ORDER BY timestamp ASC";

    db.get(chatSql, [chatId], (err, chatRow) => {
        if (err) {
            return res.status(500).json({ "error": err.message });
        }
        if (!chatRow) {
            return res.status(404).json({ "error": "Chat not found" });
        }
        db.all(messagesSql, [chatId], (err, messageRows) => {
            if (err) {
                return res.status(500).json({ "error": err.message });
            }
            res.json({ ...chatRow, messages: messageRows });
        });
    });
});

// --- Global feedback stats ---
// Get current feedback statistics
app.get('/api/feedback', (req, res) => {
    const sql = 'SELECT total_responses, total_likes, total_dislikes FROM feedback_stats WHERE id = 1';
    db.get(sql, [], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.json({ total_responses: 0, total_likes: 0, total_dislikes: 0 });
        res.json(row);
    });
});

// Submit feedback verdict (like/dislike) per message, limited to 1 per client
app.post('/api/feedback', (req, res) => {
    const { verdict, messageId, clientId } = req.body || {};
    if (verdict !== 'like' && verdict !== 'dislike' && verdict !== 'remove') {
        return res.status(400).json({ error: 'verdict must be "like", "dislike", or "remove"' });
    }
    if (!messageId || !clientId) {
        return res.status(400).json({ error: 'messageId and clientId are required' });
    }

    db.get('SELECT verdict FROM feedback_votes WHERE message_id = ? AND client_id = ?', [messageId, clientId], (err, existing) => {
        if (err) return res.status(500).json({ error: err.message });

        const updateStats = (deltaLike, deltaDislike) => {
            db.run('UPDATE feedback_stats SET total_likes = total_likes + ?, total_dislikes = total_dislikes + ? WHERE id = 1', [deltaLike, deltaDislike], function(e2) {
                if (e2) return res.status(500).json({ error: e2.message });
                db.get('SELECT total_responses, total_likes, total_dislikes FROM feedback_stats WHERE id = 1', [], (e3, row) => {
                    if (e3) return res.status(500).json({ error: e3.message });
                    res.json(row || { total_responses: 0, total_likes: 0, total_dislikes: 0 });
                });
            });
        };

        if (verdict === 'remove') {
            if (existing) {
                // Remove vote and update stats
                db.run('DELETE FROM feedback_votes WHERE message_id = ? AND client_id = ?', [messageId, clientId], function(e1) {
                    if (e1) return res.status(500).json({ error: e1.message });
                    // Decrement the appropriate counter based on what was removed
                    const deltaLike = existing.verdict === 'like' ? -1 : 0;
                    const deltaDislike = existing.verdict === 'dislike' ? -1 : 0;
                    updateStats(deltaLike, deltaDislike);
                });
            } else {
                // Nothing to remove, just return current stats
                db.get('SELECT total_responses, total_likes, total_dislikes FROM feedback_stats WHERE id = 1', [], (e4, row) => {
                    if (e4) return res.status(500).json({ error: e4.message });
                    res.json(row || { total_responses: 0, total_likes: 0, total_dislikes: 0 });
                });
            }
        } else if (!existing) {
            // First time vote by this client for this message
            db.run('INSERT INTO feedback_votes (message_id, client_id, verdict) VALUES (?, ?, ?)', [messageId, clientId, verdict], function(e1) {
                if (e1) return res.status(500).json({ error: e1.message });
                updateStats(verdict === 'like' ? 1 : 0, verdict === 'dislike' ? 1 : 0);
            });
        } else if (existing.verdict === verdict) {
            // Same verdict again → remove the vote (toggle off)
            db.run('DELETE FROM feedback_votes WHERE message_id = ? AND client_id = ?', [messageId, clientId], function(e1) {
                if (e1) return res.status(500).json({ error: e1.message });
                const deltaLike = verdict === 'like' ? -1 : 0;
                const deltaDislike = verdict === 'dislike' ? -1 : 0;
                updateStats(deltaLike, deltaDislike);
            });
        } else {
            // Switching verdict: update vote and adjust stats
            db.run('UPDATE feedback_votes SET verdict = ? WHERE message_id = ? AND client_id = ?', [verdict, messageId, clientId], function(e5) {
                if (e5) return res.status(500).json({ error: e5.message });
                // If switching like→dislike: -1 like, +1 dislike; reverse for dislike→like
                const deltaLike = verdict === 'like' ? 1 : -1;
                const deltaDislike = verdict === 'dislike' ? 1 : -1;
                updateStats(deltaLike, deltaDislike);
            });
        }
    });
});

// POST a new chat session
app.post('/api/chats', (req, res) => {
    const { id, title } = req.body;
    if (!id || !title) {
        return res.status(400).json({ error: 'id and title are required' });
    }
    const sql = 'INSERT INTO chats (id, title) VALUES (?, ?)';
    db.run(sql, [id, title], function(err) {
        if (err) {
            return res.status(500).json({ "error": err.message });
        }
        res.status(201).json({ id, title, created_at: new Date().toISOString() });
    });
});

// PUT (update) a chat title
app.put('/api/chats/:id', (req, res) => {
    const chatId = req.params.id;
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'title is required' });
    }
    const sql = 'UPDATE chats SET title = ? WHERE id = ?';
    db.run(sql, [title, chatId], function(err) {
        if (err) {
            return res.status(500).json({ "error": err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ message: "Chat not found" });
        }
        res.status(200).json({ message: "Chat title updated successfully" });
    });
});

// POST a new message to a chat
app.post('/api/chats/:id/messages', (req, res) => {
    const chatId = req.params.id;
    const { sender, text, versionHistory, parent_message_id } = req.body;
    if (!sender || !text) {
        return res.status(400).json({ error: 'sender and text are required' });
    }
    
    let versionHistoryStr = null;
    if (versionHistory) {
        try {
            versionHistoryStr = JSON.stringify(versionHistory);
        } catch (err) {
            console.error('Error stringifying version history:', err);
        }
    }
    
    const sql = 'INSERT INTO messages (chat_id, sender, text, version_history, parent_message_id) VALUES (?, ?, ?, ?, ?)';
    db.run(sql, [chatId, sender, text, versionHistoryStr, parent_message_id], function(err) {
        if (err) {
            return res.status(500).json({ "error": err.message });
        }
        // Increment total responses when a bot message is saved
        if (sender === 'bot') {
            db.run('UPDATE feedback_stats SET total_responses = total_responses + 1 WHERE id = 1');
        }
        res.status(201).json({ id: this.lastID, chatId, sender, text, versionHistory: versionHistoryStr, parent_message_id });
    });
});

// PUT (update) a message with version history
app.put('/api/chats/:id/messages/:messageId', (req, res) => {
    const chatId = req.params.id;
    const messageId = req.params.messageId;
    const { text, versionHistory } = req.body;
    
    if (!text) {
        return res.status(400).json({ error: 'text is required' });
    }
    
    let versionHistoryStr = null;
    if (versionHistory) {
        try {
            versionHistoryStr = JSON.stringify(versionHistory);
        } catch (err) {
            console.error('Error stringifying version history:', err);
        }
    }
    
    const sql = 'UPDATE messages SET text = ?, version_history = ? WHERE id = ? AND chat_id = ?';
    db.run(sql, [text, versionHistoryStr, messageId, chatId], function(err) {
        if (err) {
            return res.status(500).json({ "error": err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.status(200).json({ message: "Message updated successfully" });
    });
});

// DELETE a chat session
app.delete('/api/chats/:id', (req, res) => {
    const chatId = req.params.id;
    const sql = 'DELETE FROM chats WHERE id = ?';
    db.run(sql, chatId, function(err) {
        if (err) {
            return res.status(500).json({ "error": err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ message: "Chat not found" });
        }
        res.status(200).json({ message: "Chat deleted successfully" });
    });
});

// Gemini API endpoint
app.post('/api/gemini', async (req, res) => {
    const { prompt, direction, uiLanguage } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        let systemInstruction = '';
        // Use UI language if provided, otherwise fall back to direction-based detection
        if (uiLanguage) {
            const languageInstructions = {
                fa: 'You must respond in Persian (Farsi).',
                en: 'You must respond in English.',
                fr: 'You must respond in French.',
                es: 'You must respond in Spanish.',
                de: 'You must respond in German.',
                ar: 'You must respond in Arabic.',
                it: 'You must respond in Italian.',
                ru: 'You must respond in Russian.'
            };
            systemInstruction = languageInstructions[uiLanguage] || languageInstructions.en;
        } else if (direction === 'rtl') {
            systemInstruction = 'You must respond in Persian.';
        } else if (direction === 'ltr') {
            systemInstruction = 'You must respond in English.';
        }

        const modelConfigForRequest = {
            model: config.MODEL_CONFIG.model,
            generationConfig: config.MODEL_CONFIG.generationConfig,
            systemInstruction: systemInstruction,
        };

        const model = genAI.getGenerativeModel(modelConfigForRequest);

        console.log(`Sending request to Gemini API. UI Language: ${uiLanguage}, Direction: ${direction}. Prompt: ${prompt}`);
        const result = await model.generateContent(prompt);

        if (!result || !result.response) {
            throw new Error('No response received from Gemini API');
        }

        const response = result.response;
        const text = response.text();
        console.log('Received response from Gemini API.');
        res.json({ response: text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ 
            error: 'Failed to get response from Gemini', 
            details: error.message
        });
    }
});

// Serve the main page (index.html) for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});