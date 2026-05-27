/**
 * Embeddable Accessibility Widget
 * Note: This widget DOES NOT replace native assistive technology (like JAWS, NVDA, or VoiceOver)
 * and does not guarantee legal WCAG/ADA compliance on its own. It serves as an auxiliary 
 * user-preference support layer.
 */
(function() {
    // --- 1. Translation System ---
    const translations = {
        en: {
            widgetTitle: "Accessibility Menu",
            language: "Language",
            profiles: "Accessibility Profiles",
            contentAdjust: "Content Adjustments",
            navAids: "Navigation Aids",
            colorAdjust: "Color Adjustments",
            additionalTools: "Additional Tools",
            statement: "Accessibility Statement",
            reset: "Reset Settings",
            close: "Close Menu",
            seizureSafe: "Seizure Safe Profile",
            seizureSafeDesc: "Clears flashes & reduces color",
            blindProfile: "Blind Profile",
            blindProfileDesc: "Enhances screen reader support",
            visionImpaired: "Visually Impaired Profile",
            visionImpairedDesc: "Enhances site visuals",
            adhdFriendly: "ADHD Friendly Profile",
            adhdFriendlyDesc: "More focus, fewer distractions",
            cognitive: "Cognitive Profile",
            cognitiveDesc: "Assists with reading & focus",
            motorImpaired: "Motor Impaired Profile",
            motorImpairedDesc: "Keyboard navigation support",
            fontSize: "Font Size",
            lineHeight: "Line Height",
            letterSpacing: "Letter Spacing",
            dyslexiaFont: "Dyslexia Friendly Font",
            highlightLinks: "Highlight Links",
            highlightTitles: "Highlight Titles",
            superFocus: "Super Focus",
            readingGuide: "Reading Guide",
            bigCursor: "Big Cursor",
            pageStructure: "Page Structure (TOC)",
            monochrome: "Monochrome",
            lowSaturation: "Low Saturation",
            highSaturation: "High Saturation",
            highContrast: "High Contrast",
            stopAnimations: "Stop Animations",
            hideImages: "Hide Images",
            imageTooltips: "Image Tooltips",
            statementText: "We are committed to ensuring our website is accessible to everyone. This tool provides enhancements to support various accessibility needs. Please note this widget acts as an auxiliary support layer and does not replace native assistive technologies or manual accessibility compliance."
        },
        es: {
            widgetTitle: "Menú de Accesibilidad", language: "Idioma", profiles: "Perfiles de Accesibilidad", contentAdjust: "Ajustes de Contenido", navAids: "Ayudas de Navegación", colorAdjust: "Ajustes de Color", additionalTools: "Herramientas Adicionales", statement: "Declaración de Accesibilidad", reset: "Restablecer Configuración", close: "Cerrar Menú", seizureSafe: "Perfil Seguro (Convulsiones)", seizureSafeDesc: "Elimina destellos y reduce color", blindProfile: "Perfil para Ciegos", blindProfileDesc: "Mejora soporte para lectores", visionImpaired: "Perfil Discapacidad Visual", visionImpairedDesc: "Mejora las imágenes del sitio", adhdFriendly: "Perfil TDAH", adhdFriendlyDesc: "Más enfoque, menos distracciones", cognitive: "Perfil Cognitivo", cognitiveDesc: "Ayuda con la lectura", motorImpaired: "Perfil Discapacidad Motriz", motorImpairedDesc: "Navegación por teclado", fontSize: "Tamaño de Fuente", lineHeight: "Altura de Línea", letterSpacing: "Espaciado de Letras", dyslexiaFont: "Fuente para Dislexia", highlightLinks: "Resaltar Enlaces", highlightTitles: "Resaltar Títulos", superFocus: "Súper Enfoque", readingGuide: "Guía de Lectura", bigCursor: "Cursor Grande", pageStructure: "Estructura de la Página", monochrome: "Monocromo", lowSaturation: "Baja Saturación", highSaturation: "Alta Saturación", highContrast: "Alto Contraste", stopAnimations: "Detener Animaciones", hideImages: "Ocultar Imágenes", imageTooltips: "Información de Imágenes", statementText: "Nos comprometemos a garantizar que nuestro sitio web sea accesible para todos. Esta herramienta proporciona mejoras de soporte auxiliar y no reemplaza las tecnologías de asistencia nativas."
        },
        pt: {
            widgetTitle: "Menu de Acessibilidade", language: "Idioma", profiles: "Perfis de Acessibilidade", contentAdjust: "Ajustes de Conteúdo", navAids: "Ajudas de Navegação", colorAdjust: "Ajustes de Cor", additionalTools: "Ferramentas Adicionais", statement: "Declaração de Acessibilidade", reset: "Redefinir Configurações", close: "Fechar Menu", seizureSafe: "Perfil Seguro (Convulsões)", seizureSafeDesc: "Elimina flashes e reduz cor", blindProfile: "Perfil para Cegos", blindProfileDesc: "Melhora o suporte a leitores", visionImpaired: "Perfil Deficiência Visual", visionImpairedDesc: "Melhora o visual do site", adhdFriendly: "Perfil TDAH", adhdFriendlyDesc: "Mais foco, menos distrações", cognitive: "Perfil Cognitivo", cognitiveDesc: "Ajuda com leitura e foco", motorImpaired: "Perfil Deficiência Motora", motorImpairedDesc: "Suporte para teclado", fontSize: "Tamanho da Fonte", lineHeight: "Altura da Linha", letterSpacing: "Espaçamento de Letras", dyslexiaFont: "Fonte para Dislexia", highlightLinks: "Destacar Links", highlightTitles: "Destacar Títulos", superFocus: "Super Foco", readingGuide: "Guia de Leitura", bigCursor: "Cursor Grande", pageStructure: "Estrutura da Página", monochrome: "Monocromático", lowSaturation: "Baixa Saturação", highSaturation: "Alta Saturação", highContrast: "Alto Contraste", stopAnimations: "Parar Animações", hideImages: "Ocultar Imagens", imageTooltips: "Dicas de Imagens", statementText: "Temos o compromisso de garantir que nosso site seja acessível a todos. Observe que este widget atua como uma camada de suporte auxiliar e não substitui as tecnologias assistivas nativas."
        },
        fr: {
            widgetTitle: "Menu d'accessibilité", language: "Langue", profiles: "Profils d'accessibilité", contentAdjust: "Ajustements du contenu", navAids: "Aides à la navigation", colorAdjust: "Ajustements des couleurs", additionalTools: "Outils supplémentaires", statement: "Déclaration d'accessibilité", reset: "Réinitialiser les paramètres", close: "Fermer le menu", seizureSafe: "Profil anti-crise", seizureSafeDesc: "Réduit les couleurs et flashs", blindProfile: "Profil Malvoyant", blindProfileDesc: "Améliore le support des lecteurs", visionImpaired: "Profil Déficience Visuelle", visionImpairedDesc: "Améliore la lisibilité", adhdFriendly: "Profil TDAH", adhdFriendlyDesc: "Moins de distractions", cognitive: "Profil Cognitif", cognitiveDesc: "Aide à la lecture et concentration", motorImpaired: "Profil Handicap Moteur", motorImpairedDesc: "Navigation au clavier", fontSize: "Taille de la police", lineHeight: "Hauteur de ligne", letterSpacing: "Espacement des lettres", dyslexiaFont: "Police pour dyslexie", highlightLinks: "Mettre en évidence les liens", highlightTitles: "Mettre en évidence les titres", superFocus: "Super Focus", readingGuide: "Guide de lecture", bigCursor: "Grand curseur", pageStructure: "Structure de la page", monochrome: "Monochrome", lowSaturation: "Basse saturation", highSaturation: "Haute saturation", highContrast: "Contraste élevé", stopAnimations: "Arrêter les animations", hideImages: "Masquer les images", imageTooltips: "Info-bulles des images", statementText: "Nous nous engageons à rendre notre site accessible à tous. Veuillez noter que ce widget est un outil de support et ne remplace pas les technologies d'assistance natives."
        },
        de: {
            widgetTitle: "Barrierefreiheitsmenü", language: "Sprache", profiles: "Barrierefreiheitsprofile", contentAdjust: "Inhaltsanpassungen", navAids: "Navigationshilfen", colorAdjust: "Farbanpassungen", additionalTools: "Zusätzliche Werkzeuge", statement: "Erklärung zur Barrierefreiheit", reset: "Einstellungen zurücksetzen", close: "Menü schließen", seizureSafe: "Sicheres Profil (Anfälle)", seizureSafeDesc: "Reduziert Farben & Blitze", blindProfile: "Profil für Blinde", blindProfileDesc: "Verbessert Screenreader-Support", visionImpaired: "Profil Sehbehinderung", visionImpairedDesc: "Verbessert die Optik", adhdFriendly: "ADHS-freundliches Profil", adhdFriendlyDesc: "Weniger Ablenkungen", cognitive: "Kognitives Profil", cognitiveDesc: "Hilft beim Lesen", motorImpaired: "Profil Motorische Einschränkung", motorImpairedDesc: "Tastaturnavigation", fontSize: "Schriftgröße", lineHeight: "Zeilenhöhe", letterSpacing: "Zeichenabstand", dyslexiaFont: "Schrift für Legastheniker", highlightLinks: "Links hervorheben", highlightTitles: "Titel hervorheben", superFocus: "Super-Fokus", readingGuide: "Lesehilfe", bigCursor: "Großer Mauszeiger", pageStructure: "Seitenstruktur", monochrome: "Monochrom", lowSaturation: "Niedrige Sättigung", highSaturation: "Hohe Sättigung", highContrast: "Hoher Kontrast", stopAnimations: "Animationen stoppen", hideImages: "Bilder ausblenden", imageTooltips: "Bild-Tooltips", statementText: "Wir verpflichten uns, unsere Website für alle zugänglich zu machen. Bitte beachten Sie, dass dieses Widget als Hilfsschicht wirkt und native assistive Technologien nicht ersetzt."
        }
    };

    // --- 2. State Management ---
    const DEFAULT_STATE = {
        lang: 'en', isOpen: false,
        profile_seizure: false, profile_blind: false, profile_vision: false, profile_adhd: false, profile_cognitive: false, profile_motor: false,
        fontSize: 1, lineHeight: 1, letterSpacing: 0, dyslexiaFont: false, highlightLinks: false, highlightTitles: false,
        superFocus: false, readingGuide: false, bigCursor: false,
        monochrome: false, lowSaturation: false, highSaturation: false, highContrast: false,
        stopAnimations: false, hideImages: false, imageTooltips: false
    };

    class AccessibilityWidget {
        constructor() {
            this.state = { ...DEFAULT_STATE };
            this.loadState();
            this.hostElement = null;
            this.shadow = null;
            this.styleOverrideElement = null;
            this.announcer = null;
            this.readingGuideEl = null;
            this.readingMaskEl = null;
            this.init();
        }

        loadState() {
            try {
                const saved = localStorage.getItem('a11y_widget_state');
                if (saved) {
                    this.state = { ...this.state, ...JSON.parse(saved) };
                    this.state.isOpen = false; 
                }
            } catch(e) { console.warn("A11y Widget: Could not load state", e); }
        }

        saveState() {
            try { localStorage.setItem('a11y_widget_state', JSON.stringify(this.state)); } catch(e) {}
        }

        resetState() {
            const currentLang = this.state.lang;
            const wasOpen = this.state.isOpen;
            this.state = { ...DEFAULT_STATE, lang: currentLang, isOpen: wasOpen };
            this.saveState();
            this.updateUIState();
            this.applyOverrides();
            this.announceToScreenReader(this.t('reset'));
        }

        init() {
            this.hostElement = document.createElement('div');
            this.hostElement.id = 'a11y-widget-host';
            document.body.appendChild(this.hostElement);
            
            this.shadow = this.hostElement.attachShadow({ mode: 'open' });
            
            this.styleOverrideElement = document.createElement('style');
            this.styleOverrideElement.id = 'a11y-overrides';
            document.head.appendChild(this.styleOverrideElement);

            this.renderUI();
            this.applyOverrides();
            this.setupMouseTracking();
        }

        t(key) { return translations[this.state.lang][key] || key; }

        announceToScreenReader(message) {
            if (!this.announcer) {
                this.announcer = document.createElement('div');
                this.announcer.setAttribute('aria-live', 'polite');
                this.announcer.setAttribute('aria-atomic', 'true');
                this.announcer.style.cssText = 'position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(1px,1px,1px,1px); white-space:nowrap; border:0;';
                this.shadow.appendChild(this.announcer);
            }
            this.announcer.textContent = '';
            setTimeout(() => { this.announcer.textContent = message; }, 50);
        }

        renderUI() {
            let scrollPos = 0;
            const contentDiv = this.shadow.querySelector('.content');
            if (contentDiv) scrollPos = contentDiv.scrollTop;

            this.shadow.innerHTML = '';
            
            // NOTE FOR PRODUCTION: If widget.css is hosted on a different domain, 
            // replace 'widget.css' with '[https://your-domain.com/widget.css](https://your-domain.com/widget.css)'
            const styleLink = document.createElement('link');
            styleLink.rel = 'stylesheet';
            styleLink.href = 'widget.css'; 
            this.shadow.appendChild(styleLink);

            const wrapper = document.createElement('div');
            wrapper.innerHTML = `
                <button class="fab" id="a11y-toggle-btn" aria-label="${this.t('widgetTitle')}" aria-expanded="${this.state.isOpen}" aria-controls="a11y-panel">
                    <svg viewBox="0 0 24 24" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" aria-hidden="true">
                        <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                    </svg>
                </button>

                <div class="panel ${this.state.isOpen ? 'open' : ''}" id="a11y-panel" role="dialog" aria-modal="true" aria-label="${this.t('widgetTitle')}">
                    <div class="header">
                        <h2>${this.t('widgetTitle')}</h2>
                        <div style="display:flex; align-items:center;">
                            <label for="lang-select" class="visually-hidden" style="display:none;">${this.t('language')}</label>
                            <select class="lang-selector" id="lang-select" aria-label="${this.t('language')}">
                                <option value="en" ${this.state.lang === 'en' ? 'selected' : ''}>EN</option>
                                <option value="es" ${this.state.lang === 'es' ? 'selected' : ''}>ES</option>
                                <option value="pt" ${this.state.lang === 'pt' ? 'selected' : ''}>PT</option>
                                <option value="fr" ${this.state.lang === 'fr' ? 'selected' : ''}>FR</option>
                                <option value="de" ${this.state.lang === 'de' ? 'selected' : ''}>DE</option>
                            </select>
                            <button class="close-btn" id="a11y-close-btn" aria-label="${this.t('close')}">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                    </div>

                    <div class="content">
                        <div class="section">
                            <h3 class="section-title">${this.t('profiles')}</h3>
                            <div class="profile-grid">
                                ${this.buildProfileCard('profile_seizure', 'seizureSafe', 'seizureSafeDesc')}
                                ${this.buildProfileCard('profile_blind', 'blindProfile', 'blindProfileDesc')}
                                ${this.buildProfileCard('profile_vision', 'visionImpaired', 'visionImpairedDesc')}
                                ${this.buildProfileCard('profile_adhd', 'adhdFriendly', 'adhdFriendlyDesc')}
                                ${this.buildProfileCard('profile_cognitive', 'cognitive', 'cognitiveDesc')}
                                ${this.buildProfileCard('profile_motor', 'motorImpaired', 'motorImpairedDesc')}
                            </div>
                        </div>

                        <div class="section">
                            <h3 class="section-title">${this.t('contentAdjust')}</h3>
                            ${this.buildStepper('fontSize')}
                            ${this.buildStepper('lineHeight')}
                            ${this.buildStepper('letterSpacing')}
                            ${this.buildToggle('dyslexiaFont')}
                            ${this.buildToggle('highlightLinks')}
                            ${this.buildToggle('highlightTitles')}
                        </div>

                        <div class="section">
                            <h3 class="section-title">${this.t('navAids')}</h3>
                            ${this.buildToggle('superFocus')}
                            ${this.buildToggle('readingGuide')}
                            ${this.buildToggle('bigCursor')}
                            <div class="control-row">
                                <div><div class="control-label">${this.t('pageStructure')}</div></div>
                                <button id="btn-page-structure" style="padding: 4px 10px; border-radius: 4px; border: 1px solid #ccc; cursor:pointer; background: #fff; color: #333;">Generate</button>
                            </div>
                            <div id="page-structure-container" style="display:none; margin-top: 10px; font-size: 0.85rem; max-height: 150px; overflow-y:auto; background: #f5f5f5; padding: 10px; border-radius: 4px; color: #333;"></div>
                        </div>

                        <div class="section">
                            <h3 class="section-title">${this.t('colorAdjust')}</h3>
                            ${this.buildToggle('monochrome')}
                            ${this.buildToggle('lowSaturation')}
                            ${this.buildToggle('highSaturation')}
                            ${this.buildToggle('highContrast')}
                        </div>

                        <div class="section">
                            <h3 class="section-title">${this.t('additionalTools')}</h3>
                            ${this.buildToggle('stopAnimations')}
                            ${this.buildToggle('hideImages')}
                            ${this.buildToggle('imageTooltips')}
                        </div>
                        
                        <div class="section">
                            <h3 class="section-title">${this.t('statement')}</h3>
                            <div class="statement-box">${this.t('statementText')}</div>
                        </div>
                    </div>

                    <div class="footer">
                        <button class="reset-btn" id="a11y-reset-btn">${this.t('reset')}</button>
                    </div>
                </div>
            `;
            this.shadow.appendChild(wrapper);
            this.attachEventListeners();

            if (scrollPos > 0) {
                const newContentDiv = this.shadow.querySelector('.content');
                if (newContentDiv) newContentDiv.scrollTop = scrollPos;
            }
        }

        updateUIState() {
            const checkboxes = this.shadow.querySelectorAll('.toggle input[type="checkbox"]');
            checkboxes.forEach(cb => {
                const key = cb.dataset.key;
                if (key) cb.checked = !!this.state[key];
            });

            const stepperLabels = this.shadow.querySelectorAll('.stepper span');
            stepperLabels.forEach(span => {
                const key = span.dataset.key;
                if (key) span.textContent = key === 'letterSpacing' ? this.state[key] : Math.round(this.state[key] * 100) + '%';
            });

            const profiles = this.shadow.querySelectorAll('.profile-card');
            profiles.forEach(card => {
                const pKey = card.dataset.profile;
                if (pKey) {
                    const isActive = !!this.state[pKey];
                    isActive ? card.classList.add('active') : card.classList.remove('active');
                    card.setAttribute('aria-pressed', isActive);
                }
            });
        }

        buildToggle(stateKey) {
            const label = this.t(stateKey);
            return `
                <div class="control-row">
                    <div><div class="control-label" id="label-${stateKey}">${label}</div></div>
                    <label class="toggle">
                        <input type="checkbox" data-key="${stateKey}" ${this.state[stateKey] ? 'checked' : ''} aria-labelledby="label-${stateKey}">
                        <span class="slider" aria-hidden="true"></span>
                    </label>
                </div>
            `;
        }

        buildStepper(stateKey) {
            return `
                <div class="control-row">
                    <div class="control-label">${this.t(stateKey)}</div>
                    <div class="stepper">
                        <button class="step-btn" data-key="${stateKey}" data-dir="-1" aria-label="Decrease ${this.t(stateKey)}">-</button>
                        <span data-key="${stateKey}" style="min-width: 30px; text-align: center; font-size: 0.9rem;" aria-live="polite">
                            ${stateKey === 'letterSpacing' ? this.state[stateKey] : Math.round(this.state[stateKey] * 100) + '%'}
                        </span>
                        <button class="step-btn" data-key="${stateKey}" data-dir="1" aria-label="Increase ${this.t(stateKey)}">+</button>
                    </div>
                </div>
            `;
        }

        buildProfileCard(stateKey, titleKey, descKey) {
            const isActive = this.state[stateKey];
            return `
                <button class="profile-card ${isActive ? 'active' : ''}" data-profile="${stateKey}" aria-pressed="${isActive}">
                    <span>${this.t(titleKey)}</span>
                    <small>${this.t(descKey)}</small>
                </button>
            `;
        }

        toggleMenu() {
            this.state.isOpen = !this.state.isOpen;
            this.saveState();
            const panel = this.shadow.getElementById('a11y-panel');
            const fab = this.shadow.getElementById('a11y-toggle-btn');
            
            if (this.state.isOpen) {
                panel.classList.add('open');
                fab.setAttribute('aria-expanded', 'true');
                setTimeout(() => {
                    const closeBtn = this.shadow.getElementById('a11y-close-btn');
                    if(closeBtn) closeBtn.focus();
                }, 50); 
            } else {
                panel.classList.remove('open');
                fab.setAttribute('aria-expanded', 'false');
                fab.focus();
            }
        }

        attachEventListeners() {
            this.shadow.getElementById('a11y-toggle-btn').addEventListener('click', () => this.toggleMenu());
            this.shadow.getElementById('a11y-close-btn').addEventListener('click', () => this.toggleMenu());
            this.shadow.getElementById('a11y-reset-btn').addEventListener('click', () => this.resetState());
            this.shadow.getElementById('lang-select').addEventListener('change', (e) => {
                this.state.lang = e.target.value;
                this.saveState();
                this.renderUI(); 
            });

            this.shadow.getElementById('a11y-panel').addEventListener('keydown', (e) => {
                if (!this.state.isOpen) return;
                if (e.key === 'Escape') return this.toggleMenu();
                if (e.key === 'Tab') {
                    const focusable = this.shadow.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                    const first = focusable[0];
                    const last = focusable[focusable.length - 1];
                    const activeEl = this.shadow.activeElement;
                    if (e.shiftKey && activeEl === first) { e.preventDefault(); last.focus(); } 
                    else if (!e.shiftKey && activeEl === last) { e.preventDefault(); first.focus(); }
                }
            });

            const checkboxes = this.shadow.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(cb => {
                cb.addEventListener('change', (e) => {
                    const key = e.target.dataset.key;
                    this.state[key] = e.target.checked;
                    this.saveState();
                    this.updateUIState();
                    this.applyOverrides();
                    this.announceToScreenReader(`${this.t(key)} ${this.state[key] ? 'On' : 'Off'}`);
                });
            });

            const steppers = this.shadow.querySelectorAll('.step-btn');
            steppers.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const key = e.currentTarget.dataset.key; 
                    const dir = parseInt(e.currentTarget.dataset.dir);
                    if (key === 'letterSpacing') {
                        this.state[key] += (dir * 1);
                        if (this.state[key] < 0) this.state[key] = 0;
                        if (this.state[key] > 10) this.state[key] = 10;
                    } else {
                        this.state[key] += (dir * 0.1);
                        if (this.state[key] < 0.8) this.state[key] = 0.8;
                        if (this.state[key] > 2.0) this.state[key] = 2.0;
                        this.state[key] = Math.round(this.state[key] * 10) / 10;
                    }
                    this.saveState();
                    this.updateUIState();
                    this.applyOverrides();
                });
            });

            const profiles = this.shadow.querySelectorAll('.profile-card');
            profiles.forEach(card => {
                card.addEventListener('click', (e) => {
                    this.toggleProfile(e.currentTarget.dataset.profile);
                });
            });

            const pageStructBtn = this.shadow.getElementById('btn-page-structure');
            if (pageStructBtn) pageStructBtn.addEventListener('click', () => this.generatePageStructure());
        }

        toggleProfile(profileName) {
            const isActivating = !this.state[profileName];
            
            this.state.profile_seizure = false; this.state.profile_blind = false; this.state.profile_vision = false; 
            this.state.profile_adhd = false; this.state.profile_cognitive = false; this.state.profile_motor = false;
            
            this.resetStateLogicOnly();

            if (isActivating) {
                this.state[profileName] = true;
                switch(profileName) {
                    case 'profile_seizure': this.state.stopAnimations = true; this.state.lowSaturation = true; break;
                    case 'profile_blind': this.state.superFocus = true; break;
                    case 'profile_vision': this.state.highContrast = true; this.state.fontSize = 1.2; break;
                    case 'profile_adhd': break;
                    case 'profile_cognitive': this.state.readingGuide = true; this.state.highlightTitles = true; break;
                    case 'profile_motor': this.state.superFocus = true; break;
                }
                const nameKey = { profile_seizure: 'seizureSafe', profile_blind: 'blindProfile', profile_vision: 'visionImpaired', profile_adhd: 'adhdFriendly', profile_cognitive: 'cognitive', profile_motor: 'motorImpaired' }[profileName];
                this.announceToScreenReader(`${this.t(nameKey)} Activated`);
            } else {
                this.announceToScreenReader(`Profile Deactivated`);
            }

            this.saveState();
            this.updateUIState();
            this.applyOverrides();
        }

        resetStateLogicOnly() {
            Object.keys(DEFAULT_STATE).forEach(key => {
                if (key !== 'lang' && key !== 'isOpen' && !key.startsWith('profile_')) {
                    this.state[key] = DEFAULT_STATE[key];
                }
            });
        }

        applyOverrides() {
            let css = '';
            const notWidget = `:not(#a11y-widget-host):not(#a11y-widget-host *)`;

            if (this.state.fontSize !== 1) css += `html { zoom: ${this.state.fontSize} !important; } \n`;
            if (this.state.lineHeight !== 1) css += `body, p, span, h1, h2, h3, h4, h5, h6, li, a, div { line-height: ${this.state.lineHeight} !important; } \n`;
            if (this.state.letterSpacing !== 0) {
                css += `body ${notWidget} { letter-spacing: ${this.state.letterSpacing}px !important; } \n`;
                css += `body ${notWidget} * { letter-spacing: ${this.state.letterSpacing}px !important; } \n`;
            }
            if (this.state.dyslexiaFont) css += `*:not(i):not([class*="icon"]):not([class*="fa"]):not([class*="fas"]):not([class*="far"]) { font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif !important; } \n`;
            if (this.state.highlightLinks) css += `a, a * { outline: 3px solid #FF9800 !important; outline-offset: 2px !important; text-decoration: underline !important; text-decoration-thickness: 3px !important; font-weight: bold !important; color: #000 !important; background-color: #FFF3E0 !important; } \n`;
            if (this.state.highlightTitles) css += `h1, h2, h3, h4, h5, h6 { outline: 3px solid #2196F3 !important; outline-offset: 4px !important; } \n`;
            if (this.state.superFocus) css += `*:focus, *:focus-within, *:focus-visible { outline: 4px solid #F44336 !important; outline-offset: 4px !important; transition: outline-offset 0.1s ease-in-out !important; } \n`;
            if (this.state.bigCursor) css += `* { cursor: zoom-in !important; } \n`;

            let filters = [];
            if (this.state.monochrome) filters.push('grayscale(100%)');
            if (this.state.lowSaturation) filters.push('saturate(30%)');
            if (this.state.highSaturation) filters.push('saturate(200%)');
            if (this.state.highContrast) {
                filters.push('contrast(150%)');
                css += `a { color: #0000EE !important; text-decoration: underline !important; font-weight: bold !important; } \n`;
                css += `*:not(#a11y-widget-host):not(#a11y-widget-host *) { text-shadow: none !important; box-shadow: none !important; } \n`;
            }

            if (filters.length > 0) css += `html { filter: ${filters.join(' ')} !important; } \n`;
            if (this.state.stopAnimations) css += `*, *::before, *::after { animation-play-state: paused !important; transition: none !important; scroll-behavior: auto !important; } \n`;
            if (this.state.hideImages) css += `img, video, [style*="background-image"] { visibility: hidden !important; } \n`;
            
            this.styleOverrideElement.textContent = css;

            this.manageReadingGuide();
            this.manageADHDMask();
            this.manageScreenReaderSupport();
            this.manageImageTooltips();
        }

        setupMouseTracking() {
            document.addEventListener('mousemove', (e) => {
                if (this.state.readingGuide && this.readingGuideEl) this.readingGuideEl.style.top = `${e.clientY}px`;
                if (this.state.profile_adhd && this.readingMaskEl) this.readingMaskEl.style.top = `${e.clientY - 50}px`;
            }, { passive: true });
        }

        manageReadingGuide() {
            if (this.state.readingGuide) {
                if (!this.readingGuideEl) {
                    this.readingGuideEl = document.createElement('div');
                    this.readingGuideEl.style.cssText = `position: fixed; left: 0; right: 0; height: 4px; background-color: #F44336; z-index: 999997; pointer-events: none; box-shadow: 0 2px 5px rgba(0,0,0,0.3);`;
                    document.body.appendChild(this.readingGuideEl);
                }
                this.readingGuideEl.style.display = 'block';
            } else if (this.readingGuideEl) {
                this.readingGuideEl.style.display = 'none';
            }
        }

        manageADHDMask() {
            if (this.state.profile_adhd) {
                if (!this.readingMaskEl) {
                    this.readingMaskEl = document.createElement('div');
                    this.readingMaskEl.style.cssText = `position: fixed; left: 0; right: 0; height: 100px; z-index: 999996; pointer-events: none; box-shadow: 0 -100vh 0 100vh rgba(0,0,0,0.6), 0 100vh 0 100vh rgba(0,0,0,0.6);`;
                    document.body.appendChild(this.readingMaskEl);
                }
                this.readingMaskEl.style.display = 'block';
            } else if (this.readingMaskEl) {
                this.readingMaskEl.style.display = 'none';
            }
        }

        manageScreenReaderSupport() {
            if (this.state.profile_blind) {
                try {
                    document.querySelectorAll('img:not([alt])').forEach(img => {
                        if (!img.hasAttribute('alt')) { img.setAttribute('alt', 'Image missing description'); img.dataset.a11yAttrAdded = 'true'; }
                    });
                    document.querySelectorAll('a').forEach(a => {
                        if (a.textContent.trim() === '' && !a.getAttribute('aria-label')) { a.setAttribute('aria-label', a.href || 'Link'); a.dataset.a11yAttrAdded = 'true'; }
                    });
                } catch(e) {}
            } else {
                try {
                    document.querySelectorAll('[data-a11y-attr-added="true"]').forEach(el => {
                        if (el.tagName === 'IMG') el.removeAttribute('alt');
                        if (el.tagName === 'A') el.removeAttribute('aria-label');
                        delete el.dataset.a11yAttrAdded;
                    });
                } catch(e) {}
            }
        }

        manageImageTooltips() {
            try {
                document.querySelectorAll('img').forEach(img => {
                    if (this.state.imageTooltips) {
                        const text = img.getAttribute('alt') || img.getAttribute('aria-label');
                        if (text && !img.hasAttribute('title')) { img.setAttribute('title', text); img.dataset.a11yTooltipAdded = 'true'; }
                    } else {
                        if (img.dataset.a11yTooltipAdded) { img.removeAttribute('title'); delete img.dataset.a11yTooltipAdded; }
                    }
                });
            } catch(e) {}
        }

        generatePageStructure() {
            const container = this.shadow.getElementById('page-structure-container');
            if (!container) return;
            container.innerHTML = '';
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            
            if (headings.length === 0) {
                container.innerHTML = '<i>No headings found on this page.</i>';
            } else {
                const ul = document.createElement('ul');
                ul.style.cssText = "list-style: none; padding-left: 0; margin: 0;";
                headings.forEach((h, index) => {
                    if (!h.id) h.id = 'a11y-heading-' + index;
                    const li = document.createElement('li');
                    const level = parseInt(h.tagName.substring(1)) - 1; 
                    li.style.paddingLeft = `${level * 10}px`;
                    li.style.marginBottom = '5px';
                    const a = document.createElement('a');
                    a.href = '#' + h.id;
                    a.textContent = h.textContent.trim() || h.tagName;
                    a.style.cssText = "color: var(--primary); text-decoration: none;";
                    a.addEventListener('click', (e) => {
                        e.preventDefault();
                        h.scrollIntoView({behavior: 'smooth'});
                        if (!h.hasAttribute('tabindex')) h.setAttribute('tabindex', '-1');
                        h.focus(); 
                    });
                    li.appendChild(a);
                    ul.appendChild(li);
                });
                container.appendChild(ul);
                this.announceToScreenReader(`Page structure generated with ${headings.length} headings.`);
            }
            container.style.display = 'block';
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new AccessibilityWidget());
    } else {
        new AccessibilityWidget();
    }
})();