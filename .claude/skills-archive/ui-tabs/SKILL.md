---
name: ui-tabs
description: >-
  Use when designing or building in-page tab navigation components. Covers when
  tabs are the right pattern (vs. steppers, accordions), active state design,
  overflow handling, keyboard/ARIA implementation, and animation guidance.
---

# Tabs (In-Page Tabbed Navigation)

Tabs let users view one panel of related content at a time from a set of parallel options, all within the same context and page. (This is about *in-UI* tabs, not browser tabs.)

Static fundraising-site default: prefer visible sections over tabs for mission, impact, sponsors,
events, and student involvement. Tabs hide content from scanners and can reduce discoverability.
Use tabs only for true peer content where showing all panels would be repetitive, such as compact
year-by-year results.

---

## A. When tabs are the right pattern

**A1. Use tabs only for parallel, mutually related content at the same hierarchy level.**
The classic example: a profile split into *Personal / Professional / Education*. The content sections must be peers; one is shown at a time.
*Source: NN/g — Tabs, used right (https://www.nngroup.com/articles/tabs-used-right/); UX Design World — Tabs (https://uxdworld.com/tabs-navigation-design-best-practices/)*

**A2. Don't use tabs for sequential / step-by-step flows.**
Order-dependent processes (wizards, checkouts) want a stepper or progress indicator, not tabs. Tabs imply users can jump in any order.
*Source: Setproduct — Tab UI rules (https://www.setproduct.com/blog/tabs-ui-design); NN/g — Tabs, used right (https://www.nngroup.com/articles/tabs-used-right/)*

**A3. Keep the count manageable; don't wrap tabs onto two rows.**
Too many tabs hurts scannability. If they don't fit, use horizontal scrolling with clear affordances (see C2) rather than a second row.
*Source: UX Design World — Tabs (https://uxdworld.com/tabs-navigation-design-best-practices/); Eleken — Tabs UX (https://www.eleken.co/blog-posts/tabs-ux)*

---

## B. Anatomy & active state

**B1. Provide the four required parts.**
A tab interface has: the **list** of tabs (traditionally horizontal), a concise **label** per tab, the content **panel**, and a **selection indicator** marking which tab is active.
*Source: NN/g — Tabs, used right (https://www.nngroup.com/articles/tabs-used-right/)*

**B2. Make the active tab unmistakable — and not via color alone.**
Combine cues: an underline/indicator bar, bolder weight, and/or a contrasting background. Inactive tabs should still look clickable but clearly distinct from the active one. NN/g treats weak active-state differentiation as a core failure.
*Source: Eleken — Tabs UX (https://www.eleken.co/blog-posts/tabs-ux); UX Design World — Tabs (https://uxdworld.com/tabs-navigation-design-best-practices/)*

**B3. Place tabs at the top of the content they control.**
Top, horizontal placement matches user expectations; bottom-of-content tabs on desktop are unexpected and missed.
*Source: UX Design World — Tabs (https://uxdworld.com/tabs-navigation-design-best-practices/)*

**B4. Every tab must have associated content — no "ghost tabs."**
Don't show a tab that leads nowhere or to an empty panel.
*Source: Setproduct — Tab UI rules (https://www.setproduct.com/blog/tabs-ui-design)*

---

## C. Labels, overflow & feedback

**C1. Use concise, parallel labels.**
Keep wording short and grammatically parallel across tabs so the set reads as a coherent group.
*Source: Justinmind — Tab design tips (https://www.justinmind.com/ui-design/tips-examples-tabs-web)*

**C2. Handle overflow with scrollable tabs and visible cues.**
When tabs exceed the width, allow horizontal scroll but signal it: a partially visible tab at the edge or small arrows. Without cues, users assume there are no more tabs. Avoid infinite/looping scroll — tabs need a clear start and end.
*Source: Eleken — Tabs UX (https://www.eleken.co/blog-posts/tabs-ux)*

**C3. Optionally use status indicators (e.g., a dot or badge).**
A dot can flag "unsaved changes" or "new content" in a tab without opening it; a badge can show a count. Use sparingly and meaningfully.
*Source: UX Design World — Tabs (https://uxdworld.com/tabs-navigation-design-best-practices/)*

**C4. Use icon-only tabs only when the icon is unambiguous and space is tight — add a tooltip.**
*Source: Design Systems Surf — Tabs blueprint (https://designsystems.surf/blueprints/tabs)*

---

## D. Behavior & accessibility

**D1. Switching tabs should not lose context.**
Maintain scroll/vertical position when toggling so users aren't disoriented. In multi-page forms, preserve the active tab through navigation.
*Source: Setproduct — Tab UI rules (https://www.setproduct.com/blog/tabs-ui-design)*

**D2. Implement the ARIA tabs pattern with full keyboard support.**
Use `role="tablist"`, `role="tab"` (with `aria-selected`), and `role="tabpanel"`. Arrow keys move between tabs; the selected tab is in the tab order; focus styles must be clearly visible and match hover styling.
*Source: Eleken — Tabs UX (https://www.eleken.co/blog-posts/tabs-ux); Design Systems Surf — Tabs blueprint (https://designsystems.surf/blueprints/tabs)*

**D3. Animate panel transitions subtly, if at all.**
A short cross-fade is fine; avoid slide animations between panels — they cause spatial disorientation. For heavy panels, show a skeleton while loading.
*Source: Setproduct — Tab UI rules (https://www.setproduct.com/blog/tabs-ui-design)*

**D4. Give tabs adequate target size and spacing on touch.**
Keep tab hit areas large enough and provide tap feedback on mobile.
*Source: Eleken — Tabs UX (https://www.eleken.co/blog-posts/tabs-ux)*
