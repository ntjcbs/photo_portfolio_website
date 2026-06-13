# natejacobs.net

Personal website of **Nate Jacobs** — Director of Patient Cloud Architecture &
Software Engineer based in New York City.

Redesigned with a modern **glassmorphism** aesthetic: an iOS / macOS grey base
palette with vibrant Instagram-style warm-gradient accents, frosted-glass cards,
and an animated ambient background.

## Stack
Pure, vanilla **HTML + CSS** — zero frameworks. A tiny dependency-free
`assets/site.js` powers the mobile nav, photo lightbox, and ambient details.

- Modern CSS: Grid + Flexbox layouts, Custom Properties for theming, fluid
  `clamp()` typography, `backdrop-filter` glass, and `prefers-color-scheme`
  dark mode.
- Responsive from small phones to large desktop monitors.

## Structure
```
index.html          Hero + featured work (Alien Evasion, Halliard Media, Patient Cloud)
photos.html         Photography gallery with lightbox
contact.html        Social links
blog.html           Coming soon
css_files/main.css  Design system + all styles
assets/site.js      Nav toggle, lightbox, starfield, footer year
assets/*.svg        Logos
```

## Develop
Static site — open `index.html`, or serve locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

Deployed via GitHub Pages (see `CNAME`).
