# 💬 PWA Chatbot

A Progressive Web Application (PWA) chatbot with multi-language support (Persian/English), real-time messaging, branch management, and an admin panel.

## 🌟 Features

- **Multi-language Support**: Full Persian (Farsi) and English language support with RTL/LTR text handling
- **Real-time Chat**: Instant messaging with AI-powered responses using Google Gemini
- **Branch Management**: Create and manage multiple conversation branches
- **Admin Panel**: Comprehensive admin interface for system management
- **PWA Capabilities**: Installable as a standalone app, works offline
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Database Integration**: SQLite database for persistent storage
- **Language Detection**: Automatic language detection and alignment

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **AI Integration**: Google Generative AI (Gemini)
- **PWA**: Service Workers, Manifest
- **Styling**: Custom CSS with RTL/LTR support

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Google Gemini API Key

## ⚙️ Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/pwa-chatbot.git
cd pwa-chatbot
```

2. Install dependencies:
```bash
npm install
```

3. Configure your API keys in `pimxchat/config.js`:
```javascript
const CONFIG = {
    API_KEY: 'YOUR_GEMINI_API_KEY',
    // ... other settings
};
```

4. Start the server:
```bash
node pimxchat/server.js
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

## 🎯 Available Pages

- **Home** (`index.html`): Landing page and introduction
- **Chat** (`chat.html`): Main chat interface
- **Admin** (`admin.html`): Administration panel
- **About** (`about.html`): Information about the application
- **FAQ** (`faq.html`): Frequently asked questions
- **Rules** (`rules.html`): Usage guidelines and rules

## 📁 Project Structure

```
pimxchat/
├── css/                    # Stylesheets
│   ├── style.css          # Main styles
│   ├── chat.css           # Chat interface styles
│   ├── admin.css          # Admin panel styles
│   └── ...
├── js/                     # JavaScript modules
│   ├── main.js            # Main application logic
│   ├── chat.js            # Chat functionality
│   ├── branchManager.js   # Branch management
│   └── ...
├── locales/               # Language files
│   └── fa.json            # Persian translations
├── images/                # Image assets
├── server.js              # Express server
├── database.js            # Database operations
├── config.js              # Configuration
├── *.html                 # HTML pages
└── pimxchat.db           # SQLite database
```

## 🔧 Configuration

### Server Configuration

Edit `server.js` to customize:
- Port number (default: 3000)
- CORS settings
- API endpoints
- Database path

### Chat Configuration

Edit `config.js` to customize:
- AI model settings
- Message limits
- Language preferences
- Prompt configurations

## 🌐 Language Support

The application supports:
- **Persian (فارسی)**: Full RTL support
- **English**: LTR support
- Automatic language detection
- Mixed language handling

Language files are stored in `locales/` directory.

## 💾 Database

The application uses SQLite for data persistence:
- User messages
- Conversation history
- Branch information
- System settings

Database file: `pimxchat.db`

## 🎨 Features in Detail

### Chat Interface
- Real-time message sending/receiving
- Message history
- Branch switching
- Language toggle
- Responsive design

### Branch Management
- Create new conversation branches
- Switch between branches
- Delete branches
- Branch history tracking

### Admin Panel
- System monitoring
- User management
- Database operations
- Configuration management

## 📱 PWA Installation

Users can install the app on their devices:

1. **Desktop**: Click the install icon in the browser address bar
2. **Mobile**: Add to home screen option in browser menu

## 🔒 Security Notes

- Keep your API keys secure
- Don't commit `config.js` with real API keys
- Use environment variables in production
- Implement proper authentication for admin panel

## 🚀 Deployment

For production deployment:

1. Set environment variables:
```bash
export GEMINI_API_KEY="your_api_key"
export NODE_ENV="production"
```

2. Use a process manager like PM2:
```bash
pm2 start pimxchat/server.js --name pwa-chatbot
```

3. Set up a reverse proxy (nginx/Apache)
4. Enable HTTPS for PWA features

## 🧪 Testing

Test files included:
- `demo_language_alignment.html`: Language detection demo
- `test_language_detection.html`: Language detection tests

## 📝 Development Notes

- `server.js.new`: Backup/alternative server implementation
- `LANGUAGE_ALIGNMENT_README.md`: Documentation for language features
- `prompt_config.txt`: AI prompt configurations

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For support and questions, please open an issue in the GitHub repository.

## 🙏 Acknowledgments

- Google Generative AI for powering the chatbot
- Express.js community
- SQLite for reliable database

---

**Made with ❤️ for PIMX**

