const initParticlesFaq = () => {
    if (document.getElementById('particles-js-faq')) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const particleColor = currentTheme === 'light' ? '#000000' : '#ffffff';
        
        const pJSFaq = particlesJS('particles-js-faq', {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": particleColor
            },
            "shape": {
                "type": "star",
            },
            "opacity": {
                "value": 0.5,
                "random": true,
            },
            "size": {
                "value": 4,
                "random": true,
            },
            "line_linked": {
                "enable": false,
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                },
                "onclick": {
                    "enable": false,
                },
                "resize": true
            }
        },
        "retina_detect": true
        });

        if (window.myParticleInstances) {
            window.myParticleInstances.push(pJSFaq);
        }
    }
};

// Initialize particles on load
initParticlesFaq();

// Listen for theme changes and re-initialize particles
document.addEventListener('themeChanged', () => {
    const container = document.getElementById('particles-js-faq');
    if (container) {
        container.innerHTML = '';
    }
    initParticlesFaq();
});

// ---=== FAQ Accordion ===---
(function initFaqAccordionBootstrap() {
    function setupFaqAccordion() {
        const accordions = document.querySelectorAll('.accordion');
        if (!accordions.length) return false;

        accordions.forEach(acc => {
            if (acc.dataset.initialized === 'true') return;
            acc.dataset.initialized = 'true';

            const items = acc.querySelectorAll('.accordion-item');

            function closeAllExcept(exceptionItem) {
                items.forEach(item => {
                    if (item === exceptionItem) return;
                    const content = item.querySelector('.accordion-content');
                    const icon = item.querySelector('.accordion-header i');
                    if (content) {
                        content.classList.remove('active');
                        content.style.maxHeight = null;
                        content.style.opacity = 0;
                        content.style.transform = 'translateY(-10px)';
                    }
                    if (icon) icon.style.transform = 'rotate(0deg)';
                    const header = item.querySelector('.accordion-header');
                    if (header) header.setAttribute('aria-expanded', 'false');
                });
            }

            items.forEach(item => {
                const header = item.querySelector('.accordion-header');
                const content = item.querySelector('.accordion-content');
                if (!header || !content) return;

                // Ensure clean listeners by cloning header
                const newHeader = header.cloneNode(true);
                header.parentNode.replaceChild(newHeader, header);

                // Query icon from the cloned header to avoid referencing a detached node
                const icon = newHeader.querySelector('i');

                newHeader.setAttribute('aria-controls', '');
                newHeader.setAttribute('aria-expanded', 'false');
                newHeader.setAttribute('role', 'button');

                newHeader.addEventListener('click', (e) => {
                    e.preventDefault();
                    const isOpen = content.classList.contains('active');
                    closeAllExcept(isOpen ? null : item);

                    if (!isOpen) {
                        content.classList.add('active');
                        content.style.maxHeight = content.scrollHeight + 'px';
                        content.style.opacity = 1;
                        content.style.transform = 'translateY(0)';
                        if (icon) icon.style.transform = 'rotate(180deg)';
                        newHeader.setAttribute('aria-expanded', 'true');
                    } else {
                        content.classList.remove('active');
                        content.style.maxHeight = null;
                        content.style.opacity = 0;
                        content.style.transform = 'translateY(-10px)';
                        if (icon) icon.style.transform = 'rotate(0deg)';
                        newHeader.setAttribute('aria-expanded', 'false');
                    }
                });
            });

            // Recalculate open panels on resize
            window.addEventListener('resize', () => {
                acc.querySelectorAll('.accordion-content.active').forEach(content => {
                    content.style.maxHeight = content.scrollHeight + 'px';
                });
            });
        });

        return accordions.length > 0;
    }

    function tryInitNowOrObserve() {
        if (setupFaqAccordion()) return;
        // Observe until accordion markup appears (because loadComponents injects later)
        const observer = new MutationObserver(() => {
            if (setupFaqAccordion()) {
                observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });

        // Fallback polling in case observer misses timing
        let tries = 0;
        const maxTries = 40; // ~12s at 300ms intervals
        const intervalId = setInterval(() => {
            if (setupFaqAccordion() || ++tries >= maxTries) {
                clearInterval(intervalId);
            }
        }, 300);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryInitNowOrObserve);
    } else {
        tryInitNowOrObserve();
    }

    // Global delegated click handler as a final safety net for dynamic DOM
    if (!document.body.dataset.faqDelegationBound) {
        document.body.dataset.faqDelegationBound = 'true';
        document.addEventListener('click', (e) => {
            const header = e.target.closest('.accordion-header');
            if (!header) return;

            const item = header.closest('.accordion-item');
            const acc = header.closest('.accordion');
            if (!item || !acc) return;

            const content = item.querySelector('.accordion-content');
            const icon = header.querySelector('i');
            if (!content) return;

            // Close other items in this accordion
            acc.querySelectorAll('.accordion-item').forEach(other => {
                if (other === item) return;
                const otherContent = other.querySelector('.accordion-content');
                const otherIcon = other.querySelector('.accordion-header i');
                if (otherContent) {
                    otherContent.classList.remove('active');
                    otherContent.style.maxHeight = null;
                    otherContent.style.opacity = 0;
                    otherContent.style.transform = 'translateY(-10px)';
                }
                if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                const otherHeader = other.querySelector('.accordion-header');
                if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
            });

            const isOpen = content.classList.contains('active');
            if (!isOpen) {
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = 1;
                content.style.transform = 'translateY(0)';
                if (icon) icon.style.transform = 'rotate(180deg)';
                header.setAttribute('aria-expanded', 'true');
            } else {
                content.classList.remove('active');
                content.style.maxHeight = null;
                content.style.opacity = 0;
                content.style.transform = 'translateY(-10px)';
                if (icon) icon.style.transform = 'rotate(0deg)';
                header.setAttribute('aria-expanded', 'false');
            }
        });
    }
})();

// ---=== FAQ Translations ===---
(function() {
	const faqTranslations = {
		fa: {
			heroTitle: 'سوالات متداول',
			heroSubtitle: 'پاسخ به سوالات شما در اینجا قرار دارد.',
			q1: 'PIMXCHAT چیست؟',
			a1: 'PIMXCHAT یک دستیار هوش مصنوعی پیشرفته است که برای کمک به شما در انجام کارهای مختلف، از پاسخ به سوالات ساده تا تولید محتوای خلاقانه، طراحی شده است.',
			q2: 'آیا استفاده از PIMXCHAT رایگان است؟',
			a2: 'بله، استفاده از PIMXCHAT در حال حاضر کاملاً رایگان است. ما در آینده نیز پلن‌های رایگان و پریمیوم را برای کاربران خود ارائه خواهیم داد.',
			q3: 'آیا برای استفاده از PIMXCHAT نیاز به ثبت‌نام دارم؟',
			a3: 'خیر، شما می‌توانید بدون نیاز به ثبت‌نام از PIMXCHAT استفاده کنید. با این حال، با ثبت‌نام می‌توانید به تاریخچه چت‌های خود دسترسی داشته باشید و از امکانات بیشتری بهره‌مند شوید.',
			q4: 'آیا PIMXCHAT از زبان فارسی پشتیبانی می‌کند؟',
			a4: 'بله، PIMXCHAT به طور کامل از زبان فارسی پشتیبانی می‌کند و می‌تواند به سوالات شما به زبان فارسی پاسخ دهد.',
			q5: 'آیا اطلاعات من در PIMXCHAT امن است؟',
			a5: 'ما به حریم خصوصی شما اهمیت می‌دهیم. تمام مکالمات شما با PIMXCHAT به صورت رمزنگاری شده ذخیره می‌شوند و ما به هیچ عنوان اطلاعات شما را با شخص ثالث به اشتراک نمی‌گذاریم.'
		},
		en: {
			heroTitle: 'Frequently Asked Questions',
			heroSubtitle: 'Find answers to your questions here.',
			q1: 'What is PIMXCHAT?',
			a1: 'PIMXCHAT is an advanced AI assistant designed to help you with various tasks, from answering simple questions to generating creative content.',
			q2: 'Is PIMXCHAT free to use?',
			a2: 'Yes, PIMXCHAT is currently completely free. We plan to offer both free and premium plans in the future.',
			q3: 'Do I need to sign up to use PIMXCHAT?',
			a3: 'No, you can use PIMXCHAT without signing up. However, creating an account lets you access your chat history and more features.',
			q4: 'Does PIMXCHAT support Persian?',
			a4: 'Yes, PIMXCHAT fully supports Persian and can respond to your questions in Persian.',
			q5: 'Is my data safe with PIMXCHAT?',
			a5: 'We value your privacy. All your conversations with PIMXCHAT are stored securely, and we never share your information with third parties.'
		},
		fr: {
			heroTitle: 'Foire aux questions',
			heroSubtitle: 'Trouvez ici les réponses à vos questions.',
			q1: 'Qu’est-ce que PIMXCHAT ?',
			a1: 'PIMXCHAT est un assistant IA avancé conçu pour vous aider dans diverses tâches, de la réponse à des questions simples à la génération de contenu créatif.',
			q2: 'PIMXCHAT est-il gratuit ?',
			a2: 'Oui, PIMXCHAT est actuellement entièrement gratuit. Nous prévoyons d’offrir des formules gratuites et premium à l’avenir.',
			q3: 'Dois-je m’inscrire pour utiliser PIMXCHAT ?',
			a3: 'Non, vous pouvez utiliser PIMXCHAT sans inscription. Cependant, créer un compte permet d’accéder à l’historique de vos discussions et à d’autres fonctionnalités.',
			q4: 'PIMXCHAT prend-il en charge le persan ?',
			a4: 'Oui, PIMXCHAT prend entièrement en charge le persan et peut répondre à vos questions en persan.',
			q5: 'Mes données sont-elles en sécurité avec PIMXCHAT ?',
			a5: 'Nous accordons de l’importance à votre vie privée. Toutes vos conversations avec PIMXCHAT sont stockées en toute sécurité et nous ne partageons jamais vos informations avec des tiers.'
		},
		es: {
			heroTitle: 'Preguntas frecuentes',
			heroSubtitle: 'Encuentra aquí las respuestas a tus preguntas.',
			q1: '¿Qué es PIMXCHAT?',
			a1: 'PIMXCHAT es un asistente de IA avanzado diseñado para ayudarte con diversas tareas, desde responder preguntas simples hasta generar contenido creativo.',
			q2: '¿PIMXCHAT es gratuito?',
			a2: 'Sí, PIMXCHAT es actualmente completamente gratuito. Planeamos ofrecer planes gratuitos y premium en el futuro.',
			q3: '¿Necesito registrarme para usar PIMXCHAT?',
			a3: 'No, puedes usar PIMXCHAT sin registrarte. Sin embargo, crear una cuenta te permite acceder a tu historial de chat y a más funciones.',
			q4: '¿PIMXCHAT admite persa?',
			a4: 'Sí, PIMXCHAT admite completamente el persa y puede responder a tus preguntas en persa.',
			q5: '¿Mis datos están seguros con PIMXCHAT?',
			a5: 'Valoramos tu privacidad. Todas tus conversaciones con PIMXCHAT se almacenan de forma segura y nunca compartimos tu información con terceros.'
		},
		de: {
			heroTitle: 'Häufig gestellte Fragen',
			heroSubtitle: 'Hier finden Sie Antworten auf Ihre Fragen.',
			q1: 'Was ist PIMXCHAT?',
			a1: 'PIMXCHAT ist ein fortschrittlicher KI-Assistent, der Ihnen bei verschiedenen Aufgaben hilft, von einfachen Fragen bis hin zur Erstellung kreativer Inhalte.',
			q2: 'Ist PIMXCHAT kostenlos?',
			a2: 'Ja, PIMXCHAT ist derzeit vollständig kostenlos. Wir planen, künftig kostenlose und Premium-Tarife anzubieten.',
			q3: 'Muss ich mich registrieren, um PIMXCHAT zu nutzen?',
			a3: 'Nein, Sie können PIMXCHAT ohne Registrierung verwenden. Ein Konto ermöglicht jedoch den Zugriff auf Ihren Chatverlauf und weitere Funktionen.',
			q4: 'Unterstützt PIMXCHAT Persisch?',
			a4: 'Ja, PIMXCHAT unterstützt Persisch vollständig und kann Ihre Fragen auf Persisch beantworten.',
			q5: 'Sind meine Daten bei PIMXCHAT sicher?',
			a5: 'Wir legen Wert auf Ihre Privatsphäre. Alle Ihre Unterhaltungen mit PIMXCHAT werden sicher gespeichert und wir geben Ihre Informationen niemals an Dritte weiter.'
		},
		ar: {
			heroTitle: 'الأسئلة الشائعة',
			heroSubtitle: 'هنا تجد إجابات لأسئلتك.',
			q1: 'ما هو PIMXCHAT؟',
			a1: 'PIMXCHAT هو مساعد ذكاء اصطناعي متقدم مصمم لمساعدتك في مهام مختلفة، من الإجابة على الأسئلة البسيطة إلى إنشاء محتوى إبداعي.',
			q2: 'هل استخدام PIMXCHAT مجاني؟',
			a2: 'نعم، PIMXCHAT حاليًا مجاني تمامًا. نخطط لتقديم خطط مجانية ومتميزة في المستقبل.',
			q3: 'هل أحتاج إلى التسجيل لاستخدام PIMXCHAT؟',
			a3: 'لا، يمكنك استخدام PIMXCHAT دون تسجيل. ومع ذلك، يتيح لك إنشاء حساب الوصول إلى سجل الدردشة والمزيد من الميزات.',
			q4: 'هل يدعم PIMXCHAT اللغة الفارسية؟',
			a4: 'نعم، يدعم PIMXCHAT اللغة الفارسية بالكامل ويمكنه الرد على أسئلتك بها.',
			q5: 'هل بياناتي آمنة مع PIMXCHAT؟',
			a5: 'نحن نقدر خصوصيتك. يتم تخزين جميع محادثاتك مع PIMXCHAT بشكل آمن، ولا نشارك معلوماتك مطلقًا مع أطراف ثالثة.'
		},
		it: {
			heroTitle: 'Domande frequenti',
			heroSubtitle: 'Trova qui le risposte alle tue domande.',
			q1: 'Che cos’è PIMXCHAT?',
			a1: 'PIMXCHAT è un assistente IA avanzato progettato per aiutarti in varie attività, dalle risposte a semplici domande alla generazione di contenuti creativi.',
			q2: 'PIMXCHAT è gratuito?',
			a2: 'Sì, PIMXCHAT è attualmente completamente gratuito. In futuro prevediamo piani gratuiti e premium.',
			q3: 'Devo registrarmi per usare PIMXCHAT?',
			a3: 'No, puoi utilizzare PIMXCHAT senza registrarti. Tuttavia, creare un account consente di accedere alla cronologia delle chat e ad altre funzionalità.',
			q4: 'PIMXCHAT supporta il persiano?',
			a4: 'Sì, PIMXCHAT supporta pienamente il persiano e può rispondere alle tue domande in persiano.',
			q5: 'I miei dati sono al sicuro con PIMXCHAT?',
			a5: 'Teniamo alla tua privacy. Tutte le conversazioni con PIMXCHAT vengono archiviate in modo sicuro e non condividiamo mai le tue informazioni con terze parti.'
		},
		ru: {
			heroTitle: 'Часто задаваемые вопросы',
			heroSubtitle: 'Здесь вы найдете ответы на свои вопросы.',
			q1: 'Что такое PIMXCHAT?',
			a1: 'PIMXCHAT — продвинутый ИИ-ассистент, который помогает в различных задачах: от ответов на простые вопросы до создания креативного контента.',
			q2: 'PIMXCHAT бесплатен?',
			a2: 'Да, PIMXCHAT в настоящее время полностью бесплатен. В будущем мы планируем предлагать бесплатные и премиум-тарифы.',
			q3: 'Нужно ли регистрироваться для использования PIMXCHAT?',
			a3: 'Нет, вы можете использовать PIMXCHAT без регистрации. Однако создание аккаунта позволит получить доступ к истории чатов и дополнительным функциям.',
			q4: 'Поддерживает ли PIMXCHAT персидский язык?',
			a4: 'Да, PIMXCHAT полностью поддерживает персидский язык и может отвечать на ваши вопросы на персидском.',
			q5: 'Безопасны ли мои данные в PIMXCHAT?',
			a5: 'Мы ценим вашу конфиденциальность. Все ваши разговоры с PIMXCHAT надежно хранятся, и мы никогда не передаем вашу информацию третьим лицам.'
		}
	};

	function getUILang() {
		return document.documentElement.getAttribute('lang') || localStorage.getItem('pimxchat_ui_lang') || 'fa';
	}

	function ft(key) {
		const lang = getUILang();
		return (faqTranslations[lang] && faqTranslations[lang][key]) || (faqTranslations.fa && faqTranslations.fa[key]) || '';
	}

	function applyFaqTranslations() {
		const heroTitle = document.querySelector('.faq-hero-content h1');
		const heroSubtitle = document.querySelector('.faq-hero-content p');
		if (heroTitle) heroTitle.textContent = ft('heroTitle');
		if (heroSubtitle) heroSubtitle.textContent = ft('heroSubtitle');

		const items = document.querySelectorAll('.accordion-item');
		if (items && items.length >= 5) {
			const keys = [
				['q1','a1'],
				['q2','a2'],
				['q3','a3'],
				['q4','a4'],
				['q5','a5']
			];
			items.forEach((item, i) => {
				const headerSpan = item.querySelector('.accordion-header span');
				const bodyP = item.querySelector('.accordion-content p');
				if (headerSpan) headerSpan.textContent = ft(keys[i][0]);
				if (bodyP) bodyP.textContent = ft(keys[i][1]);
			});
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', applyFaqTranslations);
	} else {
		applyFaqTranslations();
	}
	document.addEventListener('languageChanged', applyFaqTranslations);
})();