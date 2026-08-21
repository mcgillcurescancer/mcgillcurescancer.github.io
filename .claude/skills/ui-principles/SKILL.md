---
name: ui-principles
description: >-
  Expert-grounded principles of visual design for interfaces — visual hierarchy,
  the philosophy of attention (how to make something stand out vs. how to make a
  screen feel calm), Gestalt perception, color science, and typography. This is
  about how an interface *looks and directs the eye*, NOT about specific widgets or
  components. Use this skill WHENEVER making or reviewing visual-design decisions:
  "make this look better / more polished / more professional," "improve the visual
  hierarchy," "this looks cluttered/busy/flat," "build a color palette," "choose
  fonts / fix the typography," "what should draw attention here," "make this feel
  calmer," or any judgment about emphasis, contrast, spacing, balance, or aesthetics
  on a web page, app screen, dashboard, or social feed. Pairs with the ux-principles
  skill (behavior/usability); reach for that one when the question is about flows,
  interaction, or how the product *works* rather than how it *looks*.
---

# UI Principles

A reference for the visual craft of interfaces: directing attention, organizing perception, and
making things feel intentional rather than templated. It distills durable expert sources —
**visual hierarchy** theory, the **Gestalt principles** of perception (Wertheimer and the Gestalt
school, ~100 years of research), the practical system in **Refactoring UI** (Adam Wathan & Steve
Schoger), modern **color science** (HSL, the 60-30-10 rule, WCAG contrast, color psychology), and
established **web typography**.

One idea sits underneath everything here: **hierarchy is clarity, and design is communication.**
Every visual choice either helps the eye know where to look and what relates to what — or it adds
noise. Your job is to decide what matters most and make the design *say so* visually.

For a static fundraising or sponsor-facing site, visual polish must serve trust and comprehension
before novelty. Make the mission, the proof of impact, and the next action visually obvious before
adding decorative complexity. Mature static homepages from organizations such as charity: water,
St. Jude, American Cancer Society, Stand Up To Cancer, Apple, and Stripe lean on the same pattern:
clear first-screen identity, real imagery or product/cause proof, concise sections, and restrained
CTA hierarchy. Pair this skill with `ux-principles` for donor/sponsor/student jobs, content order,
credibility, accessibility, and performance.

*Source: NN/g homepage principles (https://www.nngroup.com/articles/homepage-design-principles/);
Stanford Web Credibility Guidelines (https://credibility.stanford.edu/guidelines/index.html)*

## How to use this skill

1. **Decide the hierarchy first — what is most important on this screen?** Rank elements by
   importance before styling anything. The design's job is to make that ranking visible.
2. **Design in grayscale first.** Remove color and make hierarchy work through size, weight,
   spacing, and contrast alone (Refactoring UI's core trick). If it reads clearly in gray, color
   becomes enhancement rather than a crutch. Then add color last.
3. **Apply the pillars below.** Use the levers of hierarchy (Pillar 1), perception (Pillar 2), the
   attention/calm philosophy (Pillar 3), color (Pillar 4), and type (Pillar 5).
4. **Load reference files for depth:**
   - `references/color.md` — building real palettes in HSL, how many shades you actually need,
     contrast math and WCAG targets, and a color-psychology reference. Read it whenever choosing or
     systematizing color.
   - `references/typography-and-space.md` — type scales, line length (measure), line height,
     pairing, letter-spacing, plus spacing systems and depth/elevation. Read it for any serious
     typographic or layout-spacing work.
5. **Run the review checklist** at the end.

---

## Pillar 1 — Visual hierarchy and its levers

Visual hierarchy is the deliberate arrangement of elements so the eye moves through them in order
of importance. You control it with a small set of levers — and the most common beginner mistake is
leaning entirely on **size**.

The levers, roughly in order of how much you should reach for them:

- **Contrast** — the master lever. The eye goes to whatever differs most from its surroundings. A
  thing stands out by *contrast*, not by absolute size or brightness.
- **Size / scale** — bigger reads as more important. Useful, but overused; combine with the others.
- **Weight (font weight, fill, boldness)** — a heavier element outranks a lighter one at the same
  size. Often a better hierarchy lever for text than size.
- **Color & saturation** — a saturated or accent color pulls focus against muted surroundings;
  muted/desaturated recedes.
- **Spacing & whitespace** — space *isolates* and elevates. Generous space around an element makes
  it feel more important and gives the eye somewhere to rest.
- **Position & alignment** — top and left get seen first in LTR reading (the **F-** and
  **Z-patterns** describe common scan paths); the optical center and the start/end of a layout
  carry weight.

Key Refactoring UI insight on **text hierarchy**: don't make secondary text light *gray on white* —
that's just low contrast and looks washed out. To de-emphasize text on a colored background, use
white text at reduced opacity so the background bleeds through. To create three tiers of text, vary
**color/weight**, not just size: important = darker/bolder, secondary = lighter, tertiary = lighter
still. Emphasize by *de-emphasizing the rest*.

For **actions**, encode hierarchy explicitly: **primary** action = solid, high-contrast fill;
**secondary** = outline or low-contrast; **tertiary** = styled like a link. Give bold/red treatment
to a destructive action only when it is genuinely the primary action (e.g., a confirmation dialog).

---

## Pillar 2 — Gestalt principles (how the eye groups things)

Gestalt psychology explains how people automatically organize visual input into wholes. These are
the physics of layout — work *with* them and structure reads instantly; ignore them and the same
elements feel chaotic.

- **Proximity** — things placed near each other are perceived as related. The strongest, cheapest
  grouping tool: control spacing *between* groups vs. *within* groups, and you often don't need
  borders or boxes at all. (A label belongs to the field it's nearest.)
- **Similarity** — elements sharing color, shape, or size are seen as a set. Keep interactive
  elements visually consistent so users learn "this look = clickable." Conversely, make something
  *dissimilar* to pull it out of the group (this is how CTAs and links earn attention).
- **Common region** — elements inside a shared boundary (a card, a panel) group together, even
  overriding proximity. Cards are powerful *because* of this.
- **Closure** — the mind completes incomplete shapes; you can imply form without drawing every edge.
- **Continuity** — elements on a line or smooth curve are seen as related; alignment creates
  invisible lines that guide the eye.
- **Figure–ground** — the eye separates a focal "figure" from its "background." Maintain clear
  figure-ground contrast (e.g., a modal over a dimmed backdrop) or the composition feels flat and
  ambiguous and raises cognitive load.
- **Prägnanz (simplicity)** — people read ambiguous visuals in the simplest possible form. Favor
  simple, regular shapes the eye can parse at a glance.

Practical corollary: **use space and grouping before you use lines and boxes.** Most borders can be
replaced by proximity, alignment, and a shared background — fewer borders, cleaner design.

---

## Pillar 3 — The philosophy of attention: stand out vs. stay calm

The user asked the deepest UI question: *how do you get attention and keep it, and what makes a
screen calm vs. loud?* The governing principle:

> **Attention is a budget. Emphasis is relative. If everything is emphasized, nothing is.**

To make ONE thing stand out (focal point):
- Give it the **most contrast** in the frame — in color, size, weight, or isolation. The
  **Von Restorff (isolation) effect**: the element that differs from its peers is the one noticed.
- **Surround it with calm.** A focal point needs quiet around it. You create a focal point as much
  by suppressing competitors as by amplifying the hero. Reduce the visual weight of everything else.
- **Use one accent color sparingly** (see 60-30-10 in Pillar 4). An accent works *because* it's
  rare. Used everywhere, it stops signaling.
- **Place it where the eye lands** — along the natural scan path, with whitespace pointing at it.

To make a screen feel CALM:
- **Whitespace is the primary calming tool.** Generous, consistent negative space lets the eye rest
  and signals confidence (Google's spare home page is the canonical example). Calm is mostly the
  *absence* of competing demands.
- **Limit focal points.** Too many "look here!" elements create tension and decision fatigue. Pick
  one primary focus per view; let the rest recede.
- **Reduce contrast among non-essentials.** Mute secondary content; lower saturation; soften
  borders. Lower overall contrast variance reads as serene; high variance reads as energetic/loud.
- **Constrain the palette and the type scale.** Few colors, few sizes, consistent spacing — order
  itself feels calm. Visual noise comes from unjustified variety.
- **Soften edges and motion.** Gentle shadows over hard lines; subtle, purposeful animation over
  flashy movement.

Loud, energetic UIs (a sale page, a game, a youth-brand feed) deliberately raise contrast,
saturation, density, and motion. Calm, trustworthy UIs (banking, productivity, reading) lower them.
Neither is "better" — match the emotional register to the product's job. The skill is *control*:
choosing where energy goes rather than letting it spray everywhere.

---

## Pillar 4 — Color (science, not vibes)

Headlines below; full method (palette construction, shade counts, contrast math, psychology table)
in `references/color.md`.

- **Think in HSL, not hex/RGB.** HSL (hue, saturation, lightness) maps to how the eye actually
  perceives color, so you can reason about and build relationships between colors. (Hue = position
  on the wheel; saturation = vividness; lightness = how light/dark.)
- **You need more colors than you think.** A real UI needs a full **grey scale** (8–10 shades for
  text, backgrounds, borders, controls), one or more **primary** colors with 5–10 shades each, and
  **accent/semantic** colors (success, warning, error, info) with their own shades. Five hex codes
  won't build anything real.
- **Avoid pure black (#000) and pure white extremes for large areas.** True black looks unnatural
  on screen; start from a very dark, slightly-hued grey and step up to white. Softer = more natural.
- **60-30-10 rule** for balance: ~60% dominant/neutral, ~30% secondary, ~10% accent. The accent —
  the rarest — is what carries CTAs and emphasis, which is exactly why it must be reserved.
- **Contrast is an accessibility requirement, not a preference.** Meet **WCAG**: at least **4.5:1**
  for normal text, **3:1** for large text and meaningful UI elements (AA). Verify with a contrast
  checker. **Never use color as the only way to convey meaning** (pair it with text/icon/shape).
- **Color carries emotion and meaning,** but it's culture- and context-dependent — blue often reads
  trustworthy/calm, red urgent/alert, green growth/success, purple premium. Use these as starting
  hypotheses, and let brand and contrast/accessibility constraints win ties. (Reference table in
  `references/color.md`.)

---

## Pillar 5 — Typography

Headlines below; full guidance (type scales, measure, pairing, letter-spacing) in
`references/typography-and-space.md`. Good typography is invisible — it just makes reading easy.

- **Establish a type scale.** Pick a small set of sizes from a consistent scale rather than ad-hoc
  values; this creates rhythm and hierarchy. Don't carry hierarchy on size alone — combine with
  weight and color (see Pillar 1).
- **Limit font families** to ~2 (often one workhorse family with multiple weights). More than 2–3
  feels disorganized. Pairings usually contrast a display/heading face with a readable body face.
- **Measure (line length): ~45–75 characters per line**, ~66 being the classic sweet spot. Too long
  tires the eye; too short breaks rhythm. Control column width, not just font size.
- **Line height ~1.4–1.6 for body text**; tighter (~1.1–1.3) for large headings, looser for small
  text. Bigger text needs proportionally less leading.
- **Body size ≥16px** (1rem) as a floor; ~18px is comfortable for desktop reading. Use relative
  units (rem/em) and fluid type (`clamp()`) so text scales across devices.
- **Set body text flush left** (ragged right). Left alignment gives the eye a constant return point.
  Don't justify on the web; don't center long-form text (center only short, independent blocks).
- **Increase letter-spacing for ALL-CAPS and small labels**; leave normal sentence-case alone (its
  spacing is already optimized). Avoid font weights under 400 for UI body text.

---

## Review checklist

- [ ] **Hierarchy is unmistakable** — squint or grayscale the screen; the most important element is
  still obviously first.
- [ ] **One clear focal point per view** — emphasis is relative; the rest recedes.
- [ ] **Grouping reads instantly** — proximity/common-region make relationships clear; borders used
  only where space couldn't do the job.
- [ ] **The screen has room to breathe** — whitespace is intentional and consistent; nothing is
  cramped.
- [ ] **Color is systematic** — HSL-based, full grey + primary + accent ramps; accent is rare;
  follows ~60-30-10; no pure black on large fills.
- [ ] **Contrast passes WCAG** (4.5:1 text / 3:1 large & UI), and meaning never relies on color
  alone.
- [ ] **Typography is calm and readable** — limited families, sensible scale, ~45–75 char measure,
  comfortable line height, left-aligned body, ≥16px.
- [ ] **The emotional register fits the product** — energy/contrast/density deliberately tuned
  (calm vs. loud) to the job, not accidental.
