(function() {
    const aboutTranslations = {
        fa: {
            heroTitle: 'ما PIMXCHAT هستیم',
            heroSubtitle: 'ما به قدرت هوش مصنوعی برای تغییر جهان ایمان داریم.',
            storyTitle: 'داستان ما',
            storyText: 'داستان PIMXCHAT از یک سوال ساده آغاز شد: چگونه می‌توانیم هوش مصنوعی را برای همه قابل دسترس و مفید کنیم؟ این سوال ما را به سفری پر از چالش و هیجان برد. ما با تیمی کوچک اما مصمم، کار خود را آغاز کردیم و با تکیه بر دانش و تجربه خود، موفق به ساخت دستیار هوش مصنوعی شدیم که نه تنها هوشمند است، بلکه به زبان فارسی نیز مسلط است. امروز، ما با افتخار به گذشته خود نگاه می‌کنیم و با اشتیاق به آینده‌ای روشن‌تر می‌نگریم.',
            teamTitle: 'تیم ما',
            teamMember1: 'محمدرضا عابدین پور',
            teamMember1Role: 'بنیان‌گذار و مدیرعامل',
            teamMember2: 'تیم فنی',
            teamMember2Role: 'متخصصان هوش مصنوعی و توسعه نرم‌افزار',
            teamMember3: 'تیم پشتیبانی',
            teamMember3Role: 'همیشه آماده پاسخگویی به سوالات شما',
            missionTitle: 'ماموریت ما',
            missionText: 'ماموریت ما این است که با ارائه ابزارهای هوشمند و خلاقانه، به افراد و سازمان‌ها کمک کنیم تا به پتانسیل کامل خود دست یابند. ما می‌خواهیم با استفاده از هوش مصنوعی، کارهای روزمره را ساده‌تر و لذت‌بخش‌تر کنیم.',
            visionTitle: 'چشم‌انداز ما',
            visionText: 'چشم‌انداز ما، ساخت آینده‌ای است که در آن هوش مصنوعی به عنوان یک شریک قابل اعتماد و یک منبع الهام‌بخش، در کنار انسان‌ها قرار گیرد. ما به دنبال ایجاد دنیایی هستیم که در آن فناوری به نفع همه بشریت باشد.',
            valuesTitle: 'ارزش‌های ما',
            value1Title: 'نوآوری',
            value1Text: 'ما همیشه به دنبال راه‌های جدید و بهتر برای حل مشکلات هستیم.',
            value2Title: 'کاربر محوری',
            value2Text: 'نیازها و تجربیات کاربران ما در مرکز تمام فعالیت‌های ما قرار دارد.',
            value3Title: 'امنیت و حریم خصوصی',
            value3Text: 'ما به حفظ امنیت و حریم خصوصی کاربران خود متعهد هستیم.'
        },
        en: {
            heroTitle: 'We are PIMXCHAT',
            heroSubtitle: 'We believe in the power of AI to change the world.',
            storyTitle: 'Our Story',
            storyText: 'PIMXCHAT began with a simple question: how can we make AI accessible and useful for everyone? This question led us on a journey filled with challenges and excitement. We started with a small but determined team and, by leveraging our knowledge and experience, created an AI assistant that is not only intelligent but also fluent in Persian. Today, we proudly look back at our past and eagerly look forward to a brighter future.',
            teamTitle: 'Our Team',
            teamMember1: 'Mohammadreza Abedinpoor',
            teamMember1Role: 'Founder & CEO',
            teamMember2: 'Engineering Team',
            teamMember2Role: 'AI and Software Engineering Specialists',
            teamMember3: 'Support Team',
            teamMember3Role: 'Always ready to answer your questions',
            missionTitle: 'Our Mission',
            missionText: 'Our mission is to help individuals and organizations reach their full potential by providing smart and innovative tools. We aim to make everyday tasks simpler and more enjoyable through AI.',
            visionTitle: 'Our Vision',
            visionText: 'Our vision is to build a future where AI stands as a trusted partner and a source of inspiration alongside humans. We strive to create a world where technology benefits all humanity.',
            valuesTitle: 'Our Values',
            value1Title: 'Innovation',
            value1Text: 'We always seek new and better ways to solve problems.',
            value2Title: 'User-Centric',
            value2Text: 'User needs and experiences are at the heart of everything we do.',
            value3Title: 'Security & Privacy',
            value3Text: 'We are committed to safeguarding our users’ security and privacy.'
        }
    };

    function getUILang() {
        return document.documentElement.getAttribute('lang') || localStorage.getItem('pimxchat_ui_lang') || 'fa';
    }

    function at(key) {
        const lang = getUILang();
        return (aboutTranslations[lang] && aboutTranslations[lang][key]) || (aboutTranslations.fa && aboutTranslations.fa[key]) || '';
    }

    function applyAboutTranslations() {
        const heroTitle = document.querySelector('.about-hero-content h1');
        const heroSubtitle = document.querySelector('.about-hero-content p');
        if (heroTitle) heroTitle.textContent = at('heroTitle');
        if (heroSubtitle) heroSubtitle.textContent = at('heroSubtitle');

        const storyTitle = document.querySelector('.story-section .section-title');
        const storyText = document.querySelector('.story-section p');
        if (storyTitle) storyTitle.textContent = at('storyTitle');
        if (storyText) storyText.textContent = at('storyText');

        const teamTitle = document.querySelector('section.features .section-title');
        if (teamTitle) teamTitle.textContent = at('teamTitle');
        const teamCards = document.querySelectorAll('.team-card');
        if (teamCards && teamCards.length >= 3) {
            const [c1, c2, c3] = teamCards;
            const c1h = c1.querySelector('h3'); const c1p = c1.querySelector('p');
            const c2h = c2.querySelector('h3'); const c2p = c2.querySelector('p');
            const c3h = c3.querySelector('h3'); const c3p = c3.querySelector('p');
            if (c1h) c1h.textContent = at('teamMember1');
            if (c1p) c1p.textContent = at('teamMember1Role');
            if (c2h) c2h.textContent = at('teamMember2');
            if (c2p) c2p.textContent = at('teamMember2Role');
            if (c3h) c3h.textContent = at('teamMember3');
            if (c3p) c3p.textContent = at('teamMember3Role');
        }

        const missionVisionItems = document.querySelectorAll('.mission-vision-item');
        if (missionVisionItems && missionVisionItems.length >= 2) {
            const [m, v] = missionVisionItems;
            const mh = m.querySelector('h2'); const mp = m.querySelector('p');
            const vh = v.querySelector('h2'); const vp = v.querySelector('p');
            if (mh) mh.textContent = at('missionTitle');
            if (mp) mp.textContent = at('missionText');
            if (vh) vh.textContent = at('visionTitle');
            if (vp) vp.textContent = at('visionText');
        }

        const valuesSectionTitle = document.querySelector('.mission-vision-values-section .features .section-title');
        if (valuesSectionTitle) valuesSectionTitle.textContent = at('valuesTitle');
        const valueCards = document.querySelectorAll('.mission-vision-values-section .feature-cards .card');
        if (valueCards && valueCards.length >= 3) {
            const [v1, v2, v3] = valueCards;
            const v1h = v1.querySelector('h3'); const v1p = v1.querySelector('p');
            const v2h = v2.querySelector('h3'); const v2p = v2.querySelector('p');
            const v3h = v3.querySelector('h3'); const v3p = v3.querySelector('p');
            if (v1h) v1h.textContent = at('value1Title');
            if (v1p) v1p.textContent = at('value1Text');
            if (v2h) v2h.textContent = at('value2Title');
            if (v2p) v2p.textContent = at('value2Text');
            if (v3h) v3h.textContent = at('value3Title');
            if (v3p) v3p.textContent = at('value3Text');
        }
    }

    document.addEventListener('DOMContentLoaded', applyAboutTranslations);
    document.addEventListener('languageChanged', applyAboutTranslations);
})();