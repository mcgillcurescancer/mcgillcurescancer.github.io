---
name: ui-color-contrast-accessibility
description: >-
  Use when checking or implementing color contrast, accessibility compliance
  (WCAG), focus indicators, keyboard navigation, target sizing, or ARIA
  semantics. Covers contrast ratios for text and UI elements, color-alone
  failures, focus/keyboard rules, and status message announcements.
---

# Foundations: Color, Contrast & Accessibility

Cross-cutting rules that apply to *every* component. These are floors, not preferences. Low contrast is the single most common accessibility failure on the web — it appears on roughly 80%+ of homepages (WebAIM Million), and contrast is objectively measurable, which is why it dominates ADA-related complaints.

---

## A. Color contrast (WCAG)

**A1. Normal text needs ≥ 4.5:1 contrast; large text needs ≥ 3:1 (Level AA).**
"Large" means ≥ 24px (18pt), or ≥ 18.66px (14pt) bold. This is WCAG 2.x Success Criterion 1.4.3.
*Source: WebAIM — Contrast & Color (https://webaim.org/articles/contrast/); TestParty — Color contrast requirements (https://testparty.ai/blog/color-contrast-requirements)*

**A2. Non-text UI elements need ≥ 3:1 contrast against adjacent colors.**
This covers button/input boundaries, meaningful icons, form-field borders, and focus indicators (WCAG 1.4.11 Non-text Contrast). A borderless light-gray input on white frequently fails this — give it a visible 3:1 border.
*Source: WebAIM (https://webaim.org/articles/contrast/); rgblind — WCAG 2.2 contrast (https://rgblind.com/blog/wcag-color-contrast-requirements)*

**A3. Placeholder text is still text — it needs 4.5:1.**
The popular `#999` on white is ~2.85:1 and fails. The lightest gray that passes AA on white is ≈ `#767676`. (This is one more reason placeholders must never carry essential information.)
*Source: rgblind — WCAG 2.2 contrast (https://rgblind.com/blog/wcag-color-contrast-requirements); StudioLimb — WCAG color guide (https://www.studiolimb.com/guides/wcag-color-contrast-guide.html)*

**A4. Aim for AAA (7:1 / 4.5:1) where feasible.**
AA is the legal/professional baseline; higher contrast helps everyone, especially in sunlight or for low-vision users. Treat AAA as an enhancement, not the baseline.
*Source: TestParty (https://testparty.ai/blog/color-contrast-requirements)*

**A5. Test light and dark themes independently.**
A pairing that passes in light mode can fail in dark mode (and vice versa). Re-verify both. Note pure `#fff` text on near-black can be too harsh — soften slightly while keeping ratios.
*Source: web-accessibility-checker — Color contrast guide (https://web-accessibility-checker.com/en/blog/color-contrast-wcag-guide); StudioLimb (https://www.studiolimb.com/guides/wcag-color-contrast-guide.html)*

**A6. Watch contrast killers: opacity, gradients, and text-over-image.**
Reduced opacity and gradient overlays change the *effective* color and can quietly drop you below threshold. Test the final rendered color; for text over imagery, add a solid/semi-opaque backing.
*Source: Accessibility Assistant — WCAG contrast (https://accessibilityassistant.com/blog/accessibility-insights/wcag-2-colour-contrast-accessibility-guidelines/)*

**A7. Disabled and pure-decoration elements are exempt from contrast minimums** — but users should still perceive that a disabled element exists. Don't signal "disabled" with low contrast *alone*; pair it with a label or icon where the state matters.
*Source: WebAIM (https://webaim.org/articles/contrast/); TestParty (https://testparty.ai/blog/color-contrast-requirements)*

---

## B. Never rely on color alone (WCAG 1.4.1)

**B1. Color must never be the only signal for meaning or state.**
Pair every color cue with a second channel: text, an icon, an underline, a shape, or a pattern. Roughly 1 in 12 men has some color-vision deficiency.
*Source: WebAIM (https://webaim.org/articles/contrast/); AllAccessible — Color contrast (https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)*

**B2. Links in body text need a non-color differentiator.**
Underline links (at least on hover/focus) or ensure ≥3:1 contrast between the link color and surrounding text *and* a non-color cue. A colored-only link inside a paragraph fails 1.4.1.
*Source: WebAIM (https://webaim.org/articles/contrast/)*

**B3. Error states need an icon and/or text, not just red.**
Also ensure the "error red" itself meets 4.5:1 against its background — many default error reds on white don't.
*Source: rgblind (https://rgblind.com/blog/wcag-color-contrast-requirements); LogRocket — form validation UX (https://blog.logrocket.com/ux-design/ux-form-validation-inline-after-submission/)*

---

## C. Focus & keyboard

**C1. Every interactive element must have a visible focus indicator (WCAG 2.4.7).**
A keyboard user must always be able to see where they are. Provide a clear focus ring (e.g., `:focus-visible` with `outline` + offset) with ≥3:1 contrast against adjacent colors. Never remove focus outlines without replacing them.
*Source: WebAIM (https://webaim.org/articles/contrast/); a11y-examples — focus/target sizing (https://a11y-examples.com/examples/target-sizing/)*

**C2. All functionality must be operable by keyboard, with a logical focus order.**
Tab order should follow visual/reading order (WCAG 2.4.3). Don't trap keyboard focus except intentionally inside a modal (and always provide an Escape route).
*Source: W3C ARIA APG — Dialog pattern (https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/); UXPin — accessible modals (https://www.uxpin.com/studio/blog/how-to-build-accessible-modals-with-focus-traps/)*

**C3. Match hover and focus affordances.**
Anything revealed/styled on hover must also be reachable and styled on keyboard focus. Hover is unavailable on touch and to keyboard-only users.
*Source: NN/g — Menu design checklist, guideline #13 (https://www.nngroup.com/articles/menu-design/); CSS-Tricks — Tooltip best practices (https://css-tricks.com/tooltip-best-practices/)*

---

## D. Target size & spacing

**D1. Minimum target size: 24×24px (WCAG 2.5.8 AA); recommended 44×44px / 48×48dp.**
24×24 CSS px is the AA floor (with adequate spacing). For comfort, follow Apple HIG (44×44pt) / WCAG 2.5.5 AAA (44×44) / Material (48×48dp). A fingertip covers ~40–50px, so under-spec targets cause mis-taps.
*Source: a11y-examples (https://a11y-examples.com/examples/target-sizing/); WebAbility — Target size (https://www.webability.io/glossary/target-size); TestParty — mobile a11y (https://testparty.ai/blog/mobile-accessibility-patterns)*

**D2. Small icon? Expand the hit area, not necessarily the glyph.**
A 24px icon can keep its visual size while the clickable/tappable area is padded out to 44px. Center the icon inside the padded target.
*Source: TestParty — WCAG target size guide (https://testparty.ai/blog/wcag-target-size-guide)*

**D3. Space targets apart (≈8px minimum) — size alone isn't enough.**
Even 24px targets fail in practice if packed edge-to-edge: a thumb bridges two. Give adjacent interactive elements breathing room.
*Source: Flexy — Target size tips (https://www.flexy.global/resources/digital-product-design/master-digital-product-design-ux-tips-for-target-size)*

---

## E. Status messages, motion, and semantics

**E1. Announce dynamic changes to assistive tech without moving focus (WCAG 4.1.3).**
Use ARIA live regions (`role="status"` / `aria-live="polite"` for non-urgent; `role="alert"` / `aria-live="assertive"` for urgent) so screen-reader users hear validation results, toasts, and updates.
*Source: DSP — Toast a11y (https://designsystemproblems.com/accessibility-compliance/toast-notification-accessibility/); StudyRaid — toast a11y (https://app.studyraid.com/en/read/11743/372076/accessibility-considerations)*

**E2. Respect `prefers-reduced-motion`.**
Offer non-animated paths for users who request reduced motion; cut or minimize transitions and parallax for them.
*Source: StudyRaid (https://app.studyraid.com/en/read/11743/372076/accessibility-considerations)*

**E3. Use native semantic HTML and correct roles first.**
A real `<button>`, `<a>`, `<ul>`, `<nav>`, `<dialog>`, `<table>` etc. carries built-in semantics, keyboard behavior, and focus management that ARIA-on-a-`<div>` only approximates. Reach for ARIA only to fill genuine gaps (WCAG 4.1.2 Name, Role, Value).
*Source: W3C ARIA APG (https://www.w3.org/WAI/ARIA/apg/); MDN, referenced via UX Patterns for Developers (https://uxpatterns.dev/)*

**E4. Distinguish buttons from links.**
Links navigate (change URL/location); buttons perform actions. Style and code them accordingly — it affects keyboard behavior (Enter vs Space), right-click/open-in-new-tab expectations, and screen-reader announcements.
*Source: NN/g — Buttons vs. Links (https://www.nngroup.com/videos/buttons-vs-links/)*
