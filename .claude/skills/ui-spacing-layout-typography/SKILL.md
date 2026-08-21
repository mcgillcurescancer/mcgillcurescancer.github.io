---
name: ui-spacing-layout-typography
description: >-
  Use when designing or reviewing spacing, layout grids, typography, corner
  radius systems, or elevation in a UI. Covers the 8-point spacing scale,
  12-column grids, type scales, line length, and shadow/elevation conventions
  that underlie every component.
---

# Foundations: Spacing, Layout & Typography

These rules underlie every component. Get them right once and every card, form, and table inherits consistency for free.

Static fundraising-site default: build a responsive long-form page, not a dashboard. Keep body copy
in readable measure, break the page into clear full-width sections, and make the first screen answer
who the organization is, what it does, and what the visitor can do next. Use section spacing to
create a confident narrative rhythm: mission -> proof -> activities -> sponsors/students -> contact.

*Source: NN/g homepage principles (https://www.nngroup.com/articles/homepage-design-principles/);
W3C WAI designing guidance (https://www.w3.org/WAI/tips/designing/)*

---

## A. Spacing system (the 8-point grid)

**A1. Use an 8-point spacing scale for all margins, padding, and gaps.**
Define spacing in multiples of 8: `8, 16, 24, 32, 40, 48, 56, 64…`. Drop to a 4px step only for genuinely tight cases (e.g., gap between an icon and its label). A consistent base unit produces visual rhythm, makes design–dev handoff trivial (a developer can eyeball an 8px increment), and scales cleanly across device pixel ratios.
*Source: UXPin — UI Grids guide (https://www.uxpin.com/studio/blog/ui-grids-how-to-guide/); UX Planet — 8-point grid (https://uxplanet.org/everything-you-should-know-about-8-point-grid-system-in-ux-design-b69cb945b18d)*

**A2. Avoid odd-numbered spacing values like 5px.**
On devices with fractional DPI scaling (e.g., 1.5×), odd values render on half-pixels and blur. Even, 4/8-divisible values stay crisp.
*Source: UX Collective — 8 best practices for UI card design (https://uxdesign.cc/8-best-practices-for-ui-card-design-898f45bb60cc)*

**A3. Apply the "internal ≤ external" proximity rule.**
Space *within* a grouped unit should be smaller than the space *separating* it from other units, so the eye reads related items as one group (Gestalt proximity). Example: 8–16px between fields inside a section, 24–32px between sections.
*Source: Cieden — Spacing best practices (https://cieden.com/book/sub-atomic/spacing/spacing-best-practices); Ivy Forms — Form layout (https://ivyforms.com/blog/form-layout-best-practices/)*

**A4. Size icons on the same scale.**
Use icon dimensions that are multiples of 8 (16×16, 24×24, 32×32, 40×40) so they snap into the layout grid without throwing off alignment.
*Source: UX Planet — 8-point grid (https://uxplanet.org/everything-you-should-know-about-8-point-grid-system-in-ux-design-b69cb945b18d)*

**A5. Express spacing as named tokens/variables, not magic numbers.**
Store the scale as design tokens (`space-1 = 4px`, `space-2 = 8px`, …). One source of truth reduces one-off decisions and keeps the whole product coherent.
*Source: Spec.fm — 8-pt grid (https://spec.fm/specifics/8-pt-grid)*

---

## B. Layout grids

**B1. Default to a 12-column grid for page layout.**
12 divides evenly into 2, 3, 4, and 6, covering almost every layout split you'll need. Pair it with consistent gutters (a 24px / 1.5rem gutter is a common, safe default).
*Source: UXPin — UI Grids guide (https://www.uxpin.com/studio/blog/ui-grids-how-to-guide/)*

**B2. Use fluid/responsive grids (relative units).**
Column widths in `%`, `fr`, or `vw` keep the layout intact across viewports. Test down to mobile as a quality floor.
*Source: UXPin — UI Grids guide (https://www.uxpin.com/studio/blog/ui-grids-how-to-guide/)*

**B3. Let content drive the grid, not the reverse.**
Audit content types first, then pick the structure. Use alignment to the grid as the default; intentional "grid breaks" (a bleeding hero image, an oversized heading) work only because everything else is disciplined.
*Source: UXPin — UI Grids guide (https://www.uxpin.com/studio/blog/ui-grids-how-to-guide/)*

**B4. Establish a baseline grid for vertical rhythm.**
Align text baselines to an evenly spaced vertical grid (a 4px baseline paired with the 8px element grid keeps the math clean). Consistent vertical spacing is repeatedly cited as the single most impactful contributor to a "polished" feel.
*Source: Medium/Built to Adapt — 8-Point Grid: Vertical Rhythm (https://medium.com/built-to-adapt/8-point-grid-vertical-rhythm-90d05ad95032); freeCodeCamp — 8-pt grid typography (https://www.freecodecamp.org/news/8-point-grid-typography-on-the-web-be5dc97db6bc/)*

---

## C. Typography

**C1. Keep body line length to 45–75 characters; ≈66 is optimal; cap around 80.**
This is Bringhurst's classic measure. Too wide and the eye struggles to find the start of the next line; too narrow and the eye returns too often, breaking rhythm and causing line-skipping. WCAG 1.4.8 also recommends ≤80 characters. A quick check: roughly two lowercase alphabets (~52 chars) up to ~78 chars per line.
*Source: Baymard — Optimal line length (https://baymard.com/blog/line-length-readability); UXPin — 50–75 character rule (https://www.uxpin.com/studio/blog/optimal-line-length-for-readability/)*

**C2. Body text ≥ 16px.**
16px is the practical floor for comfortable reading on screens; smaller body text increases strain and fails many real users. Captions/metadata can be smaller but keep them legible and contrast-compliant.
*Source: UX Collective — UI card design (https://uxdesign.cc/8-best-practices-for-ui-card-design-898f45bb60cc)*

**C3. Use a modular type scale with named, limited sizes.**
Define a fixed set of sizes (e.g., `xs, sm, base, lg, xl, 2xl…`) from a consistent ratio rather than ad-hoc point sizes. Fewer, intentional sizes create clearer hierarchy and faster decisions.
*Source: freeCodeCamp — 8-pt grid typography (https://www.freecodecamp.org/news/8-point-grid-typography-on-the-web-be5dc97db6bc/); Prototypr — 8pt grid (https://blog.prototypr.io/the-8pt-grid-consistent-spacing-in-ui-design-with-sketch-577e4f0fd520)*

**C4. Set line-height (leading) generously for body copy; tighter for large headings.**
Body line-height in the ~1.4–1.6 range aids reading; large display text can go tighter. A practical rule: line spacing should never be less than the space between words. Scale line-heights in 4px increments to keep vertical rhythm.
*Source: Cieden — Letter spacing & line length (https://cieden.com/book/sub-atomic/typography/letter-spacing-and-line-length); freeCodeCamp (https://www.freecodecamp.org/news/8-point-grid-typography-on-the-web-be5dc97db6bc/)*

**C5. Differentiate hierarchy with size + weight, not size alone.**
A heading reads as more important through a combination of larger size, heavier weight, and spacing. Sub-headings typically sit a couple of steps below their heading; keep the relationship consistent.
*Source: UX Collective — UI card design (https://uxdesign.cc/8-best-practices-for-ui-card-design-898f45bb60cc); Prototypr (https://blog.prototypr.io/the-8pt-grid-consistent-spacing-in-ui-design-with-sketch-577e4f0fd520)*

**C6. Prefer left-aligned, ragged-right body text in LTR languages.**
Avoid justified text on the web (it creates uneven "rivers" of whitespace without proper hyphenation) and avoid centering long passages.
*Source: General typographic consensus reflected across Baymard/UXPin readability guidance above.*

**C7. For continuous-reading areas, use a readable face and reasonable letter-spacing.**
Sans-serif faces at 12–14pt+ are a safe default for UI and dyslexia-friendliness; avoid italic for long passages (hard for dyslexic readers). Don't reduce tracking so far that letters collide.
*Source: UXPin — line length & dyslexia (https://www.uxpin.com/studio/blog/optimal-line-length-for-readability/); Page One Formula — lists & typography (https://pageoneformula.com/the-role-of-bullet-points-and-numbered-lists-in-ux/)*

---

## D. Corner radius system

**D1. Scale corner radius with element size.**
Bigger surfaces take bigger radii; small controls take small radii. A concrete, system-grade scale (from the Massachusetts Design System) on a 4px unit: elements ≥44px → 8px radius; 25–43px → 4px radius; ≤24px → 2px radius. Pick one scale and apply it system-wide.
*Source: Mass.gov Design System — Corner radius & elevation (https://www.mass.gov/info-details/corner-radius-and-elevation)*

**D2. For nested shapes, use the golden formula: Inner radius = Outer radius − padding.**
Reusing the same radius on a card and the element inside it leaves an uneven, optically wrong gap at the corners. Subtracting the padding keeps the gap visually even and the curves concentric. (For multi-level nesting, reduce padding proportionally so the innermost corners don't go flat.)
*Source: 92learns — Border radius rules (https://blog.92learns.com/border-radius-rules/); Medium/Bootcamp — Nested border radius (https://medium.com/design-bootcamp/getting-your-border-radius-right-a-simple-trick-for-smooth-nested-containers-f6e0025e8c53); UX Planet — Corner radius of nested elements (https://uxplanet.org/corner-radius-of-nested-elements-in-ui-design-4c27bb24a854)*

**D3. Don't mix rounded and sharp corners on sibling elements.**
Within a group, keep the corner language consistent. Mismatched siblings read as a mistake.
*Source: 92learns — Border radius rules (https://blog.92learns.com/border-radius-rules/)*

**D4. Round images that sit inside a rounded card.**
A square image in a rounded container breaks the silhouette; clip the image to match (using the inner-radius formula).
*Source: 92learns — Border radius rules (https://blog.92learns.com/border-radius-rules/); uidesign.tips — Border-radius consistency (https://www.uidesign.tips/ui-tips/border-radius-consistency)*

**D5. Don't apply radius to everything uniformly.**
A single global radius flattens hierarchy. Use the size-based scale (D1) so the radius communicates the element's role and scale.
*Source: 92learns — Border radius rules (https://blog.92learns.com/border-radius-rules/)*

---

## E. Elevation & depth

**E1. Use elevation (shadow) to communicate layering, not decoration.**
Raise cards above the background to group content; raise menus/popovers/modals further to show they sit above the page and demand attention. Every shadow should encode a real z-order relationship.
*Source: Mass.gov Design System — Corner radius & elevation (https://www.mass.gov/info-details/corner-radius-and-elevation)*

**E2. Higher elevation → larger, softer shadow; keep levels consistent.**
Define a small set of elevation levels and reuse them across similar components so depth reads predictably.
*Source: Mass.gov Design System (https://www.mass.gov/info-details/corner-radius-and-elevation); Android CardView (https://developer.android.com/develop/ui/views/layout/cardview)*

**E3. Keep elevated content accessible.**
Elevated elements still need ≥3:1 boundary contrast and visible focus states; a shadow is not a substitute for a perceivable edge.
*Source: Mass.gov Design System (https://www.mass.gov/info-details/corner-radius-and-elevation)*
