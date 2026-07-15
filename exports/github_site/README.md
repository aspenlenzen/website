# Aspen Scafa Lenzen — Portfolio Site

Three static pages that share one set of components and design tokens.

## Pages
- `index.html` — Home
- `Resume.html` — Resume
- `Consulting.html` — BoPo Consulting

## Structure
- `styles.css` + `tokens/` — global styles and design tokens (colors, type, spacing, fonts)
- `components/` — shared UI (NavBar, Footer, Button, RuledHeading, ValueCard, useIsMobile)
- `ui_kits/portfolio/` — page bodies (Home, Resume, BoPoConsulting) and case-study data
- `assets/` — images and logos

The pages are responsive; mobile layouts are handled in-component via `useIsMobile`, so there are no separate phone-view files.

## Running it
The pages load React, ReactDOM, and Babel from a CDN and `fetch()` the `.jsx` files at runtime, so they must be served over HTTP (opening the file directly with `file://` will fail on the fetches).

From this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Any static file server works.

## Pushing to GitHub
```bash
cd github_site
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

To host free with GitHub Pages: in the repo, Settings → Pages → deploy from `main` / root.
