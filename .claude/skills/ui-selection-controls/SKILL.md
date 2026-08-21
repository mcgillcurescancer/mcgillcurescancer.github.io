---
name: ui-selection-controls
description: >-
  Use when choosing between or implementing dropdowns, listboxes, radio buttons,
  checkboxes, or toggle switches. Covers the decision framework for picking the
  right control, radio vs. checkbox semantics, toggle vs. checkbox distinction,
  dropdown vs. listbox trade-offs, and accessibility/ARIA requirements.
---

# Selection Controls (Dropdowns, Listboxes, Radio Buttons, Checkboxes, Toggles)

Choosing the *right* control is most of the battle. The rules below come from a 40-year-old, GUI-standard distinction (Inside Macintosh 1984, later codified by W3C) plus NN/g and practitioner guidance.

---

## A. Pick the correct control

**A1. Radio buttons → one choice from a small set of mutually exclusive options.**
Selecting one deselects the others. Use when there are ≥2 options, the user must pick exactly one, and you can show them all (roughly ≤6 options). Pre-select the most beneficial default *for the user* (not for the business).
*Source: NN/g — Checkboxes vs. radio buttons (https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/); UX Planet/Babich — Selection controls (https://uxplanet.org/radio-buttons-checkboxes-toggle-switches-and-dropdown-lists-design-tips-for-using-selection-d120a1e323c5)*

**A2. Checkboxes → independent yes/no choices; pick zero, one, or many.**
Each checkbox is independent (checking one doesn't uncheck others). Use for multi-select from a small set, and for a single standalone on/off option within a form. Don't pre-select; don't force a choice.
*Source: NN/g — Checkboxes vs. radio buttons (https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/); UX Planet/Babich (https://uxplanet.org/radio-buttons-checkboxes-toggle-switches-and-dropdown-lists-design-tips-for-using-selection-d120a1e323c5)*

**A3. Toggle switch → a single on/off system setting that takes effect immediately.**
Use a toggle when flipping it instantly changes a state (Wi-Fi on/off, enable notifications) with no separate "Save." The switch reinforces the feeling of turning something on/off. If the change only applies after submitting a form, use a checkbox instead.
*Source: UX Planet/Babich — Selection controls (https://uxplanet.org/radio-buttons-checkboxes-toggle-switches-and-dropdown-lists-design-tips-for-using-selection-d120a1e323c5); NN/g — Toggle-switch guidelines (https://www.nngroup.com/articles/toggle-switch-guidelines/)*

**A4. Dropdown list → single selection from many options when space is tight.**
Dropdowns hide options behind a click and support only single selection. Use when options are numerous (≳6–7) and you don't want to encourage frequent changes. The cost: an extra click and hidden options (weak information scent).
*Source: NN/g — Listboxes vs. dropdown lists (https://www.nngroup.com/articles/listbox-dropdown/)*

**A5. Listbox → expose options immediately and/or allow multi-select.**
A listbox shows its options without a click and can support multiple selection (often with checkboxes inside). Use it when you want options visible up front or need multi-select in compact space.
*Source: NN/g — Listboxes vs. dropdown lists (https://www.nngroup.com/articles/listbox-dropdown/)*

**A6. Don't use a dropdown for very few options or for binary on/off.**
For ≤~5 mutually exclusive options, radios (all visible) beat a dropdown. For binary settings, use a toggle or checkbox — not a two-item dropdown.
*Source: UX Planet/Babich — Selection controls (https://uxplanet.org/radio-buttons-checkboxes-toggle-switches-and-dropdown-lists-design-tips-for-using-selection-d120a1e323c5); NN/g — Listboxes vs. dropdowns (https://www.nngroup.com/articles/listbox-dropdown/)*

---

## Decision cheat-sheet

| Situation | Control |
|---|---|
| Pick exactly one, few options, show all | **Radio buttons** |
| Pick exactly one, many options, save space | **Dropdown** |
| See all options at once / multi-select compactly | **Listbox** |
| Pick any number (0..n) from a few options | **Checkboxes** |
| Single on/off applied *immediately* | **Toggle switch** |
| Single on/off applied *on form submit* | **Checkbox** |

*Source: synthesized from NN/g and UX Planet/Babich sources above.*

---

## B. Radio buttons & checkboxes — shaping

**B1. Use radios when options are mutually exclusive; never substitute checkboxes for a one-of-many choice.**
Using checkboxes for mutually exclusive options is a classic mistake (the user can wrongly check two).
*Source: NN/g — Checkboxes vs. radio buttons (https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)*

**B2. Lay options out vertically for easy scanning.**
A vertical list with one option per line is easiest to scan; reserve horizontal arrangement for very few, short options. Keep equal spacing.
*Source: UX Planet/Babich — Selection controls (https://uxplanet.org/radio-buttons-checkboxes-toggle-switches-and-dropdown-lists-design-tips-for-using-selection-d120a1e323c5)*

**B3. Make the label part of the click target.**
Clicking the text should toggle the control. Native radios/checkboxes are tiny (13–16px) — extend the hit area to meet target-size minimums.
*Source: a11y-examples — Target sizing (https://a11y-examples.com/examples/target-sizing/)*

**B4. Keep each option label short and parallel; one question per group.**
Don't stuff two questions into one verbose control. Group options under a clear `<fieldset>`/`<legend>`.
*Source: NN/g — Checkboxes vs. radio buttons (https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)*

---

## C. Toggles — shaping

**C1. Show clear on/off states (and don't rely on position/color alone).**
The on and off states must be visually distinct and meet contrast; add a label and ideally an on/off cue beyond color. Make the current state obvious at a glance.
*Source: NN/g — Toggle-switch guidelines (https://www.nngroup.com/articles/toggle-switch-guidelines/)*

**C2. Give the toggle immediate effect — no separate confirm.**
If a setting needs a "Save" to apply, it isn't a toggle situation; use a checkbox. Toggles imply instant action.
*Source: UX Planet/Babich — Selection controls (https://uxplanet.org/radio-buttons-checkboxes-toggle-switches-and-dropdown-lists-design-tips-for-using-selection-d120a1e323c5)*

**C3. Label toggles for the state/feature, not "on/off" generically.**
The label should name what's being controlled (e.g., "Email notifications"), with the switch conveying its current state.
*Source: NN/g — Toggle-switch guidelines (https://www.nngroup.com/articles/toggle-switch-guidelines/)*

---

## D. Dropdowns & listboxes — shaping

**D1. Don't use selection controls to trigger actions or open modals.**
Dropdowns/listboxes are for *selecting values*, not executing commands or launching dialogs. Use buttons/menus for actions.
*Source: NN/g — Listboxes vs. dropdown lists (https://www.nngroup.com/articles/listbox-dropdown/)*

**D2. Order options logically; provide search for long lists.**
Sort by a sensible order (alphabetical, frequency, or natural). For very long option sets, add type-ahead filtering (combobox) so users don't scroll endlessly.
*Source: NN/g — Listboxes vs. dropdown lists (https://www.nngroup.com/articles/listbox-dropdown/)*

**D3. Always pair a dropdown with a persistent label above it — not a placeholder masquerading as one.**
A placeholder inside a `<select>` looks pre-filled and reads inconsistently. (See `08-form-inputs.md` B4.)
*Source: Concept7 — Forms 101 (https://concept7.nl/en/articles/forms-101-5-ux-best-practices-for-user-friendly-labels-in-forms)*

**D4. Build them on accessible patterns.**
Prefer native `<select>` where possible; for custom comboboxes/listboxes follow the ARIA APG (proper roles, keyboard arrow/Home/End/typeahead, visible focus). See foundations C/E.
*Source: W3C ARIA APG (https://www.w3.org/WAI/ARIA/apg/); Michelin Design System — Radio button (https://designsystem.michelin.com/components/radio-button)*
