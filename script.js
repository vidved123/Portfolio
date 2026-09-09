// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close nav when a link is clicked (mobile)
  nav.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Guard placeholder links — don't jump to "#" if project link isn't set
document.querySelectorAll('a[data-placeholder]').forEach(a => {
  a.addEventListener('click', (e) => {
    if (a.getAttribute('href') === '#' || !a.getAttribute('href')) {
      e.preventDefault();
      const kind = a.dataset.placeholder;
      alert(`Link not set yet (${kind}). Update the href in index.html when ready.`);
    }
  });
});
