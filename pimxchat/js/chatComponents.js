document.addEventListener('DOMContentLoaded', () => {
    // Create and add simple footer
    const footer = document.createElement('footer');
    footer.style.cssText = 'position: fixed; bottom: 0; width: 100%; text-align: center; padding: 1rem; background: var(--background-color); border-top: 1px solid var(--border-color);';
    footer.innerHTML = 'PIMXCHAT';
    document.body.appendChild(footer);

    // Get original page content
    const pageContent = document.querySelector('#about-page-content')?.innerHTML;
    const pageScripts = Array.from(document.querySelectorAll('body > script'));
    const originalStylesheets = Array.from(document.querySelectorAll('head link[rel="stylesheet"]'));

    if (pageContent) {
        const mainContentDiv = document.querySelector('#main-content');
        if (mainContentDiv) {
            mainContentDiv.innerHTML = pageContent;
        }
    }

    // Re-add scripts
    pageScripts.forEach(oldScript => {
        if (!oldScript.src || (!oldScript.src.includes('loadComponents.js') && !oldScript.src.includes('chatComponents.js'))) {
            const newScript = document.createElement('script');
            if (oldScript.src) {
                newScript.src = oldScript.src;
            } else {
                newScript.textContent = oldScript.textContent;
            }
            document.body.appendChild(newScript);
        }
    });
});
