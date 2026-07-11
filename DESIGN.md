# aswath.nl — Design & Build Brief

A brief for anyone (human or model) working on this site. It defines *what the site is and how it should feel*, and leaves implementation detail to you. When in doubt, prefer **less**.

---

## 1. What this is

A personal site for Aswath Subramanian. Not a portfolio funnel, not a startup landing page — a body of work under his own name. The organising idea:

> **"Me, not just my one topic."** An engineer who looks for where promises break — in scale-up, in emissions numbers, in the claims we build systems on.

The site should read as **reflection, not sales**. The reader should come away thinking "this person has unusually good judgment," having never been pitched. **No solicitation anywhere** — the one sanctioned exit is a quiet contact line (About page + footer): availability, not a pitch.

**Who reads this.** Two readers, both first-class: (a) engineers and technical peers, who must find the work credible; (b) curious non-specialists, who must be able to follow it. Every piece passes both tests or it isn't done.

Working tagline (home): *"I look for where engineering promises break — in scale-up, in emissions numbers, in the claims we build systems on."*

## 2. Voice

- Understated, rigorous, honest — including about failure. No marketing tone, no hype, no "thanks for reading," no engagement bait.
- **Not** "write for a technical colleague." Write so an engineer finds it credible **and** a smart outsider can follow: lead with the plain-English stakes, define jargon on first use, keep the depth — put it below the lede, don't dilute it.
- **Ground Truth** register: sober, precise, technical — but legible per the rule above.
- **Finding My Joule** register: looser, warmer, a little dry wit is fine. Any register from a quick thought to a considered essay.
- **State scope, never schedule.** Copy describes what a section or piece covers — never what is coming next. No "to follow," "coming soon," "more on this later." Unfulfilled promises turn *silence allowed* into *silence noticed*.
- The no-guilt ethos ("no schedule, no metrics, silence allowed") is a **constraint on the system, not language for the reader**. It never appears as site copy.

## 3. Information architecture

```
/                    Home    — quiet hub: the lens line, then two signposts + latest of each
/ground-truth        Ground Truth — flagship. Subtitle: "measuring superpollutants honestly."
                                    Deep dives by gas.
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

**The balance to protect:** focus lives in Ground Truth (the sharp specialist perch); breadth lives in Finding My Joule (the human hinterland). They are separate front doors so breadth never dilutes focus.

## 4. Design principles

1. **Minimal, not flashy.** Substance over chrome. Fewer sections, fewer elements. If a flourish doesn't earn its place, cut it.
2. **Warm, not hungry.** Built for someone who works in bursts — long gaps are normal and must never feel like failure. No streaks, no "last posted," nothing that guilts. (System design only — see §2.)
3. **Own the work.** Static, portable, git-versioned, no lock-in, **no third-party requests watching the reader** — fonts self-hosted, no CDNs, no trackers. The one exception is comments (§6), and only after an explicit reader action.
4. **Fast and quiet.** Ship almost no JavaScript; hydrate only where a chart needs it.
5. **Show, don't sell.** The quality of thinking is the only marketing.

## 5. Visual direction

A calm, editorial, "document slab" feel: a single reading column, generous whitespace, strong typographic hierarchy, almost no decoration.

- **Layout:** centred single column, ~680px measure for reading. Everything lives in this slab.
- **Type:** Inter, **self-hosted** (Fontsource woff2, weights 400/500/600). Any future face must also be self-hostable — no font CDNs, per principle 3. A restrained serif for body remains an open invitation.
- **Colour:** tokens as CSS custom properties, both themes required, WCAG-AA verified:
  - Light: ink `#1a1a1a` on warm off-white `#fdfdfb`, muted `#6f6f6f` (4.9:1), hairline `#e6e6e3`.
  - Dark (`prefers-color-scheme`): ink `#e7e7e4` on `#151514` (14.8:1), muted `#a3a39e` (7.2:1), hairline `#333330`.
  - **Muted is for metadata only** (dates, status, nav, footer, captions) — never for leads, theses, or anything the reader must read.
- **Headings:** a real scale that makes raw markdown safe by default — h1 29 / h2 22 / h3 19 / h4 17, roughly 2× space above vs below. The uppercase label style is an explicit `.kicker` class used deliberately on hub pages — never the default meaning of `h2`.
- **Links:** in-prose links must be findable at rest — muted underline (≥3:1 against bg), ink underline on hover. One restrained accent is allowed if it stays understated.
- **The tagline is deliberately the home h1.** The one loud moment on the site; don't "fix" it.
- **Rhythm:** big vertical spacing between sections; small, consistent spacing within. Let it breathe.
- **Decoration:** hairline rules, not boxes/cards/shadows. No gradients, no hero imagery, no icons-as-ornament.

## 6. Components & patterns

- **Nav:** name (→ home) on the left, three quiet text links right: Ground Truth · Finding My Joule · About. No hamburger theatrics; wrap gracefully on mobile.
- **Home hub:** lens line, one orienting sentence, then the two sections each as a short block with a one-liner + its latest entry. Nothing else.
- **Section index:** a plain list of entries — title left, date (or status) right, hairline between. No excerpts, no thumbnails.
- **Article / deep dive:** title, date/status, then prose. Comfortable measure, clear headings. Dates are `<time datetime>` elements, human-readable ("20 Jan 2026"), one shared formatter.
- **Markdown must be safe by default:** tables (scroll within the column, never break it), code blocks, images, blockquotes, `hr`, captions — all styled in the slab's language.
- **Status tag:** deep dives can be marked `in progress` etc. — plain text, not a badge.
- **Comments:** giscus (GitHub Discussions) at the end of article pages, **click-to-load** — no third-party request unless the reader asks for it. Comments only: giscus reactions off. Not yet wired (roadmap).
- **Footer:** one line — copyright + quiet contact (`contact@aswath.nl`). Availability, not solicitation.
- **Naming note:** "Finding My Joule" is opaque cold; any surface that shows a section name without context (feed titles, OG cards) carries its one-line gloss, e.g. *"Finding My Joule — a wider notebook."*

## 7. Interactive charts (Ground Truth)

The one place with real interactivity. Deep dives embed **interactive, performant charts** built from data files in the repo.

- **Mechanism:** collections stay plain `.md`. Charts are **custom elements** written directly in markdown (e.g. `<n2o-chart data-src="/data/n2o-2min.json">`), upgraded by a small vanilla script that hydrates on an `IntersectionObserver` (the `client:visible` pattern without a framework). No MDX, no UI framework.
- **Library: uPlot** (~12 KB gzipped, canvas, built for high-density time series). Not ECharts, not SVG/Plotly — they don't fit "almost no JavaScript" at hundreds of thousands of points.
- **Data ships as separate static assets** (JSON/CSV fetched at hydration) — never bundled into JS. Large series get downsampled tiers.
- **Dark mode:** canvas can't read CSS variables — read the theme via `matchMedia('(prefers-color-scheme: dark)')` at init, listen for changes, redraw.
- **No layout shift:** chart containers reserve a fixed height before hydration.
- **JS off / not yet loaded:** the element's fallback content is a sentence stating the takeaway + the data source.

## 8. Non-goals (do not add)

No solicitation or CTAs beyond the quiet contact line. No newsletter pop-ups or subscribe nags. **No analytics of any kind** — no client scripts, no host-side analytics enabled. No likes, reactions, share buttons, or counts of anything (comments via giscus are the one social carve-out). No tags/categories/search (for now). No cookie banners beyond legal necessity. No cards/shadows/gradients. The site is a body of work, not a funnel.

## 9. Accessibility & performance

Semantic HTML, real headings, `<time>` for dates, a skip-to-content link, keyboard-navigable, WCAG-AA contrast in **both** themes (verified values in §5), `prefers-color-scheme` + `color-scheme`, minimal JS, fast LCP (self-hosted fonts, `font-display: swap`). Charts need accessible fallbacks (a sentence stating the takeaway + the data source).

## 10. Current state

- **Astro 5**, static output, two markdown collections (`groundtruth`, `fmj`), lockfile committed, `astro check` in scripts.
- Pages: home hub, Ground Truth hub + deep-dive template, Finding My Joule hub + post template, About, 404. RSS per section (`/ground-truth/rss.xml`, `/finding-my-joule/rss.xml`), sitemap, robots.txt, favicon.
- The old `/writing` and `/projects` routes are **gone, not redirected** — no prior deployment ever served them, so there are no inbound links to preserve.
- Fonts self-hosted (Fontsource). Dark mode implemented. Head has canonical + basic OG tags (per-page OG images are a later nice-to-have).
- Styling is a single global `<style>` block in `src/layouts/Base.astro` — intentionally in one place for now; extract to CSS files if it grows.
- Comments (giscus) not yet wired. Not yet deployed.

## 11. Actions / roadmap

1. **Deploy the skeleton** — Cloudflare Pages / Netlify (static, off the aswath-subramanian GitHub account), building from the lockfile (`npm ci && npm run check && npm run build`). Staging URL first; **aswath.nl DNS cutover waits for step 4** so day one has one substantial thing on it.
2. **Chart island proof-of-concept** — one interactive chart on the N₂O deep dive (emission factor vs. measured) using the §7 custom-element pattern, to validate it end-to-end: data asset, hydration, dark mode, fallback.
3. **UX polish pass** — remaining typography/spacing refinement on real devices, chart-page layout, anything the staging URL exposes.
4. **First real content** — the N₂O teardown with data + charts. When it's live, point aswath.nl at the site. This is the launch gate.
5. **Wire comments** — enable GitHub Discussions on the (public) repo, add click-to-load giscus to article templates.
6. **Nice-to-haves (later)** — per-page OG images, a `/now` page.

---

*Keep the bar simple: does a change make the thinking clearer and the page quieter? Then it belongs. If it adds noise or asks something of the reader, it doesn't.*
