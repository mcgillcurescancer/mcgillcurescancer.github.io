---
name: ui-tooltips
description: >-
  Use when building or reviewing tooltip components or contextual help patterns.
  Covers what content belongs in a tooltip (supplemental only, never essential),
  hover+focus triggering, the three WCAG 1.4.13 requirements (dismissible,
  hoverable, persistent), ARIA wiring, and when to use a popover instead.
---

# Tooltips & Contextual Help

A tooltip is a small, supplemental hint shown on hover or focus. Its golden rule is restraint: tooltips are for **non-essential, supplementary** text only. Anything a user *needs* to complete a task must live in the persistent UI, not hidden behind a hover. Most tooltip bugs are accessibility failures, so the WCAG and ARIA rules below are not optional.

Static fundraising-site default: do not hide essential explanation in tooltips. Donation use,
sponsor benefits, event dates, research affiliations, and student commitments should be visible in
the page content. Tooltips are acceptable only for tiny supplemental clarifications on icons or
abbreviations.

---

## A. What belongs in a tooltip (and what never does)

**A1. Put only short, supplemental, text-only hints in a tooltip.**
A tooltip clarifies or labels — e.g., what an icon button does, or what a term means. Keep it to a phrase or a sentence or two. If the content needs paragraphs, it isn't a tooltip.
*Source: LogRocket — Designing better tooltips (https://blog.logrocket.com/ux-design/designing-better-tooltips-improved-ux/); CSS-Tricks — Tooltip best practices (https://css-tricks.com/tooltip-best-practices/)*

**A2. Never hide essential or task-critical information in a tooltip.**
Required instructions, validation rules a user must follow, warnings, error recovery steps — none of these belong behind a hover. Tooltips are easy to miss, vanish quickly, and are unreliable on touch. If a user must read it to succeed, make it always-visible help text instead.
*Source: LogRocket — Designing better tooltips (https://blog.logrocket.com/ux-design/designing-better-tooltips-improved-ux/); eBay MIND Patterns — Tooltip accessibility (https://opensource.ebay.com/evo-web/components/tooltip/accessibility)*

**A3. Never put interactive controls (links, buttons, form fields) inside a tooltip.**
A true tooltip is non-interactive. If you need actionable content or rich markup, you want a different pattern — a **popover / toggletip / infotip** that's explicitly invoked and properly focus-managed, not a hover tooltip.
*Source: CSS-Tricks — Tooltip best practices (https://css-tricks.com/tooltip-best-practices/); eBay MIND Patterns — Tooltip accessibility (https://opensource.ebay.com/evo-web/components/tooltip/accessibility)*

**A4. The tooltip should describe its trigger element only.**
A tooltip is a description *of* the thing it's attached to. Keep its content scoped to that element so the relationship is unambiguous to sighted and screen-reader users alike.
*Source: eBay MIND Patterns — Tooltip accessibility (https://opensource.ebay.com/evo-web/components/tooltip/accessibility)*

---

## B. Triggering & timing

**B1. Show on hover AND on keyboard focus.**
Keyboard users tab to a control and never hover. If the tooltip only appears on mouse hover, its content is invisible to them. Bind both `mouseenter`/`mouseleave` and `focus`/`blur`.
*Source: CSS-Tricks — Tooltip best practices (https://css-tricks.com/tooltip-best-practices/); Setproduct — Tooltip UI design (https://www.setproduct.com/blog/tooltip-ui-design)*

**B2. Add a small show-delay (~500ms) before appearing.**
A short delay prevents tooltips from flickering on as the pointer merely passes over controls. For a cluster of adjacent triggers (e.g., a toolbar), reduce the delay for subsequent tooltips so a user scanning the group isn't forced to wait at each one.
*Source: Setproduct — Tooltip UI design (https://www.setproduct.com/blog/tooltip-ui-design); UXPin — What is a tooltip (https://www.uxpin.com/studio/blog/what-is-a-tooltip-in-ui-ux/)*

**B3. Use a subtle, fast fade (~150ms) in and out — and keep the tooltip static.**
A quiet fade feels responsive without being distracting. Do not let the tooltip follow/track the cursor; a moving tooltip is hard to read and impossible to move into.
*Source: Setproduct — Tooltip UI design (https://www.setproduct.com/blog/tooltip-ui-design); UXPin — What is a tooltip (https://www.uxpin.com/studio/blog/what-is-a-tooltip-in-ui-ux/)*

---

## C. WCAG 1.4.13 — Content on Hover or Focus (the three required behaviors)

**C1. Dismissible — Escape closes the tooltip without moving the pointer or focus.**
A tooltip can overlap content a user needs to see. Pressing `Esc` must dismiss it while the trigger stays hovered/focused.
*Source: CSS-Tricks — Tooltip best practices (https://css-tricks.com/tooltip-best-practices/); UXPin — What is a tooltip (https://www.uxpin.com/studio/blog/what-is-a-tooltip-in-ui-ux/)*

**C2. Hoverable — the user can move the pointer onto the tooltip itself without it disappearing.**
If the tooltip vanishes the instant the pointer leaves the trigger, users (especially with low vision/magnification) can't move into it to read it. There must be no "dead gap" between trigger and tooltip.
*Source: CSS-Tricks — Tooltip best practices (https://css-tricks.com/tooltip-best-practices/)*

**C3. Persistent — it stays visible until the user dismisses it or moves hover/focus away.**
Don't auto-hide a tooltip on a timer while the user is still hovering or focused. It remains until `Esc`, or until hover/focus genuinely leaves both the trigger and the tooltip.
*Source: CSS-Tricks — Tooltip best practices (https://css-tricks.com/tooltip-best-practices/); UXPin — What is a tooltip (https://www.uxpin.com/studio/blog/what-is-a-tooltip-in-ui-ux/)*

---

## D. ARIA & markup

**D1. Associate the tooltip with its trigger via `aria-describedby`, and give the tooltip `role="tooltip"`.**
`aria-describedby` on the trigger points to the tooltip's `id`; the role identifies it. This is the standard, screen-reader-recognized wiring for a tooltip.
*Source: CSS-Tricks — Tooltip best practices (https://css-tricks.com/tooltip-best-practices/); UX Patterns for Devs — Tooltip (https://uxpatterns.dev/patterns/content-management/tooltip)*

**D2. Do NOT rely on the native `title` attribute for tooltips.**
`title` is inconsistent across browsers/screen readers, doesn't appear on keyboard focus, can't be styled, vanishes too fast, and is unavailable on touch. It's an accessibility anti-pattern — build a real tooltip instead.
*Source: CSS-Tricks — Tooltip best practices (https://css-tricks.com/tooltip-best-practices/); eBay MIND Patterns — Tooltip accessibility (https://opensource.ebay.com/evo-web/components/tooltip/accessibility)*

**D3. Because `aria-describedby` is sometimes ignored, never make a tooltip the *only* source of essential info.**
Some screen reader/browser combinations don't reliably announce described-by tooltip content. This is another reason A2 holds: a tooltip can supplement, but never be the sole carrier of, must-have information.
*Source: eBay MIND Patterns — Tooltip accessibility (https://opensource.ebay.com/evo-web/components/tooltip/accessibility); UX Patterns for Devs — Tooltip (https://uxpatterns.dev/patterns/content-management/tooltip)*

**D4. Don't trap focus in a tooltip, and don't pair tooltip `role` with `aria-haspopup`.**
A tooltip isn't a focusable widget or a popup menu; focus stays on the trigger. Mixing in `aria-haspopup` mislabels it. Keep the semantics clean.
*Source: eBay MIND Patterns — Tooltip accessibility (https://opensource.ebay.com/evo-web/components/tooltip/accessibility); CSS-Tricks — Tooltip best practices (https://css-tricks.com/tooltip-best-practices/)*

---

## E. Positioning, sizing & contrast

**E1. Position the tooltip so it doesn't cover the trigger or related content.**
Default to above/below or beside the element, and flip when near a viewport edge so the tooltip never gets clipped. It shouldn't obscure what the user is interacting with.
*Source: UX Patterns for Devs — Tooltip (https://uxpatterns.dev/patterns/content-management/tooltip); UX Design World — Tooltip guidelines (https://uxdworld.com/tooltip-guidelines/)*

**E2. Size to content and use a readable font (≈14px minimum) with sufficient contrast.**
Tooltip text must meet the same contrast floors as other text (4.5:1), and small/low-contrast tooltip text undermines the whole point. Keep the tooltip compact but legible.
*Source: UX Patterns for Devs — Tooltip (https://uxpatterns.dev/patterns/content-management/tooltip); UX Design World — Tooltip guidelines (https://uxdworld.com/tooltip-guidelines/)*

**E3. Be consistent: same trigger behavior, timing, position logic, and styling everywhere.**
Tooltips that behave differently across the app force users to relearn them. Standardize one tooltip pattern and reuse it.
*Source: UX Design World — Tooltip guidelines (https://uxdworld.com/tooltip-guidelines/)*

---

## F. When NOT to use a tooltip

**F1. If the info is essential → use always-visible help text** (see `08-form-inputs.md` on help text).
**F2. If you need actions or rich/interactive content → use a popover/toggletip**, explicitly invoked and focus-managed (related: `11-modals-and-dialogs.md`).
**F3. If the control's purpose isn't obvious from its icon → add a visible text label**, don't lean on a tooltip to rescue an unclear icon (see `06-buttons.md` on icon buttons).
*Source: LogRocket — Designing better tooltips (https://blog.logrocket.com/ux-design/designing-better-tooltips-improved-ux/); eBay MIND Patterns — Tooltip accessibility (https://opensource.ebay.com/evo-web/components/tooltip/accessibility)*

---

## Quick reference

- **Supplemental, short, text-only.** Never essential info, never interactive controls.
- Trigger on **hover *and* focus**; ~500ms show-delay; ~150ms fade; never cursor-follow.
- WCAG 1.4.13: **Dismissible (Esc), Hoverable, Persistent** — all three required.
- Wire with **`aria-describedby` + `role="tooltip"`**; **avoid the `title` attribute**; don't trap focus; don't add `aria-haspopup`.
- Position to avoid covering content, flip at edges; **≥14px**, **4.5:1** contrast; one consistent pattern app-wide.
- Essential/actionable content → **not a tooltip** (use help text or a popover).
