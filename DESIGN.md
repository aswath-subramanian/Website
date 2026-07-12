# aswath.nl — Design & Build Brief

A brief for anyone (human or model) working on this site. It defines *what the site is and how it should feel*, and leaves implementation detail to you. When in doubt, prefer **less**.

---

## 1. What this is

A personal site for Aswath Subramanian. Not a portfolio funnel, not a startup landing page — a body of work under his own name. The organising idea:

> **"Me, not just my one topic."** An engineer who looks for where promises break — in scale-up, in emissions numbers, in the claims we build systems on.

The site should read as **reflection, not sales**. The reader should come away thinking "this person has unusually good judgment," having never been pitched. **No solicitation anywhere** — the sanctioned exits are quiet contact links (the home identity rail, About, and the footer): availability, not a pitch.

**Who reads this.** Two readers, both first-class: (a) engineers and technical peers, who must find the work credible; (b) curious non-specialists, who must be able to follow it. Every piece passes both tests or it isn't done.

Working tagline (home): *"I look for where engineering promises break: in scale-up, in emissions numbers, in the claims we build systems on."*

## 2. Voice

- Understated, rigorous, honest — including about failure. No marketing tone, no hype, no "thanks for reading," no engagement bait.
- **Not** "write for a technical colleague." Write so an engineer finds it credible **and** a smart outsider can follow: lead with the plain-English stakes, define jargon on first use, keep the depth — put it below the lede, don't dilute it.
- **Ground Truth** register: sober, precise, technical — but legible per the rule above.
- **Finding My Joule** register: looser, warmer, a little dry wit is fine. Any register from a quick thought to a considered essay.
- **State scope, never schedule.** Copy describes what a section or piece covers — never what is coming next. No "to follow," "coming soon," "more on this later." Unfulfilled promises turn *silence allowed* into *silence noticed*.
- The no-guilt ethos ("no schedule, no metrics, silence allowed") is a **constraint on the system, not language for the reader**. It never appears as site copy.
- **No em dashes anywhere in site copy** (pages, content, titles, feeds, meta descriptions). Use colons, commas, or parentheses; the interpunct (·) separates title parts.

## 3. Information architecture

```
/                    Home    — quiet hub: the lens line, then two signposts + latest of each
/ground-truth        Ground Truth — flagship. Claims tested against measured reality.
                                    Current series: superpollutant emissions (N₂O first).
/ground-truth/<slug> A deep dive (hosts interactive charts).
/finding-my-joule    Finding My Joule — the wide personal channel.
/finding-my-joule/<slug>  A post.
/about               About   — background + three case studies recast as reflective proof.
/404                 One sentence, link home, same slab.
```

Two content collections (Astro), both plain markdown with front matter. **Only these two folders are live** — anything else under `src/content/` is silently ignored:

- `src/content/ground-truth/` → collection `groundtruth`
- `src/content/finding-my-joule/` → collection `fmj`

Adding content = dropping a `.md` file in one of those folders. Keep it that simple.

- **Slugs are date-free and permanent.** Filename = slug (`operating-windows.md` → `/finding-my-joule/operating-windows`). No date prefixes in filenames or URLs.
- **Drafts live on git branches.** `main` is always publishable; there is no draft flag.
- **The old Medium blog is not imported.** Finding My Joule starts clean. (Consequence: indexes start thin — which is why the first substantial Ground Truth piece gates the public launch; see roadmap.)

**The balance to protect:** focus lives in Ground Truth — not a single topic but a single *method*, held constant: the claim next to the measurement, the gap quantified, the error bars kept. Breadth lives in Finding My Joule (the human hinterland). They are separate front doors so breadth never dilutes focus.

## 4. Design principles

1. **Minimal, not flashy.** Substance over chrome. Fewer sections, fewer elements. If a flourish doesn't earn its place, cut it.
2. **Warm, not hungry.** Built for someone who works in bursts — long gaps are normal and must never feel like failure. No streaks, no "last posted," nothing that guilts. (System design only — see §2.)
3. **Own the work.** Static, portable, git-versioned, no lock-in, **no third-party requests watching the reader** — fonts self-hosted, no CDNs, no trackers. The one exception is comments (§6), and only after an explicit reader action.
4. **Fast and quiet.** Ship almost no JavaScript; hydrate only where a chart needs it.
5. **Show, don't sell.** The quality of thinking is the only marketing.

## 5. Visual direction

An instrument panel for reading — a lab notebook, not a blog: a single reading column, generous whitespace, monospace labeling over quiet prose, almost no decoration. Tech without cosplay: no glows, no gradients, no terminal theatrics, no dashboards.

- **Layout:** reading pages are a centred single column, ~680px measure. The home page alone widens (~1000px) into an identity rail (portrait, name, role, contact) beside the content column, stacking on mobile. Nav and footer hold the reading measure on every page, including wide home, so view transitions keep them perfectly still.
- **Type:** one family, two voices, self-hosted (Fontsource woff2, no font CDNs, per principle 3): **IBM Plex Sans** (400/500/600) carries prose and headings; **IBM Plex Mono** (400/600) is the voice of apparatus (nav, kickers, dates, status, tables, captions, footer, share row, chart labels). Keep the split strict: labels label, prose speaks.
- **Colour:** tokens as CSS custom properties, both themes required, WCAG-AA verified:
  - Light: ink `#1a1a1a` on neutral paper `#fafafa`, muted `#6f6f6f` (4.8:1), hairline `#e4e4e4`.
  - Dark (`prefers-color-scheme`, slightly cool: instruments are dark-native): ink `#e5e7ea` on `#141516` (14.8:1), muted `#a2a4a8` (7.3:1), hairline `#303236`.
  - **Muted is for metadata only** (dates, status, nav, footer, captions) — never for leads, theses, or anything the reader must read.
  - **One accent, drafting blue** (the ink of technical drawings): light `#2d4f9e` (7.4:1), dark `#8aa5e8` (7.5:1). **The accent is semantic: it marks evidence.** Link underlines, measured data (the trace, chart primaries), live status. Never decoration.
- **Headings:** a real scale that makes raw markdown safe by default (h1 30 / h2 22 / h3 19 / h4 17, roughly 2× space above vs below). The uppercase label style is an explicit `.kicker` class used deliberately on hub pages, never the default meaning of `h2`.
- **Links:** in-prose links must be findable at rest: accent underline (evidence, per the accent rule), ink underline on hover.
- **The tagline is deliberately the home h1.** The one loud moment on the site; don't "fix" it.
- **Rhythm:** big vertical spacing between sections; small, consistent spacing within. Let it breathe.
- **Decoration:** hairline rules, not boxes/cards/shadows. No gradients, no hero imagery, no icons-as-ornament.
- **Signature:** the home hero draws the site's thesis as data: an inline-SVG schematic trace of episodic measured flux (accent) against the flat dashed assumed factor, on a faint plotting grid. Zero JS, themed by the same tokens, labelled honestly as a schematic. The favicon is one spike of it. Nothing else gets a flourish.
- **Motion:** one orchestrated moment only: on first paint the trace draws itself (~1.1s). Page navigations morph via **browser-native cross-document view transitions** (`@view-transition`, pure CSS, no router JS): nav and footer hold still, entry titles glide into article titles. Nothing loops, nothing staggers in, and `prefers-reduced-motion` collapses all of it.

## 6. Components & patterns

- **Nav:** name (→ home) on the left, three quiet text links right: Ground Truth · Finding My Joule · About. No hamburger theatrics; wrap gracefully on mobile.
- **Home:** identity rail (portrait, name, one-line role, contact · LinkedIn · GitHub) beside the content column — thesis h1, the schematic assumed-vs-measured trace, the two section blocks with latest entries, and a curated **Projects** list (`src/data/projects.ts`, rendered at build; never client-side embeds, per principle 3). Nothing else.
- **Section index:** a plain list of entries — title left, date (or status) right, hairline between. No excerpts, no thumbnails.
- **Article / deep dive:** title, date/status, then prose. Comfortable measure, clear headings. Dates are `<time datetime>` elements, human-readable ("20 Jan 2026"), one shared formatter.
- **Markdown must be safe by default:** tables (scroll within the column, never break it), code blocks, images, blockquotes, `hr`, captions — all styled in the slab's language.
- **Status tag:** deep dives can be marked `in progress` etc. — plain text, not a badge.
- **Comments:** giscus (GitHub Discussions) at the end of article pages, **click-to-load** — no third-party request unless the reader asks for it. Comments only: giscus reactions off. Not yet wired (roadmap).
- **Share row:** end of articles, quiet mono links — copy link · native share (Web Share API, revealed only where supported) · LinkedIn · WhatsApp. Plain links and the OS sheet only; nothing loads unless clicked; never counts or widgets.
- **Footer:** one line — copyright + quiet contact (`contact@aswath.nl`). Availability, not solicitation.
- **Naming note:** "Finding My Joule" is opaque cold; any surface that shows a section name without context (feed titles, OG cards) carries its one-line gloss, e.g. *"Finding My Joule: a wider notebook."*

## 7. Interactive charts (Ground Truth)

The one place with real interactivity. Deep dives embed **interactive, performant charts** built from data files in the repo.

- **Mechanism:** collections stay plain `.md`. Charts are **custom elements** written directly in markdown (e.g. `<n2o-chart data-src="/data/n2o-2min.json">`), upgraded by a small vanilla script that hydrates on an `IntersectionObserver` (the `client:visible` pattern without a framework). No MDX, no UI framework.
- **Library: uPlot** (~12 KB gzipped, canvas, built for high-density time series). Not ECharts, not SVG/Plotly — they don't fit "almost no JavaScript" at hundreds of thousands of points.
- **Data ships as separate static assets** (JSON/CSV fetched at hydration) — never bundled into JS. Large series get downsampled tiers.
- **Dark mode:** canvas can't read CSS variables — read the theme via `matchMedia('(prefers-color-scheme: dark)')` at init, listen for changes, redraw.
- **No layout shift:** chart containers reserve a fixed height before hydration.
- **JS off / not yet loaded:** the element's fallback content is a sentence stating the takeaway + the data source.

## 8. Non-goals (do not add)

No solicitation or CTAs beyond the quiet contact line. No newsletter pop-ups or subscribe nags. **No analytics of any kind** — no client scripts, no host-side analytics enabled. No likes, reactions, or counts of anything; sharing exists only as the quiet article share row (§6) — plain links and the OS share sheet, never tracker widgets (comments via giscus are the other social carve-out). No tags/categories/search (for now). No cookie banners beyond legal necessity. No cards/shadows/gradients. The site is a body of work, not a funnel.

## 9. Accessibility & performance

Semantic HTML, real headings, `<time>` for dates, a skip-to-content link, keyboard-navigable, WCAG-AA contrast in **both** themes (verified values in §5), `prefers-color-scheme` + `color-scheme`, minimal JS, fast LCP (self-hosted fonts, `font-display: swap`). Charts need accessible fallbacks (a sentence stating the takeaway + the data source).

## 10. Current state

- **Astro 5**, static output, two markdown collections (`groundtruth`, `fmj`), lockfile committed, `astro check` in scripts.
- Pages: home hub, Ground Truth hub + deep-dive template, Finding My Joule hub + post template, About, 404. RSS per section (`/ground-truth/rss.xml`, `/finding-my-joule/rss.xml`), sitemap, robots.txt, favicon.
- The old `/writing` and `/projects` routes are **gone, not redirected** — no prior deployment ever served them, so there are no inbound links to preserve.
- Fonts self-hosted (Fontsource: IBM Plex Sans + IBM Plex Mono). Dark mode implemented. Head has canonical + basic OG tags (per-page OG images are a later nice-to-have). Templates are base-aware (`src/lib/url.ts`), so the github.io `/Website/` staging subpath works.
- The only JavaScript is Astro's small prefetch script (hover-triggered, `prefetchAll`) plus a few hundred bytes on article pages for copy-link / native share. View transitions are pure CSS; charts will be the only other JS, as islands.
- Styling is a single global `<style>` block in `src/layouts/Base.astro` — intentionally in one place for now; extract to CSS files if it grows.
- Home is the identity + content grid; the portrait (`src/assets/portrait.jpg`) is served through Astro's image pipeline (resized + WebP at build); projects live in `src/data/projects.ts`.
- **Portrait policy:** the repo and site carry only a display-resolution copy (600px source, 480px served). Full-resolution originals live in `private/` (gitignored) and never enter git. The portrait asset is disallowed in robots.txt to keep it out of image search. No right-click blockers: they don't work and punish readers.
- Comments (giscus) not yet wired. Deployed to GitHub Pages (staging URL); aswath.nl DNS pending.

## 11. Actions / roadmap

1. **Deploy the skeleton** — GitHub Pages via Actions, using GitHub's suggested Astro starter workflow (`.github/workflows/astro.yml`, added through repo Settings → Pages → Source: "GitHub Actions"). **Edit its `node-version` to 24 before the first run** — the starter pins Node 20 and Astro 7 requires ≥22.12. The starter injects `--site`/`--base` from the Pages settings, so the interim `*.github.io/website` URL renders correctly as staging — but its canonicals/feeds point at github.io until the custom domain is set. Serving for real = set aswath.nl as the Pages custom domain + DNS (apex A records → GitHub Pages IPs, enforce HTTPS); **that cutover waits for step 4** so day one has one substantial thing on it.
2. **Chart island proof-of-concept** — one interactive chart on the N₂O deep dive (emission factor vs. measured) using the §7 custom-element pattern, to validate it end-to-end: data asset, hydration, dark mode, fallback.
3. **UX polish pass** — remaining typography/spacing refinement on real devices, chart-page layout, anything the staging URL exposes.
4. **First real content** — the N₂O teardown with data + charts. When it's live, point aswath.nl at the site. This is the launch gate.
5. **Wire comments** — enable GitHub Discussions on the (public) repo, add click-to-load giscus to article templates.
6. **Nice-to-haves (later)** — per-page OG images, a `/now` page.

---

*Keep the bar simple: does a change make the thinking clearer and the page quieter? Then it belongs. If it adds noise or asks something of the reader, it doesn't.*
