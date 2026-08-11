(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.primary-nav');
  const menuLinks = menu ? [...menu.querySelectorAll('a')] : [];

  const closeMenu = () => {
    if (!menuButton || !menu) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menu.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      menu.classList.toggle('open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });
    menuLinks.forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('[data-reveal]');
  revealItems.forEach(item => {
    const delay = Number(item.dataset.delay || 0);
    item.style.setProperty('--delay', delay);
  });

  if (!reducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -45px' });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('revealed'));
  }

  const progress = document.querySelector('.scroll-progress span');
  const topButton = document.querySelector('.back-to-top');
  const navAnchors = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  const sections = navAnchors.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

  const updateScrollUI = () => {
    const scrollTop = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${scrollable > 0 ? (scrollTop / scrollable) * 100 : 0}%`;
    if (topButton) topButton.classList.toggle('visible', scrollTop > 700);

    let current = '';
    sections.forEach(section => {
      if (scrollTop >= section.offsetTop - 150) current = `#${section.id}`;
    });
    navAnchors.forEach(link => link.classList.toggle('active', link.getAttribute('href') === current));
  };

  window.addEventListener('scroll', updateScrollUI, { passive: true });
  window.addEventListener('load', updateScrollUI);

  if (topButton) {
    topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }));
  }

  // Project archive search. This is intentionally progressive enhancement:
  // all project cards remain visible when JavaScript is disabled.
  const projectSearch = document.querySelector('[data-project-search]');
  const projectCards = [...document.querySelectorAll('[data-project-card]')];
  const noResults = document.querySelector('[data-no-results]');

  if (projectSearch && projectCards.length) {
    const normalize = value => value.toLowerCase().trim().replace(/\s+/g, ' ');
    const filterProjects = () => {
      const query = normalize(projectSearch.value);
      let visibleCount = 0;

      projectCards.forEach(card => {
        const searchableText = normalize(`${card.dataset.search || ''} ${card.textContent || ''}`);
        const matches = !query || query.split(' ').every(term => searchableText.includes(term));
        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      if (noResults) noResults.classList.toggle('visible', visibleCount === 0);
    };

    projectSearch.addEventListener('input', filterProjects);
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
})();
