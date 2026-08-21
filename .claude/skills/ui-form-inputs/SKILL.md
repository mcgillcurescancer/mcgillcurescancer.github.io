---
name: ui-form-inputs
description: >-
  Use when working on individual form field components — text inputs, labels,
  placeholders, help text, and field sizing. Covers why labels must stay visible
  (never placeholder-as-label), top-aligned label research, help text placement,
  input type selection, autofill, and field boundary contrast.
---

# Form Inputs (Text Fields, Labels, Placeholders, Help Text)

Field-level rules for individual inputs. The label is the single most important part of a field — it's the only thing that tells one empty box apart from the next. Pairs with `07-forms.md` (form-level) and `09-selection-controls.md` (choice controls).

---

## A. Labels

**A1. Put labels above the field (top-aligned).**
Eye-tracking research (Penzo/UXmatters) found top-aligned labels yield the fastest completion — substantially faster than left-aligned. The label–field pairing is processed in a single fixation. Top alignment also works best on mobile and for multilingual/long labels.
*Source: Ivy Forms — Form layout (cites Penzo/UXmatters & CXL) (https://ivyforms.com/blog/form-layout-best-practices/); Medium/Tomas Rioboo — Form design (https://medium.com/@tomasrioboo/form-design-best-practices-ca69b71dd7a0)*

**A2. The label must always remain visible — never disappear on input.**
The label is the field's identity; if it vanishes once typing starts, error recovery and review become confusing. This is the core reason to avoid placeholder-as-label and to be cautious with floating labels.
*Source: Baymard — Form design (https://baymard.com/learn/form-design); Baymard — Avoid inline labels (https://baymard.com/blog/mobile-forms-avoid-inline-labels)*

**A3. Keep labels short, single-line, and in plain language.**
Users scan rather than read forms; long or wrapping labels slow them and increase cognitive load. Use the words users use, not internal jargon.
*Source: Aufait UX — Input field design (https://www.aufaitux.com/blog/input-field-design-best-practices/)*

**A4. Associate every label with its input programmatically.**
Use `<label for>`/wrapping so clicking the label focuses the field and screen readers announce it. Every input needs a real, persistent label — placeholders don't count.
*Source: Baymard — Avoid inline labels (https://baymard.com/blog/mobile-forms-avoid-inline-labels); accessibility consensus (WCAG 1.3.1 / 4.1.2).*

---

## B. Placeholders & inline labels

**B1. Never use placeholder text as the label ("inline labels").**
Baymard's testing repeatedly found inline labels cause major problems: the label vanishes on input, users forget what the field was, error correction breaks, and people can't review their entries. The space-saving and clean look don't outweigh these costs.
*Source: Baymard — Avoid inline labels (https://baymard.com/blog/mobile-forms-avoid-inline-labels); Concept7 — Forms 101 (https://concept7.nl/en/articles/forms-101-5-ux-best-practices-for-user-friendly-labels-in-forms)*

**B2. Be cautious with floating labels too; a static label above is the safest default.**
Floating labels animate the placeholder up to become the label — better than pure inline, but they start ambiguous (looks pre-filled), shrink to small text, and add motion. Prefer a persistent label above the field.
*Source: Baymard — Form design (https://baymard.com/learn/form-design)*

**B3. Use placeholders only for supplementary hints/examples — never essential info.**
A placeholder can show a format example (e.g., a phone or date pattern). It's optional, disappears on input, and (per foundations A3) often fails contrast — so it must never hold required guidance.
*Source: Medium/Tomas Rioboo — Form design (https://medium.com/@tomasrioboo/form-design-best-practices-ca69b71dd7a0); rgblind — WCAG contrast (https://rgblind.com/blog/wcag-color-contrast-requirements)*

**B4. Inline placeholders are especially broken in dropdowns.**
A placeholder inside a `<select>` makes it look already filled and reads inconsistently versus text fields. Keep a real label above.
*Source: Concept7 — Forms 101 (https://concept7.nl/en/articles/forms-101-5-ux-best-practices-for-user-friendly-labels-in-forms)*

---

## C. Help text & field descriptions

**C1. Put persistent help/hint text below (or in) the label, not in a disappearing placeholder.**
Brief, clear instructions ("We'll only use this to verify your identity"; "DD/MM/YYYY") reduce errors and reassure. Hints in/under the label have room for longer text and survive input.
*Source: Medium/Tomas Rioboo — Form design (https://medium.com/@tomasrioboo/form-design-best-practices-ca69b71dd7a0); Concept7 — Forms 101 (https://concept7.nl/en/articles/forms-101-5-ux-best-practices-for-user-friendly-labels-in-forms)*

**C2. Add help consistently wherever confusion is likely.**
Common confusion sources: technical labels (CVV), why data is requested, and exact format. Address them proactively and consistently across the form.
*Source: Baymard — Form design (https://baymard.com/learn/form-design)*

**C3. Tie help text to the field for assistive tech.**
Reference it with `aria-describedby` so screen-reader users hear the hint with the field.
*Source: Accessibility consensus reflected in Vispero/Polaris guidance.*

---

## D. Field sizing & appearance

**D1. Size the field to the expected input length.**
A field's width is itself a signal. Baymard found users doubt their understanding when a field is much longer or shorter than the data — a CVV box should fit ~3–4 digits, a zip box a few characters. Match width to content.
*Source: Gravity Forms — Form layout (cites Baymard) (https://www.gravityforms.com/blog/form-layout/)*

**D2. Make inputs look unmistakably interactive with a visible boundary.**
A borderless light input on white can fail non-text contrast (1.4.11). Give fields a clear border/affordance with ≥3:1 contrast, and a distinct focus state.
*Source: rgblind — WCAG contrast (https://rgblind.com/blog/wcag-color-contrast-requirements)*

**D3. Apply the radius/spacing system.**
Fields ≥44px tall typically take the standard control radius (e.g., 8px on a 4px scale); keep padding comfortable and consistent. (See foundations D1.)
*Source: Mass.gov Design System (https://www.mass.gov/info-details/corner-radius-and-elevation)*

**D4. Ensure input text and placeholder both meet contrast.**
Input value text ≥ 4.5:1; placeholder ≥ 4.5:1 too (it's still text). `#999` placeholders fail; use ≈`#767676` or darker.
*Source: rgblind — WCAG 2.2 contrast (https://rgblind.com/blog/wcag-color-contrast-requirements)*

---

## E. Input type & efficiency

**E1. Use the most specific input type and inputmode.**
`type="email"`, `type="tel"`, `type="number"`/`inputmode="numeric"`, `type="url"`, date inputs, etc. trigger the right mobile keyboard, enable validation, and reduce errors.
*Source: Reform — Multi-step validation (https://www.reform.app/blog/7-tips-for-multi-step-form-validation)*

**E2. Enable autofill with correct `autocomplete` tokens.**
Standard names (`name`, `email`, `tel`, `street-address`, `postal-code`, `cc-number`, etc.) let browsers and password managers fill accurately — big speed/accuracy gains and an accessibility benefit.
*Source: Form-usability consensus (Baymard/NN/g) per `07-forms.md` sources.*

**E3. Don't disable paste, and don't block valid characters silently.**
Blocking paste (common on password/confirm fields) frustrates users and hurts password-manager workflows; silently stripping characters causes confusing mismatches. Validate and explain instead.
*Source: Smashing — Live validation UX (https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/)*

**E4. Validate per field type with a tailored rule and message.**
Each input type needs its own validation timing and copy (see `07-forms.md` §C–D). One generic rule for all fields produces premature or unhelpful errors.
*Source: Smashing — Live validation UX (https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/)*
