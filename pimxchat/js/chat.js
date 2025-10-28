// Comprehensive translation system for chat interface
const translations = {
    fa: {
        // Initial message
        initialPrompt: 'چطور می‌توانم کمکتان کنم؟',
        
        // Chat history
        emptyHistory: 'تاریخچه چت خالی است.',
        newChat: 'چت جدید',
        rename: 'تغییر نام',
        delete: 'حذف چت',
        
        // Message actions
        copy: 'کپی متن',
        edit: 'ویرایش پیام',
        like: 'رضایت مندی',
        dislike: 'عدم رضایت مندی',
        
        // Version navigation
        newVersion: 'نسخه جدید',
        prevVersion: 'نسخه قبلی',
        
        // Error messages
        serverError: 'خطا در ارتباط با سرور. لطفاً اتصال اینترنت و وضعیت سرور را بررسی کنید.',
        
        // Placeholders
        sendPlaceholder: 'پیام خود را بنویسید...',
        
        // Typing indicator
        typing: 'در حال تایپ...',
        
        // Edit actions
        confirm: 'تایید',
        cancel: 'لغو',
        
        // UI Elements
        newChat: 'چت جدید',
        disclaimer: 'PIMXCHAT ممکن است خطا کند. همیشه اطلاعات مهم را بررسی کنید.',
        sendMessage: 'ارسال پیام',
        homePage: 'صفحه اصلی',
        changeTheme: 'تغییر تم'
    },
    en: {
        initialPrompt: 'How can I help you?',
        emptyHistory: 'Chat history is empty.',
        newChat: 'New Chat',
        rename: 'Rename',
        delete: 'Delete chat',
        copy: 'Copy',
        edit: 'Edit message',
        like: 'Like',
        dislike: 'Dislike',
        newVersion: 'New version',
        prevVersion: 'Previous version',
        serverError: 'Server connection error. Please check your internet connection and server status.',
        sendPlaceholder: 'Type your message...',
        typing: 'Typing...',
        confirm: 'Confirm',
        cancel: 'Cancel',
        newChat: 'New Chat',
        disclaimer: 'PIMXCHAT may be slow. Always check important information.',
        sendMessage: 'Send Message',
        homePage: 'Home Page',
        changeTheme: 'Change Theme'
    },
    fr: {
        initialPrompt: 'Comment puis-je vous aider ?',
        emptyHistory: 'L\'historique des discussions est vide.',
        newChat: 'Nouvelle discussion',
        rename: 'Renommer',
        delete: 'Supprimer la discussion',
        copy: 'Copier',
        edit: 'Modifier le message',
        like: 'J\'aime',
        dislike: 'Je n\'aime pas',
        newVersion: 'Nouvelle version',
        prevVersion: 'Version précédente',
        serverError: 'Erreur de connexion au serveur. Veuillez vérifier votre connexion internet et l\'état du serveur.',
        sendPlaceholder: 'Écrivez votre message...',
        typing: 'En train d\'écrire...',
        confirm: 'Confirmer',
        cancel: 'Annuler',
        newChat: 'Nouvelle discussion',
        disclaimer: 'PIMXCHAT peut être lent. Vérifiez toujours les informations importantes.',
        sendMessage: 'Envoyer un message',
        homePage: 'Page d\'accueil',
        changeTheme: 'Changer le thème'
    },
    es: {
        initialPrompt: '¿Cómo puedo ayudarte?',
        emptyHistory: 'El historial del chat está vacío.',
        newChat: 'Nuevo chat',
        rename: 'Renombrar',
        delete: 'Eliminar chat',
        copy: 'Copiar',
        edit: 'Editar mensaje',
        like: 'Me gusta',
        dislike: 'No me gusta',
        newVersion: 'Nueva versión',
        prevVersion: 'Versión anterior',
        serverError: 'Error de conexión al servidor. Por favor verifica tu conexión a internet y el estado del servidor.',
        sendPlaceholder: 'Escribe tu mensaje...',
        typing: 'Escribiendo...',
        confirm: 'Confirmar',
        cancel: 'Cancelar',
        newChat: 'Nuevo chat',
        disclaimer: 'PIMXCHAT puede ser lento. Siempre verifica la información importante.',
        sendMessage: 'Enviar mensaje',
        homePage: 'Página de inicio',
        changeTheme: 'Cambiar tema'
    },
    de: {
        initialPrompt: 'Wie kann ich dir helfen?',
        emptyHistory: 'Chat-Verlauf ist leer.',
        newChat: 'Neuer Chat',
        rename: 'Umbenennen',
        delete: 'Chat löschen',
        copy: 'Kopieren',
        edit: 'Nachricht bearbeiten',
        like: 'Gefällt mir',
        dislike: 'Gefällt mir nicht',
        newVersion: 'Neue Version',
        prevVersion: 'Vorherige Version',
        serverError: 'Serververbindungsfehler. Bitte überprüfe deine Internetverbindung und den Serverstatus.',
        sendPlaceholder: 'Schreibe deine Nachricht...',
        typing: 'Schreibt...',
        confirm: 'Bestätigen',
        cancel: 'Abbrechen',
        newChat: 'Neuer Chat',
        disclaimer: 'PIMXCHAT kann langsam sein. Überprüfe immer wichtige Informationen.',
        sendMessage: 'Nachricht senden',
        homePage: 'Startseite',
        changeTheme: 'Thema ändern'
    },
    ar: {
        initialPrompt: 'كيف أستطيع مساعدتك؟',
        emptyHistory: 'سجل الدردشة فارغ.',
        newChat: 'دردشة جديدة',
        rename: 'إعادة تسمية',
        delete: 'حذف الدردشة',
        copy: 'نسخ',
        edit: 'تعديل الرسالة',
        like: 'إعجاب',
        dislike: 'عدم إعجاب',
        newVersion: 'إصدار جديد',
        prevVersion: 'الإصدار السابق',
        serverError: 'خطأ في الاتصال بالخادم. يرجى التحقق من اتصال الإنترنت وحالة الخادم.',
        sendPlaceholder: 'اكتب رسالتك...',
        typing: 'يكتب...',
        confirm: 'تأكيد',
        cancel: 'إلغاء',
        newChat: 'دردشة جديدة',
        disclaimer: 'قد يكون PIMXCHAT بطيئاً. قم بالتأكد من التحقق من المعلومات المهمة دائماً.',
        sendMessage: 'إرسال رسالة',
        homePage: 'الصفحة الرئيسية',
        changeTheme: 'تغيير الوضع'
    },
    it: {
        initialPrompt: 'Come posso aiutarti?',
        emptyHistory: 'La cronologia della chat è vuota.',
        newChat: 'Nuova chat',
        rename: 'Rinomina',
        delete: 'Elimina chat',
        copy: 'Copia',
        edit: 'Modifica messaggio',
        like: 'Mi piace',
        dislike: 'Non mi piace',
        newVersion: 'Nuova versione',
        prevVersion: 'Versione precedente',
        serverError: 'Errore di connessione al server. Controlla la tua connessione internet e lo stato del server.',
        sendPlaceholder: 'Scrivi il tuo messaggio...',
        typing: 'Sta scrivendo...',
        confirm: 'Conferma',
        cancel: 'Annulla',
        newChat: 'Nuova chat',
        disclaimer: 'PIMXCHAT può essere lento. Controlla sempre le informazioni importanti.',
        sendMessage: 'Invia messaggio',
        homePage: 'Pagina iniziale',
        changeTheme: 'Cambia tema'
    },
    ru: {
        initialPrompt: 'Чем я могу помочь?',
        emptyHistory: 'История чата пуста.',
        newChat: 'Новый чат',
        rename: 'Переименовать',
        delete: 'Удалить чат',
        copy: 'Копировать',
        edit: 'Редактировать сообщение',
        like: 'Нравится',
        dislike: 'Не нравится',
        newVersion: 'Новая версия',
        prevVersion: 'Предыдущая версия',
        serverError: 'Ошибка подключения к серверу. Пожалуйста, проверьте подключение к интернету и статус сервера.',
        sendPlaceholder: 'Введите ваше сообщение...',
        typing: 'Печатает...',
        confirm: 'Подтвердить',
        cancel: 'Отмена',
        newChat: 'Новый чат',
        disclaimer: 'PIMXCHAT может быть медленным. Всегда проверяйте важную информацию.',
        sendMessage: 'Отправить сообщение',
        homePage: 'Главная страница',
        changeTheme: 'Изменить тему'
    }
};

// Translation function
function t(key) {
    const lang = document.documentElement.getAttribute('lang') || localStorage.getItem('pimxchat_ui_lang') || 'fa';
    return translations[lang]?.[key] || translations.fa[key] || key;
}

// Unify theme system with site-wide data-theme managed by main.js
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');
const initialThemeName = savedTheme || (prefersDark.matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', initialThemeName);

// Language detection utility
function detectLanguageDirection(text) {
    // Comprehensive RTL language patterns
    const rtlPatterns = [
        /[\u0600-\u06FF]/, // Arabic
        /[\u0750-\u077F]/, // Arabic Supplement
        /[\u08A0-\u08FF]/, // Arabic Extended-A
        /[\uFB50-\uFDFF]/, // Arabic Presentation Forms-A
        /[\uFE70-\uFEFF]/, // Arabic Presentation Forms-B
        /[\u0590-\u05FF]/, // Hebrew
        /[\uFB1D-\uFB4F]/, // Hebrew Presentation Forms
        /[\u0700-\u074F]/, // Syriac
        /[\u0780-\u07BF]/, // Thaana
        /[\u07C0-\u07FF]/, // N'Ko
        /[\u2D30-\u2D7F]/  // Tifinagh
    ];

    const hasRTL = rtlPatterns.some(pattern => pattern.test(text));
    return hasRTL ? 'rtl' : 'ltr';
}

// Function to apply language-based alignment to messages
function applyLanguageAlignment(messageBubble, text, sender) {
    const direction = detectLanguageDirection(text);
    messageBubble.classList.remove('ltr-aligned', 'rtl-aligned');
    messageBubble.classList.add(`${direction}-aligned`);
    const messageText = messageBubble.querySelector('p');
    if (messageText) {
        messageText.style.direction = direction;
        messageText.style.textAlign = direction === 'rtl' ? 'right' : 'left';
    }
    // Also move the wrapper for bot messages so the bubble starts from correct side
    if (sender === 'bot' && messageBubble.parentElement) {
        messageBubble.parentElement.style.alignSelf = direction === 'rtl' ? 'flex-end' : 'flex-start';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Ensure UI language is applied based on saved preference
    try {
        const savedUILang = localStorage.getItem('pimxchat_ui_lang');
        if (savedUILang) {
            document.documentElement.setAttribute('lang', savedUILang);
            document.documentElement.setAttribute('dir', (savedUILang === 'fa' || savedUILang === 'ar') ? 'rtl' : 'ltr');
        }
    } catch {}
    // Ensure initial layout matches the current language
    try { if (typeof updateChatLayout === 'function') updateChatLayout(); } catch {}
    const loaderWrapper = document.getElementById('loader-wrapper');
    const container = document.querySelector('.container');
    const lightLogo = document.querySelector('.loader-logo.light-logo');
    const darkLogo = document.querySelector('.loader-logo.dark-logo');
    
    container.style.display = 'none';
    loaderWrapper.style.display = 'flex';

    function setTheme(isDark) {
        document.documentElement.classList.remove('dark-theme');
        document.body.classList.remove('dark-theme');
        if (isDark) {
            document.documentElement.classList.add('dark-theme');
            document.body.classList.add('dark-theme');
        }
        if (lightLogo && darkLogo) {
            lightLogo.style.display = isDark ? 'none' : 'block';
            darkLogo.style.display = isDark ? 'block' : 'none';
        }
        const initialLogo = document.querySelector('.initial-logo');
        if (initialLogo) {
            initialLogo.src = `images/${isDark ? '2.png' : '1.png'}`;
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.body.style.display = 'none';
        document.body.offsetHeight; // Trigger reflow
        document.body.style.display = '';
    }

    // Sync with global data-theme changes
    const setThemeAttr = (themeName) => {
        document.documentElement.setAttribute('data-theme', themeName);
    };
    setThemeAttr(initialThemeName);

    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            // Update initial logo when theme changes
            updateInitialLogo();
            // Notify site scripts (e.g., main.js) if needed
            document.dispatchEvent(new Event('themeChanged'));
        });
        // Sync icons on load
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        themeToggle.classList.toggle('is-dark', current === 'dark');
    }

    prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const next = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            // Update initial logo when system theme changes
            updateInitialLogo();
            document.dispatchEvent(new Event('themeChanged'));
        }
    });

    // Listen for theme changes from other parts of the application
    document.addEventListener('themeChanged', () => {
        updateInitialLogo();
        // force reflow to ensure CSS attribute selector updates icons
        const t = document.querySelector('.theme-toggle');
        if (t) { t.offsetHeight; }
    });

    function hideLoader() {
        if (loaderWrapper) {
            loaderWrapper.classList.add('fade-out');
            setTimeout(() => {
                loaderWrapper.style.display = 'none';
                container.style.display = 'block';
                // Ensure background canvas initializes with correct size after container becomes visible
                if (bgCanvas) {
                    requestAnimationFrame(() => {
                        resizeCanvas();
                    });
                }
            }, 500);
        }
    }

    const chatHistoryDiv = document.querySelector('.chat-history');
    const chatMessagesDiv = document.querySelector('.chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const newChatButton = document.querySelector('.new-chat-button');
    const menuButton = document.getElementById('menu-button');
    const chatContainer = document.querySelector('.chat-main');
    const bgCanvas = document.getElementById('bg-canvas');
    const bgCtx = bgCanvas ? bgCanvas.getContext('2d') : null;

    let chats = [];
    let currentChatId = null;
    const branchCache = {};

    // --- Offline storage helpers (localStorage) ---
    function getOfflineStore() {
        try {
            return JSON.parse(localStorage.getItem('pimxchat_offline_msgs') || '{}');
        } catch {
            return {};
        }
    }
    function setOfflineStore(store) {
        try { localStorage.setItem('pimxchat_offline_msgs', JSON.stringify(store)); } catch {}
    }
    function addOfflineMessage(chatId, message) {
        if (!chatId) return;
        const store = getOfflineStore();
        if (!store[chatId]) store[chatId] = [];
        store[chatId].push({ ...message, ts: Date.now() });
        setOfflineStore(store);
    }
    function readOfflineMessages(chatId) {
        const store = getOfflineStore();
        return (store[chatId] || []).sort((a, b) => a.ts - b.ts);
    }
    // Canvas animated orbs background (chat-only)
    const orbConfig = {
        count: 6,
        speedBase: 0.12,
        minRadius: 60,
        maxRadius: 160,
        pulseFactor: 0.12
    };
    let orbs = [];
    let lastFrameTime = 0;
    let animFrameId = null;
    let typingBoost = 0; // 0..1 amplifies speed and count
    function resizeCanvas() {
        if (!bgCanvas) return;
        const rect = chatContainer.getBoundingClientRect();
        bgCanvas.width = Math.max(1, Math.floor(rect.width));
        bgCanvas.height = Math.max(1, Math.floor(rect.height));
        bgCanvas.style.position = 'absolute';
        bgCanvas.style.inset = '0';
        bgCanvas.style.zIndex = '0';
        initParticles();
    }
    function rand(min, max) { return Math.random() * (max - min) + min; }
    function getThemeColors() {
        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        if (theme === 'dark') {
            return { core: 'rgba(168,129,255, 0.9)', glow: 'rgba(93,118,221, 0.35)' };
        }
        return { core: 'rgba(71,118,230, 0.9)', glow: 'rgba(142,84,233, 0.35)' };
    }
    function initParticles() {
        if (!bgCanvas) return;
        const { minRadius, maxRadius } = orbConfig;
        const total = orbConfig.count;
        orbs = new Array(total).fill(0).map(() => ({
            x: rand(0, bgCanvas.width),
            y: rand(0, bgCanvas.height),
            vx: rand(-1, 1),
            vy: rand(-1, 1),
            baseRadius: rand(minRadius, maxRadius),
            pulseSpeed: rand(0.5, 1.5)
        }));
    }
    function stepParticles(ts) {
        if (!bgCtx || !bgCanvas) return;
        const speed = orbConfig.speedBase * (1 + typingBoost * 2.0);
        const { core, glow } = getThemeColors();
        bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
        const t = (ts || performance.now()) / 1000;
        bgCtx.globalCompositeOperation = 'lighter';
        for (let i = 0; i < orbs.length; i++) {
            const o = orbs[i];
            o.x += o.vx * speed;
            o.y += o.vy * speed;
            if (o.x < -50 || o.x > bgCanvas.width + 50) o.vx *= -1;
            if (o.y < -50 || o.y > bgCanvas.height + 50) o.vy *= -1;

            const pulse = 1 + orbConfig.pulseFactor * Math.sin(t * o.pulseSpeed + i);
            const r = o.baseRadius * pulse * (1 + typingBoost * 0.3);

            const grad = bgCtx.createRadialGradient(o.x, o.y, 0, o.x, o.y, r);
            grad.addColorStop(0, core);
            grad.addColorStop(1, 'rgba(0,0,0,0)');
            bgCtx.fillStyle = grad;
                    bgCtx.beginPath();
            bgCtx.arc(o.x, o.y, r, 0, Math.PI * 2);
            bgCtx.fill();

            // Add a soft outer glow
            const glowR = r * 1.35;
            const gradGlow = bgCtx.createRadialGradient(o.x, o.y, r * 0.4, o.x, o.y, glowR);
            gradGlow.addColorStop(0, glow);
            gradGlow.addColorStop(1, 'rgba(0,0,0,0)');
            bgCtx.fillStyle = gradGlow;
            bgCtx.beginPath();
            bgCtx.arc(o.x, o.y, glowR, 0, Math.PI * 2);
            bgCtx.fill();
        }
        bgCtx.globalCompositeOperation = 'source-over';
        lastFrameTime = ts || performance.now();
        animFrameId = requestAnimationFrame(stepParticles);
    }
    if (bgCanvas) {
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        animFrameId = requestAnimationFrame(stepParticles);

        // Restart animation when returning to tab or if it stalls
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                if (animFrameId) cancelAnimationFrame(animFrameId);
                animFrameId = requestAnimationFrame(stepParticles);
            }
        });

        // Also re-kick on theme changes
        document.addEventListener('themeChanged', () => {
            if (animFrameId) cancelAnimationFrame(animFrameId);
            animFrameId = requestAnimationFrame(stepParticles);
        });

        // Watchdog to re-kick animation if needed
        setInterval(() => {
            const now = performance.now();
            if (now - lastFrameTime > 2000) { // >2s without frames
                if (animFrameId) cancelAnimationFrame(animFrameId);
                animFrameId = requestAnimationFrame(stepParticles);
            }
        }, 3000);
    }

    // Align bot wrapper based on current UI language (fa/ar → right, others → left)
    function setBotWrapperAlignFromText(messageWrapper, text) {
        const lang = document.documentElement.getAttribute('lang') || localStorage.getItem('pimxchat_ui_lang') || 'fa';
        const isRTL = (lang === 'fa' || lang === 'ar');
        messageWrapper.style.alignSelf = isRTL ? 'flex-end' : 'flex-start';
    }

    async function apiFetch(url, options = {}) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                const errorText = await response.text();
                console.error(`API Error: ${response.status}`, errorText);
                throw new Error(`API request failed: ${response.status}`);
            }
            if (response.status === 204) return;
            return response.json();
        } catch (error) {
            console.error('Fetch Error:', error);
            throw error;
        }
    }

    // --- Global feedback (like/dislike) helpers ---
    function getClientId() {
        const key = 'pimxchat_client_id';
        let id = localStorage.getItem(key);
        if (!id) {
            id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
            try { localStorage.setItem(key, id); } catch {}
        }
        return id;
    }

    async function sendGlobalFeedback(verdict, messageId) {
        try {
            await apiFetch('/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ verdict, messageId, clientId: getClientId() })
            });
        } catch (err) {
            console.error('Failed to submit feedback:', err);
        }
    }

    // --- Persist per-message button state locally (per user) ---
    const feedbackKeyForMessage = (messageId) => `pimxchat_feedback_${messageId}`;
    function getSavedFeedbackForMessage(messageId) {
        try {
            return localStorage.getItem(feedbackKeyForMessage(messageId));
        } catch {
            return null;
        }
    }
    function saveFeedbackForMessage(messageId, verdict) {
        try {
            if (verdict === null) {
                localStorage.removeItem(feedbackKeyForMessage(messageId));
            } else {
                localStorage.setItem(feedbackKeyForMessage(messageId), verdict);
            }
        } catch {
            // ignore
        }
    }

    async function loadChats() {
        try {
            const data = await apiFetch('/api/chats');
            chats = data.chats;
            renderChatHistory();
            if (chats.length > 0) {
                const lastActiveChat = localStorage.getItem('pimxchat_last_active_chat');
                const chatToLoad = chats.find(c => c.id === lastActiveChat) || chats[0];
                await loadChat(chatToLoad.id);
            } else {
                displayInitialMessage();
            }
            hideLoader();
        } catch (error) {
            console.error('Failed to load chats:', error);
            hideLoader();
        }
    }

    function renderChatHistory() {
        chatHistoryDiv.innerHTML = '';
        if (chats.length === 0) {
            chatHistoryDiv.innerHTML = `<p class="empty-history">${t('emptyHistory')}</p>`;
            return;
        }
        chats.forEach(chat => {
            const chatItem = document.createElement('div');
            chatItem.className = `chat-history-item ${chat.id === currentChatId ? 'active' : ''}`;
            chatItem.dataset.chatId = chat.id;
            chatItem.innerHTML = `
                <span class="chat-history-item-title">${chat.title}</span>
                <div class="chat-history-item-actions">
                    <button class="edit-chat-btn" title="${t('rename')}"><i class="fas fa-pen"></i></button>
                    <button class="delete-chat-btn" title="${t('delete')}"><i class="fas fa-trash"></i></button>
                </div>
            `;
            chatItem.addEventListener('click', () => {
                loadChat(chat.id);
                chatContainer.classList.remove('sidebar-open');
            });
            chatItem.querySelector('.edit-chat-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                handleRename(chat.id, chatItem);
            });
            chatItem.querySelector('.delete-chat-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                deleteChat(chat.id);
            });
            chatHistoryDiv.appendChild(chatItem);
        });
    }

    function handleRename(chatId, chatItem) {
        const titleSpan = chatItem.querySelector('.chat-history-item-title');
        const currentTitle = titleSpan.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentTitle;
        input.className = 'rename-input';
        titleSpan.replaceWith(input);
        input.focus();
        const save = async () => {
            const newTitle = input.value.trim();
            if (newTitle && newTitle !== currentTitle) {
                try {
                    await apiFetch(`/api/chats/${chatId}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ title: newTitle })
                    });
                    const chat = chats.find(c => c.id === chatId);
                    chat.title = newTitle;
                    renderChatHistory();
                } catch (error) {
                    console.error('Failed to rename chat:', error);
                    input.replaceWith(titleSpan);
                }
            } else {
                input.replaceWith(titleSpan);
            }
        };
        input.addEventListener('blur', save);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') save();
            else if (e.key === 'Escape') input.replaceWith(titleSpan);
        });
    }

    async function newChat() {
        const newChatId = Date.now().toString();
        currentChatId = newChatId;
        await loadChat(newChatId);
        chatContainer.classList.remove('sidebar-open');
    }

    function cleanupOrphanedMessages() {
        const messages = chatMessagesDiv.querySelectorAll('.message-bubble');
        messages.forEach(msg => {
            if (msg.dataset.chatId && msg.dataset.chatId !== currentChatId) {
                msg.remove();
            }
        });
    }

    async function loadChat(chatId) {
        currentChatId = chatId;
        localStorage.setItem('pimxchat_last_active_chat', chatId);
        chatMessagesDiv.innerHTML = '';
        cleanupOrphanedMessages();

        const chat = chats.find(c => c.id === chatId);
        if (chat && chat.created_at) {
            try {
                const chatWithMessages = await apiFetch(`/api/chats/${chatId}`);
                if (chatWithMessages.messages && chatWithMessages.messages.length > 0) {
                    renderMessages(chatWithMessages.messages);
                } else {
                    displayInitialMessage();
                }
            } catch (error) {
                console.error('Error loading chat:', error);
                displayInitialMessage();
            }
        } else {
            displayInitialMessage();
        }
        // Inject locally persisted offline messages (e.g., connection errors)
        const offline = readOfflineMessages(chatId);
        if (offline.length > 0) {
            offline.forEach(m => {
                displayMessage(m.sender, m.text, false, !!m.error, null, m.id);
            });
        }
        scrollToBottom();
        renderChatHistory();
    }

    function buildMessageTree(messages) {
        const messageMap = {};
        messages.forEach(msg => {
            messageMap[msg.id] = { ...msg, children: [] };
        });

        const tree = [];
        messages.forEach(msg => {
            if (msg.parent_message_id && messageMap[msg.parent_message_id]) {
                messageMap[msg.parent_message_id].children.push(messageMap[msg.id]);
            } else {
                tree.push(messageMap[msg.id]);
            }
        });

        return tree;
    }

    function renderMessages(messages, active_branch_id = null) {
        const messageTree = buildMessageTree(messages);
    
        function renderNode(node) {
            const versionHistory = node.version_history ? JSON.parse(node.version_history) : null;
            let messageElement;
            
            let currentVersionIndex;
            const savedVersionIndex = localStorage.getItem(`active_version_for_${node.id}`);
            if (savedVersionIndex !== null) {
                currentVersionIndex = parseInt(savedVersionIndex, 10);
            } else {
                currentVersionIndex = versionHistory ? versionHistory.length - 1 : 0;
            }
            
            if (versionHistory && currentVersionIndex >= versionHistory.length) {
                currentVersionIndex = versionHistory.length - 1;
            }
    
            if (node.sender === 'user') {
                if (versionHistory && versionHistory.length > 0) {
                    const currentVersion = versionHistory[currentVersionIndex];
                    messageElement = displayMessage('user', currentVersion.userMessage || node.text, false, false, versionHistory, node.id, currentVersionIndex);
                } else {
                    messageElement = displayMessage('user', node.text, false, false, null, node.id);
                }
            } else if (node.sender === 'bot') {
                if (versionHistory && versionHistory.length > 0) {
                    const currentVersion = versionHistory[currentVersionIndex];
                    messageElement = displayMessage('bot', currentVersion.botResponse, false, false, versionHistory, node.id, currentVersionIndex);
                } else {
                    messageElement = displayMessage('bot', node.text, false, false, null, node.id);
                }
            }
    
            if (messageElement) {
                const messageBubble = document.getElementById(messageElement);
                if (messageBubble) {
                    if (versionHistory) {
                        messageBubble.dataset.currentVersion = currentVersionIndex.toString();
                    }
    
                    if (node.children.length > 0) {
                        if (active_branch_id === node.id) {
                            node.children.forEach(renderNode);
                        } else {
                            const activeChildId = localStorage.getItem(`active_child_for_${node.id}`);
                            let childToRender;
                            if (activeChildId) {
                                childToRender = node.children.find(c => c.id === activeChildId);
                            }
                            
                            if (!childToRender) {
                                childToRender = node.children[node.children.length - 1];
                            }
                            
                            renderNode(childToRender);
                        }
                    }
                }
            }
        }
    
        chatMessagesDiv.innerHTML = '';
        messageTree.forEach(renderNode);
        scrollToBottom();
    }

    async function deleteChat(chatId) {
        try {
            await apiFetch(`/api/chats/${chatId}`, { method: 'DELETE' });
            chats = chats.filter(c => c.id !== chatId);
            if (currentChatId === chatId) {
                currentChatId = null;
                if (chats.length > 0) await loadChat(chats[0].id);
                else displayInitialMessage();
            }
            renderChatHistory();
        } catch (error) {
            console.error(`Failed to delete chat ${chatId}:`, error);
        }
    }

    async function saveMessage(chatId, sender, text, versionHistory = null, messageId = null, parent_message_id = null) {
        try {
            const messageData = { sender, text };
            if (versionHistory) {
                messageData.versionHistory = versionHistory;
            }
            if (parent_message_id) {
                messageData.parent_message_id = parent_message_id;
            }
            if (messageId) {
                await apiFetch(`/api/chats/${chatId}/messages/${messageId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(messageData)
                });
                return { id: messageId };
            } else {
                const response = await apiFetch(`/api/chats/${chatId}/messages`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(messageData)
                });
                return response;
            }
        } catch (error) {
            console.error('Failed to save message:', error);
            return null;
        }
    }

    async function handleVersionNavigation(messageBubble, direction) {
        const messageWrapper = messageBubble.parentElement;
        const history = JSON.parse(messageBubble.dataset.versionHistory);
        const messageId = messageBubble.id;
        let currentVersion = parseInt(messageBubble.dataset.currentVersion);
        const newVersion = direction === 'prev' ? currentVersion - 1 : currentVersion + 1;

        if (newVersion >= 0 && newVersion < history.length) {
            const currentBranchKey = `${messageId}-${currentVersion}`;
            const subsequentMessages = [];
            let nextMessageWrapper = messageWrapper.nextElementSibling;
            while (nextMessageWrapper) {
                subsequentMessages.push(nextMessageWrapper);
                nextMessageWrapper = nextMessageWrapper.nextElementSibling;
            }
            if (subsequentMessages.length > 0) {
                branchCache[currentBranchKey] = subsequentMessages;
            }

            subsequentMessages.forEach(el => el.remove());

            messageBubble.dataset.currentVersion = newVersion.toString();
            localStorage.setItem(`active_version_for_${messageId}`, newVersion.toString());
            localStorage.removeItem(`active_child_for_${messageId}`);
            
            const newBotText = history[newVersion].botResponse;
            const newUserText = history[newVersion].userMessage;

            messageBubble.querySelector('p').textContent = newBotText;
            applyLanguageAlignment(messageBubble, newBotText, 'bot');
            // Align the containing bot wrapper based on new text
            setBotWrapperAlignFromText(messageWrapper, newBotText);

            let userMessageWrapper = messageWrapper.previousElementSibling;
            while(userMessageWrapper && !userMessageWrapper.querySelector('.message-bubble.user')) {
                userMessageWrapper = userMessageWrapper.previousElementSibling;
            }
            if (userMessageWrapper) {
                const userMessageBubble = userMessageWrapper.querySelector('.message-bubble.user');
                const userP = userMessageBubble.querySelector('p');
                if (userP) userP.textContent = newUserText;
                applyLanguageAlignment(userMessageBubble, newUserText, 'user');
            }

            const newBranchKey = `${messageId}-${newVersion}`;
            if (branchCache[newBranchKey]) {
                const chatMessagesContainer = messageWrapper.parentElement;
                branchCache[newBranchKey].forEach(el => {
                    chatMessagesContainer.appendChild(el);
                });
                if (branchCache[newBranchKey].length > 0) {
                    const firstMessageOfBranch = branchCache[newBranchKey][0].querySelector('.message-bubble');
                    if (firstMessageOfBranch) {
                        localStorage.setItem(`active_child_for_${messageId}`, firstMessageOfBranch.id);
                    }
                }
            }

            const navDiv = messageWrapper.querySelector('.version-navigation');
            if (navDiv) {
                navDiv.querySelector('.version-counter').textContent = `${newVersion + 1}/${history.length}`;
                navDiv.querySelector('.prev-version').disabled = newVersion === 0;
                navDiv.querySelector('.next-version').disabled = newVersion === history.length - 1;
            }
            
            const reactionsDiv = messageWrapper.querySelector('.message-reactions');
            if (reactionsDiv) {
                const likeBtn = reactionsDiv.querySelector('.like');
                const dislikeBtn = reactionsDiv.querySelector('.dislike');
                if (likeBtn && dislikeBtn) {
                    if (!history[newVersion].reactions) {
                        history[newVersion].reactions = { like: false, dislike: false };
                    }
                    likeBtn.classList.toggle('active', history[newVersion].reactions.like);
                    dislikeBtn.classList.toggle('active', history[newVersion].reactions.dislike);
                }
            }

            await saveMessage(currentChatId, 'bot', newBotText, history, messageBubble.id);
            
            messageWrapper.classList.add('actions-visible');
            setTimeout(() => {
                messageWrapper.classList.remove('actions-visible');
            }, 2000);
        }
    }

    function displayMessage(sender, text, isTyping = false, isError = false, versionHistory = null, messageId = null, versionIndex = null) {
        const existingMessage = messageId ? document.getElementById(messageId) : null;
        if (existingMessage) {
            return existingMessage.parentElement.id;
        }

        const finalMessageId = messageId || `msg-${Date.now()}`;

        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('message-wrapper', sender);
        messageWrapper.id = `wrapper-${finalMessageId}`;

        // Ensure bot wrapper aligns based on its own text
        if (sender === 'bot') {
            setBotWrapperAlignFromText(messageWrapper, text);
        }

        const messageBubble = document.createElement('div');
        messageBubble.classList.add('message-bubble', sender);
        messageBubble.id = finalMessageId;
        messageBubble.dataset.chatId = currentChatId;

        if (isTyping) {
            messageBubble.classList.add('typing-indicator');
        } else if (isError) {
            messageBubble.classList.add('error-message');
        }

        const p = document.createElement('p');
        p.textContent = text;
        p.contentEditable = false;
        messageBubble.appendChild(p);

        if (!isTyping && text) {
            applyLanguageAlignment(messageBubble, text, sender);
        }

        if (versionHistory) {
            messageBubble.dataset.versionHistory = JSON.stringify(versionHistory);
            const currentVersion = versionIndex !== null ? versionIndex : versionHistory.length - 1;
            messageBubble.dataset.currentVersion = currentVersion.toString();
        }

        messageWrapper.appendChild(messageBubble);

        if (!isTyping) {
            const unifiedActionsDiv = document.createElement('div');
            unifiedActionsDiv.classList.add('unified-actions');

            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn reaction-btn';
            copyBtn.title = t('copy');
            copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
            copyBtn.onclick = (e) => {
                e.stopPropagation();
                const messageText = p.textContent;
                copyMessage(messageText, copyBtn);
            };
            unifiedActionsDiv.appendChild(copyBtn);

            if (sender === 'user') {
                const editActionsDiv = document.createElement('div');
                editActionsDiv.classList.add('edit-actions');
                editActionsDiv.innerHTML = `
                    <button class="edit-confirm-btn" title="${t('confirm')}"><i class="fas fa-check"></i></button>
                    <button class="edit-cancel-btn" title="${t('cancel')}"><i class="fas fa-times"></i></button>
                `;

                const editBtn = document.createElement('button');
                editBtn.className = 'edit-msg-btn reaction-btn';
                editBtn.title = t('edit');
                editBtn.innerHTML = '<i class="fas fa-pen"></i>';
                
                editBtn.onclick = (e) => {
                    e.stopPropagation();
                    messageWrapper.classList.add('editing');
                    p.contentEditable = true;
                    p.focus();
                    const range = document.createRange();
                    const sel = window.getSelection();
                    range.selectNodeContents(p);
                    range.collapse(false);
                    sel.removeAllRanges();
                    sel.addRange(range);
                };
                unifiedActionsDiv.appendChild(editBtn);

                let originalText = text;
                editActionsDiv.querySelector('.edit-confirm-btn').addEventListener('click', async () => {
                    const confirmBtn = editActionsDiv.querySelector('.edit-confirm-btn');
                    if (confirmBtn.disabled) return;
                    confirmBtn.disabled = true;

                    messageWrapper.classList.remove('editing');
                    p.contentEditable = false;
                    
                    const newText = p.textContent.trim();
                    if (newText !== originalText) {
                        try {
                            let nextMessageWrapper = messageWrapper.nextElementSibling;
                            while (nextMessageWrapper && !nextMessageWrapper.querySelector('.message-bubble.bot')) {
                                nextMessageWrapper = nextMessageWrapper.nextElementSibling;
                            }
                            
                            if (nextMessageWrapper) {
                                const botBubble = nextMessageWrapper.querySelector('.message-bubble.bot');
                                botBubble.style.display = 'none';

                                const direction = detectLanguageDirection(newText);
                                const typingId = displayMessage('bot', '', true);
                                document.getElementById(typingId).querySelector('p').innerHTML = t('typing');
                                // Align typing wrapper based on current UI language
                                const typingWrapperEl = document.getElementById(`wrapper-${typingId}`) || document.getElementById(typingId)?.parentElement;
                                if (typingWrapperEl) {
                                    const lang = document.documentElement.getAttribute('lang') || localStorage.getItem('pimxchat_ui_lang') || 'fa';
                                    const isRTL = (lang === 'fa' || lang === 'ar');
                                    typingWrapperEl.style.alignSelf = isRTL ? 'flex-end' : 'flex-start';
                                }

                                try {
                                    const data = await apiFetch('/api/gemini', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({ prompt: newText, direction: direction })
                                    });
                                    
                                    const typingWrapper = document.getElementById(typingId)?.parentElement;
                                    typingWrapper?.remove();
                                    
                                    botBubble.style.display = '';
                                    
                                    let history;
                                    if (!botBubble.dataset.versionHistory) {
                                        const originalResponse = botBubble.querySelector('p').textContent;
                                        history = [
                                            { userMessage: originalText, botResponse: originalResponse, reactions: { like: false, dislike: false } },
                                            { userMessage: newText, botResponse: data.response, reactions: { like: false, dislike: false } }
                                        ];
                                    } else {
                                        history = JSON.parse(botBubble.dataset.versionHistory);
                                        history.push({ 
                                            userMessage: newText, 
                                            botResponse: data.response,
                                            reactions: { like: false, dislike: false }
                                        });
                                    }
                                    
                                    botBubble.dataset.versionHistory = JSON.stringify(history);
                                    const newVersionIndex = history.length - 1;
                                    botBubble.dataset.currentVersion = newVersionIndex.toString();
                                    localStorage.setItem(`active_version_for_${botBubble.id}`, newVersionIndex.toString());
                                    localStorage.removeItem(`active_child_for_${botBubble.id}`);

                                    botBubble.querySelector('p').textContent = data.response;
                                    applyLanguageAlignment(botBubble, data.response, 'bot');
                                    // Align the bot wrapper that holds this bubble
                                    const botWrapperOfEdited = botBubble.parentElement;
                                    if (botWrapperOfEdited) {
                                        setBotWrapperAlignFromText(botWrapperOfEdited, data.response);
                                    }

                                    let nextMessageSibling = nextMessageWrapper.nextElementSibling;
                                    while (nextMessageSibling) {
                                        const toRemove = nextMessageSibling;
                                        nextMessageSibling = nextMessageSibling.nextElementSibling;
                                        toRemove.remove();
                                    }
                                    
                                    let unifiedActions = nextMessageWrapper.querySelector('.unified-actions');
                                    if (!unifiedActions) {
                                        unifiedActions = document.createElement('div');
                                        unifiedActions.className = 'unified-actions';
                                        nextMessageWrapper.appendChild(unifiedActions);
                                    }
                                    let navDiv = unifiedActions.querySelector('.version-navigation');
                                    if (!navDiv) {
                                        navDiv = document.createElement('div');
                                        navDiv.classList.add('version-navigation');
                                        const actionGroup = unifiedActions.querySelector('.message-actions-group') || unifiedActions;
                                        actionGroup.appendChild(navDiv);
                                    }
                                    
                                    navDiv.innerHTML = `
                                        <button class="version-nav-btn next-version" title="${t('newVersion')}"><i class="fas fa-chevron-right"></i></button>
                                        <span class="version-counter">${history.length}/${history.length}</span>
                                        <button class="version-nav-btn prev-version" title="${t('prevVersion')}"><i class="fas fa-chevron-left"></i></button>
                                    `;
                                    navDiv.querySelector('.prev-version').addEventListener('click', (e) => { e.stopPropagation(); handleVersionNavigation(botBubble, 'prev'); });
                                    navDiv.querySelector('.next-version').addEventListener('click', (e) => { e.stopPropagation(); handleVersionNavigation(botBubble, 'next'); });
                                    navDiv.querySelector('.prev-version').disabled = false;
                                    navDiv.querySelector('.next-version').disabled = true;

                                } catch (error) {
                                    const typingWrapper = document.getElementById(typingId)?.parentElement;
                                    typingWrapper?.remove();
                                    botBubble.style.display = '';
                                }
                            }
                            
                            const botBubble = nextMessageWrapper ? nextMessageWrapper.querySelector('.message-bubble.bot') : null;
                            const updatedVersionHistory = botBubble && botBubble.dataset.versionHistory ? 
                                JSON.parse(botBubble.dataset.versionHistory) : null;
                            await saveMessage(currentChatId, 'user', newText, updatedVersionHistory, finalMessageId);
                            originalText = newText;
                            
                        } catch (error) {
                            console.error('Failed to save edited message:', error);
                            p.textContent = originalText;
                            applyLanguageAlignment(messageBubble, originalText, sender);
                        }
                    }
                    confirmBtn.disabled = false;
                });

                editActionsDiv.querySelector('.edit-cancel-btn').addEventListener('click', () => {
                    p.textContent = originalText;
                    applyLanguageAlignment(messageBubble, originalText, sender);
                    messageWrapper.classList.remove('editing');
                    p.contentEditable = false;
                });

                messageWrapper.appendChild(unifiedActionsDiv);
                messageWrapper.appendChild(editActionsDiv);

            } else { 
                const likeBtn = document.createElement('button');
                likeBtn.className = 'reaction-btn like';
                likeBtn.title = t('like');
                likeBtn.innerHTML = '<i class="fas fa-thumbs-up"></i>';
                
                const dislikeBtn = document.createElement('button');
                dislikeBtn.className = 'reaction-btn dislike';
                dislikeBtn.title = t('dislike');
                dislikeBtn.innerHTML = '<i class="fas fa-thumbs-down"></i>';

                // Initialize from persisted state
                const savedVerdict = getSavedFeedbackForMessage(messageBubble.id);
                if (savedVerdict === 'like') {
                    likeBtn.classList.add('active');
                    dislikeBtn.classList.remove('active');
                } else if (savedVerdict === 'dislike') {
                    dislikeBtn.classList.add('active');
                    likeBtn.classList.remove('active');
                }

                likeBtn.onclick = (e) => {
                    e.stopPropagation();
                    const wasActive = likeBtn.classList.contains('active');
                    likeBtn.classList.toggle('active');
                    dislikeBtn.classList.remove('active');
                    const currentId = messageBubble.id;
                    if (!wasActive) {
                        sendGlobalFeedback('like', currentId);
                        saveFeedbackForMessage(currentId, 'like');
                    } else {
                        sendGlobalFeedback('remove', currentId);
                        saveFeedbackForMessage(currentId, null);
                    }
                };
                dislikeBtn.onclick = (e) => {
                    e.stopPropagation();
                    const wasActive = dislikeBtn.classList.contains('active');
                    dislikeBtn.classList.toggle('active');
                    likeBtn.classList.remove('active');
                    const currentId = messageBubble.id;
                    if (!wasActive) {
                        sendGlobalFeedback('dislike', currentId);
                        saveFeedbackForMessage(currentId, 'dislike');
                    } else {
                        sendGlobalFeedback('remove', currentId);
                        saveFeedbackForMessage(currentId, null);
                    }
                };

                const actionGroup = document.createElement('div');
                actionGroup.className = 'message-actions-group';

                const reactionsDiv = document.createElement('div');
                reactionsDiv.className = 'message-reactions';
                reactionsDiv.appendChild(likeBtn);
                reactionsDiv.appendChild(dislikeBtn);
                actionGroup.appendChild(reactionsDiv);

                if (versionHistory && versionHistory.length > 1) {
                    const navDiv = document.createElement('div');
                    navDiv.classList.add('version-navigation');
                    const currentVersion = parseInt(messageBubble.dataset.currentVersion);
                    navDiv.innerHTML = `
                        <button class="version-nav-btn next-version" title="${t('newVersion')}"><i class="fas fa-chevron-right"></i></button>
                        <span class="version-counter">${currentVersion + 1}/${versionHistory.length}</span>
                        <button class="version-nav-btn prev-version" title="${t('prevVersion')}"><i class="fas fa-chevron-left"></i></button>
                    `;
                    navDiv.querySelector('.prev-version').addEventListener('click', (e) => { e.stopPropagation(); handleVersionNavigation(messageBubble, 'prev'); });
                    navDiv.querySelector('.next-version').addEventListener('click', (e) => { e.stopPropagation(); handleVersionNavigation(messageBubble, 'next'); });
                    navDiv.querySelector('.prev-version').disabled = currentVersion === 0;
                    navDiv.querySelector('.next-version').disabled = currentVersion === versionHistory.length - 1;
                    actionGroup.appendChild(navDiv);
                }
                unifiedActionsDiv.appendChild(actionGroup);
                messageWrapper.appendChild(unifiedActionsDiv);
            }
        }

        chatMessagesDiv.appendChild(messageWrapper);
        scrollToBottom();
        return finalMessageId;
    }

    function handleEditMessage(text) {
        chatInput.value = text;
        chatInput.focus();
    }

    function displayInitialMessage() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const isDark = currentTheme === 'dark';
        chatMessagesDiv.innerHTML = `
            <div class="initial-message">
                <img src="images/${isDark ? '2.png' : '1.png'}" alt="PimxChat Logo" class="initial-logo">
                <h2 class="animated-gradient-text">${t('initialPrompt')}</h2>
            </div>`;
    }

    // Function to update logo based on current theme
    function updateInitialLogo() {
        const initialLogo = document.querySelector('.initial-logo');
        if (initialLogo) {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const isDark = currentTheme === 'dark';
            initialLogo.src = `images/${isDark ? '2.png' : '1.png'}`;
        }
    }

    // Function to apply translations to all elements with data-translate attributes
    function applyAllTranslations() {
        // Apply translations to elements with data-translate
        const translateElements = document.querySelectorAll('[data-translate]');
        translateElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t(key);
            } else if (element.classList.contains('new-chat-button')) {
                // Special case for new chat button - preserve icon
                element.innerHTML = `<i class="fas fa-plus"></i> ${t(key)}`;
            } else {
                element.textContent = t(key);
            }
        });
        
        // Apply translations to elements with data-translate-title
        const titleElements = document.querySelectorAll('[data-translate-title]');
        titleElements.forEach(element => {
            const key = element.getAttribute('data-translate-title');
            element.title = t(key);
        });
        
        // Apply translations to elements with data-translate-placeholder
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            element.placeholder = t(key);
        });
    }
    
    // Re-apply translations when language changes
    document.addEventListener('languageChanged', () => {
        // Update placeholder
        if (chatInput) chatInput.placeholder = t('sendPlaceholder');
        // Update initial message text if visible
        const initialH2 = document.querySelector('.initial-message h2');
        if (initialH2) {
            initialH2.textContent = t('initialPrompt');
        }
        // Update empty history message if visible
        const emptyHistory = document.querySelector('.empty-history');
        if (emptyHistory) {
            emptyHistory.textContent = t('emptyHistory');
        }
        // Update chat history item button titles
        const editBtns = document.querySelectorAll('.edit-chat-btn');
        const deleteBtns = document.querySelectorAll('.delete-chat-btn');
        editBtns.forEach(btn => btn.title = t('rename'));
        deleteBtns.forEach(btn => btn.title = t('delete'));
        // Update version navigation button titles
        const nextVersionBtns = document.querySelectorAll('.next-version');
        const prevVersionBtns = document.querySelectorAll('.prev-version');
        nextVersionBtns.forEach(btn => btn.title = t('newVersion'));
        prevVersionBtns.forEach(btn => btn.title = t('prevVersion'));
        // Update edit action button titles
        const confirmBtns = document.querySelectorAll('.edit-confirm-btn');
        const cancelBtns = document.querySelectorAll('.edit-cancel-btn');
        confirmBtns.forEach(btn => btn.title = t('confirm'));
        cancelBtns.forEach(btn => btn.title = t('cancel'));
        // Update typing indicators if any are visible
        const typingMessages = document.querySelectorAll('.message-bubble.bot[data-typing="true"] p');
        typingMessages.forEach(p => {
            if (p.textContent.includes('...') || p.textContent.includes('dot')) {
                p.innerHTML = t('typing');
            }
        });
        
        // Apply translations to all UI elements
        applyAllTranslations();
        
        // Update alignment of existing AI messages based on new language
        const existingBotMessages = document.querySelectorAll('.message-wrapper.bot');
        existingBotMessages.forEach(wrapper => {
            const botBubble = wrapper.querySelector('.message-bubble.bot');
            if (botBubble) {
                setBotWrapperAlignFromText(wrapper, botBubble.textContent);
            }
        });
        
        // Update layout based on new language direction
        updateChatLayout();
    });
    
    // Function to update chat layout based on language direction
    function updateChatLayout() {
        const lang = document.documentElement.getAttribute('lang') || localStorage.getItem('pimxchat_ui_lang') || 'fa';
        const isRTL = lang === 'fa' || lang === 'ar';
        const isDesktop = window.innerWidth > 768;
        
        // Update document direction
        document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
        
        // Force a reflow to ensure CSS changes take effect
        document.body.offsetHeight;
        
        // Desktop: explicitly control sidebar/interface order to guarantee placement
        const sidebar = document.querySelector('.chat-sidebar');
        const chatInterface = document.querySelector('.chat-interface');
        if (sidebar && chatInterface) {
            if (isDesktop) {
                sidebar.style.order = isRTL ? '2' : '0';
                chatInterface.style.order = '1';
            } else {
                // Clear inline order on mobile so absolute/transform rules apply
                sidebar.style.order = '';
                chatInterface.style.order = '';
            }
        }

        // Update chat input padding based on direction
        if (chatInput) {
            if (isRTL) {
                chatInput.style.paddingLeft = '50px';
                chatInput.style.paddingRight = '16px';
            } else {
                chatInput.style.paddingLeft = '16px';
                chatInput.style.paddingRight = '50px';
            }
        }
        
        // Update send button position
        const sendButton = document.getElementById('send-button');
        if (sendButton) {
            if (isRTL) {
                sendButton.style.left = '12px';
                sendButton.style.right = 'auto';
            } else {
                sendButton.style.right = '12px';
                sendButton.style.left = 'auto';
            }
        }
        
        // Update sidebar border and shadow
        if (sidebar) {
            if (isRTL) {
                sidebar.style.borderLeft = '1px solid var(--border-color)';
                sidebar.style.borderRight = 'none';
            } else {
                sidebar.style.borderLeft = 'none';
                sidebar.style.borderRight = '1px solid var(--border-color)';
            }
        }
        
        // Update chat main flex direction only on mobile; desktop stays LTR layout
        const chatMain = document.querySelector('.chat-main');
        if (chatMain) {
            if (window.innerWidth <= 768) {
                chatMain.style.flexDirection = isRTL ? 'row-reverse' : 'row';
            } else {
                // Clear inline style so CSS controls desktop
                chatMain.style.flexDirection = '';
            }
        }
        
        // Update sidebar header flex direction
        const sidebarHeader = document.querySelector('.sidebar-header');
        if (sidebarHeader) {
            sidebarHeader.style.flexDirection = isRTL ? 'row-reverse' : 'row';
        }
        
        // Update menu button margins
        const menuButton = document.querySelector('.menu-button');
        if (menuButton) {
            if (isRTL) {
                menuButton.style.marginRight = '0';
                menuButton.style.marginLeft = '0.5rem';
            } else {
                menuButton.style.marginRight = '0.5rem';
                menuButton.style.marginLeft = '0';
            }
        }
        
        // Update chat title padding
        const chatTitle = document.querySelector('.chat-title');
        if (chatTitle) {
            if (isRTL) {
                chatTitle.style.paddingRight = '0';
                chatTitle.style.paddingLeft = '1rem';
            } else {
                chatTitle.style.paddingRight = '1rem';
                chatTitle.style.paddingLeft = '0';
            }
        }
    }

    // Re-apply layout on resize to keep desktop/mobile rules consistent
    window.addEventListener('resize', updateChatLayout);

    async function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;
    
        let isFirstMessage = false;
        if (!currentChatId) {
            await newChat();
            isFirstMessage = true;
        }
    
        let chat = chats.find(c => c.id === currentChatId);
        if (!chat || !chat.created_at) { isFirstMessage = true; }
    
        if (isFirstMessage) {
            const newTitle = userMessage.substring(0, 40) + (userMessage.length > 40 ? '...' : '');
            if (!chat) {
                chat = { id: currentChatId, title: newTitle };
                chats.unshift(chat);
            } else {
                chat.title = newTitle;
            }
            try {
                await apiFetch('/api/chats', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: chat.id, title: newTitle })
                });
                chat.created_at = new Date().toISOString();
                renderChatHistory();
            } catch (error) { return; }
        }
    
        document.querySelector('.initial-message')?.remove();
    
        const messageWrappers = Array.from(chatMessagesDiv.querySelectorAll('.message-wrapper'));
        if (messageWrappers.length > 0) {
            const lastMessageWrapper = messageWrappers[messageWrappers.length - 1];
            let nextMessageSibling = lastMessageWrapper.nextElementSibling;
            while (nextMessageSibling) {
                const toRemove = nextMessageSibling;
                nextMessageSibling = nextMessageSibling.nextElementSibling;
                toRemove.remove();
            }
        }
    
        let parent_message_id = null;
        const lastBotMessage = Array.from(chatMessagesDiv.querySelectorAll('.message-bubble.bot')).pop();
        if (lastBotMessage) {
            parent_message_id = lastBotMessage.id;
        }
    
        const userMessageId = displayMessage('user', userMessage);
        const userSaveResult = await saveMessage(currentChatId, 'user', userMessage, null, null, parent_message_id);
        
        if (userSaveResult && userSaveResult.id) {
            const userMessageElement = document.getElementById(userMessageId);
            if (userMessageElement) {
                userMessageElement.id = userSaveResult.id;
                userMessageElement.parentElement.id = `wrapper-${userSaveResult.id}`;
            }
            if (parent_message_id) {
                localStorage.setItem(`active_child_for_${parent_message_id}`, userSaveResult.id);
            }
        }
        
        chatInput.value = '';
        chatInput.style.height = 'auto';
    
        const direction = detectLanguageDirection(userMessage);
        const typingId = displayMessage('bot', '', true);
        document.getElementById(typingId).querySelector('p').innerHTML = t('typing');
        // Align typing wrapper based on current UI language
        const typingWrapperMain = document.getElementById(`wrapper-${typingId}`) || document.getElementById(typingId)?.parentElement;
        if (typingWrapperMain) {
            const lang = document.documentElement.getAttribute('lang') || localStorage.getItem('pimxchat_ui_lang') || 'fa';
            const isRTL = (lang === 'fa' || lang === 'ar');
            typingWrapperMain.style.alignSelf = isRTL ? 'flex-end' : 'flex-start';
        }
    
        try {
            // Get current UI language and send to API for AI response language
            const uiLang = document.documentElement.getAttribute('lang') || localStorage.getItem('pimxchat_ui_lang') || 'fa';
            const data = await apiFetch('/api/gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: userMessage, direction: direction, uiLanguage: uiLang })
            });
            const typingWrapper = document.getElementById(typingId)?.parentElement;
            typingWrapper?.remove();
            const botMessageId = displayMessage('bot', data.response);
            // Ensure wrapper alignment for the new bot message
            const createdBotWrapper = document.getElementById(`wrapper-${botMessageId}`) || document.getElementById(botMessageId)?.parentElement;
            if (createdBotWrapper) {
                setBotWrapperAlignFromText(createdBotWrapper, data.response);
            }
            const botSaveResult = await saveMessage(currentChatId, 'bot', data.response, null, null, userSaveResult.id);
            
            if (botSaveResult && botSaveResult.id) {
                const botMessageElement = document.getElementById(botMessageId);
                if (botMessageElement) {
                    botMessageElement.id = botSaveResult.id;
                    botMessageElement.parentElement.id = `wrapper-${botSaveResult.id}`;
                }
            }
        } catch (error) {
            const typingWrapper = document.getElementById(typingId)?.parentElement;
            typingWrapper?.remove();
            const lang = document.documentElement.getAttribute('lang') || localStorage.getItem('pimxchat_ui_lang') || 'fa';
            const errorMessages = {
                fa: 'خطا در ارتباط با سرور. لطفاً اتصال اینترنت و وضعیت سرور را بررسی کنید.',
                en: 'Server connection error. Please check your internet connection and server status.',
                fr: 'Erreur de connexion au serveur. Veuillez vérifier votre connexion internet et l\'état du serveur.',
                es: 'Error de conexión al servidor. Por favor verifica tu conexión a internet y el estado del servidor.',
                de: 'Serververbindungsfehler. Bitte überprüfe deine Internetverbindung und den Serverstatus.',
                ar: 'خطأ في الاتصال بالخادم. يرجى التحقق من اتصال الإنترنت وحالة الخادم.',
                it: 'Errore di connessione al server. Controlla la tua connessione internet e lo stato del server.',
                ru: 'Ошибка подключения к серверу. Пожалуйста, проверьте подключение к интернету и статус сервера.'
            };
            const errorText = t('serverError');
            const errorMsgId = displayMessage('bot', errorText, false, true);
            // Persist offline error locally so it always appears in chat
            addOfflineMessage(currentChatId, { id: errorMsgId, sender: 'bot', text: errorText, error: true });
        }
    }

    async function copyMessage(text, buttonElement) {
        try {
            await navigator.clipboard.writeText(text);
            const originalIcon = buttonElement.innerHTML;
            buttonElement.innerHTML = '<i class="fas fa-check"></i>';
            buttonElement.style.color = '#4CAF50';
            setTimeout(() => {
                buttonElement.innerHTML = originalIcon;
                buttonElement.style.color = '';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy with Clipboard API:', err);
            try {
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-9999px';
                textArea.style.top = '0';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                const originalIcon = buttonElement.innerHTML;
                buttonElement.innerHTML = '<i class="fas fa-check"></i>';
                buttonElement.style.color = '#4CAF50';
                setTimeout(() => {
                    buttonElement.innerHTML = originalIcon;
                    buttonElement.style.color = '';
                }, 2000);
            } catch (fallbackErr) {
                console.error('Fallback copy failed:', fallbackErr);
                buttonElement.style.color = '#f44336';
                setTimeout(() => {
                    buttonElement.style.color = '';
                }, 2000);
            }
        }
    }

    function scrollToBottom() {
        chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
    }

    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    newChatButton.addEventListener('click', newChat);
    menuButton.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            chatContainer.classList.toggle('sidebar-open');
        }
    });
    const inputArea = document.querySelector('.chat-input-area');
    let lastInputTime = 0;
    let intensity = 0; // 0..1 for CSS var

    const applyTypingReactiveVars = () => {
        document.documentElement.style.setProperty('--type-intensity', intensity.toFixed(2));
        document.documentElement.style.setProperty('--ripple-opacity', (0.18 + intensity * 0.35).toFixed(2));
        document.documentElement.style.setProperty('--ripple-scale', (0.9 + intensity * 0.2).toFixed(2));
    };

    const decayTyping = () => {
        const now = performance.now();
        const dt = (now - lastInputTime) / 1000; // seconds
        // Smooth exponential decay
        intensity = Math.max(0, intensity - dt * 0.8);
        applyTypingReactiveVars();
        typingBoost = Math.max(0, typingBoost - dt * 0.9);
        if (bgCanvas && Math.random() < 0.05) initParticles();
        if (intensity > 0.01 || typingBoost > 0.01) {
            requestAnimationFrame(decayTyping);
        }
    };

    chatInput.addEventListener('input', () => {
        chatInput.style.height = 'auto';
        chatInput.style.height = `${chatInput.scrollHeight}px`;

        if (chatInput.value.trim().length > 0) {
            inputArea.classList.add('has-content');
            // Bump intensity on every keystroke
            intensity = Math.min(1, intensity + 0.18);
            lastInputTime = performance.now();
            applyTypingReactiveVars();
            requestAnimationFrame(decayTyping);
            // Boost canvas animation
            typingBoost = Math.min(1, typingBoost + 0.25);
            // Optionally increase particle count a bit by reinitting occasionally
            if (bgCanvas && Math.random() < 0.15) initParticles();
        } else {
            inputArea.classList.remove('has-content');
            intensity = 0;
            applyTypingReactiveVars();
            typingBoost = 0;
        }
    });

    loadChats();
    // Stats widget removed per request
    
    // Set initial layout based on current language
    updateChatLayout();
    
    // Apply initial translations to all UI elements
    applyAllTranslations();
});
