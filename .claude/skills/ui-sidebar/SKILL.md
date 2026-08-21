---
name: ui-sidebar
description: >-
  Use when building or reviewing sidebar navigation for web apps, dashboards,
  SaaS products, or admin panels. Covers when to use a sidebar vs. top nav,
  collapse/expand behavior, icon+label conventions, active states, responsive
  patterns, and accessibility requirements.
---

# Sidebar (Vertical / Left-Side Navigation)

The vertical navigation rail common in web apps, dashboards, SaaS, and admin panels. It handles broader, deeper hierarchies than a horizontal bar and is the expected home for primary navigation *in applications* (vs. the header for content sites).

Static fundraising-site default: do not use a sidebar for a simple club or nonprofit landing page.
Use a top header with anchor links and a footer. Reach for this skill only if the site becomes a
large multi-page resource hub, archive, or admin-style internal tool.

---

## A. When to use a sidebar

**A1. Choose vertical navigation for broad or growing IAs.**
Left-side vertical nav scales to many categories and is easy to scan; the trade-off is that it consumes horizontal space. If you have more top-level categories than fit cleanly in a horizontal bar, go vertical rather than shrinking fonts or distorting the IA.
*Source: NN/g — Left-side vertical navigation (https://www.nngroup.com/articles/vertical-nav/); NN/g — Vertical navigation video (https://www.nngroup.com/videos/vertical-navigation/)*

**A2. Primary nav in *web apps* belongs on the left side.**
For applications (as opposed to websites, where primary nav goes in the header), users expect the main navigation along the left. Sidebars suit SaaS products, dashboards, and admin panels with deeper hierarchies and nested categories.
*Source: NN/g — Menu-design checklist #2 (https://www.nngroup.com/articles/menu-design/); Eleken — UX navigation patterns (https://www.eleken.co/blog-posts/ux-navigation-design)*

---

## B. Labels, icons & scannability

**B1. Left-align items, keep labels visible, and front-load keywords.**
Vertical menus scan fastest when left-justified with the distinguishing word first.
*Source: NN/g — Vertical navigation (https://www.nngroup.com/videos/vertical-navigation/); NN/g — Menu-design checklist #8 (https://www.nngroup.com/articles/menu-design/)*

**B2. Pair icons with text labels; icon-only is acceptable *only* in the collapsed state — with tooltips.**
Icons aid recognition and scanning but create a learning barrier alone. In the expanded sidebar, always show both. When collapsed to an icon rail, reveal the label via tooltip on hover/focus.
*Source: Alf Design Group — Sidebar best practices (https://www.alfdesigngroup.com/post/improve-your-sidebar-design-for-web-apps); UXPin — Sidebar tutorial (https://www.uxpin.com/studio/blog/sidebar-tutorial/)*

**B3. Use familiar, validated icons.**
Ambiguous icons confuse new users. Prefer universally recognized symbols and test domain-specific ones.
*Source: Medium/Bootcamp — Navigation sidebars (https://medium.com/design-bootcamp/mastering-navigation-sidebars-in-product-design-1248f140f4b2)*

---

## C. Structure & grouping

**C1. Group related items under parent categories that mirror the IA.**
Reflect the product's actual logical structure; group functionally related destinations together.
*Source: UX Planet — Sidebar best practices (https://uxplanet.org/best-ux-practices-for-designing-a-sidebar-9174ee0ecaa2)*

**C2. Allow expand/collapse for sub-items, signified by a chevron — and limit nesting depth.**
Use a rotating chevron/arrow to show a group can expand. Keep nesting shallow to avoid overwhelming the rail; deep nesting buries options.
*Source: UX Planet — Sidebar best practices (https://uxplanet.org/best-ux-practices-for-designing-a-sidebar-9174ee0ecaa2)*

**C3. Don't overload the sidebar.**
Show the most important destinations; tuck the rest into collapsible groups. A cluttered rail raises cognitive load and hurts scannability.
*Source: UXPin — Sidebar tutorial (https://www.uxpin.com/studio/blog/sidebar-tutorial/)*

---

## D. Active state & feedback

**D1. Clearly highlight the current/active item.**
Mark the active destination with a distinct background and/or accent (and a non-color cue) so users always know where they are. Same principle as the navbar's #1 mistake — never omit the active indicator.
*Source: UXPin — Sidebar tutorial (https://www.uxpin.com/studio/blog/sidebar-tutorial/); NN/g — Menu-design checklist #5 (https://www.nngroup.com/articles/menu-design/)*

**D2. Give hover and focus feedback on items.**
A subtle background/color change on hover and a visible focus ring on keyboard focus reassure users their action registered and keep the rail keyboard-navigable.
*Source: UXPin — Sidebar tutorial (https://www.uxpin.com/studio/blog/sidebar-tutorial/)*

---

## E. Collapse behavior & sizing

**E1. Default widths: ~240–300px expanded, ~48–64px collapsed.**
These ranges fit icon + label comfortably without eating content space. (Some systems collapse as far as ~64px / 4rem icon rails.)
*Source: UX Planet — Sidebar best practices (https://uxplanet.org/best-ux-practices-for-designing-a-sidebar-9174ee0ecaa2); Navbar Gallery — sidebar examples (https://www.navbar.gallery/blog/best-side-bar-navigation-menu-design-examples)*

**E2. Make the collapse toggle persistent and obvious.**
Use a clearly visible chevron/hamburger (top or bottom of the rail). Collapsing is especially valuable when the main content is data-dense (tables, dashboards) or screens are small (13–14" laptops).
*Source: Alf Design Group — Sidebar best practices (https://www.alfdesigngroup.com/post/improve-your-sidebar-design-for-web-apps)*

**E3. Persist the user's collapse preference across sessions.**
Don't reset to expanded on every page load; remember the chosen state.
*Source: Alf Design Group — Sidebar best practices (https://www.alfdesigngroup.com/post/improve-your-sidebar-design-for-web-apps)*

**E4. Animate the collapse smoothly (~200–300ms ease).**
Fluid transitions prevent jarring layout jumps; the main content area should reflow to fill the freed space. Don't make it so slow it feels sluggish.
*Source: Alf Design Group (https://www.alfdesigngroup.com/post/improve-your-sidebar-design-for-web-apps); UXPin — Sidebar tutorial (https://www.uxpin.com/studio/blog/sidebar-tutorial/)*

---

## F. Responsiveness & accessibility

**F1. On mobile, switch to an off-canvas / slide-in sidebar.**
Use a collapsible or off-canvas pattern triggered by a button to preserve scarce mobile space.
*Source: Navbar Gallery (https://www.navbar.gallery/blog/best-side-bar-navigation-menu-design-examples); UIUX Design Trends — sidebar UX (https://uiuxdesigntrends.com/best-ux-practices-for-sidebar-menu-in-2025/)*

**F2. Make the sidebar keyboard- and screen-reader-operable.**
Use `<nav>` with an accessible name (e.g., `aria-label`), proper roles, logical focus order, visible focus states, and `aria-current="page"` on the active item.
*Source: UXPin — Sidebar tutorial (https://www.uxpin.com/studio/blog/sidebar-tutorial/); UIUX Design Trends (https://uiuxdesigntrends.com/best-ux-practices-for-sidebar-menu-in-2025/)*

**F3. Account for label length and localization.**
Items that fit in English can overflow in other languages; design the width and truncation behavior for the longest realistic labels, and test with real content.
*Source: Alf Design Group (https://www.alfdesigngroup.com/post/improve-your-sidebar-design-for-web-apps); UX Planet (https://uxplanet.org/best-ux-practices-for-designing-a-sidebar-9174ee0ecaa2)*

**F4. Consider contextual sidebars in deep tools — with an escape hatch.**
In editors/complex apps, the rail can show context-relevant actions for the current view. If you do this, always provide a clear "Back to main menu" path so users aren't stranded.
*Source: UIUX Design Trends (https://uiuxdesigntrends.com/best-ux-practices-for-sidebar-menu-in-2025/)*
