---
name: ui-toasts-notifications
description: >-
  Use when building or reviewing toast messages, snackbars, notification banners,
  or alert components. Covers when to use each pattern, ARIA live region setup,
  politeness levels for screen readers, auto-dismiss timing, stacking/placement
  rules, and accessible focus management for actionable toasts.
---

# Toasts, Snackbars & Notifications

A toast is a brief, passive, auto-dismissing message — feedback that something happened ("Saved," "Message sent"). The recurring failure mode is putting important things in a transient message that disappears before the user (especially a screen-reader user) can act on it. Pick the right pattern for the stakes, and announce it correctly to assistive tech.

---

## A. Pick the right pattern for the stakes

**A1. Match the message type to whether the user must act.**
- **Toast** — brief, passive, auto-dismisses; pure feedback/status with no required response ("Changes saved").
- **Snackbar** — like a toast but can carry a single action (Undo, Retry) and may persist until acted on or dismissed.
- **Alert / inline message** — persistent; for information the user must read or resolve.
Don't conflate them; the choice determines duration, dismissal, and how loudly it's announced.
*Source: MagicBell — What is a toast message (https://www.magicbell.com/blog/what-is-a-toast-message-and-how-do-you-use-it)*

**A2. Never put critical information or a required action in an auto-dismissing toast.**
Toasts vanish. If the user must respond (confirm, fix an error, make a choice), use a snackbar with an action, a persistent alert, or a notification inbox/center — never a message that disappears on a timer.
*Source: MagicBell — What is a toast message (https://www.magicbell.com/blog/what-is-a-toast-message-and-how-do-you-use-it); Design System Problems — Toast notification accessibility (https://designsystemproblems.com/accessibility-compliance/toast-notification-accessibility/)*

**A3. Don't fire a toast on page load.**
A toast appearing as the page loads is confusing — especially for screen-reader users, who get an announcement with no context for what triggered it. Toasts should be responses to user actions or genuine real-time events.
*Source: Sheri Byrne-Haber (Medium) — accessible notifications; GitHub Primer — Accessible notifications & messages (https://primer.style/accessibility/patterns/accessible-notifications-and-messages/)*

---

## B. Accessibility — WCAG 4.1.3 Status Messages (announce without stealing focus)

**B1. Use a live region so the message is announced without moving focus.**
A status message must reach screen-reader users, but moving focus to it would be disruptive and is usually wrong for passive feedback. Live regions (`aria-live`) announce the new content in place.
*Source: StudyRaid — Accessibility considerations (https://app.studyraid.com/en/read/11743/372076/accessibility-considerations); Aria UI — Toast (https://www.ariaui.dev/docs/components/toast)*

**B2. Choose politeness by urgency: `role="status"` / `polite` for info, `role="alert"` / `assertive` for errors.**
- Informational/success → `role="status"` with `aria-live="polite"` (+ `aria-atomic="true"`): announced at the next pause, non-interrupting.
- Urgent/error → `role="alert"` with `aria-live="assertive"`: interrupts to announce immediately. Reserve assertive for things that truly can't wait, or you'll create an annoying, fatiguing experience.
*Source: Design System Problems — Toast accessibility (https://designsystemproblems.com/accessibility-compliance/toast-notification-accessibility/); Aria UI — Toast (https://www.ariaui.dev/docs/components/toast)*

**B3. Mount the live-region container once, at app root — not inside the trigger.**
Put a single persistent live region (e.g., a labelled `role="region"`/status container with `aria-live` and `aria-label="Notifications"`) high in the DOM and render toasts into it. If the live region is created at the same moment as the toast (or lives inside the button/form), screen readers often miss the announcement.
*Source: Aria UI — Toast (https://www.ariaui.dev/docs/components/toast); GitHub Primer — Accessible notifications & messages (https://primer.style/accessibility/patterns/accessible-notifications-and-messages/)*

**B4. For actionable toasts (with buttons), manage focus deliberately.**
If a toast contains an action (Undo), it must be reachable and operable by keyboard. Consider moving focus to it when appropriate, ensure the dismiss and action controls are keyboard-operable, and restore focus sensibly afterward. Passive toasts with no action should *not* grab focus.
*Source: GitHub Primer — Accessible notifications & messages (https://primer.style/accessibility/patterns/accessible-notifications-and-messages/); Code Accessible — Toast messages (https://codeaccessible.com/codepatterns/toast-messages/)*

---

## C. Duration & dismissal

**C1. Give enough time to read — at least ~5 seconds, longer for actionable toasts.**
A reasonable heuristic: a base of ~3 seconds plus ~1 second per 3 words. Short confirmations can sit around 2–3s, but when in doubt err longer for accessibility — people using screen readers or magnifiers need more time.
*Source: MagicBell — What is a toast message (https://www.magicbell.com/blog/what-is-a-toast-message-and-how-do-you-use-it); Design System Problems — Toast accessibility (https://designsystemproblems.com/accessibility-compliance/toast-notification-accessibility/)*

**C2. Pause the auto-dismiss timer on hover and on focus.**
If the user hovers or tabs into the toast (to read it or use its action), stop the countdown. Yanking it away mid-interaction is hostile, and ties into the "persistent" expectations of content on hover/focus.
*Source: Aria UI — Toast (https://www.ariaui.dev/docs/components/toast); Design System Problems — Toast accessibility (https://designsystemproblems.com/accessibility-compliance/toast-notification-accessibility/)*

**C3. Always allow manual dismissal.**
Provide a visible, keyboard-reachable close affordance so users can clear a toast immediately rather than waiting out the timer.
*Source: MagicBell — What is a toast message (https://www.magicbell.com/blog/what-is-a-toast-message-and-how-do-you-use-it); Code Accessible — Toast messages (https://codeaccessible.com/codepatterns/toast-messages/)*

---

## D. Stacking, placement & quantity

**D1. Don't stack many toasts at once — queue them or cap the count.**
A pile of simultaneous toasts overwhelms the user and floods the live region with announcements. Show the most recent, queue the rest, and limit how many appear concurrently.
*Source: MagicBell — What is a toast message (https://www.magicbell.com/blog/what-is-a-toast-message-and-how-do-you-use-it)*

**D2. Keep placement consistent and predictable.**
Pick one location (commonly top-right or bottom-center) and use it everywhere so users learn where to look. Inconsistent placement makes notifications easy to miss.
*Source: Aria UI — Toast (https://www.ariaui.dev/docs/components/toast); GitHub Primer — Accessible notifications & messages (https://primer.style/accessibility/patterns/accessible-notifications-and-messages/)*

---

## E. Visual & motion

**E1. Meet WCAG AA contrast — 4.5:1 for text.**
Toasts are often small and briefly visible, so legibility matters even more. Don't ship low-contrast toast text or rely on a color swatch alone to convey success/error state (pair color with an icon and/or text — see `01-foundations`).
*Source: MagicBell — What is a toast message (https://www.magicbell.com/blog/what-is-a-toast-message-and-how-do-you-use-it); Design System Problems — Toast accessibility (https://designsystemproblems.com/accessibility-compliance/toast-notification-accessibility/)*

**E2. Respect `prefers-reduced-motion`; keep enter/exit animation subtle.**
A gentle fade/slide is fine, but honor the reduced-motion preference (drop or minimize the animation) for users sensitive to movement.
*Source: StudyRaid — Accessibility considerations (https://app.studyraid.com/en/read/11743/372076/accessibility-considerations)*

**E3. Avoid italics for toast body text.**
Italicized runs are harder to read, particularly for users with dyslexia. Use upright weight and clear type.
*Source: Sheri Byrne-Haber (Medium) — accessible notifications*

---

## Quick reference

- **Toast** = passive feedback, auto-dismiss. **Snackbar** = +1 action, may persist. **Alert** = persistent/must-read. Match pattern to stakes.
- **Never** put critical info or required actions in an auto-dismissing toast; **never** toast on page load.
- WCAG 4.1.3: announce via **live region without moving focus** — `role="status"`/polite for info, `role="alert"`/assertive only for urgent.
- Mount **one live region at app root**, outside the trigger; for actionable toasts, manage focus and keyboard operability.
- Duration **≥~5s** (≈3s + 1s/3 words), longer if actionable; **pause on hover/focus**; always allow **manual dismiss**.
- **Queue/cap** simultaneous toasts; **consistent placement** (top-right or bottom-center).
- **4.5:1** contrast, color never alone; respect **reduced-motion**; avoid italics.
