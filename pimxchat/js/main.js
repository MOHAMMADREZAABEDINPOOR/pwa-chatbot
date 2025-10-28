// Immediately log that main.js is executing
console.log('main.js: Script started executing');

// Define initPage function and immediately check its existence
window.initPage = function() {
    // ---=== Apply saved UI language early (persist across refresh) ===---
    try {
        const savedUILang = localStorage.getItem('pimxchat_ui_lang');
        if (savedUILang) {
            document.documentElement.setAttribute('lang', savedUILang);
            document.documentElement.setAttribute('dir', (savedUILang === 'fa' || savedUILang === 'ar') ? 'rtl' : 'ltr');
            // Notify pages to re-apply translations on initial load
            document.dispatchEvent(new Event('languageChanged'));
        }
    } catch {}
    // ---=== Home Page Translations ===---
    const homeTranslations = {
        fa: {
            navHome: 'صفحه اصلی',
            navChat: 'چت',
            navAbout: 'درباره ما',
            navRules: 'قوانین',
            navFaq: 'سوالات متداول',
            heroTitle: 'آینده گفتگو اینجاست',
            heroSubtitle: 'با PIMXCHAT, دستیار هوش مصنوعی پیشرفته، به دنیایی از امکانات بی‌پایان قدم بگذارید. سریع، هوشمند و همیشه آماده کمک.',
            heroCta: 'شروع چت رایگان',
            featuresTitle: 'ویژگی‌های کلیدی',
            featureSpeedTitle: 'سرعت بالا',
            featureSpeedDesc: 'پاسخ‌های فوری و بدون تاخیر برای یک گفتگوی روان.',
            featureMultiTitle: 'چند زبانه',
            featureMultiDesc: 'پشتیبانی از ۱۱ زبان زنده دنیا برای ارتباطی بدون مرز.',
            featureSecurityTitle: 'امنیت',
            featureSecurityDesc: 'حفظ حریم خصوصی شما با رمزنگاری پیشرفته داده‌ها.',
            howTitle: 'چگونه کار می‌کند؟',
            howStep1Title: '۱.بدون ثبت‌نام ',
            howStep1Desc: 'بدون ثبت نام از PIMXCHAT استفاده کنید.',
            howStep2Title: '۲. گفتگو',
            howStep2Desc: 'سوالات خود را بپرسید و پاسخ‌های هوشمندانه دریافت کنید.',
            howStep3Title: '۳. یادگیری',
            howStep3Desc: 'دانش خود را گسترش دهید و ایده‌های جدید کشف کنید.',
            useCasesTitle: 'موارد استفاده',
            useCaseDevTitle: 'توسعه نرم‌افزار',
            useCaseDevDesc: 'قطعه کدهای بهینه بنویسید، خطاها را دیباگ کنید و الگوریتم‌های پیچیده را درک کنید.',
            useCaseContentTitle: 'تولید محتوا',
            useCaseContentDesc: 'برای وبلاگ، شبکه‌های اجتماعی یا کمپین‌های تبلیغاتی خود محتوای خلاقانه و جذاب تولید کنید.',
            useCaseResearchTitle: 'تحقیق و یادگیری',
            useCaseResearchDesc: 'مفاهیم جدید را به سرعت یاد بگیرید، خلاصه‌ای از مقالات طولانی را دریافت کنید و به منابع معتبر دسترسی پیدا کنید.',
            useCaseMarketingTitle: 'بازاریابی',
            useCaseMarketingDesc: 'ایده‌های جدید برای کمپین‌های تبلیغاتی پیدا کنید و شعارهای جذاب بنویسید.',
            useCaseEducationTitle: 'آموزش',
            useCaseEducationDesc: 'برای ارائه و سخنرانی‌های خود مطالب آموزشی و ساختاریافته تهیه کنید.',
            useCaseCommTitle: 'ارتباطات',
            useCaseCommDesc: 'ایمیل‌ها و نامه‌های رسمی خود را به صورت حرفه‌ای و دقیق بنویسید.',
            useCaseIdeaTitle: 'ایده‌پردازی',
            useCaseIdeaDesc: 'برای پروژه‌ها و چالش‌های خود ایده‌های نو و خلاقانه پیدا کنید.',
            useCaseTranslateTitle: 'ترجمه',
            useCaseTranslateDesc: 'متون خود را به زبان‌های مختلف با دقت و روانی بالا ترجمه کنید.',
            useCaseAssistantTitle: 'دستیار شخصی',
            useCaseAssistantDesc: 'کارهای روزمره خود را مدیریت کنید، یادآوری تنظیم کنید و به سرعت به اطلاعات مورد نیاز خود دسترسی پیدا کنید.',
            finalCtaTitle: 'آماده‌اید تا آینده را تجربه کنید؟',
            finalCtaSubtitle: 'همین امروز به PIMXCHAT بپیوندید و قدرت هوش مصنوعی را در دستان خود احساس کنید.',
            finalCtaButton: 'شروع کنید',
            footerAboutTitle: 'درباره PIMXCHAT',
            footerAboutDesc: 'PIMXCHAT دستیار هوش مصنوعی پیشرفته‌ای است که برای تسهیل ارتباطات و دسترسی به اطلاعات طراحی شده است.',
            footerLinksTitle: 'لینک‌های مفید',
            footerLinkAbout: 'درباره ما',
            footerLinkRules: 'قوانین',
            footerLinkFaq: 'سوالات متداول',
            footerLinkChat: 'شروع چت',
            footerContactTitle: 'تماس با ما'
        },
        en: {
            navHome: 'Home',
            navChat: 'Chat',
            navAbout: 'About',
            navRules: 'Rules',
            navFaq: 'FAQ',
            heroTitle: 'The future of conversation is here',
            heroSubtitle: 'With PIMXCHAT, an advanced AI assistant, step into a world of endless possibilities. Fast, smart, and always ready to help.',
            heroCta: 'Start free chat',
            featuresTitle: 'Key Features',
            featureSpeedTitle: 'High Speed',
            featureSpeedDesc: 'Instant responses with no delay for smooth conversation.',
            featureMultiTitle: 'Multilingual',
            featureMultiDesc: 'Support for 11 world languages for borderless communication.',
            featureSecurityTitle: 'Security',
            featureSecurityDesc: 'Protecting your privacy with advanced data encryption.',
            howTitle: 'How does it work?',
            howStep1Title: '1. No Sign-up',
            howStep1Desc: 'Use PIMXCHAT without registration.',
            howStep2Title: '2. Chat',
            howStep2Desc: 'Ask your questions and get intelligent answers.',
            howStep3Title: '3. Learn',
            howStep3Desc: 'Expand your knowledge and discover new ideas.',
            useCasesTitle: 'Use Cases',
            useCaseDevTitle: 'Software Development',
            useCaseDevDesc: 'Write optimized code, debug errors, and understand complex algorithms.',
            useCaseContentTitle: 'Content Creation',
            useCaseContentDesc: 'Create creative and engaging content for blogs, social media, or campaigns.',
            useCaseResearchTitle: 'Research & Learning',
            useCaseResearchDesc: 'Quickly learn new concepts, get summaries of long articles, and access reliable sources.',
            useCaseMarketingTitle: 'Marketing',
            useCaseMarketingDesc: 'Find new ideas for campaigns and write catchy slogans.',
            useCaseEducationTitle: 'Education',
            useCaseEducationDesc: 'Prepare structured educational material for presentations and talks.',
            useCaseCommTitle: 'Communication',
            useCaseCommDesc: 'Write professional and precise emails and letters.',
            useCaseIdeaTitle: 'Ideation',
            useCaseIdeaDesc: 'Find innovative ideas for your projects and challenges.',
            useCaseTranslateTitle: 'Translation',
            useCaseTranslateDesc: 'Translate your texts into multiple languages accurately and fluently.',
            useCaseAssistantTitle: 'Personal Assistant',
            useCaseAssistantDesc: 'Manage daily tasks, set reminders, and quickly access needed information.',
            finalCtaTitle: 'Ready to experience the future?',
            finalCtaSubtitle: 'Join PIMXCHAT today and feel the power of AI at your fingertips.',
            finalCtaButton: 'Get Started',
            footerAboutTitle: 'About PIMXCHAT',
            footerAboutDesc: 'PIMXCHAT is an advanced AI assistant designed to facilitate communication and access to information.',
            footerLinksTitle: 'Useful Links',
            footerLinkAbout: 'About',
            footerLinkRules: 'Rules',
            footerLinkFaq: 'FAQ',
            footerLinkChat: 'Start Chat',
            footerContactTitle: 'Contact Us'
        },
        fr: {
            navHome: 'Accueil',
            navChat: 'Chat',
            navAbout: 'À propos',
            navRules: 'Règles',
            navFaq: 'FAQ',
            heroTitle: 'L’avenir de la conversation est ici',
            heroSubtitle: 'Avec PIMXCHAT, un assistant IA avancé, entrez dans un monde de possibilités infinies. Rapide, intelligent et toujours prêt à aider.',
            heroCta: 'Commencer le chat gratuit',
            featuresTitle: 'Fonctionnalités clés',
            featureSpeedTitle: 'Haute vitesse',
            featureSpeedDesc: 'Des réponses instantanées pour une conversation fluide.',
            featureMultiTitle: 'Multilingue',
            featureMultiDesc: 'Prise en charge de 11 langues pour une communication sans frontières.',
            featureSecurityTitle: 'Sécurité',
            featureSecurityDesc: 'Protection de votre vie privée grâce au chiffrement avancé des données.',
            howTitle: 'Comment ça marche ?',
            howStep1Title: '1. Sans inscription',
            howStep1Desc: 'Utilisez PIMXCHAT sans inscription.',
            howStep2Title: '2. Discussion',
            howStep2Desc: 'Posez vos questions et obtenez des réponses intelligentes.',
            howStep3Title: '3. Apprentissage',
            howStep3Desc: 'Développez vos connaissances et découvrez de nouvelles idées.',
            useCasesTitle: 'Cas d’utilisation',
            useCaseDevTitle: 'Développement logiciel',
            useCaseDevDesc: 'Écrivez du code optimisé, déboguez les erreurs et comprenez des algorithmes complexes.',
            useCaseContentTitle: 'Création de contenu',
            useCaseContentDesc: 'Créez du contenu créatif et engageant pour blogs, réseaux sociaux ou campagnes.',
            useCaseResearchTitle: 'Recherche & Apprentissage',
            useCaseResearchDesc: 'Apprenez rapidement de nouveaux concepts, obtenez des résumés et accédez à des sources fiables.',
            useCaseMarketingTitle: 'Marketing',
            useCaseMarketingDesc: 'Trouvez des idées pour des campagnes et écrivez des slogans accrocheurs.',
            useCaseEducationTitle: 'Éducation',
            useCaseEducationDesc: 'Préparez du matériel pédagogique structuré pour des présentations et conférences.',
            useCaseCommTitle: 'Communication',
            useCaseCommDesc: 'Rédigez des e-mails et des lettres professionnels et précis.',
            useCaseIdeaTitle: 'Idéation',
            useCaseIdeaDesc: 'Trouvez des idées innovantes pour vos projets.',
            useCaseTranslateTitle: 'Traduction',
            useCaseTranslateDesc: 'Traduisez vos textes en plusieurs langues avec précision et fluidité.',
            useCaseAssistantTitle: 'Assistant personnel',
            useCaseAssistantDesc: 'Gérez vos tâches quotidiennes, définissez des rappels et accédez rapidement aux informations nécessaires.',
            finalCtaTitle: 'Prêt à vivre le futur ?',
            finalCtaSubtitle: 'Rejoignez PIMXCHAT dès aujourd’hui et ressentez la puissance de l’IA.',
            finalCtaButton: 'Commencer',
            footerAboutTitle: 'À propos de PIMXCHAT',
            footerAboutDesc: 'PIMXCHAT est un assistant IA avancé conçu pour faciliter la communication et l’accès à l’information.',
            footerLinksTitle: 'Liens utiles',
            footerLinkAbout: 'À propos',
            footerLinkRules: 'Règles',
            footerLinkFaq: 'FAQ',
            footerLinkChat: 'Commencer le chat',
            footerContactTitle: 'Contactez-nous'
        },
        es: {
            navHome: 'Inicio',
            navChat: 'Chat',
            navAbout: 'Acerca de',
            navRules: 'Reglas',
            navFaq: 'Preguntas',
            heroTitle: 'El futuro de la conversación está aquí',
            heroSubtitle: 'Con PIMXCHAT, un asistente de IA avanzado, entra en un mundo de posibilidades infinitas. Rápido, inteligente y siempre listo para ayudar.',
            heroCta: 'Comenzar chat gratis',
            featuresTitle: 'Características Clave',
            featureSpeedTitle: 'Alta Velocidad',
            featureSpeedDesc: 'Respuestas instantáneas sin retrasos para una conversación fluida.',
            featureMultiTitle: 'Multilingüe',
            featureMultiDesc: 'Soporte para 11 idiomas del mundo para una comunicación sin fronteras.',
            featureSecurityTitle: 'Seguridad',
            featureSecurityDesc: 'Protegiendo tu privacidad con cifrado avanzado de datos.',
            howTitle: '¿Cómo funciona?',
            howStep1Title: '1. Sin registro',
            howStep1Desc: 'Utiliza PIMXCHAT sin registrarte.',
            howStep2Title: '2. Chatear',
            howStep2Desc: 'Haz tus preguntas y recibe respuestas inteligentes.',
            howStep3Title: '3. Aprender',
            howStep3Desc: 'Expande tu conocimiento y descubre nuevas ideas.',
            useCasesTitle: 'Casos de uso',
            useCaseDevTitle: 'Desarrollo de software',
            useCaseDevDesc: 'Escribe código optimizado, depura errores y entiende algoritmos complejos.',
            useCaseContentTitle: 'Creación de contenido',
            useCaseContentDesc: 'Crea contenido creativo y atractivo para blogs, redes sociales o campañas.',
            useCaseResearchTitle: 'Investigación y aprendizaje',
            useCaseResearchDesc: 'Aprende rápidamente nuevos conceptos, obtén resúmenes y accede a fuentes confiables.',
            useCaseMarketingTitle: 'Marketing',
            useCaseMarketingDesc: 'Encuentra ideas para campañas y escribe eslóganes llamativos.',
            useCaseEducationTitle: 'Educación',
            useCaseEducationDesc: 'Prepara material educativo estructurado para presentaciones y charlas.',
            useCaseCommTitle: 'Comunicación',
            useCaseCommDesc: 'Escribe correos y cartas profesionales y precisos.',
            useCaseIdeaTitle: 'Ideación',
            useCaseIdeaDesc: 'Encuentra ideas innovadoras para tus proyectos.',
            useCaseTranslateTitle: 'Traducción',
            useCaseTranslateDesc: 'Traduce tus textos a varios idiomas con precisión y fluidez.',
            useCaseAssistantTitle: 'Asistente personal',
            useCaseAssistantDesc: 'Gestiona tus tareas diarias, configura recordatorios y accede rápidamente a la información.',
            finalCtaTitle: '¿Listo para experimentar el futuro?',
            finalCtaSubtitle: 'Únete a PIMXCHAT hoy y siente el poder de la IA en tus manos.',
            finalCtaButton: 'Comenzar',
            footerAboutTitle: 'Acerca de PIMXCHAT',
            footerAboutDesc: 'PIMXCHAT es un asistente de IA avanzado diseñado para facilitar la comunicación y el acceso a la información.',
            footerLinksTitle: 'Enlaces útiles',
            footerLinkAbout: 'Acerca de',
            footerLinkRules: 'Reglas',
            footerLinkFaq: 'Preguntas',
            footerLinkChat: 'Iniciar chat',
            footerContactTitle: 'Contáctanos'
        },
        de: {
            navHome: 'Startseite',
            navChat: 'Chat',
            navAbout: 'Über uns',
            navRules: 'Regeln',
            navFaq: 'FAQ',
            heroTitle: 'Die Zukunft der Konversation ist da',
            heroSubtitle: 'Mit PIMXCHAT, einem fortschrittlichen KI-Assistenten, betreten Sie eine Welt unbegrenzter Möglichkeiten. Schnell, intelligent und immer hilfsbereit.',
            heroCta: 'Kostenlosen Chat starten',
            featuresTitle: 'Hauptfunktionen',
            featureSpeedTitle: 'Hohe Geschwindigkeit',
            featureSpeedDesc: 'Sofortige Antworten ohne Verzögerung für flüssige Gespräche.',
            featureMultiTitle: 'Mehrsprachig',
            featureMultiDesc: 'Unterstützung für 11 Sprachen der Welt für grenzenlose Kommunikation.',
            featureSecurityTitle: 'Sicherheit',
            featureSecurityDesc: 'Schutz Ihrer Privatsphäre durch fortschrittliche Datenverschlüsselung.',
            howTitle: 'Wie funktioniert es?',
            howStep1Title: '1. Keine Registrierung',
            howStep1Desc: 'Verwenden Sie PIMXCHAT ohne Registrierung.',
            howStep2Title: '2. Chatten',
            howStep2Desc: 'Stellen Sie Ihre Fragen und erhalten Sie intelligente Antworten.',
            howStep3Title: '3. Lernen',
            howStep3Desc: 'Erweitern Sie Ihr Wissen und entdecken Sie neue Ideen.',
            useCasesTitle: 'Anwendungsfälle',
            useCaseDevTitle: 'Softwareentwicklung',
            useCaseDevDesc: 'Schreiben Sie optimierten Code, debuggen Sie Fehler und verstehen Sie komplexe Algorithmen.',
            useCaseContentTitle: 'Content-Erstellung',
            useCaseContentDesc: 'Erstellen Sie kreative und ansprechende Inhalte für Blogs, soziale Medien oder Kampagnen.',
            useCaseResearchTitle: 'Forschung & Lernen',
            useCaseResearchDesc: 'Lernen Sie schnell neue Konzepte, erhalten Sie Zusammenfassungen und greifen Sie auf zuverlässige Quellen zu.',
            useCaseMarketingTitle: 'Marketing',
            useCaseMarketingDesc: 'Finden Sie neue Ideen für Kampagnen und schreiben Sie eingängige Slogans.',
            useCaseEducationTitle: 'Bildung',
            useCaseEducationDesc: 'Bereiten Sie strukturiertes Lehrmaterial für Präsentationen und Vorträge vor.',
            useCaseCommTitle: 'Kommunikation',
            useCaseCommDesc: 'Schreiben Sie professionelle und präzise E-Mails und Briefe.',
            useCaseIdeaTitle: 'Ideenfindung',
            useCaseIdeaDesc: 'Finden Sie innovative Ideen für Ihre Projekte.',
            useCaseTranslateTitle: 'Übersetzung',
            useCaseTranslateDesc: 'Übersetzen Sie Ihre Texte präzise und fließend in mehrere Sprachen.',
            useCaseAssistantTitle: 'Persönlicher Assistent',
            useCaseAssistantDesc: 'Verwalten Sie tägliche Aufgaben, richten Sie Erinnerungen ein und greifen Sie schnell auf benötigte Informationen zu.',
            finalCtaTitle: 'Bereit, die Zukunft zu erleben?',
            finalCtaSubtitle: 'Treten Sie PIMXCHAT noch heute bei und spüren Sie die Kraft der KI.',
            finalCtaButton: 'Loslegen',
            footerAboutTitle: 'Über PIMXCHAT',
            footerAboutDesc: 'PIMXCHAT ist ein fortschrittlicher KI-Assistent zur Erleichterung der Kommunikation und des Informationszugangs.',
            footerLinksTitle: 'Nützliche Links',
            footerLinkAbout: 'Über uns',
            footerLinkRules: 'Regeln',
            footerLinkFaq: 'FAQ',
            footerLinkChat: 'Chat starten',
            footerContactTitle: 'Kontakt'
        },
        ar: {
            navHome: 'الصفحة الرئيسية',
            navChat: 'الدردشة',
            navAbout: 'من نحن',
            navRules: 'القوانين',
            navFaq: 'الأسئلة الشائعة',
            heroTitle: 'مستقبل المحادثة هنا',
            heroSubtitle: 'مع PIMXCHAT، المساعد الذكي المتقدم، ادخل إلى عالم من الإمكانيات اللامحدودة. سريع وذكي ودائمًا جاهز للمساعدة.',
            heroCta: 'ابدأ الدردشة مجانًا',
            featuresTitle: 'الميزات الرئيسية',
            featureSpeedTitle: 'سرعة عالية',
            featureSpeedDesc: 'ردود فورية بدون تأخير لمحادثة سلسة.',
            featureMultiTitle: 'متعدد اللغات',
            featureMultiDesc: 'دعم 11 لغة للتواصل بدون حدود.',
            featureSecurityTitle: 'الأمان',
            featureSecurityDesc: 'حماية خصوصيتك بتشفير بيانات متقدم.',
            howTitle: 'كيف يعمل؟',
            howStep1Title: '1. بدون تسجيل',
            howStep1Desc: 'استخدم PIMXCHAT بدون تسجيل.',
            howStep2Title: '2. الدردشة',
            howStep2Desc: 'اطرح أسئلتك واحصل على إجابات ذكية.',
            howStep3Title: '3. التعلّم',
            howStep3Desc: 'وسّع معرفتك واكتشف أفكارًا جديدة.',
            useCasesTitle: 'مجالات الاستخدام',
            useCaseDevTitle: 'تطوير البرمجيات',
            useCaseDevDesc: 'اكتب كودًا محسنًا، صحّح الأخطاء وافهم الخوارزميات المعقدة.',
            useCaseContentTitle: 'إنشاء المحتوى',
            useCaseContentDesc: 'أنشئ محتوى إبداعيًا وجذابًا للمدونات ووسائل التواصل والحملات.',
            useCaseResearchTitle: 'البحث والتعلم',
            useCaseResearchDesc: 'تعلّم المفاهيم الجديدة بسرعة واحصل على ملخصات ووصول لمصادر موثوقة.',
            useCaseMarketingTitle: 'التسويق',
            useCaseMarketingDesc: 'اعثر على أفكار جديدة للحملات واكتب شعارات جذابة.',
            useCaseEducationTitle: 'التعليم',
            useCaseEducationDesc: 'حضّر مواد تعليمية منظمة للعرض والمحاضرات.',
            useCaseCommTitle: 'الاتصالات',
            useCaseCommDesc: 'اكتب رسائل بريدية وخطابات احترافية ودقيقة.',
            useCaseIdeaTitle: 'توليد الأفكار',
            useCaseIdeaDesc: 'اعثر على أفكار مبتكرة لمشاريعك.',
            useCaseTranslateTitle: 'الترجمة',
            useCaseTranslateDesc: 'ترجم نصوصك إلى عدة لغات بدقة وسلاسة.',
            useCaseAssistantTitle: 'مساعد شخصي',
            useCaseAssistantDesc: 'أدِر مهامك اليومية واضبط التذكيرات ووصل بسرعة إلى المعلومات المطلوبة.',
            finalCtaTitle: 'هل أنت مستعد لتجربة المستقبل؟',
            finalCtaSubtitle: 'انضم إلى PIMXCHAT اليوم واشعر بقوة الذكاء الاصطناعي.',
            finalCtaButton: 'ابدأ الآن',
            footerAboutTitle: 'حول PIMXCHAT',
            footerAboutDesc: 'PIMXCHAT هو مساعد ذكاء اصطناعي متقدم صُمم لتسهيل التواصل والوصول إلى المعلومات.',
            footerLinksTitle: 'روابط مفيدة',
            footerLinkAbout: 'من نحن',
            footerLinkRules: 'القوانين',
            footerLinkFaq: 'الأسئلة الشائعة',
            footerLinkChat: 'بدء الدردشة',
            footerContactTitle: 'اتصل بنا'
        },
        it: {
            navHome: 'Home',
            navChat: 'Chat',
            navAbout: 'Chi siamo',
            navRules: 'Regole',
            navFaq: 'FAQ',
            heroTitle: 'Il futuro della conversazione è qui',
            heroSubtitle: 'Con PIMXCHAT, un assistente IA avanzato, entra in un mondo di possibilità infinite. Veloce, intelligente e sempre pronto ad aiutare.',
            heroCta: 'Inizia chat gratis',
            featuresTitle: 'Funzionalità principali',
            featureSpeedTitle: 'Alta velocità',
            featureSpeedDesc: 'Risposte istantanee senza ritardi per conversazioni fluide.',
            featureMultiTitle: 'Multilingue',
            featureMultiDesc: 'Supporto per 11 lingue per una comunicazione senza confini.',
            featureSecurityTitle: 'Sicurezza',
            featureSecurityDesc: 'Protezione della privacy con crittografia avanzata dei dati.',
            howTitle: 'Come funziona?',
            howStep1Title: '1. Nessuna registrazione',
            howStep1Desc: 'Usa PIMXCHAT senza registrarti.',
            howStep2Title: '2. Chat',
            howStep2Desc: 'Fai domande e ricevi risposte intelligenti.',
            howStep3Title: '3. Impara',
            howStep3Desc: 'Espandi la tua conoscenza e scopri nuove idee.',
            useCasesTitle: 'Casi d’uso',
            useCaseDevTitle: 'Sviluppo software',
            useCaseDevDesc: 'Scrivi codice ottimizzato, correggi errori e comprendi algoritmi complessi.',
            useCaseContentTitle: 'Creazione di contenuti',
            useCaseContentDesc: 'Crea contenuti creativi e coinvolgenti per blog, social o campagne.',
            useCaseResearchTitle: 'Ricerca e apprendimento',
            useCaseResearchDesc: 'Impara rapidamente nuovi concetti, ottieni riassunti e accedi a fonti affidabili.',
            useCaseMarketingTitle: 'Marketing',
            useCaseMarketingDesc: 'Trova nuove idee per campagne e scrivi slogan accattivanti.',
            useCaseEducationTitle: 'Istruzione',
            useCaseEducationDesc: 'Prepara materiale didattico strutturato per presentazioni e conferenze.',
            useCaseCommTitle: 'Comunicazione',
            useCaseCommDesc: 'Scrivi e-mail e lettere professionali e precise.',
            useCaseIdeaTitle: 'Ideazione',
            useCaseIdeaDesc: 'Trova idee innovative per i tuoi progetti.',
            useCaseTranslateTitle: 'Traduzione',
            useCaseTranslateDesc: 'Traduci i tuoi testi in più lingue con precisione e fluidità.',
            useCaseAssistantTitle: 'Assistente personale',
            useCaseAssistantDesc: 'Gestisci le attività quotidiane, imposta promemoria e accedi rapidamente alle informazioni necessarie.',
            finalCtaTitle: 'Pronto a vivere il futuro?',
            finalCtaSubtitle: 'Unisciti a PIMXCHAT oggi e senti la potenza dell’IA a portata di mano.',
            finalCtaButton: 'Inizia',
            footerAboutTitle: 'Informazioni su PIMXCHAT',
            footerAboutDesc: 'PIMXCHAT è un assistente IA avanzato progettato per facilitare la comunicazione e l’accesso alle informazioni.',
            footerLinksTitle: 'Link utili',
            footerLinkAbout: 'Chi siamo',
            footerLinkRules: 'Regole',
            footerLinkFaq: 'FAQ',
            footerLinkChat: 'Inizia chat',
            footerContactTitle: 'Contattaci'
        },
        ru: {
            navHome: 'Главная',
            navChat: 'Чат',
            navAbout: 'О нас',
            navRules: 'Правила',
            navFaq: 'Вопросы и ответы',
            heroTitle: 'Будущее общения уже здесь',
            heroSubtitle: 'С PIMXCHAT, продвинутым ИИ-ассистентом, окунитесь в мир безграничных возможностей. Быстрый, умный и всегда готов помочь.',
            heroCta: 'Начать бесплатный чат',
            featuresTitle: 'Ключевые возможности',
            featureSpeedTitle: 'Высокая скорость',
            featureSpeedDesc: 'Мгновенные ответы без задержек для плавного общения.',
            featureMultiTitle: 'Мультиязычность',
            featureMultiDesc: 'Поддержка 11 языков мира для общения без границ.',
            featureSecurityTitle: 'Безопасность',
            featureSecurityDesc: 'Защита вашей конфиденциальности благодаря продвинутому шифрованию данных.',
            howTitle: 'Как это работает?',
            howStep1Title: '1. Без регистрации',
            howStep1Desc: 'Используйте PIMXCHAT без регистрации.',
            howStep2Title: '2. Общение',
            howStep2Desc: 'Задавайте вопросы и получайте умные ответы.',
            howStep3Title: '3. Обучение',
            howStep3Desc: 'Расширяйте знания и открывайте новые идеи.',
            useCasesTitle: 'Сферы применения',
            useCaseDevTitle: 'Разработка ПО',
            useCaseDevDesc: 'Пишите оптимизированный код, исправляйте ошибки и понимаете сложные алгоритмы.',
            useCaseContentTitle: 'Создание контента',
            useCaseContentDesc: 'Создавайте креативный и увлекательный контент для блогов, соцсетей и кампаний.',
            useCaseResearchTitle: 'Исследования и обучение',
            useCaseResearchDesc: 'Быстро изучайте новые концепции, получайте краткие обзоры и обращайтесь к надежным источникам.',
            useCaseMarketingTitle: 'Маркетинг',
            useCaseMarketingDesc: 'Находите новые идеи для кампаний и пишите запоминающиеся слоганы.',
            useCaseEducationTitle: 'Образование',
            useCaseEducationDesc: 'Готовьте структурированные учебные материалы для презентаций и лекций.',
            useCaseCommTitle: 'Коммуникация',
            useCaseCommDesc: 'Пишите профессиональные и точные письма.',
            useCaseIdeaTitle: 'Генерация идей',
            useCaseIdeaDesc: 'Находите инновационные идеи для ваших проектов.',
            useCaseTranslateTitle: 'Перевод',
            useCaseTranslateDesc: 'Переводите тексты на разные языки точно и бегло.',
            useCaseAssistantTitle: 'Личный помощник',
            useCaseAssistantDesc: 'Управляйте повседневными задачами, устанавливайте напоминания и быстро получайте нужную информацию.',
            finalCtaTitle: 'Готовы ощутить будущее?',
            finalCtaSubtitle: 'Присоединяйтесь к PIMXCHAT уже сегодня и ощутите силу ИИ.',
            finalCtaButton: 'Начать',
            footerAboutTitle: 'О PIMXCHAT',
            footerAboutDesc: 'PIMXCHAT — продвинутый ИИ-ассистент, созданный для упрощения общения и доступа к информации.',
            footerLinksTitle: 'Полезные ссылки',
            footerLinkAbout: 'О нас',
            footerLinkRules: 'Правила',
            footerLinkFaq: 'FAQ',
            footerLinkChat: 'Начать чат',
            footerContactTitle: 'Связаться с нами'
        }
    };

    function getUILang() {
        return document.documentElement.getAttribute('lang') || localStorage.getItem('pimxchat_ui_lang') || 'fa';
    }

    function ht(key) {
        const lang = getUILang();
        return (homeTranslations[lang] && homeTranslations[lang][key]) || (homeTranslations.fa && homeTranslations.fa[key]) || '';
    }

    // Footer bottom translations (applies across pages)
    const footerBottomText = {
        fa: '© 2025 PIMXCHAT. ساخته شده توسط محمدرضا عابدین پور تمام حقوق محفوظ است.',
        en: '© 2025 PIMXCHAT. Built by Mohammadreza Abedinpoor. All rights reserved.',
        fr: '© 2025 PIMXCHAT. Réalisé par Mohammadreza Abedinpoor. Tous droits réservés.',
        es: '© 2025 PIMXCHAT. Desarrollado por Mohammadreza Abedinpoor. Todos los derechos reservados.',
        de: '© 2025 PIMXCHAT. Erstellt von Mohammadreza Abedinpoor. Alle Rechte vorbehalten.',
        ar: '© 2025 PIMXCHAT. تم تطويره بواسطة محمدرضا عابدين بور. جميع الحقوق محفوظة.',
        it: '© 2025 PIMXCHAT. Realizzato da Mohammadreza Abedinpoor. Tutti i diritti riservati.',
        ru: '© 2025 PIMXCHAT. Создано Мохаммадрезой Абединпур. Все права защищены.'
    };

    function applyHomeTranslations() {
        // Only run on index.html where expected elements exist
        // Navbar links
        const navLinks = document.querySelectorAll('.nav-links li a');
        if (navLinks && navLinks.length >= 5) {
            navLinks[0].textContent = ht('navHome');
            navLinks[1].textContent = ht('navChat');
            navLinks[2].textContent = ht('navAbout');
            navLinks[3].textContent = ht('navRules');
            navLinks[4].textContent = ht('navFaq');
        }

        // Hero
        const heroTitle = document.querySelector('.hero-text h1');
        const heroSubtitle = document.querySelector('.hero-text p');
        const heroCta = document.querySelector('.hero-text .cta-button');
        if (heroTitle) heroTitle.textContent = ht('heroTitle');
        if (heroSubtitle) heroSubtitle.textContent = ht('heroSubtitle');
        if (heroCta) heroCta.textContent = ht('heroCta');

        // Features section
        const featuresTitle = document.querySelector('.features .section-title');
        if (featuresTitle) featuresTitle.textContent = ht('featuresTitle');
        const featureCards = document.querySelectorAll('.features .feature-cards .card');
        if (featureCards && featureCards.length >= 3) {
            const [card1, card2, card3] = featureCards;
            const c1h = card1.querySelector('h3'); const c1p = card1.querySelector('p');
            const c2h = card2.querySelector('h3'); const c2p = card2.querySelector('p');
            const c3h = card3.querySelector('h3'); const c3p = card3.querySelector('p');
            if (c1h) c1h.textContent = ht('featureSpeedTitle');
            if (c1p) c1p.textContent = ht('featureSpeedDesc');
            if (c2h) c2h.textContent = ht('featureMultiTitle');
            if (c2p) c2p.textContent = ht('featureMultiDesc');
            if (c3h) c3h.textContent = ht('featureSecurityTitle');
            if (c3p) c3p.textContent = ht('featureSecurityDesc');
        }

        // How it works
        const howTitle = document.querySelector('.how-it-works .section-title');
        if (howTitle) howTitle.textContent = ht('howTitle');
        const roadmapItems = document.querySelectorAll('.how-it-works .roadmap-item');
        if (roadmapItems && roadmapItems.length >= 3) {
            const [r1, r2, r3] = roadmapItems;
            const r1h = r1.querySelector('h3'); const r1p = r1.querySelector('p');
            const r2h = r2.querySelector('h3'); const r2p = r2.querySelector('p');
            const r3h = r3.querySelector('h3'); const r3p = r3.querySelector('p');
            if (r1h) r1h.textContent = ht('howStep1Title');
            if (r1p) r1p.textContent = ht('howStep1Desc');
            if (r2h) r2h.textContent = ht('howStep2Title');
            if (r2p) r2p.textContent = ht('howStep2Desc');
            if (r3h) r3h.textContent = ht('howStep3Title');
            if (r3p) r3p.textContent = ht('howStep3Desc');
        }

        // Use cases
        const useCasesTitle = document.querySelector('.use-cases .section-title');
        if (useCasesTitle) useCasesTitle.textContent = ht('useCasesTitle');
        const useCards = document.querySelectorAll('.use-cases .use-case-card');
        if (useCards && useCards.length >= 9) {
            const keys = [
                ['useCaseDevTitle','useCaseDevDesc'],
                ['useCaseContentTitle','useCaseContentDesc'],
                ['useCaseResearchTitle','useCaseResearchDesc'],
                ['useCaseMarketingTitle','useCaseMarketingDesc'],
                ['useCaseEducationTitle','useCaseEducationDesc'],
                ['useCaseCommTitle','useCaseCommDesc'],
                ['useCaseIdeaTitle','useCaseIdeaDesc'],
                ['useCaseTranslateTitle','useCaseTranslateDesc'],
                ['useCaseAssistantTitle','useCaseAssistantDesc']
            ];
            useCards.forEach((card, i) => {
                const h = card.querySelector('h4');
                const p = card.querySelector('p');
                if (h) h.textContent = ht(keys[i][0]);
                if (p) p.textContent = ht(keys[i][1]);
            });
        }

        // Final CTA
        const finalTitle = document.querySelector('.final-cta h2');
        const finalSubtitle = document.querySelector('.final-cta p');
        const finalBtn = document.querySelector('.final-cta .cta-button');
        if (finalTitle) finalTitle.textContent = ht('finalCtaTitle');
        if (finalSubtitle) finalSubtitle.textContent = ht('finalCtaSubtitle');
        if (finalBtn) finalBtn.textContent = ht('finalCtaButton');

        // Footer
        const footerAboutTitle = document.querySelector('.footer-section.about h3');
        const footerAboutDesc = document.querySelector('.footer-section.about p');
        const footerLinksTitle = document.querySelector('.footer-section.links h3');
        const footerContactTitle = document.querySelector('.footer-section.contact h3');
        if (footerAboutTitle) footerAboutTitle.textContent = ht('footerAboutTitle');
        if (footerAboutDesc) footerAboutDesc.textContent = ht('footerAboutDesc');
        if (footerLinksTitle) footerLinksTitle.textContent = ht('footerLinksTitle');
        if (footerContactTitle) footerContactTitle.textContent = ht('footerContactTitle');
        const footerLinks = document.querySelectorAll('.footer-section.links ul li a');
        if (footerLinks && footerLinks.length >= 4) {
            footerLinks[0].textContent = ht('footerLinkAbout');
            footerLinks[1].textContent = ht('footerLinkRules');
            footerLinks[2].textContent = ht('footerLinkFaq');
            footerLinks[3].textContent = ht('footerLinkChat');
        }
        // Footer bottom line
        const footerBottom = document.querySelector('.footer-bottom p');
        if (footerBottom) {
            const lang = getUILang();
            footerBottom.textContent = footerBottomText[lang] || footerBottomText.fa;
        }
    }
    // ---=== Page Loader ===---
    setTimeout(() => {
        const loader = document.getElementById('loader-wrapper');
        const content = document.querySelector('.container');
        
        if (loader) {
            loader.style.display = 'none';
        }
        if (content) {
            content.style.display = 'block';
            document.body.classList.add('body-fade-in');
            updateParticleColors();
        }
    }, 2000);

    window.myParticleInstances = []; // Initialize custom global array
    // ---=== Theme Switcher ===---
    const themeSwitcherContainers = document.querySelectorAll('.theme-switcher');
    console.log('main.js: themeSwitcherContainers found:', themeSwitcherContainers.length);
    const html = document.documentElement;

    const updateParticleColors = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const particleColor = currentTheme === 'light' ? '#000000' : '#ffffff'; // Black for light, white for dark
            console.log('updateParticleColors: particleColor', particleColor);

            // Destroy existing instances if they exist
            if (window.myParticleInstances && window.myParticleInstances.length > 0) {
                window.myParticleInstances.forEach(pJSInstance => {
                    if (pJSInstance && pJSInstance.pJS && pJSInstance.pJS.fn && pJSInstance.pJS.fn.vendors && pJSInstance.pJS.fn.vendors.destroypJS) {
                        pJSInstance.pJS.fn.vendors.destroypJS();
                    }
                });
                window.myParticleInstances = []; // Clear the array
            }

            // Re-initialize particles only if their containers exist
            if (document.getElementById('particles-js-2')) {
                const pJS2 = particlesJS('particles-js-2', {
                    "particles": {
                        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                        "color": { "value": particleColor },
                        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } },
                        "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
                        "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
                        "line_linked": { "enable": true, "distance": 150, "color": particleColor, "opacity": 0.4, "width": 1 },
                        "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                        "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
                    },
                    "retina_detect": true
                });
                window.myParticleInstances.push(pJS2);
            }

            if (document.getElementById('particles-js-3')) {
                const pJS3 = particlesJS('particles-js-3', {
                    "particles": {
                        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                        "color": { "value": particleColor },
                        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } },
                        "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
                        "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
                        "line_linked": { "enable": true, "distance": 150, "color": particleColor, "opacity": 0.4, "width": 1 },
                        "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                        "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
                    },
                    "retina_detect": true
                });
                window.myParticleInstances.push(pJS3);
            }

            // Re-initialize particles-js-rules
            if (document.getElementById('particles-js-rules')) {
                const particlesRulesContainer = document.getElementById('particles-js-rules');
                particlesRulesContainer.innerHTML = '';

                const pJSRules = particlesJS('particles-js-rules', {
                    "particles": {
                        "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
                        "color": { "value": particleColor },
                        "shape": { "type": "edge" },
                        "opacity": { "value": 0.5, "random": true },
                        "size": { "value": 4, "random": true },
                        "line_linked": { "enable": true, "distance": 150, "color": particleColor, "opacity": 0.4, "width": 1 },
                        "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                        "modes": {
                            "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
                            "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
                            "repulse": { "distance": 200, "duration": 0.4 },
                            "push": { "particles_nb": 4 },
                            "remove": { "particles_nb": 2 }
                        }
                    },
                    "retina_detect": true
                });
                window.myParticleInstances.push(pJSRules);
            }

            // Re-initialize particles-js-about
            if (document.getElementById('particles-js-about')) {
                // Clear the inner HTML of the container to ensure a clean re-initialization
                const particlesAboutContainer = document.getElementById('particles-js-about');
                particlesAboutContainer.innerHTML = '';

                const pJSAbout = particlesJS('particles-js-about', {
                    "particles": {
                        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                        "color": { "value": particleColor },
                        "shape": { "type": "circle" },
                        "opacity": { "value": 0.5, "random": true },
                        "size": { "value": 5, "random": true },
                        "line_linked": { "enable": false },
                        "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true }
                    },
                    "retina_detect": true
                });
                window.myParticleInstances.push(pJSAbout);
            }

            // Re-initialize particles-js-faq
            if (document.getElementById('particles-js-faq')) {
                const particlesFaqContainer = document.getElementById('particles-js-faq');
                particlesFaqContainer.innerHTML = '';

                const pJSFaq = particlesJS('particles-js-faq', {
                    "particles": {
                        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                        "color": { "value": particleColor },
                        "shape": { "type": "circle" },
                        "opacity": { "value": 0.5, "random": true },
                        "size": { "value": 5, "random": true },
                        "line_linked": { "enable": false },
                        "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true }
                    },
                    "retina_detect": true
                });
                window.myParticleInstances.push(pJSFaq);
            }
    };

    const applyTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        themeSwitcherContainers.forEach(container => {
            const button = container.querySelector('button');
            if (button) {
                if (theme === 'dark') button.innerText = '☀️';
                else if (theme === 'light') button.innerText = '🌓';
                else button.innerText = '🖥️';
            }
        });
        updateParticleColors();
        // Dispatch theme change event
        const event = new Event('themeChanged');
        document.dispatchEvent(event);
    };

    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return 'system';
    };

    // System time-based theming
    function computeSystemTimeTheme() {
        const hour = new Date().getHours();
        // Day: 7-18 -> light, Night: others -> dark
        return (hour >= 7 && hour < 18) ? 'light' : 'dark';
    }

    let currentTheme = getInitialTheme();
    // Force only light/dark at startup to avoid 3-state cycle inconsistency
    if (currentTheme === 'system') {
        currentTheme = computeSystemTimeTheme();
    }
    applyTheme(currentTheme);

    // System timer no longer used since we removed 'system' mode from toggle
    let systemTimer = null;
    function ensureSystemTimer() { /* no-op retained for compatibility */ }

    themeSwitcherContainers.forEach(container => {
        // Avoid adding duplicate buttons
        if (!container.querySelector('button')) {
            const themeToggleButton = document.createElement('button');
            themeToggleButton.setAttribute('aria-label', 'Toggle theme');
            themeToggleButton.innerText = currentTheme === 'system' ? '🖥️' : (currentTheme === 'dark' ? '☀️' : '🌓');
            container.appendChild(themeToggleButton);
            console.log('main.js: Theme toggle button created and appended.');

            themeToggleButton.addEventListener('click', () => {
                console.log('main.js: Theme toggle button clicked!');
                const effectiveTheme = currentTheme === 'system' ? computeSystemTimeTheme() : currentTheme;
                currentTheme = effectiveTheme === 'light' ? 'dark' : 'light';
                try { localStorage.setItem('theme', currentTheme); } catch {}
                if (systemTimer) { clearInterval(systemTimer); systemTimer = null; }
                applyTheme(currentTheme);
            });
        }
    });

    // When in system mode, also react to OS scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('theme') === 'system') {
            applyTheme(computeSystemTimeTheme());
        }
    });

    // ---=== Hamburger Menu ===---
    function initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (!hamburger || !navMenu) return;

        // Remove existing event listeners
        const newHamburger = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);

        function toggleMenu(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            newHamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // For debugging
            console.log('Menu visibility:', getComputedStyle(navMenu).visibility);
            console.log('Menu transform:', getComputedStyle(navMenu).transform);
            console.log('Menu classes:', navMenu.className);
        }

        // Toggle menu on hamburger click
        newHamburger.addEventListener('click', toggleMenu);

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !newHamburger.contains(e.target)) {
                toggleMenu();
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        // Handle resize events
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                newHamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Initialize mobile menu after ensuring theme is applied
    initMobileMenu();

    // Apply home translations initially and on language change
    applyHomeTranslations();
    document.addEventListener('languageChanged', applyHomeTranslations);

    

    // ---=== Language Switcher ===---
    const languageButtons = document.querySelectorAll('.language-button');
    const languageDropdowns = document.querySelectorAll('.language-dropdown');

    // Helper to update header language button label (avoid chat globe button)
    function updateHeaderLanguageButtonsLabel() {
        const currentLang = document.documentElement.getAttribute('lang') || 'fa';
        languageButtons.forEach((button) => {
            if (button.closest('.chat-lang-switcher')) return; // keep globe in chat sidebar
            // Preserve chevron icon
            button.innerHTML = `${currentLang.toUpperCase()} <i class="fas fa-chevron-down"></i>`;
        });
    }
    updateHeaderLanguageButtonsLabel();

    // Desktop: open on hover; Mobile: toggle on click
    languageButtons.forEach((button, index) => {
        const dropdown = languageDropdowns[index];
        if (!button || !dropdown) return;
        const wrapper = button.closest('.chat-lang-switcher') || button.parentElement;

        const isTouch = () => window.matchMedia('(hover: none)').matches;

        function attachDesktopHover() {
            if (!wrapper) return;
            wrapper.addEventListener('mouseenter', () => wrapper.classList.add('open'));
            wrapper.addEventListener('mouseleave', () => wrapper.classList.remove('open'));
        }
        function attachMobileClick() {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                wrapper.classList.toggle('open');
            });
        }

        if (isTouch()) attachMobileClick(); else attachDesktopHover();

        // Reconfigure on resize (switching between hover/click)
        window.addEventListener('resize', () => {
            wrapper.classList.remove('open');
        });
    });

    // Close dropdown if clicked outside and handle selection
    document.addEventListener('click', (e) => {
        languageDropdowns.forEach((dropdown, index) => {
            const button = languageButtons[index];
            if (!button || !dropdown) return;
            const clickedItem = e.target.closest('.language-dropdown li');
            if (clickedItem && dropdown.contains(clickedItem)) {
                const lang = clickedItem.getAttribute('data-lang');
                try { localStorage.setItem('pimxchat_ui_lang', lang); } catch {}
                if (lang === 'fa' || lang === 'ar') {
                    document.documentElement.setAttribute('dir', 'rtl');
                    document.documentElement.setAttribute('lang', lang);
                } else {
                    document.documentElement.setAttribute('dir', 'ltr');
                    document.documentElement.setAttribute('lang', lang);
                }
                // Update header language button label to reflect selection
                updateHeaderLanguageButtonsLabel();
                // Notify pages to re-apply translations
                document.dispatchEvent(new Event('languageChanged'));
            }
            if (button && !button.contains(e.target) && !dropdown.contains(e.target)) {
                const wrapper = button.closest('.chat-lang-switcher') || button.parentElement;
                if (wrapper) wrapper.classList.remove('open');
            }
        });
    });


    // ---=== Scroll-based Animations ===---
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    

    

}

// Call initPage when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', window.initPage);
