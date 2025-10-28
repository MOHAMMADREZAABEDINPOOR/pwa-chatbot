const initParticlesRules = () => {
    if (document.getElementById('particles-js-rules')) {
        console.log('rules.js: Found #particles-js-rules element. Initializing particlesJS.');
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const particleColor = currentTheme === 'light' ? '#000000' : '#ffffff';
        console.log('rules.js: Using particle color:', particleColor);
        
        const pJSRules = particlesJS('particles-js-rules', {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": particleColor
                },
                "shape": {
                    "type": "edge",
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
                    "enable": true,
                    "distance": 150,
                    "color": particleColor,
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
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
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
        console.log('rules.js: particlesJS initialized successfully.');
    } else {
        console.error('rules.js: #particles-js-rules element not found. Cannot initialize particlesJS.');
    }
}

(function() {
	const rulesTranslations = {
		fa: {
			heroTitle: 'قوانین و مقررات',
			heroSubtitle: 'برای استفاده بهتر و امن‌تر از PIMXCHAT، لطفاً قوانین زیر را مطالعه کنید.',
			usageTitle: 'قوانین استفاده',
			generalTitle: 'قوانین عمومی',
			generalText: 'استفاده از این سرویس برای اهداف قانونی و مطابق با قوانین جمهوری اسلامی ایران مجاز است. هرگونه استفاده غیرقانونی یا غیراخلاقی منجر به مسدود شدن دسترسی شما خواهد شد.',
			privacyTitle: 'حریم خصوصی',
			privacyText: 'ما به حریم خصوصی شما احترام می‌گذاریم. اطلاعات شما نزد ما محفوظ است و به هیچ عنوان در اختیار شخص ثالث قرار نخواهد گرفت. برای اطلاعات بیشتر، صفحه حریم خصوصی را مطالعه کنید.',
			prohibitedTitle: 'فعالیت‌های ممنوعه',
			prohibitedText: 'هرگونه فعالیت که منجر به آسیب رساندن به سرویس یا سایر کاربران شود، ممنوع است. این شامل ارسال هرزنامه، انتشار محتوای توهین‌آمیز و تلاش برای دسترسی غیرمجاز می‌شود.',
			disclaimerTitle: 'سلب مسئولیت',
			disclaimerText: 'PIMXCHAT یک دستیار هوش مصنوعی است و پاسخ‌های آن ممکن است همیشه دقیق و کامل نباشد. ما مسئولیتی در قبال هرگونه خسارت ناشی از استفاده از اطلاعات ارائه شده توسط این سرویس را بر عهده نمی‌گیریم. لطفاً قبل از هرگونه تصمیم‌گیری، اطلاعات را از منابع معتبر دیگر نیز بررسی کنید.'
		},
		en: {
			heroTitle: 'Terms and Policies',
			heroSubtitle: 'For a better and safer experience with PIMXCHAT, please read the following rules.',
			usageTitle: 'Terms of Use',
			generalTitle: 'General Rules',
			generalText: 'Use of this service is permitted for legal purposes and in accordance with applicable laws. Any illegal or unethical use will result in the suspension of your access.',
			privacyTitle: 'Privacy',
			privacyText: 'We respect your privacy. Your information is kept confidential and will not be shared with third parties. For more information, please read the Privacy Policy.',
			prohibitedTitle: 'Prohibited Activities',
			prohibitedText: 'Any activity that harms the service or other users is prohibited. This includes sending spam, publishing offensive content, and attempting unauthorized access.',
			disclaimerTitle: 'Disclaimer',
			disclaimerText: 'PIMXCHAT is an AI assistant, and its responses may not always be accurate or complete. We accept no liability for any damages arising from the use of information provided by this service. Please verify important information with reliable sources before making decisions.'
		},
		fr: {
			heroTitle: 'Règles et politique',
			heroSubtitle: 'Pour une expérience meilleure et plus sûre avec PIMXCHAT, veuillez lire les règles suivantes.',
			usageTitle: 'Conditions d’utilisation',
			generalTitle: 'Règles générales',
			generalText: 'L’utilisation de ce service est autorisée à des fins légales et conformément aux lois applicables. Toute utilisation illégale ou non éthique entraînera la suspension de votre accès.',
			privacyTitle: 'Confidentialité',
			privacyText: 'Nous respectons votre vie privée. Vos informations sont confidentielles et ne seront pas partagées avec des tiers. Pour plus d’informations, consultez la politique de confidentialité.',
			prohibitedTitle: 'Activités interdites',
			prohibitedText: 'Toute activité nuisant au service ou aux autres utilisateurs est interdite, y compris l’envoi de spam, la publication de contenus offensants et les tentatives d’accès non autorisé.',
			disclaimerTitle: 'Avertissement',
			disclaimerText: 'PIMXCHAT est un assistant IA et ses réponses peuvent ne pas toujours être exactes ou complètes. Nous déclinons toute responsabilité pour tout dommage résultant de l’utilisation des informations fournies par ce service.'
		},
		es: {
			heroTitle: 'Reglas y políticas',
			heroSubtitle: 'Para una experiencia mejor y más segura con PIMXCHAT, por favor lee las siguientes reglas.',
			usageTitle: 'Términos de uso',
			generalTitle: 'Reglas generales',
			generalText: 'El uso de este servicio está permitido con fines legales y de acuerdo con las leyes aplicables. Cualquier uso ilegal o poco ético resultará en la suspensión de tu acceso.',
			privacyTitle: 'Privacidad',
			privacyText: 'Respetamos tu privacidad. Tu información se mantiene confidencial y no se compartirá con terceros. Para más información, revisa la política de privacidad.',
			prohibitedTitle: 'Actividades prohibidas',
			prohibitedText: 'Está prohibida cualquier actividad que dañe el servicio o a otros usuarios, incluyendo el envío de spam, contenido ofensivo y el intento de acceso no autorizado.',
			disclaimerTitle: 'Descargo de responsabilidad',
			disclaimerText: 'PIMXCHAT es un asistente de IA y sus respuestas pueden no ser siempre precisas o completas. No nos hacemos responsables de los daños derivados del uso de la información proporcionada por este servicio.'
		},
		de: {
			heroTitle: 'Regeln und Richtlinien',
			heroSubtitle: 'Für eine bessere und sicherere Nutzung von PIMXCHAT lesen Sie bitte die folgenden Regeln.',
			usageTitle: 'Nutzungsbedingungen',
			generalTitle: 'Allgemeine Regeln',
			generalText: 'Die Nutzung dieses Dienstes ist für legale Zwecke und gemäß geltenden Gesetzen erlaubt. Jede illegale oder unethische Nutzung führt zur Sperrung des Zugangs.',
			privacyTitle: 'Datenschutz',
			privacyText: 'Wir respektieren Ihre Privatsphäre. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben. Weitere Informationen finden Sie in der Datenschutzrichtlinie.',
			prohibitedTitle: 'Verbotene Aktivitäten',
			prohibitedText: 'Jegliche Aktivität, die dem Dienst oder anderen Nutzern schadet, ist verboten, einschließlich Spam, beleidigende Inhalte und unbefugter Zugriff.',
			disclaimerTitle: 'Haftungsausschluss',
			disclaimerText: 'PIMXCHAT ist ein KI-Assistent, und seine Antworten sind möglicherweise nicht immer korrekt oder vollständig. Wir übernehmen keine Haftung für Schäden, die aus der Nutzung der bereitgestellten Informationen entstehen.'
		},
		ar: {
			heroTitle: 'القواعد والسياسات',
			heroSubtitle: 'للحصول على تجربة أفضل وأكثر أمانًا مع PIMXCHAT، يرجى قراءة القواعد التالية.',
			usageTitle: 'شروط الاستخدام',
			generalTitle: 'القواعد العامة',
			generalText: 'يُسمح باستخدام هذه الخدمة للأغراض القانونية ووفقًا للقوانين المعمول بها. أي استخدام غير قانوني أو غير أخلاقي سيؤدي إلى تعليق الوصول.',
			privacyTitle: 'الخصوصية',
			privacyText: 'نحترم خصوصيتك. يتم الحفاظ على سريّة معلوماتك ولن يتم مشاركتها مع أطراف ثالثة. لمزيد من المعلومات، يرجى قراءة سياسة الخصوصية.',
			prohibitedTitle: 'الأنشطة المحظورة',
			prohibitedText: 'يُحظر أي نشاط يضر بالخدمة أو بالمستخدمين الآخرين، بما في ذلك إرسال الرسائل العشوائية ونشر المحتوى المسيء ومحاولات الوصول غير المصرح به.',
			disclaimerTitle: 'إخلاء المسؤولية',
			disclaimerText: 'PIMXCHAT هو مساعد ذكاء اصطناعي وقد لا تكون ردوده دقيقة أو كاملة دائمًا. لا نتحمل أي مسؤولية عن الأضرار الناتجة عن استخدام المعلومات المقدمة من هذه الخدمة.'
		},
		it: {
			heroTitle: 'Regole e politiche',
			heroSubtitle: 'Per un’esperienza migliore e più sicura con PIMXCHAT, leggi le seguenti regole.',
			usageTitle: 'Termini di utilizzo',
			generalTitle: 'Regole generali',
			generalText: 'L’uso di questo servizio è consentito per scopi legali e in conformità con le leggi vigenti. Qualsiasi uso illegale o non etico comporterà la sospensione dell’accesso.',
			privacyTitle: 'Privacy',
			privacyText: 'Rispettiamo la tua privacy. Le tue informazioni sono riservate e non saranno condivise con terze parti. Per maggiori informazioni, consulta l’informativa sulla privacy.',
			prohibitedTitle: 'Attività vietate',
			prohibitedText: 'È vietata qualsiasi attività che danneggi il servizio o altri utenti, incluso l’invio di spam, la pubblicazione di contenuti offensivi e i tentativi di accesso non autorizzato.',
			disclaimerTitle: 'Disclaimer',
			disclaimerText: 'PIMXCHAT è un assistente IA e le sue risposte potrebbero non essere sempre accurate o complete. Non ci assumiamo responsabilità per danni derivanti dall’uso delle informazioni fornite da questo servizio.'
		},
		ru: {
			heroTitle: 'Правила и политика',
			heroSubtitle: 'Для лучшего и более безопасного использования PIMXCHAT, пожалуйста, ознакомьтесь со следующими правилами.',
			usageTitle: 'Условия использования',
			generalTitle: 'Общие правила',
			generalText: 'Использование этого сервиса допускается в законных целях и в соответствии с применимыми законами. Любое незаконное или неэтичное использование приведет к блокировке доступа.',
			privacyTitle: 'Конфиденциальность',
			privacyText: 'Мы уважаем вашу конфиденциальность. Ваши данные конфиденциальны и не будут переданы третьим лицам. Дополнительную информацию см. в политике конфиденциальности.',
			prohibitedTitle: 'Запрещенные действия',
			prohibitedText: 'Запрещена любая деятельность, наносящая вред сервису или другим пользователям, включая спам, оскорбительный контент и попытки несанкционированного доступа.',
			disclaimerTitle: 'Отказ от ответственности',
			disclaimerText: 'PIMXCHAT — это ИИ-ассистент, и его ответы не всегда могут быть точными и полными. Мы не несём ответственности за ущерб, возникший в результате использования предоставленной информации.'
		}
	};

	function getUILang() {
		return document.documentElement.getAttribute('lang') || localStorage.getItem('pimxchat_ui_lang') || 'fa';
	}

	function rt(key) {
		const lang = getUILang();
		return (rulesTranslations[lang] && rulesTranslations[lang][key]) || (rulesTranslations.fa && rulesTranslations.fa[key]) || '';
	}

	function applyRulesTranslations() {
		const heroTitle = document.querySelector('.rules-hero-content h1');
		const heroSubtitle = document.querySelector('.rules-hero-content p');
		if (heroTitle) heroTitle.textContent = rt('heroTitle');
		if (heroSubtitle) heroSubtitle.textContent = rt('heroSubtitle');

		const usageTitle = document.querySelector('.features .section-title');
		if (usageTitle) usageTitle.textContent = rt('usageTitle');

		const cards = document.querySelectorAll('.feature-cards .card');
		if (cards && cards.length >= 3) {
			const [c1, c2, c3] = cards;
			const c1h = c1.querySelector('h3'); const c1p = c1.querySelector('p');
			const c2h = c2.querySelector('h3'); const c2p = c2.querySelector('p');
			const c3h = c3.querySelector('h3'); const c3p = c3.querySelector('p');
			if (c1h) c1h.textContent = rt('generalTitle');
			if (c1p) c1p.textContent = rt('generalText');
			if (c2h) c2h.textContent = rt('privacyTitle');
			if (c2p) c2p.textContent = rt('privacyText');
			if (c3h) c3h.textContent = rt('prohibitedTitle');
			if (c3p) c3p.textContent = rt('prohibitedText');
		}

		const disclaimerTitle = document.querySelector('.disclaimer-section .section-title');
		const disclaimerText = document.querySelector('.disclaimer-section p');
		if (disclaimerTitle) disclaimerTitle.textContent = rt('disclaimerTitle');
		if (disclaimerText) disclaimerText.textContent = rt('disclaimerText');
	}

	document.addEventListener('DOMContentLoaded', () => {
		applyRulesTranslations();
		initParticlesRules();
	});
	document.addEventListener('languageChanged', applyRulesTranslations);
})();