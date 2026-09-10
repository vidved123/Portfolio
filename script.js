// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  nav.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Theme toggle (light / dark / system)
const themeBtn = document.querySelector('.theme-toggle');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let next;
    if (!current) next = systemDark ? 'light' : 'dark';
    else if (current === 'dark') next = 'light';
    else next = 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
}

// Scroll reveal — trigger early so children aren't hidden when reached.
// A scroll fallback also flips any section past the fold, in case IO missed it.
(function() {
  const els = [...document.querySelectorAll('.reveal')];
  const revealIfPast = () => {
    const y = window.scrollY + window.innerHeight;
    els.forEach(el => {
      if (el.classList.contains('in-view')) return;
      if (el.getBoundingClientRect().top + window.scrollY < y + 100) {
        el.classList.add('in-view');
      }
    });
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px 200px 0px' });
    els.forEach(el => io.observe(el));
  } else {
    document.documentElement.classList.add('no-io');
  }
  // Ensure anything already past the viewport bottom is revealed (handles
  // fragment-anchored loads and fast wheel scrolls)
  window.addEventListener('scroll', revealIfPast, { passive: true });
  window.addEventListener('load', revealIfPast);
  revealIfPast();
})();

// Current year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Placeholder link guard
document.querySelectorAll('a[data-placeholder]').forEach(a => {
  a.addEventListener('click', (e) => {
    if (a.getAttribute('href') === '#' || !a.getAttribute('href')) {
      e.preventDefault();
      const kind = a.dataset.placeholder;
      alert(`Link not set yet (${kind}). Update the href in index.html when ready.`);
    }
  });
});
