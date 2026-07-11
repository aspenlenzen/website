# Aspen Scafa Lenzen — Portfolio Design System

Personal portfolio design system. Direction: keep the current site's quiet editorial elegance (serif caps, thin rules, parchment ground, golden-hour photography) and warm it up with an outdoorsy, adventure-leaning palette — approved by the user with **forest-green ink instead of black**.

**Sources:** the live site https://aspenlenzen.wixsite.com/hello (Home + Resume pages — all copy, logo, and photos copied from it into this system) plus two screenshots in `uploads/`. No codebase or Figma provided. The owl wax-seal logo is at `assets/owl_wax_seal.png`; four site photos are in `assets/`.

## Content fundamentals
- First person, warm and unguarded: "Hi, I'm Aspen!" — occasional exclamation points, parenthetical asides "(except the ones with me in it!)".
- Concrete personal detail over abstraction: husband Will, puppy Suki, cats Toast and Duck, Kindle, sewing, podcasts.
- Professional copy is values-led ("People First", "Connection Through Community") — short serif titles + one earnest paragraph.
- Headings: ALL CAPS, few words. Buttons/labels: spaced caps ("RESUME →").
- No emoji. Sentence case body, Title Case sub-heads.

## Visual foundations
- **Color:** parchment `#F4EFE5` page; driftwood `#A89B8B` bands; driftwood-light footer; **forest-green ink `#2A331F` / ink-soft `#515A41` for all text**. Accents: clay `#B0653D` (lead accent — links, filled buttons, active nav), pine `#41523E`, ochre `#C08A3E` (links on dark), moss `#7D8163` (quiet labels). Accents used sparingly; pages stay neutral + photographic.
- **Type:** Cormorant Garamond 500 display (caps, loose tracking, thin-rule framing); Karla body 17/1.65, 13px spaced-caps labels. Google Fonts substitutions for the site's unknown originals — user approved.
- **Shape:** square corners everywhere; 1–1.5px rules; outlined buttons (fill on hover → ink).
- **Layout:** airy, centered, `--space-section` 160px between bands; body copy max `46ch`; photos as large offset/full-bleed blocks butted edge-to-edge (no gaps, no radius).
- **Backgrounds:** flat token colors only — no gradients, patterns, or textures. Section rhythm comes from alternating parchment / driftwood / pine-deep bands.
- **Imagery:** warm, sun-lit, golden-hour outdoor photography, all owner-shot. No stock. Placeholders until real photos are supplied.
- **Motion:** minimal — 120ms ease color/background transitions on hover; no entrance animations.
- **Hover:** outline buttons invert to ink; links shift clay-deep → pine; press states unstyled.
- **Shadows:** none. Depth comes from color bands and photography.

## Iconography
No icon system. The old site used filled-circle social glyphs; this system replaces them with spaced-caps text links (LinkedIn · Medium · Instagram). If icons become necessary, use Lucide (CDN) at 1.5px stroke and flag it. No emoji, no hand-drawn SVG.

## Index
- `styles.css` — global entry (imports all tokens)
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`
- `guidelines/` — specimen cards: Colors ×3, Type ×3, Spacing ×1, Brand logo
- `assets/` — owl_wax_seal.png (logo), photo_home_field.jpg, photo_home_sky.jpg, photo_resume_1.jpg, photo_resume_2.jpg
- `components/core/` — Button, RuledHeading, ValueCard
- `components/navigation/` — NavBar, Footer
- `ui_kits/portfolio/` — interactive Home + Resume recreation (`index.html`)
- `SKILL.md` — agent skill entry point

## Intentional additions
- `PhotoPlaceholder` (ui kit only) — stand-in for owner photography until real images are supplied.

## Caveats
- Fonts are nearest Google-Fonts matches (approved).
- The live site has the typo "MY EXPIERENCE" — corrected to "Experience" in this system.
- Social links: LinkedIn /in/aspenlenzen, Medium @AspenLenzen, Instagram @aspenscafa (Footer defaults).
