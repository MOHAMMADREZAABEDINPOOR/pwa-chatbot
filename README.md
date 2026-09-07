<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,12,24,30&height=220&section=header&text=PWA_CHATBOT&fontSize=42&fontAlignY=35&desc=%E2%9A%A1%20Bilingual%20AI%20Chatbot%20PWA%20with%20Google%20Gemini%20%26%20Proxy%20Bridge&descFontSize=16&descAlignY=62" alt="pwa-chatbot Banner" width="100%" />

<a href="https://github.com/MOHAMMADREZAABEDINPOOR/pwa-chatbot">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=2800&pause=1000&color=00D2FF&center=true&vCenter=true&width=780&lines=Progressive+Web+App+(PWA)+with+Offline+ServiceWorker+Capabilities;Direct+Google+Gemini+AI+Integration+via+@google/generative-ai;Censorship-Resilient+Proxy+Bridge+via+SOCKS5+%26+HTTPS+Agents;Real-Time+Markdown+Streaming%2C+Code+Highlighting+%26+LaTeX+Math;Persistent+SQLite3+Chat+History+with+Session+Partitioning;Bilingual+RTL+Language+Alignment+Engine+(Persian+%26+English)" alt="Typing SVG" />
</a>

<br/>

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg?style=for-the-badge&logo=gnu)](https://www.gnu.org/licenses/agpl-3.0)
[![Node.js](https://img.shields.io/badge/Runtime-Node.js_v20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Google Gemini](https://img.shields.io/badge/AI-Google_Gemini_Pro-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Express](https://img.shields.io/badge/Backend-Express_5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![SQLite3](https://img.shields.io/badge/Database-SQLite3-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![PWA](https://img.shields.io/badge/Architecture-Progressive_Web_App-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Read in Persian](https://img.shields.io/badge/مطالعه_به_فارسی-Persian_README-008080?style=for-the-badge)](#persian-documentation)

<p align="center">
  <b>pwa-chatbot</b> is an installable, mobile-responsive Progressive Web App (PWA) AI chat interface powered by Google Gemini and Express. Equipped with built-in SOCKS5 and HTTPS proxy bridges to circumvent regional AI API restrictions, persistent SQLite3 session storage, real-time Markdown streaming, and automated Persian RTL language alignment, pwa-chatbot brings artificial intelligence to any device.
</p>

[Project Overview](#-project-overview) •
[Directory Anatomy](#-exhaustive-directory--file-anatomy) •
[Proxy Bridge](#-censorship-resilient-proxy-bridge) •
[Quick Start](#-quick-start) •
[توضیحات فارسی](#persian-documentation) •
[License](#-copyleft-license--legal-attribution)

</div>

---

## ⚡ Project Overview

Accessing frontier AI models like Google Gemini in sanctioned or heavily censored geographical regions often results in `403 Forbidden` geo-blocking errors. Additionally, standard web interfaces are heavy and cannot be installed as native applications.

**pwa-chatbot** solves both challenges:
- 🛡️ **Built-In SOCKS5 & HTTPS Proxy Tunnel**: The Express server routes API requests through configured upstream proxies, allowing seamless access to Gemini Pro from anywhere.
- 📱 **Installable PWA**: Can be installed to the home screen of Android, iOS, Windows, and macOS as a standalone native-feeling application.
- 🗄️ **Persistent Chat History**: Stores multi-turn conversations in local SQLite3 databases (`pimxchat.db`).

---

## 📂 Exhaustive Directory & File Anatomy

```
d:/code/PWA/
│
├── package.json                     # Dependencies (@google/generative-ai, express, socks-proxy-agent, sqlite3)
├── README.md                        # Master comprehensive bilingual documentation
│
└── pimxchat/                        # Main Web Application Package
    ├── index.html                   # PWA entrypoint and standalone web manifest linkage
    ├── chat.html                    # Main interactive AI conversation interface
    ├── admin.html                   # Administrative session viewer and token metrics
    ├── about.html                   # Project philosophy and technical documentation
    ├── faq.html                     # Frequently asked questions and troubleshooting
    ├── rules.html                   # Usage guidelines and system prompts
    ├── server.js                    # Express 5.x backend server, proxy bridge & Gemini client
    ├── database.js                  # SQLite3 conversation history and session persistence
    ├── config.js                    # Client-side configuration and theme settings
    ├── pimxchat.db                  # Local SQLite3 database file
    ├── prompt_config.txt            # Master system prompt defining bot personality and constraints
    ├── css/                         # Responsive CSS stylesheets with dark mode & RTL support
    ├── js/                          # Client-side chat controllers, streaming parser & syntax highlighter
    └── locales/                     # Language packs for Persian and English UI localization
```

---

## 🚀 Quick Start

```bash
git clone https://github.com/MOHAMMADREZAABEDINPOOR/pwa-chatbot.git
cd pwa-chatbot

npm install

# Configure your Gemini API key in .env or config.js:
# GEMINI_API_KEY=your_key_here
# SOCKS_PROXY=socks5://127.0.0.1:10808 (Optional, for bypassing geo-blocks)

node pimxchat/server.js
```
Open `http://localhost:3000` in your browser.

---

## Persian Documentation
### 🇮🇷 مستندات فوق‌العاده مفصل، جامع و فنی به زبان فارسی

### ۱. معرفی پروژه چت‌بات PWA هوشمند
پروژه **pwa-chatbot** یک وب‌اپلیکیشن پیش‌رونده (**Progressive Web App**) و چت‌بات هوش مصنوعی متصل به مدل **Google Gemini Pro** است. این نرم‌افزار به صورت اختصاصی برای دور زدن تحریم‌های شرکت گوگل علیه کاربران ایرانی طراحی شده و مجهز به بریج داخلی پروکسی (پشتیبانی از SOCKS5 و HTTPS Proxy) است تا بدون خطای ۴۰۳ و بدون قطعی کار کند.

---

### ۲. تشریح فایل‌های پروژه
- **`pimxchat/server.js`**: بک‌اند سبک Node.js و Express 5 که پیام‌ها را از طریق پروکسی به هوش مصنوعی گوگل ارسال کرده و پاسخ‌ها را به صورت استریم به کاربر تحویل می‌دهد.
- **`pimxchat/chat.html`**: صفحه چت زیبا و واکنش‌گرا با پشتیبانی از مارک‌داون، فرمول‌های ریاضی و کدهای برنامه‌نویسی.
- **`pimxchat/database.js`**: ذخیره تاریخچه گفتگوها در دیتابیس SQLite.

---

## 📜 Copyleft License & Legal Attribution

Distributed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

---

<div align="center">
<img src="./assets/footer.svg" alt="PWA Chatbot 3D Footer" width="100%" />
<sub>Architected by <a href="https://github.com/MOHAMMADREZAABEDINPOOR"><b>MOHAMMADREZA ABEDINPOOR</b></a>. If pwa-chatbot helps your AI workflows, leave a ⭐!</sub>
</div>
