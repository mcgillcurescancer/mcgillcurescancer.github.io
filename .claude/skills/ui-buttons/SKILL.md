---
name: ui-buttons
description: >-
  Use when designing, building, or reviewing button components. Covers button
  hierarchy (primary/secondary/tertiary), label microcopy, placement and
  ordering, sizing, interaction states, destructive action patterns, and the
  distinction between buttons and links.
---

# Buttons

Buttons trigger actions. Their design is mostly about **hierarchy** (making the right action obvious), **clarity** (saying what they do), and **feedback** (showing state). Links navigate; buttons act — don't blur the two (see foundations E4).

---

## A. Hierarchy & emphasis

**A1. Exactly one primary (high-emphasis) button per view/scope.**
The primary button answers "what does this product want me to do next?" at a glance. A view should have a single high-emphasis action; everything else is medium/low emphasis. Two equal primaries side by side destroy the hierarchy.
*Source: Carbon Design System — Button usage (https://v10.carbondesignsystem.com/components/button/usage/); SubUX — Button hierarchy (https://subux.pro/guides/article/button-hierarchy-primary-secondary-tertiary)*

**A2. Encode hierarchy with weight: filled primary, outline/tonal secondary, text/ghost tertiary.**
Primary = solid fill, high contrast. Secondary = outline or lower-saturation fill. Tertiary = text/ghost (no fill) for low-frequency or low-confidence actions. This is the shared convention across Material and Apple HIG.
*Source: LogRocket — Types of buttons (https://blog.logrocket.com/ux-design/types-of-buttons-in-ui-design/); Medium/Bootcamp — UX primitives (https://medium.com/design-bootcamp/buttons-links-selects-switches-as-ux-primitives-a-systems-approach-for-multi-archetype-fd2ec0d0e633)*

**A3. Don't over-promote. Limit to ~3 visible buttons before grouping the rest into an overflow ("…") menu.**
Turning "Learn more," "Skip," and "Start now" all into bold buttons creates friction, not freedom. Keep the primary action *out* of the overflow menu.
*Source: SubUX — Button hierarchy (https://subux.pro/guides/article/button-hierarchy-primary-secondary-tertiary); UIUX Designing — Types of buttons (https://uiuxdesigning.com/different-types-of-buttons/)*

**A4. Don't disguise a dark pattern as hierarchy.**
Styling *every* button as primary (e.g., a cancellation flow where each option looks equally weighted) deliberately confuses users and breaks trust. Make the genuine primary action the clear one.
*Source: Balsamiq — Button design best practices (https://balsamiq.com/learn/articles/button-design-best-practices/)*

**A5. The primary action should be the committed/irreversible one, styled most strongly.**
Don't give a reversible action the strong styling while the committed action is weak — users hesitate exactly where the interface should feel certain.
*Source: UIUX Designing — Types of buttons (https://uiuxdesigning.com/different-types-of-buttons/)*

**A6. Only group buttons that are actually related, and don't mix emphasis levels within a group.**
A button group should be one primary + same-emphasis companions, not a mix of primary/secondary/tertiary. Too many CTAs overwhelm.
*Source: Carbon Design System — Button usage (https://v10.carbondesignsystem.com/components/button/usage/)*

---

## B. Labels (microcopy)

**B1. Lead with a specific verb describing the outcome.**
"Save changes," "Create project," "Download PDF" — not "OK," "Yes," or "Submit." A good label can be acted on without reading surrounding text.
*Source: Medium/Bootcamp — UX primitives (https://medium.com/design-bootcamp/buttons-links-selects-switches-as-ux-primitives-a-systems-approach-for-multi-archetype-fd2ec0d0e633); SlideShare — UI tips for developers (https://www.slideshare.net/valicac/uiux-tips-tricks-for-developers)*

**B2. Avoid ambiguous "OK," double negatives, and confusing phrasing.**
The label should make the action the obvious choice.
*Source: SlideShare — UI tips for developers (https://www.slideshare.net/valicac/uiux-tips-tricks-for-developers)*

**B3. Keep an action's name consistent through the whole flow.**
The button that says "Publish" should produce a "Published" confirmation. Consistent vocabulary is signposting users rely on.
*Source: Frontend-design / interface-writing consensus (Refactoring UI–style guidance)*

**B4. Keep labels short — about two to four words.**
*Source: UIUX Designing — Types of buttons (https://uiuxdesigning.com/different-types-of-buttons/)*

---

## C. Placement & order

**C1. Put the primary action where the flow ends.**
Users expect the main action at the end of a form/flow: bottom of a modal, the right side of a two-button pair, the last step of a wizard. Place it to support forward momentum.
*Source: Balsamiq — Button design best practices (https://balsamiq.com/learn/articles/button-design-best-practices/)*

**C2. Be deliberate and consistent about button order.**
Two defensible conventions exist (primary-left for vertical-scan flows; primary-right for a Z-shaped/"confirm on the right" flow) — pick one and apply it consistently. Don't always literally put the "secondary" button second; what matters is a clear visual hierarchy.
*Source: SlideShare — UI tips for developers (https://www.slideshare.net/valicac/uiux-tips-tricks-for-developers); Carbon Design System — Button usage (https://v10.carbondesignsystem.com/components/button/usage/); referencing Nielsen — "OK–Cancel or Cancel–OK?"*

**C3. Align button groups to context.**
After a block of text, left-align (so the eye flows text → action). In empty states or when the action is the focal point, center the button.
*Source: Cieden — Button hierarchy (https://cieden.com/book/atoms/button/how-to-create-button-hierarchy)*

---

## D. Sizing & shape

**D1. Meet target-size minimums; match size to importance.**
Practical height tiers: small ≥ 32px, medium ≥ 40px, large ≥ 48px. Don't go below the 24×24px WCAG floor; prefer ~44–48px for primary/touch contexts (see foundations D1).
*Source: Cieden — Button hierarchy (https://cieden.com/book/atoms/button/how-to-create-button-hierarchy)*

**D2. Consider a minimum width and fixed widths for stacked button pairs.**
A minimum width prevents a tiny button; on mobile, giving stacked primary/secondary buttons the same fixed width creates balance and removes guesswork.
*Source: LogRocket — Types of buttons (https://blog.logrocket.com/ux-design/types-of-buttons-in-ui-design/); Uxcel — Designing UI buttons (https://app.uxcel.com/courses/ui-components-n-patterns/anatomy-iii-298)*

**D3. Apply the radius scale (see foundations D1) and the nested-radius rule when a button sits inside a card.**

---

## E. States & feedback

**E1. Design all interaction states: enabled, hover, focus, active/pressed, disabled, loading.**
States provide essential feedback. Hover/active should visibly change on interaction; focus must be clearly visible for keyboard users (see foundations C1).
*Source: LogRocket — Types of buttons (https://blog.logrocket.com/ux-design/types-of-buttons-in-ui-design/)*

**E2. Don't indicate "disabled" with low contrast alone — and prefer enabling+validating over disabling.**
A faded color isn't a reliable signal; where state matters, add a label/cue. Disabled buttons are exempt from contrast minimums but must still be perceivable. (Often better: keep the button enabled and show a validation message on click.)
*Source: TestParty — Color contrast (https://testparty.ai/blog/color-contrast-requirements); WCAG 1.4.11 via WebAIM (https://webaim.org/articles/contrast/)*

**E3. Maintain required contrast on every button and state.**
Button label vs. fill ≥ 4.5:1; outline/border and focus ring ≥ 3:1 against surroundings. Check hover/focus variants too.
*Source: Medium/Bootcamp — UX primitives (https://medium.com/design-bootcamp/buttons-links-selects-switches-as-ux-primitives-a-systems-approach-for-multi-archetype-fd2ec0d0e633); rgblind — WCAG contrast (https://rgblind.com/blog/wcag-color-contrast-requirements)*

**E4. Show a loading/processing state for actions with latency.**
Disable re-submission and show a spinner/label change so users don't double-click.
*Source: LogRocket — Types of buttons (https://blog.logrocket.com/ux-design/types-of-buttons-in-ui-design/)*

---

## F. Icons & destructive actions

**F1. Icon-only buttons need an accessible name and a tooltip.**
Always provide `aria-label` (and, for sighted users, a tooltip on hover/focus) for icon-only controls, and keep their hit area ≥44px.
*Source: TestParty — WCAG target size (https://testparty.ai/blog/wcag-target-size-guide); CSS-Tricks — tooltips (https://css-tricks.com/tooltip-best-practices/)*

**F2. Give destructive actions distinct, cautious styling and never make them the easy default.**
Use a danger style (and consider a confirmation step) for delete/remove; don't place a destructive primary where users expect a safe one.
*Source: Carbon Design System — Button usage (https://v10.carbondesignsystem.com/components/button/usage/); SubUX — Button hierarchy (https://subux.pro/guides/article/button-hierarchy-primary-secondary-tertiary)*

**F3. Don't style a navigation link as a button (or vice-versa) for non-matching behavior.**
If it changes the URL, it's a link; if it performs an action, it's a button. Mismatches break keyboard, middle-click, and screen-reader expectations.
*Source: Medium/Bootcamp — UX primitives (https://medium.com/design-bootcamp/buttons-links-selects-switches-as-ux-primitives-a-systems-approach-for-multi-archetype-fd2ec0d0e633); NN/g — Buttons vs links (https://www.nngroup.com/videos/buttons-vs-links/)*
