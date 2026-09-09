# Portfolio — Vidhyut Iyer

Personal portfolio site. Cybersecurity Professional & AI Innovation Engineer at iKites Technologies.

**Live site:** https://vidved123.github.io/Portfolio/ *(enable GitHub Pages to activate)*

## Stack

Plain HTML, CSS, and a small JS file — no build step, no framework. Deploys as a static site on GitHub Pages.

- `index.html` — page content and structure
- `style.css` — styles (light + dark mode via `prefers-color-scheme`)
- `script.js` — mobile nav toggle, footer year, placeholder-link guard

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
# option 1: open directly
open index.html

# option 2: serve with Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Push to `main` (already the default branch).
2. On GitHub → **Settings → Pages**.
3. Under **Source**, pick **Deploy from a branch**.
4. Branch: `main`, Folder: `/ (root)`. Save.
5. Wait ~1 minute — the site publishes at `https://vidved123.github.io/Portfolio/`.

## Update content

All copy lives in `index.html`. Common edits:

- **Add a project** — copy an `<article class="project-card">` block in the Projects section.
- **Add a role** — copy a `<li class="timeline-item">` block in Experience.
- **Fill a placeholder link** — search `data-placeholder="live-demo"` (or `presentation`) and replace the `#` with your real URL.
- **Change colors** — edit the CSS variables at the top of `style.css` (`--accent`, `--fg`, `--bg`).

## Contact

- Email: vidhyut2000@gmail.com
- LinkedIn: [vidhyut-iyer](https://linkedin.com/in/vidhyut-iyer-7479b460)
- GitHub: [@vidved123](https://github.com/vidved123)
