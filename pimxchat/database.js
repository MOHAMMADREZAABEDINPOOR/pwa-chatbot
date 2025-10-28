const sqlite3 = require('sqlite3').verbose();

// Open a database handle
let db = new sqlite3.Database('./pimxchat.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the pimxchat SQlite database.');
});

// Create tables if they don't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS chats (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chat_id TEXT NOT NULL,
    sender TEXT NOT NULL,
    text TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    version_history TEXT,
    parent_message_id INTEGER,
    FOREIGN KEY (chat_id) REFERENCES chats (id) ON DELETE CASCADE
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS feedback_stats (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    total_responses INTEGER DEFAULT 0,
    total_likes INTEGER DEFAULT 0,
    total_dislikes INTEGER DEFAULT 0
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS feedback_votes (
    message_id INTEGER NOT NULL,
    client_id TEXT NOT NULL,
    verdict TEXT NOT NULL CHECK (verdict IN ('like','dislike')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (message_id, client_id)
  )`);
  // Ensure a single stats row exists
  db.get('SELECT COUNT(*) as cnt FROM feedback_stats', [], (err, row) => {
    if (err) {
      console.error('Error ensuring feedback_stats row:', err);
      return;
    }
    if (!row || row.cnt === 0) {
      db.run('INSERT INTO feedback_stats (id, total_responses, total_likes, total_dislikes) VALUES (1, 0, 0, 0)');
    }
  });
});

module.exports = db;
