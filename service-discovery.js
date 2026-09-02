// Prevent double initialization in Squarespace
if (!window.EmpoweredServiceDiscoveryInitialized) {
  window.EmpoweredServiceDiscoveryInitialized = true;

  (function () {
    const container = document.getElementById('service-discovery');

    // Fail silently if the embed container is missing
    if (!container) return;

    // Load the hosted stylesheet if it is not already present
    const cssUrl =
      'https://accessibility-widget-psi.vercel.app/service-discovery.css';

    const cssLoaded = Array.from(
      document.querySelectorAll('link[rel="stylesheet"]')
    ).some(function (link) {
      return (
        link.href === cssUrl ||
        link.href.includes('service-discovery.css')
      );
    });

    if (!cssLoaded) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssUrl;
      document.head.appendChild(link);
    }

    // Inline SVG icons
    const icons = {
      Sparkles:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>',

      Globe:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',

      Share2:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>',

      Search:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',

      Target:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',

      PenTool:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',

      Mail:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',

      Layout:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>',

      LineChart:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',

      Languages:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>',

      X:
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',

      ArrowRight:
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',

      MousePointerClick:
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg>'
    };

    // Service data
    const servicesData = [
      {
        id: 'branding',
        title: 'Brand Identity',
        category: 'Creative',
        icon: 'Sparkles',
        theme: '#818cf8',
        desc:
          'Transform your business identity with branding that creates a memorable presence, fostering trust and loyalty.',
        link: '/business-branding-services',
        keywords: [
          'logo',
          'design',
          'identity',
          'reputation',
          'colors',
          'brand guidelines',
          'aesthetic',
          'fonts',
          'mission',
          'messaging',
          'voice'
        ]
      },
      {
        id: 'web-design',
        title: 'Website Design',
        category: 'Creative',
        icon: 'Globe',
        theme: '#38bdf8',
        desc:
          'Create an engaging online presence with user-friendly web design that drives conversions and growth.',
        link: '/web-design-and-development-services',
        keywords: [
          'website',
          'squarespace',
          'wordpress',
          'shopify',
          'wix',
          'landing page',
          'ecommerce',
          'ui',
          'ux',
          'redesign',
          'site',
          'development'
        ]
      },
      {
        id: 'social-media',
        title: 'Social Media Marketing',
        category: 'Marketing',
        icon: 'Share2',
        theme: '#f472b6',
        desc:
          'Dynamic social media campaigns designed to build a community and drive massive digital success.',
        link: 'https://www.empoweredsocialmediaco.com/social-media-management',
        keywords: [
          'instagram',
          'facebook',
          'tiktok',
          'reels',
          'followers',
          'engagement',
          'posts',
          'social',
          'linkedin',
          'pinterest'
        ]
      },
      {
        id: 'seo',
        title: 'Organic SEO',
        category: 'Strategy',
        icon: 'Search',
        theme: '#22d3ee',
        desc:
          'Boost your online visibility. Reach your target audience effectively and watch your organic traffic soar.',
        link: '/organic-search-engine-optimization-services',
        keywords: [
          'google',
          'ranking',
          'search',
          'traffic',
          'keywords',
          'visibility',
          'local seo',
          'find me',
          'backlinks',
          'audit',
          'on-page'
        ]
      },
      {
        id: 'coaching',
        title: 'Digital Coaching',
        category: 'Strategy',
        icon: 'Target',
        theme: '#60a5fa',
        desc:
          'Unlock your potential. Gain actionable insights and strategies that empower you to drive business growth.',
        link: '/digital-marketing-coaching',
        keywords: [
          'learn',
          'teach',
          'mentor',
          'training',
          'consulting',
          'advice',
          'strategy',
          'help',
          '1-on-1',
          'guidance'
        ]
      },
      {
        id: 'content',
        title: 'Content Marketing',
        category: 'Creative',
        icon: 'PenTool',
        theme: '#2dd4bf',
        desc:
          'Elevate your brand with content that engages your audience, boosts conversions, and establishes authority.',
        link: '/digital-content-marketing',
        keywords: [
          'blogs',
          'articles',
          'copywriting',
          'writing',
          'storytelling',
          'posts',
          'words',
          'newsletter content',
          'case studies',
          'whitepapers'
        ]
      },
      {
        id: 'email',
        title: 'Email Marketing',
        category: 'Marketing',
        icon: 'Mail',
        theme: '#c084fc',
        desc:
          'Maximize outreach with email best practices that nurture leads and ensure your messages convert.',
        link: '/email-marketing',
        keywords: [
          'newsletter',
          'mailchimp',
          'automation',
          'drip campaign',
          'subscribers',
          'blasts',
          'inbox',
          'klaviyo',
          'constant contact'
        ]
      },
      {
        id: 'graphic-design',
        title: 'Graphic Design',
        category: 'Creative',
        icon: 'Layout',
        theme: '#fb7185',
        desc:
          "Captivate your audience with visuals combining creativity and strategy to enhance your brand's impact.",
        link: '/online-graphic-design-services',
        keywords: [
          'brochure',
          'poster',
          'stationery',
          'flyers',
          'business cards',
          'banners',
          'photoshop',
          'illustrator',
          'visuals',
          'art',
          'print'
        ]
      },
      {
        id: 'research',
        title: 'Market Research',
        category: 'Strategy',
        icon: 'LineChart',
        theme: '#fbbf24',
        desc:
          'Make informed decisions with premium insights that guide your strategy and help outshine competitors.',
        link: '/market-research',
        keywords: [
          'competitors',
          'data',
          'audience',
          'demographics',
          'analysis',
          'insights',
          'trends',
          'swot',
          'buyer persona'
        ]
      },
      {
        id: 'spanish',
        title: 'Spanish Marketing',
        category: 'Marketing',
        icon: 'Languages',
        theme: '#34d399',
        desc:
          'Expand your reach to the Hispanic market with authentic, culturally relevant digital marketing.',
        link: 'https://www.empowereddigitalmarketingco.com/marketing-digital-en-espanol',
        keywords: [
          'spanish',
          'hispanic',
          'bilingual',
          'translation',
          'latino',
          'español',
          'multilingual'
        ]
      }
    ];

    const categories = ['All', 'Strategy', 'Creative', 'Marketing'];

    // Component state
    let searchQuery = '';
    let activeCategory = 'All';

    // Build the initial component structure
    container.classList.add('esd-wrapper');

    const backgroundGlow = document.createElement('div');
    backgroundGlow.className = 'esd-ambient-glow';
    backgroundGlow.setAttribute('aria-hidden', 'true');
    container.appendChild(backgroundGlow);

    const mainContent = document.createElement('div');
    mainContent.className = 'esd-main-content';
    container.appendChild(mainContent);

    const ariaLiveRegion = document.createElement('div');
    ariaLiveRegion.setAttribute('aria-live', 'polite');
    ariaLiveRegion.setAttribute('aria-atomic', 'true');
    ariaLiveRegion.className = 'esd-sr-only';
    container.appendChild(ariaLiveRegion);

    mainContent.innerHTML = `
      <div class="esd-header">
        <h2 class="esd-subtitle">Service Discovery</h2>
        <h3 class="esd-title">What do you need help with?</h3>

        <div class="esd-search-container">
          <div class="esd-search-icon" aria-hidden="true">
            ${icons.Search}
          </div>

          <input
            type="search"
            id="esd-search-input"
            class="esd-search-input"
            placeholder="e.g., 'grow my instagram', 'new logo', 'rank on google'..."
            aria-label="Search for services"
            autocomplete="off"
          />

          <button
            id="esd-clear-btn"
            class="esd-clear-btn esd-hidden"
            type="button"
            aria-label="Clear search"
          >
            ${icons.X}
          </button>
        </div>

        <div
          class="esd-category-filters"
          id="esd-category-filters"
          role="group"
          aria-label="Filter services by category"
        ></div>
      </div>

      <div
        id="esd-results-grid"
        class="esd-results-grid"
      ></div>
    `;

    // Scope all queries to the widget container
    const searchInput = container.querySelector('#esd-search-input');
    const clearButton = container.querySelector('#esd-clear-btn');
    const categoryFilters = container.querySelector(
      '#esd-category-filters'
    );
    const resultsGrid = container.querySelector('#esd-results-grid');

    // Safely create an HTML element
    function createElement(tag, className, textContent) {
      const element = document.createElement(tag);

      if (className) {
        element.className = className;
      }

      if (typeof textContent === 'string') {
        element.textContent = textContent;
      }

      return element;
    }

    // Render the category-filter buttons
    function renderCategories() {
      categoryFilters.replaceChildren();

      categories.forEach(function (category) {
        const button = document.createElement('button');

        button.type = 'button';
        button.textContent = category;
        button.className =
          'esd-category-btn' +
          (activeCategory === category ? ' active' : '');

        button.setAttribute(
          'aria-pressed',
          String(activeCategory === category)
        );

        button.addEventListener('click', function () {
          activeCategory = category;
          renderCategories();
          updateResults();
        });

        categoryFilters.appendChild(button);
      });
    }

    // Filter services according to search text and selected category
    function filterServices() {
      const searchLower = searchQuery.toLowerCase().trim();

      const searchTerms = searchLower
        .split(/\s+/)
        .filter(function (word) {
          return word.length > 2;
        });

      return servicesData.filter(function (service) {
        const matchesCategory =
          activeCategory === 'All' ||
          service.category === activeCategory;

        if (!searchLower) {
          return matchesCategory;
        }

        const titleLower = service.title.toLowerCase();
        const descriptionLower = service.desc.toLowerCase();

        const matchesTitle = titleLower.includes(searchLower);

        const matchesDescription =
          descriptionLower.includes(searchLower);

        const matchesKeyword = service.keywords.some(function (
          keyword
        ) {
          const keywordLower = keyword.toLowerCase();

          return (
            keywordLower.includes(searchLower) ||
            searchLower.includes(keywordLower)
          );
        });

        const matchesAnyTerm = searchTerms.some(function (term) {
          return (
            titleLower.includes(term) ||
            descriptionLower.includes(term) ||
            service.keywords.some(function (keyword) {
              return keyword.toLowerCase().includes(term);
            })
          );
        });

        return (
          matchesCategory &&
          (matchesTitle ||
            matchesDescription ||
            matchesKeyword ||
            matchesAnyTerm)
        );
      });
    }

    // Render the matching service cards
    function updateResults() {
      resultsGrid.replaceChildren();

      const filteredServices = filterServices();
      const searchLower = searchQuery.toLowerCase().trim();

      const searchTerms = searchLower
        .split(/\s+/)
        .filter(function (word) {
          return word.length > 2;
        });

      ariaLiveRegion.textContent =
        filteredServices.length +
        (filteredServices.length === 1
          ? ' service found.'
          : ' services found.');

      if (filteredServices.length === 0) {
        resultsGrid.classList.add('esd-empty-state-active');

        const emptyState = createElement(
          'div',
          'esd-empty-state'
        );

        const emptyIcon = createElement(
          'div',
          'esd-empty-icon'
        );
        emptyIcon.setAttribute('aria-hidden', 'true');
        emptyIcon.innerHTML = icons.MousePointerClick;

        const emptyTitle = createElement(
          'h4',
          'esd-empty-title',
          'No exact matches found'
        );

        const emptyText = createElement(
          'p',
          'esd-empty-text',
          "We offer highly customized digital marketing solutions. If you don't see what you're looking for, let's chat about your specific needs!"
        );

        const emptyLink = createElement(
          'a',
          'esd-empty-btn',
          'Book a Free Consultation'
        );
        emptyLink.href = 'https://www.empowereddigitalmarketingco.com/free-consultation';

        const emptyLinkArrow = createElement(
          'span',
          'esd-btn-arrow'
        );
        emptyLinkArrow.setAttribute('aria-hidden', 'true');
        emptyLinkArrow.innerHTML = icons.ArrowRight;

        emptyLink.appendChild(emptyLinkArrow);
        emptyState.appendChild(emptyIcon);
        emptyState.appendChild(emptyTitle);
        emptyState.appendChild(emptyText);
        emptyState.appendChild(emptyLink);
        resultsGrid.appendChild(emptyState);

        return;
      }

      resultsGrid.classList.remove('esd-empty-state-active');

      filteredServices.forEach(function (service, index) {
        function isKeywordMatch(keyword) {
          const keywordLower = keyword.toLowerCase();

          return (
            keywordLower.includes(searchLower) ||
            searchLower.includes(keywordLower) ||
            searchTerms.some(function (term) {
              return keywordLower.includes(term);
            })
          );
        }

        const matchedKeywords = searchLower
          ? service.keywords.filter(isKeywordMatch)
          : [];

        const displayKeywords = Array.from(
          new Set(
            matchedKeywords.concat(service.keywords)
          )
        ).slice(0, 3);

        const card = document.createElement('a');
        card.href = service.link;
        card.className = 'esd-card';
        card.style.setProperty(
          '--theme-color',
          service.theme
        );
        card.style.animationDelay = index * 50 + 'ms';

        const cardGlow = createElement(
          'div',
          'esd-card-glow'
        );
        cardGlow.setAttribute('aria-hidden', 'true');

        const iconBox = createElement(
          'div',
          'esd-icon-box'
        );
        iconBox.setAttribute('aria-hidden', 'true');
        iconBox.innerHTML = icons[service.icon];

        const cardContent = createElement(
          'div',
          'esd-card-content'
        );

        const titleRow = createElement(
          'div',
          'esd-card-title-row'
        );

        const title = createElement(
          'h4',
          'esd-card-title',
          service.title
        );

        const cardArrow = createElement(
          'div',
          'esd-card-arrow'
        );
        cardArrow.setAttribute('aria-hidden', 'true');
        cardArrow.innerHTML = icons.ArrowRight;

        titleRow.appendChild(title);
        titleRow.appendChild(cardArrow);

        const description = createElement(
          'p',
          'esd-card-desc',
          service.desc
        );

        cardContent.appendChild(titleRow);
        cardContent.appendChild(description);

        const tags = createElement(
          'div',
          'esd-card-tags'
        );

        displayKeywords.forEach(function (keyword) {
          const keywordMatches =
            Boolean(searchLower) &&
            isKeywordMatch(keyword);

          const tag = createElement(
            'span',
            'esd-tag' +
              (keywordMatches
                ? ' esd-tag-match'
                : ''),
            keyword
          );

          tags.appendChild(tag);
        });

        card.appendChild(cardGlow);
        card.appendChild(iconBox);
        card.appendChild(cardContent);
        card.appendChild(tags);

        resultsGrid.appendChild(card);
      });
    }

    // Search-field behavior
    searchInput.addEventListener('input', function (event) {
      searchQuery = event.target.value;

      if (searchQuery.length > 0) {
        clearButton.classList.remove('esd-hidden');
      } else {
        clearButton.classList.add('esd-hidden');
      }

      updateResults();
    });

    // Clear-search behavior
    clearButton.addEventListener('click', function () {
      searchQuery = '';
      searchInput.value = '';
      clearButton.classList.add('esd-hidden');
      searchInput.focus();
      updateResults();
    });

    // Initialize the section
    renderCategories();
    updateResults();
  })();
}
