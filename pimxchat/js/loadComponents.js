document.addEventListener('DOMContentLoaded', () => {
    console.log('loadComponents.js: DOMContentLoaded');
        const pageContent = document.querySelector('#page-content')?.innerHTML;
    const pageScripts = Array.from(document.querySelectorAll('body > script'));
    // Capture original stylesheets before DOM manipulation
    const originalStylesheets = Array.from(document.querySelectorAll('head link[rel="stylesheet"]'));

    console.log('loadComponents.js: pageContent captured:', pageContent ? 'Yes' : 'No');

    fetch('base.html')
        .then(response => {
            console.log('loadComponents.js: fetch response status:', response.status);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log('loadComponents.js: fetch successful, data received.');
            const parser = new DOMParser();
            const baseDoc = parser.parseFromString(data, 'text/html');
            
            // Add stylesheets from base.html to the main document's head
            const baseStylesheets = Array.from(baseDoc.head.querySelectorAll('link[rel="stylesheet"]'));
            baseStylesheets.forEach(baseLink => {
                const newLink = document.createElement('link');
                newLink.rel = 'stylesheet';
                newLink.href = baseLink.href;
                document.head.appendChild(newLink);
            });
            console.log('loadComponents.js: base.html stylesheets re-added.');

            const baseHeader = baseDoc.querySelector('header');
            const baseMain = baseDoc.querySelector('main');
            const baseFooter = baseDoc.querySelector('footer');

            const containerDiv = document.querySelector('.container'); // Get the existing container div in about.html

            // Remove existing content within the container to replace with base.html structure
            if (containerDiv) {
                containerDiv.innerHTML = ''; // Clear only the container, not the whole body
            }

            // Append header, main, and footer from base.html into the container
            if (baseHeader && containerDiv) {
                containerDiv.appendChild(baseHeader);
                console.log('loadComponents.js: Header injected.');
            }
            if (baseMain && containerDiv) {
                containerDiv.appendChild(baseMain);
                console.log('loadComponents.js: Main injected.');
            }
            if (baseFooter && containerDiv) {
                containerDiv.appendChild(baseFooter);
                console.log('loadComponents.js: Footer injected.');
            }

            

            

            // Inject main content from about.html into #main-content of base.html structure
            let mainContentInBase = null;
            if (containerDiv) {
                mainContentInBase = containerDiv.querySelector('#main-content');
                console.log('loadComponents.js: Found #main-content inside containerDiv:', !!mainContentInBase);
            } else {
                mainContentInBase = document.querySelector('#main-content');
                console.log('loadComponents.js: Found #main-content in document:', !!mainContentInBase);
            }
            if (mainContentInBase && pageContent) {
                mainContentInBase.innerHTML = pageContent;
                console.log('loadComponents.js: pageContent successfully injected into #main-content.');
            } else {
                console.error('loadComponents.js: Failed to inject pageContent into #main-content.');
                console.error('loadComponents.js: mainContentInBase:', mainContentInBase);
                console.error('loadComponents.js: pageContent:', pageContent);
            }

            // Re-add original stylesheets (this part remains as it was in the reverted code)
            originalStylesheets.forEach(oldLink => {
                const newLink = document.createElement('link');
                newLink.rel = 'stylesheet';
                newLink.href = oldLink.href;
                document.head.appendChild(newLink);
            });
            console.log('loadComponents.js: original stylesheets re-added.');

            // Re-run scripts that were in the loaded body from base.html and wait for them
            const baseScripts = Array.from(baseDoc.body.querySelectorAll('script')); // Use baseDoc.body here
            const baseScriptPromises = baseScripts.map(oldScript => {
                return new Promise((resolve) => {
                    const newScript = document.createElement('script');
                    if (oldScript.src) {
                        newScript.src = oldScript.src;
                        newScript.onload = resolve;
                        newScript.onerror = resolve; // resolve on error to avoid blocking
                    } else {
                        newScript.textContent = oldScript.textContent;
                        // Inline scripts execute immediately upon insertion
                        resolve();
                    }
                    document.body.appendChild(newScript);
                });
            });
            console.log('loadComponents.js: base scripts appended, awaiting load.');

            // Append page-specific scripts (this part remains as it was in the reverted code)
            const scriptsToLoad = [];
            let particlesJsScript = null;

            pageScripts.forEach(oldScript => {
                if (oldScript.src && oldScript.src.includes('particles.js')) {
                    particlesJsScript = oldScript;
                } else if (!oldScript.src || !oldScript.src.includes('main.js')) {
                    // Don't re-add main.js since it's now loaded directly in HTML
                    scriptsToLoad.push(oldScript);
                }
            });

            const loadScript = (scriptElement) => {
                return new Promise((resolve) => {
                    if (!scriptElement) {
                        resolve();
                        return;
                    }
                    const newScript = document.createElement('script');
                    if (scriptElement.src) {
                        newScript.src = scriptElement.src;
                        // For main.js, add additional attributes and error handling
                        if (scriptElement.src.includes('main.js')) {
                            console.log('loadComponents.js: Loading main.js with special handling');
                            newScript.async = false;
                            newScript.defer = false;
                            newScript.onload = () => {
                                console.log('loadComponents.js: main.js loaded, checking window.initPage');
                                console.log('loadComponents.js: window.initPage is:', typeof window.initPage);
                                resolve();
                            };
                            newScript.onerror = (error) => {
                                console.error('loadComponents.js: Error loading main.js:', error);
                                resolve();
                            };
                        } else {
                            newScript.onload = resolve;
                            newScript.onerror = resolve; // Resolve even on error to not block
                        }
                    } else {
                        newScript.textContent = scriptElement.textContent;
                        resolve();
                    }
                    document.body.appendChild(newScript);
                });
            };

            Promise.all(baseScriptPromises)
                .then(() => loadScript(particlesJsScript))
                .then(() => {
                    console.log('loadComponents.js: particles.js script loaded successfully.');
                    const otherScriptPromises = scriptsToLoad.map(script => loadScript(script));
                    return Promise.all(otherScriptPromises);
                })
                .then(() => {
                    console.log('loadComponents.js: all scripts loaded. Attempting to init page.');
                    if (typeof window.initPage === 'function') {
                        window.initPage();
                        console.log('loadComponents.js: initPage() called successfully.');
                    } else {
                        console.error('loadComponents.js: initPage function not found after loading scripts.');
                    }
                })
                .catch(error => {
                    console.error('Error loading scripts:', error);
                });
        })
        .catch(error => {
            console.error('Error loading base.html:', error);
        });
});