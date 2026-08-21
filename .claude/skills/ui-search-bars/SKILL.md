---
name: ui-search-bars
description: >-
  Use when designing or building search bar components, autocomplete/suggestion
  UIs, or zero-results states. Covers field visibility requirements, placement
  conventions, sizing for query length, autocomplete behavior, and what to show
  when search returns no results.
---

# Search Bars

Search serves two audiences at once: people who know exactly what they want (it's a navigation shortcut that bypasses the IA) and people who are lost (it's a safety net). Well-designed search has a well-documented conversion impact; hiding or under-sizing it is one of the most common, costly mistakes. Grounded in NN/g and Baymard research.

---

## A. Make it a visible field, not a hidden icon

**A1. Show an actual input box — don't hide search behind an icon-only magnifying glass on desktop.**
NN/g flags the "magnifying glass that opens a modal" as a usability problem. A visible text field clearly signals where to type and significantly outperforms icon-only implementations in usage. (On a search-dependent site, hidden search suppresses high-intent behavior.)
*Source: ecomhint — Site search best practices (cites NN/g) (https://ecomhint.com/blog/ecommerce-site-search-best-practices); whatifdesign — Search UX (https://whatifdesign.co/feeds/blog/best-search-ux-design)*

**A2. Use the magnifying-glass icon as the recognizable signifier.**
It's the universal search symbol — keep it simple and minimal. Put it on the left of the field, or as a button on the right; either is conventional.
*Source: SpecificIT — Search bar best practices (https://specificit.com.au/best-practices-for-designing-a-search-bar/); Luigi's Box — Search bar design (https://www.luigisbox.com/blog/search-bar-design/)*

**A3. If a magnifying-glass icon is *not* clickable, don't show it as a standalone button.**
Many users assume a lone magnifying glass is a button. Only present it that way if tapping it actually triggers/expands search.
*Source: Magezon — Search bar best practices (https://blog.magezon.com/search-bar-design-best-practices-ecm/)*

---

## B. Placement & consistency

**B1. Place search where users expect it: top-center or top-right of the header.**
For search-heavy sites (think YouTube/Amazon), the top-center or top-right header position is expected and prominent.
*Source: Yellow Slice — Search box & filter design (https://www.yellowslice.in/blog/best-practices-for-designing-search-box-and-filter-design); Luigi's Box (https://www.luigisbox.com/blog/search-bar-design/)*

**B2. Keep search in the same place and same appearance across every page.**
Users expect the box to stay put; inconsistent placement causes confusion and hurts conversion. Make it persistent.
*Source: Luigi's Box — Search bar design (https://www.luigisbox.com/blog/search-bar-design/)*

**B3. Scale prominence to how central search is.**
The bigger and more varied the catalog/content, the more prominent search should be in the layout (Baymard ties field size to catalog scope).
*Source: ecomhint — Site search best practices (cites Baymard) (https://ecomhint.com/blog/ecommerce-site-search-best-practices)*

---

## C. Field sizing

**C1. Make the field wide enough to show ~27–30+ characters without horizontal scrolling.**
Average queries run ~27–30 characters (Baymard); NN/g recommends showing ≥30 characters. A too-narrow box truncates the query mid-word, making it hard to review and edit. In practice that's roughly ≥350px on desktop for most sites; larger for big catalogs.
*Source: whatifdesign — Search UX (cites Baymard) (https://whatifdesign.co/feeds/blog/best-search-ux-design); ecomhint — Site search (cites NN/g) (https://ecomhint.com/blog/ecommerce-site-search-best-practices)*

**C2. On mobile, let the search field span full width.**
A magnifying-glass icon that expands to a full-width bar is a clean mobile pattern — and ideally opens with the keyboard already up, saving a tap.
*Source: ecomhint (https://ecomhint.com/blog/ecommerce-site-search-best-practices); Alf Design Group — Website search design (https://www.alfdesigngroup.com/post/best-practices-for-website-search-design)*

**C3. Consider an expandable field that grows as the user types** for queries that exceed the default width.
*Source: Alf Design Group — Website search design (https://www.alfdesigngroup.com/post/best-practices-for-website-search-design)*

---

## D. Submission, placeholder & feedback

**D1. Allow submission by both pressing Enter and clicking the button.**
Some users hit Enter, others click — support both. Including a labeled "Search" button (or icon button) signals the submit step.
*Source: Magezon — Search bar best practices (https://blog.magezon.com/search-bar-design-best-practices-ecm/); Yellow Slice (https://www.yellowslice.in/blog/best-practices-for-designing-search-box-and-filter-design)*

**D2. Use a scoped placeholder that hints what can be searched.**
"Search products…", "Search articles…" — context beats a generic "Search." (It supplements, never replaces, an accessible label.)
*Source: SpecificIT — Search bar best practices (https://specificit.com.au/best-practices-for-designing-a-search-bar/)*

**D3. Give the field a clear focus/active state.**
On focus, change the border/shadow (or expand) so users see it's ready for input.
*Source: SpecificIT — Search bar best practices (https://specificit.com.au/best-practices-for-designing-a-search-bar/)*

**D4. Ensure the box and its border contrast with the background.**
A subtle border or shadow (≥3:1) keeps the field from blending in.
*Source: SpecificIT (https://specificit.com.au/best-practices-for-designing-a-search-bar/)*

---

## E. Autocomplete & suggestions

**E1. Offer autocomplete/suggestions after ~2–3 characters.**
Predictive suggestions (from popular searches, history, current context, product names) help users refine queries, speed input, and reduce typos. Make suggestions clickable and lead directly to results.
*Source: SpecificIT (https://specificit.com.au/best-practices-for-designing-a-search-bar/); Luigi's Box (https://www.luigisbox.com/blog/search-bar-design/)*

**E2. Prioritize speed, typo tolerance, and query matching.**
Fast suggestions, spelling correction, and forgiving matching keep users engaged rather than bouncing.
*Source: Luigi's Box — Search bar design (https://www.luigisbox.com/blog/search-bar-design/)*

---

## F. Zero results — the most-neglected screen

**F1. Never dead-end on zero results.**
Nearly half of e-commerce sites give no meaningful recovery on the no-results page (Baymard), and most users then bounce. Provide spelling corrections, related categories, popular items, and a way to refine — turn the dead end into a path forward.
*Source: ecomhint — Site search best practices (cites Baymard) (https://ecomhint.com/blog/ecommerce-site-search-best-practices)*

**F2. Add filtering/sorting to results.**
Once results appear, let users narrow by relevant facets and re-sort — especially important for long or imprecise result sets.
*Source: whatifdesign — Search UX (https://whatifdesign.co/feeds/blog/best-search-ux-design)*

---

## Quick reference

- Visible field (not icon-only) · magnifying glass · top-center/right · persistent.
- Width shows ≥27–30 chars (~350px+ desktop, full-width mobile).
- Enter **and** button submit · scoped placeholder · clear focus state.
- Autocomplete after 2–3 chars · typo tolerance.
- Zero-results page = recovery options, never a dead end.
