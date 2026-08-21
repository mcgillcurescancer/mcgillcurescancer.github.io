---
name: ui-cards-containers
description: >-
  Use when building or reviewing card components, panels, popovers, sheets, or
  any rectangular container that groups content. Covers how to visually
  distinguish a container from its background, the nested corner-radius formula,
  padding systems, elevation conventions, and accessible interactive card
  patterns.
---

# General Windows & Cards (Containers, Radius, Spacing, Elevation)

Rules for any rectangular container that groups content: cards, panels, popovers, sheets, and "windows." This is where the user's corner-radius intuition lives — *inner radius should harmonize with the outer radius.* These principles lean on the foundations file (sections D and E); the most container-specific rules are collected here.

---

## A. Distinguishing the container from the background

**A1. Separate a card from its background with either an outline or elevation — and enough contrast.**
Two clean options: **outlined** (a border) or **elevated** (a shadow). Either way, the boundary must be perceivable (≥3:1 non-text contrast). Don't rely on a near-identical fill alone.
*Source: UX Collective — 8 best practices for UI card design (https://uxdesign.cc/8-best-practices-for-ui-card-design-898f45bb60cc); WebAIM — non-text contrast (https://webaim.org/articles/contrast/)*

**A2. Use elevation to express layering, not decoration.**
Raise cards above the page to group content; raise popovers/menus/sheets higher to show they float above. Every shadow should encode a real z-order; avoid shadows that mean nothing.
*Source: Mass.gov Design System — Corner radius & elevation (https://www.mass.gov/info-details/corner-radius-and-elevation)*

**A3. Keep elevation levels few and consistent.**
Define a small set of levels (e.g., card / raised / overlay / modal) and reuse them so depth reads predictably. Higher level → larger, softer shadow.
*Source: Mass.gov Design System (https://www.mass.gov/info-details/corner-radius-and-elevation); Android CardView (https://developer.android.com/develop/ui/views/layout/cardview)*

---

## B. Corner radius (the headline rules)

**B1. Scale the container's radius to its size, from one shared scale.**
On a 4px scale (Massachusetts Design System): surfaces ≥44px → 8px radius; 25–43px → 4px; ≤24px → 2px. Big panels can take larger radii — just keep the whole product on one scale.
*Source: Mass.gov Design System — Corner radius & elevation (https://www.mass.gov/info-details/corner-radius-and-elevation)*

**B2. Nested elements: Inner radius = Outer radius − padding.**
This is the rule behind "make the inside corners match the outside." Reusing the card's radius on an inner button/image leaves an optically uneven gap; subtracting the padding keeps the curves concentric and the gap even. For deep nesting, reduce padding proportionally so inner corners don't flatten out.
*Source: 92learns — Border radius rules (https://blog.92learns.com/border-radius-rules/); UX Planet — Corner radius of nested elements (https://uxplanet.org/corner-radius-of-nested-elements-in-ui-design-4c27bb24a854); Medium/Alexandra Basova — Consistent radius system (https://medium.com/design-bootcamp/building-a-consistent-corner-radius-system-in-ui-1f86eed56dd3)*

**B3. Don't apply one radius to everything, and don't mix rounded with sharp on siblings.**
A uniform global radius flattens hierarchy; mismatched sibling corners read as a bug. Let radius track element size/role, kept consistent within a group.
*Source: 92learns — Border radius rules (https://blog.92learns.com/border-radius-rules/)*

**B4. Clip inner images to the container's inner radius.**
A square image inside a rounded card breaks the silhouette — round its (relevant) corners to match.
*Source: 92learns (https://blog.92learns.com/border-radius-rules/); uidesign.tips — Border-radius consistency (https://www.uidesign.tips/ui-tips/border-radius-consistency)*

**B5. Decide inner vs. outer borders with engineering before computing radii.**
Whether a border is drawn inside or outside the box shifts the effective radius math; agree on it so borders + radii stay correct.
*Source: Medium/Alexandra Basova — Consistent radius system (https://medium.com/design-bootcamp/building-a-consistent-corner-radius-system-in-ui-1f86eed56dd3)*

---

## C. Padding & internal spacing

**C1. Use a consistent padding scale built on the base unit (4/8px).**
Padding creates visual grouping and hierarchy; define it as a system, not per-card. A 4px base unit is standard; avoid odd values that blur on fractional-DPI screens.
*Source: UX Collective — UI card design (https://uxdesign.cc/8-best-practices-for-ui-card-design-898f45bb60cc)*

**C2. Apply internal ≤ external spacing.**
Space between elements *inside* the card should be tighter than the gap *between* cards, so each card reads as one unit (Gestalt proximity). See foundations A3.
*Source: Cieden — Spacing best practices (https://cieden.com/book/sub-atomic/spacing/spacing-best-practices)*

**C3. Define the card's padding by its largest inner content block.**
A practical method: take the largest inner square/content area and add the card padding to derive the outer dimensions — this keeps padding consistent across cards of varying size.
*Source: Medium/Alexandra Basova — Consistent radius system (https://medium.com/design-bootcamp/building-a-consistent-corner-radius-system-in-ui-1f86eed56dd3)*

---

## D. Typography & content inside containers

**D1. Keep body text ≥16px and maintain a balanced size hierarchy.**
Within a card, set headline, subtitle (a couple steps smaller than the headline), and body (≥16px) with consistent ratios. Correctly chosen sizes make a card feel visually balanced; too-small fonts make it hard to perceive.
*Source: UX Collective — UI card design (https://uxdesign.cc/8-best-practices-for-ui-card-design-898f45bb60cc)*

**D2. Respect line length even inside containers.**
Don't let a wide card stretch body text past ~75–80 characters per line; constrain the text column. (See foundations C1.)
*Source: Baymard — Line length (https://baymard.com/blog/line-length-readability)*

**D3. Group related content; one card = one coherent idea.**
Cards exist to bundle related content for scanning. Keep each card focused; if it's doing several unrelated jobs, split it.
*Source: Medium/Harsh Khatri — Card-based UI (https://mailharshkhatri.medium.com/building-a-card-based-ui-f781dac29b53)*

---

## E. Interactive containers

**E1. If the whole card is clickable, make that obvious and accessible.**
Provide hover/focus states, a single clear primary action or destination, and proper semantics (a real link/button, not a bare `div` with an onclick). Don't bury multiple competing click targets in one card without clear affordances.
*Source: a11y/semantics consensus (foundations E3–E4); UXPin — card patterns reflected in card sources above.*

**E2. Keep interactive elements inside cards within target-size and contrast minimums.**
Buttons, links, and icons in a card still obey the global rules (44px targets, 4.5:1 text, 3:1 boundaries/focus).
*Source: Mass.gov Design System (https://www.mass.gov/info-details/corner-radius-and-elevation); WebAIM (https://webaim.org/articles/contrast/)*
