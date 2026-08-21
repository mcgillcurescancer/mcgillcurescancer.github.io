---
name: ui-forms
description: >-
  Use when designing, building, or reviewing form layouts, multi-step forms,
  validation timing, and error messaging. Covers single-column layout rules,
  field grouping, inline validation best practices, error message writing, and
  mobile form optimization based on Baymard Institute and NN/g research.
---

# Forms

Forms are where users do the work, and where they abandon. Industry data shows ~55% of people abandon forms before finishing (Zuko). The principles below are grounded heavily in Baymard Institute usability testing, NN/g, and eye-tracking research (Penzo/UXmatters, CXL). See `08-form-inputs.md` for field-level specifics.

Static fundraising-site default: forms should be rare and short. For this kind of site, likely
forms are `Contact partnerships`, `Student sign-up`, or `Email updates`; donations can safely hand
off to a trusted external payment page. Ask only for the information needed for follow-up, and put
contact email/Instagram/LinkedIn in the footer as a non-form fallback.

*Source: M+R Benchmarks 2026 on mobile donation friction and payment options
(https://mrbenchmarks.com/website-performance/)*

---

## A. Layout & structure

**A1. Use a single-column layout.**
Multi-column forms are misread: in Baymard testing, side-by-side fields were interpreted in conflicting ways (which fields are required? which column do I fill?). A single column gives one unambiguous top-to-bottom path, scales to mobile, and handles long labels. ~16% of e-commerce sites still use multi-column checkout forms, contributing to abandonment.
*Source: Baymard — Form design (https://baymard.com/learn/form-design); Ivy Forms — Form design (https://ivyforms.com/blog/form-design-best-practices/)*

**A2. The only acceptable side-by-side fields are tightly, obviously paired ones.**
Things like *City / State / Zip* or *Expiry month / year* may share a row because the relationship is self-evident. Keep the overall form single-column.
*Source: Ivy Forms — Form design (https://ivyforms.com/blog/form-design-best-practices/); Not a Designer — Designing a form (https://notadesigner.io/p/designing-form)*

**A3. Group related fields into sections, separated by clear spacing.**
Grouping gives users a mental model of what's being asked and reduces cognitive load. Use ~16–24px between fields and ~24–32px between sections (internal ≤ external rule).
*Source: Ivy Forms — Form layout (https://ivyforms.com/blog/form-layout-best-practices/); Aufait UX — Input field design (https://www.aufaitux.com/blog/input-field-design-best-practices/)*

**A4. Order fields by real-world logic, not database schema.**
Ask for things in the sequence users expect (e.g., name before email). The form's order should mirror how people think about the task.
*Source: Ivy Forms — Form design (https://ivyforms.com/blog/form-design-best-practices/)*

**A5. For long forms, split into steps/pages rather than overwhelming on one screen.**
Breaking a long form into logical steps (with progress indication) keeps users engaged; it also relieves the vertical-scroll cost of top-aligned labels. Use a stepper, not tabs (order matters).
*Source: Concept7 — Forms 101 (https://concept7.nl/en/articles/forms-101-5-ux-best-practices-for-user-friendly-labels-in-forms); Reform — Multi-step validation (https://www.reform.app/blog/7-tips-for-multi-step-form-validation)*

---

## B. Length & friction

**B1. Ask for the fewest fields possible.**
Each additional field measurably lowers completion (roughly 3–5% per field in lead-gen contexts). Cut anything not strictly needed; defer "nice to have" data.
*Source: Ivy Forms — Form layout (https://ivyforms.com/blog/form-layout-best-practices/)*

**B2. When you must ask for sensitive or unusual data, explain why — inline.**
Users hesitate at password, phone, payment, and ID fields. A short, adjacent explanation ("We use your number only to verify identity") reduces drop-off. Amazon-style "Learn more" links are a common pattern.
*Source: Baymard — Form design (https://baymard.com/learn/form-design); Aufait UX (https://www.aufaitux.com/blog/input-field-design-best-practices/)*

**B3. Mark optional vs. required consistently and explicitly.**
Don't rely on a lone asterisk; label optional fields "(optional)" or mark required clearly and consistently. (And question whether an optional field belongs at all — see B1.)
*Source: Form usability consensus across Baymard/NN/g form guidance above.*

---

## C. Validation timing

**C1. Prefer live inline validation, evaluated when the user *leaves* the field.**
Validate on blur (when the user finishes a field and tabs/clicks away), not on every keystroke. This catches errors at the right moment, points to the exact field, and avoids premature "you're wrong" messages while the user is still typing. CXL found inline validation produced ~22% higher success and ~42% faster completion.
*Source: NN/g — 10 guidelines for reporting errors in forms (https://www.nngroup.com/articles/errors-forms-design-guidelines/); Baymard — Inline form validation (https://baymard.com/blog/inline-form-validation); Smashing — Live validation UX (https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/)*

**C2. Exception: validate-as-you-type for guided constraints like password rules.**
A live password-strength/criteria meter (Slack-style) helps users meet rules without trial and error. Reserve keystroke-level validation for cases where it actively guides.
*Source: NN/g — Errors in forms (https://www.nngroup.com/articles/errors-forms-design-guidelines/); Smashing — Live validation UX (https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/)*

**C3. Remove the error the moment the input becomes valid.**
Users stare at the field expecting the error to clear; if it only clears on blur, they think their now-correct input is still wrong. Clear errors as soon as the value is valid — critical for interdependent fields (email/confirm, password/confirm).
*Source: Baymard — Inline form validation (https://baymard.com/blog/inline-form-validation); Reform — Multi-step validation (https://www.reform.app/blog/7-tips-for-multi-step-form-validation)*

**C4. Don't fire premature errors on partially typed structured inputs.**
For dates, phone numbers, etc., wait until the field is complete (or use natural pauses like after an area code) before validating.
*Source: Smashing — Live validation UX (https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/); Reform (https://www.reform.app/blog/7-tips-for-multi-step-form-validation)*

**C5. Use positive inline confirmation sparingly.**
A green check for "username available" or a valid email helps; don't checkmark every trivial field — it distracts more than it helps.
*Source: NN/g — Errors in forms (https://www.nngroup.com/articles/errors-forms-design-guidelines/); Baymard (https://baymard.com/blog/inline-form-validation)*

---

## D. Error messages

**D1. Place the error message next to/below the field it concerns, visible and persistent.**
Errors must be easy to locate and stay visible until fixed. For server-side errors that reload the page, also surface a summary at the top with anchor links to each problem field, and keep field-level messages.
*Source: NN/g — Errors in forms (https://www.nngroup.com/articles/errors-forms-design-guidelines/); Ivy Forms — Error messages (https://ivyforms.com/blog/form-error-message-examples/)*

**D2. Write errors that are specific, actionable, and blame-free.**
Say what's wrong *and how to fix it*, in plain language. "Enter a phone number, like 555 0123" beats "You failed to enter a valid phone number." Neutral, instructional tone — never scold.
*Source: NN/g — Errors in forms (https://www.nngroup.com/articles/errors-forms-design-guidelines/); Ivy Forms (https://ivyforms.com/blog/form-error-message-examples/)*

**D3. Echo the field's label in the error.**
If the label is "Date of birth," the error should say "Enter your date of birth," not just "Enter a date." (This is the UK Parliament/GOV.UK pattern.)
*Source: Ivy Forms — Error messages (https://ivyforms.com/blog/form-error-message-examples/)*

**D4. Signal errors with more than color.**
Pair red with an icon and text; ensure the error red meets 4.5:1 contrast. Many default error reds on white fail.
*Source: LogRocket — Form validation UX (https://blog.logrocket.com/ux-design/ux-form-validation-inline-after-submission/); rgblind — WCAG contrast (https://rgblind.com/blog/wcag-color-contrast-requirements)*

**D5. Keep error text brief and in sentence case.**
*Source: Shopify Polaris — Inline error (https://polaris.shopify.com/components/selection-and-input/inline-error)*

**D6. Announce errors to assistive tech.**
Tie messages to fields (`aria-describedby`), set `aria-invalid` on the field, and move focus to the first error (or announce via a live region). See foundations E1.
*Source: Vispero — Dialog/forms a11y (https://vispero.com/resources/mastering-dialog-accessibility/); WCAG 3.3.1 via NN/g (https://www.nngroup.com/articles/errors-forms-design-guidelines/)*

---

## E. Mobile & input efficiency

**E1. Use single-column, touch-friendly fields (≥44×44px targets) and the right keyboard per field.**
Trigger numeric keypads for phone/number fields, the email keyboard for email, etc. (`inputmode`, `type`). It removes friction and errors.
*Source: Reform — Multi-step validation (https://www.reform.app/blog/7-tips-for-multi-step-form-validation); Ivy Forms — Form layout (https://ivyforms.com/blog/form-layout-best-practices/)*

**E2. Keep labels above fields so they stay visible with the keyboard open.**
On compact screens, top-aligned labels remain visible as the on-screen keyboard appears. (See `08-form-inputs.md` for the full label rationale.)
*Source: Reform (https://www.reform.app/blog/7-tips-for-multi-step-form-validation)*

**E3. Support autofill.**
Use correct `autocomplete` attributes and standard field names so browsers/password managers can fill reliably — a major speed and accuracy win.
*Source: Form-usability consensus (Baymard/NN/g) reflected in the sources above.*

---

## Quick reference

- Single column. Labels above. Logical order. Fewest fields.
- Validate on blur; clear errors on valid; never scold.
- Errors: inline, specific, actionable, label-echoing, not color-only.
- Long forms → steps with progress. Sensitive fields → explain why.
