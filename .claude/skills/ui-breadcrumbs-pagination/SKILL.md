---
name: ui-breadcrumbs-pagination
description: >-
  Use when building or evaluating breadcrumb trails, pagination controls,
  infinite scroll, or load-more patterns. Covers when each pattern is
  appropriate, breadcrumb accessibility and overflow handling, pagination
  controls design, and the trade-offs between paginating vs. infinite scroll.
---

# Breadcrumbs & Pagination

Two secondary navigation patterns that orient users in a hierarchy (breadcrumbs) and move them through long result sets (pagination / infinite scroll / load-more).

---

## Part 1 — Breadcrumbs

Breadcrumbs are a **secondary** navigation aid showing the current page's location in the hierarchy and offering quick jumps to parent levels. They're most valuable on deep, hierarchical sites and for users arriving via search/deep links.

**1.1 Use breadcrumbs only when there's a genuine hierarchy to navigate.**
They shine on sites with deep structures and clear parent/child relationships. If you can't articulate why users need them, don't add them — use highlighted nav states, a "Back to [parent]" link, tabs, or a stepper instead.
*Source: Eleken — Breadcrumbs UX (https://www.eleken.co/blog-posts/breadcrumbs-ux); UX Patterns for Developers — Breadcrumb (https://uxpatterns.dev/patterns/navigation/breadcrumb)*

**1.2 Reflect the real information architecture, not invented categories.**
Every crumb must be clickable and land somewhere useful. Don't fabricate intermediate levels or empty container pages.
*Source: Eleken — Breadcrumbs UX (https://www.eleken.co/blog-posts/breadcrumbs-ux)*

**1.3 Never let breadcrumbs replace primary navigation.**
They supplement, they don't substitute. The current page is usually the last crumb and is not a link.
*Source: UX Patterns for Developers — Breadcrumb (https://uxpatterns.dev/patterns/navigation/breadcrumb)*

**1.4 Don't show breadcrumbs on single-level pages (home, top-level landing).**
With no hierarchy above, a one-item breadcrumb is noise.
*Source: UX Patterns for Developers — Breadcrumb (https://uxpatterns.dev/patterns/navigation/breadcrumb)*

**1.5 Keep the trail on one line; handle overflow gracefully.**
Render as a horizontal list with separators. For long trails (especially mobile): collapse the middle into an expandable "…", allow horizontal scroll with a fade cue, or fall back to a single "Back to [parent]" link.
*Source: Eleken — Breadcrumbs UX (https://www.eleken.co/blog-posts/breadcrumbs-ux)*

**1.6 Make them accessible.**
Wrap in `<nav aria-label="Breadcrumb">`, mark the current page with `aria-current="page"`, and render separators with CSS (not as text characters a screen reader will read out).
*Source: UX Patterns for Developers — Breadcrumb (https://uxpatterns.dev/patterns/navigation/breadcrumb)*

**1.7 Keep separators and crumbs tappable and well-spaced on touch.**
Generous spacing keeps each crumb a viable touch target.
*Source: Eleken — Breadcrumbs UX (https://www.eleken.co/blog-posts/breadcrumbs-ux)*

---

## Part 2 — Pagination vs. Infinite Scroll vs. Load-More

The core decision: **goal-directed finding → pagination; open-ended exploration → infinite scroll; many cases → "Load more" as a middle ground.**

**2.1 Use pagination when users search for something specific or need to find/return to items.**
Discrete pages let people skim, jump ahead, and — crucially — *return to a known position*. Infinite scroll makes returning to a previously seen item and reaching the footer painful.
*Source: LogRocket — Pagination vs. infinite scroll (https://blog.logrocket.com/ux-design/pagination-vs-infinite-scroll-ux/); NN/g — Infinite scrolling: when to use it (https://www.nngroup.com/videos/infinite-scrolling-when/)*

**2.2 Use infinite scroll for exploratory, engagement-driven feeds.**
It minimizes interaction cost and suits leisurely browsing (social/discovery feeds). It is *not* a good fit for every site — and it harms findability and footer access.
*Source: NN/g — Infinite scrolling: when to use it (https://www.nngroup.com/videos/infinite-scrolling-when/); LogRocket (https://blog.logrocket.com/ux-design/pagination-vs-infinite-scroll-ux/)*

**2.3 Consider the hybrids NN/g recommends.**
A **"Load more" button**, **pagination integrated within a long scroll**, or **traditional pages** each fix specific infinite-scroll weaknesses. At least one usually fits your task better than pure infinite scroll.
*Source: NN/g — 3 alternatives to infinite scrolling (https://www.nngroup.com/videos/alternatives-to-infinite-scrolling/)*

**2.4 If you use infinite scroll, also provide a way back to the top and a way to find old content.**
Add a floating "Back to Top" control, plus search/filter/sort so older items remain reachable. Use list virtualization and lazy-load to keep performance acceptable.
*Source: LogRocket — Pagination vs. infinite scroll (https://blog.logrocket.com/ux-design/pagination-vs-infinite-scroll-ux/); UX Patterns for Developers — Back to top (https://uxpatterns.dev/patterns/navigation/back-to-top)*

**2.5 Design pagination controls for clarity and reachability.**
Include Previous/Next, consider First/Last for long sets, let users pick results-per-page, and make the current page obvious. Mark the current page with `aria-current="page"` and keep controls keyboard-operable.
*Source: LogRocket (https://blog.logrocket.com/ux-design/pagination-vs-infinite-scroll-ux/); UX Patterns for Developers — Pagination (https://uxpatterns.dev/patterns/navigation/pagination)*

**2.6 Don't bury important content deep in pagination.**
Engagement drops fast past the first pages. Surface high-value items early via sorting/relevance rather than relying on users to paginate to them.
*Source: UX Patterns for Developers — Pagination (https://uxpatterns.dev/patterns/navigation/pagination)*

**2.7 Show a loading state while fetching the next page.**
A spinner or skeleton confirms the system is working when the user advances pages or scrolls.
*Source: UX Design World — Data table best practices (https://uxdworld.com/data-table-design-best-practices/)*
