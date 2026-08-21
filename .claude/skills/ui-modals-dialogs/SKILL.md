---
name: ui-modals-dialogs
description: >-
  Use when building or reviewing modal dialogs, confirmation dialogs, or overlay
  patterns. Covers when to use modals vs. inline patterns, the three focus
  management rules (move in / trap / return), dismissal patterns, ARIA markup,
  and accessible confirmation dialog copy.
---

# Modals & Dialogs

A modal is a focused overlay that blocks interaction with the rest of the page until dismissed. They're powerful but interrupting — most modal failures are either *overuse* (interrupting unnecessarily) or *broken focus/keyboard handling* (an accessibility failure). Grounded in the W3C ARIA Authoring Practices Guide (APG) and accessibility practitioners.

---

## A. When (and when not) to use a modal

**A1. Use a modal only when you genuinely need to interrupt and focus attention.**
Good cases: confirming a consequential/destructive action, a short required task, or critical information the user must address now. If the content can live on the page, don't trap users in an overlay.
*Source: Vispero — Dialog accessibility (https://vispero.com/resources/mastering-dialog-accessibility/); W3C ARIA APG — Dialog (https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)*

**A2. Match corner radius and elevation to the system.**
The dialog's outer radius should follow your radius scale, and inner elements should follow the nested-radius rule (Inner = Outer − padding). Use a higher elevation level than cards/menus to show it sits above everything (see foundations D–E).
*Source: Medium/Bootcamp — Nested radius (https://medium.com/design-bootcamp/getting-your-border-radius-right-a-simple-trick-for-smooth-nested-containers-f6e0025e8c53); Mass.gov Design System (https://www.mass.gov/info-details/corner-radius-and-elevation)*

---

## B. Focus management (the make-or-break rules)

**B1. Move focus into the dialog when it opens.**
On open, place focus on a sensible element inside: typically the first focusable control/input, or — for a read-only message where most users will dismiss — the confirm/OK button. Don't leave focus on the trigger behind the overlay.
*Source: W3C ARIA APG — Dialog example (https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html); Vispero (https://vispero.com/resources/mastering-dialog-accessibility/)*

**B2. Trap focus inside the dialog while it's open.**
Tab and Shift+Tab must cycle only through the dialog's focusable elements; keyboard, mouse, and screen-reader interaction stay inside until it closes. Make background content inert (the `inert` attribute or `aria-hidden="true"` on the rest of the page).
*Source: Deque — ARIA modal dialogs (https://www.deque.com/blog/aria-modal-alert-dialogs-a11y-support-series-part-2/); TestParty — Modal a11y (https://testparty.ai/blog/modal-dialog-accessibility)*

**B3. Return focus to the triggering element when the dialog closes.**
Restoring the user's "point of regard" prevents disorientation.
*Source: W3C ARIA APG — Dialog example (https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html); UXPin — Accessible modals (https://www.uxpin.com/studio/blog/how-to-build-accessible-modals-with-focus-traps/)*

---

## C. Dismissal

**C1. Always allow Escape to close — never trap the keyboard user (WCAG 2.1.2).**
Escape and an explicit close control must both work. (For destructive-confirmation `alertdialog`s, you may require an explicit choice, but still provide a cancel path.)
*Source: UXPin — Accessible modals (https://www.uxpin.com/studio/blog/how-to-build-accessible-modals-with-focus-traps/); W3C ARIA APG (https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)*

**C2. Provide multiple obvious dismissal paths for non-critical modals.**
A visible close (×) button, an explicit Cancel, Escape, and click-on-backdrop. For destructive confirmations, omit backdrop-click dismissal so users don't lose work by mis-clicking.
*Source: Vispero — Dialog accessibility (https://vispero.com/resources/mastering-dialog-accessibility/); TestParty (https://testparty.ai/blog/modal-dialog-accessibility)*

**C3. Give the close (×) button an accessible name and adequate target size.**
`aria-label="Close"`, ≥44px hit area.
*Source: a11y consensus per foundations D; TestParty (https://testparty.ai/blog/modal-dialog-accessibility)*

---

## D. Semantics & labeling

**D1. Use the native `<dialog>` element with `showModal()` where possible.**
It provides built-in focus trapping, Escape handling, backdrop, and correct semantics. Build a custom modal only when you need behavior the native element can't provide.
*Source: UXPin — Accessible modals (https://www.uxpin.com/studio/blog/how-to-build-accessible-modals-with-focus-traps/)*

**D2. Expose the right ARIA: `role="dialog"` (or `alertdialog`) + `aria-modal="true"`.**
`aria-modal="true"` signals that outside content is inert. Use `alertdialog` for urgent confirmations/alerts.
*Source: Vispero (https://vispero.com/resources/mastering-dialog-accessibility/); TestParty (https://testparty.ai/blog/modal-dialog-accessibility)*

**D3. Give the dialog an accessible name with `aria-labelledby` (its title), and describe it with `aria-describedby` when there's body text.**
Screen readers announce the title (and description) on open so users know what the dialog is.
*Source: Vispero (https://vispero.com/resources/mastering-dialog-accessibility/); W3C ARIA APG — Dialog example (https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html)*

---

## E. Content & layout

**E1. Keep modals short and single-purpose.**
A modal is for one focused task or decision; if it grows into a long, scrolling, multi-section form, reconsider whether it should be a page.
*Source: Vispero — Dialog accessibility (https://vispero.com/resources/mastering-dialog-accessibility/)*

**E2. Write confirmation dialogs that clearly state the action and consequences.**
Name exactly what will happen (e.g., "Delete 3 files? This can't be undone"), and label the buttons with the action, not "Yes/No." Apply button hierarchy (see `06-buttons.md`): the safe action and the consequential action should be visually distinguishable.
*Source: Vispero (https://vispero.com/resources/mastering-dialog-accessibility/); Carbon — Button usage (https://v10.carbondesignsystem.com/components/button/usage/)*

**E3. On small screens, let the dialog fill the viewport.**
Filling the screen aids readability and hides background scroll movement that some mobile browsers exhibit behind overlays.
*Source: W3C ARIA APG — Dialog example (https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html)*

**E4. Dim/clearly separate the modal from the page.**
A backdrop scrim plus elevation establishes that the dialog is the active layer and the rest is inert.
*Source: Mass.gov Design System (https://www.mass.gov/info-details/corner-radius-and-elevation); Vispero (https://vispero.com/resources/mastering-dialog-accessibility/)*

---

## Quick reference (the non-negotiables)

- Focus **in** on open → **trapped** while open → **back to trigger** on close.
- Escape closes; never trap the keyboard (WCAG 2.1.2). Background made `inert`.
- `role="dialog"`/`alertdialog` + `aria-modal="true"` + `aria-labelledby` (+ `aria-describedby`).
- Prefer native `<dialog>` + `showModal()`.
- Short, single-purpose; buttons named by action; destructive paths guarded.
