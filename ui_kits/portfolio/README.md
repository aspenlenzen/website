# Portfolio UI kit

Interactive recreation of the personal portfolio site (Home + Resume), rebuilt on the new tokens: forest-green ink, parchment ground, driftwood band, clay accent.

- `index.html` — click-through: NavBar switches Home ↔ Resume; the Resume → band button also navigates.
- `Home.jsx` — ruled hero name, About Me + photo, driftwood values band.
- `Resume.jsx` — experience entries with clay date labels.
- `PhotoPlaceholder.jsx` — stand-in for the owner's photography; swap for real images.

Screens receive the component namespace as a `DS` prop (Button, RuledHeading, ValueCard, NavBar, Footer come from `components/`). Resume content is placeholder — real roles/dates needed from the user.
