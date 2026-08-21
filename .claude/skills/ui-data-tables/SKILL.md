---
name: ui-data-tables
description: >-
  Use when designing or building data table components. Covers column alignment
  rules (left text, right numbers), row striping choices, sticky headers, column
  resizing and freezing, sorting, truncation with tooltips, density options, and
  semantic table markup for accessibility.
---

# Data Tables

Tables are scanning and comparison tools. Almost every rule below serves one goal: let the eye move down a column and across a row without friction. The strongest, most consistent guidance in the literature is about **alignment**.

Static fundraising-site default: use tables only for real comparison or accountability data, such
as sponsor tier benefits, annual funds raised by year, or grant allocations. Use cards or short
stat blocks for headline impact numbers; do not turn marketing content into a table.

---

## A. Alignment (the highest-leverage rules)

**A1. Left-align text; right-align numbers that represent magnitude.**
Text reads left-to-right, so left-aligning keeps a clean left edge to scan. Numbers are compared right-to-left (ones, tens, hundreds…), so right-aligning lines up the place values and lets users eyeball magnitude and spot outliers. This is the most repeated rule in table design.
*Source: Medium/Matthew Ström — Design better data tables (https://medium.com/mission-log/design-better-data-tables-430a30a00d8c); Medium/Molly Hellmuth — Designing data tables (https://medium.com/design-with-figma/the-ultimate-guide-to-designing-data-tables-7db29713a85a)*

**A2. Numbers that aren't magnitudes (zip, phone, ID, year) can be left-aligned.**
Right-alignment helps only when relative size matters. Identifiers don't, so treat them like text.
*Source: Medium/Molly Hellmuth (https://medium.com/design-with-figma/the-ultimate-guide-to-designing-data-tables-7db29713a85a); UX Pickle — cell alignment (https://uxpickle.com/ux-best-practice-for-data-table-cell-content-alignment/)*

**A3. Align each header to its column's content.**
A numeric (right-aligned) column gets a right-aligned header; a text column gets a left-aligned header. Misaligned headers create off-putting whitespace and visual noise.
*Source: Medium/Vaishali Samanta — Effective data tables (https://medium.com/@vaishali.samanta/designing-effective-ui-ux-data-tables-101-part-1-09e1599553d4); UX Pickle (https://uxpickle.com/ux-best-practice-for-data-table-cell-content-alignment/)*

**A4. Avoid center alignment for text and numbers.**
Centering destroys the clean column edge, forces extra eye movement, and makes inconsistencies hard to spot. Exceptions: checkboxes, icons, and star ratings can be centered.
*Source: Medium/Vaishali Samanta (https://medium.com/@vaishali.samanta/designing-effective-ui-ux-data-tables-101-part-1-09e1599553d4); UX Pickle (https://uxpickle.com/ux-best-practice-for-data-table-cell-content-alignment/)*

**A5. Use tabular (monospaced) figures for numeric columns.**
With proportional fonts, "1" is narrower than "8," so columns of numbers misalign. Tabular/lining figures give every digit the same width, keeping columns crisp.
*Source: Medium/Molly Hellmuth (https://medium.com/design-with-figma/the-ultimate-guide-to-designing-data-tables-7db29713a85a)*

**A6. Keep decimal precision consistent within a column.**
If you show 3 decimals, show 3 throughout (and prefer fewer significant figures where possible) so decimals line up.
*Source: UX Pickle — cell alignment (https://uxpickle.com/ux-best-practice-for-data-table-cell-content-alignment/)*

---

## B. Row styling & separators

**B1. Choose ONE row-separation style to match dataset size.**
- **Zebra stripes** (alternating row fills): best for large datasets where users need help tracking across long rows.
- **Light line dividers**: a clean default; keep the rule color light enough to "melt into" the background.
- **Free form** (no separators): minimalist, good for small datasets where users won't lose their place.
*Source: Medium/Molly Hellmuth (https://medium.com/design-with-figma/the-ultimate-guide-to-designing-data-tables-7db29713a85a); Pencil & Paper — enterprise tables (https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)*

**B2. Don't stack too many background semantics.**
Zebra + disabled overlay + selected + hover quickly becomes 4–5 competing grays, breaking visual continuity. If you zebra-stripe, you usually don't also need row borders; if you don't stripe, light row borders help. Keep it to as few layers as possible.
*Source: Pencil & Paper — enterprise tables (https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables); UX Movement — table techniques (https://uxmovement.com/content/9-design-techniques-for-user-friendly-tables/)*

**B3. Beware zebra stripes on *small* tables.**
With few rows, a highlighted alternating row can be misread as "special"/selected. Reserve striping for longer tables.
*Source: Medium/Andrew Coyle — Design better data tables (https://coyleandrew.medium.com/design-better-data-tables-4ecc99d23356)*

---

## C. Headers & structure

**C1. Differentiate the header row clearly.**
Make column headers stand out via heavier weight and/or color (and optionally a header background). A bold, darker header instantly communicates structure.
*Source: Medium/Molly Hellmuth (https://medium.com/design-with-figma/the-ultimate-guide-to-designing-data-tables-7db29713a85a); UX Design World — Data tables (https://uxdworld.com/data-table-design-best-practices/)*

**C2. Use a sticky/fixed header on scroll.**
Keeping column labels in view as the user scrolls preserves context across long tables.
*Source: Medium/Molly Hellmuth (https://medium.com/design-with-figma/the-ultimate-guide-to-designing-data-tables-7db29713a85a); Pencil & Paper (https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)*

**C3. Don't repeat redundant text in every row.**
Push a shared qualifier into the column header (e.g., header "Lead status" with rows "Qualified"/"Nurturing" rather than "Qualified Lead" in every cell). Pairs well with a sticky header.
*Source: Medium/Vaishali Samanta (https://medium.com/@vaishali.samanta/designing-effective-ui-ux-data-tables-101-part-1-09e1599553d4)*

**C4. Use semantic table markup.**
Real `<table>`, `<thead>`, `<th scope>`, `<tbody>` so screen readers can navigate rows/columns and associate headers with cells.
*Source: accessibility consensus (WCAG 1.3.1), reflected across the table sources above.*

---

## D. Long content, density & controls

**D1. Truncate overflowing text and reveal the full value on hover/tap (tooltip).**
Long names/addresses/descriptions blow out column width; truncate to a fixed width and show the full text in a tooltip so the table stays scannable.
*Source: UX Design World — Data tables (https://uxdworld.com/data-table-design-best-practices/)*

**D2. Offer display-density options (compact vs. comfortable).**
Smaller row heights show more data without scrolling; let power users compress. Choose a default line-height appropriate to the data.
*Source: Medium/Andrew Coyle (https://coyleandrew.medium.com/design-better-data-tables-4ecc99d23356); Medium/Molly Hellmuth (https://medium.com/design-with-figma/the-ultimate-guide-to-designing-data-tables-7db29713a85a)*

**D3. Allow column resizing (and, for dense tables, column locking/freezing).**
Resizable columns let users see truncated data in full; freezing identifier columns helps users keep anchors while scrolling horizontally and compare across.
*Source: UX Design World — Data tables (https://uxdworld.com/data-table-design-best-practices/); Medium/Andrew Coyle (https://coyleandrew.medium.com/design-better-data-tables-4ecc99d23356)*

**D4. Support sorting; default each column to its natural order.**
Let users sort; default columns to their meaningful order (A→Z, newest first, largest first) so the most useful view is the starting point.
*Source: UX Movement — table techniques (https://uxmovement.com/content/9-design-techniques-for-user-friendly-tables/); UX Design World (https://uxdworld.com/data-table-design-best-practices/)*

**D5. Place pagination/controls predictably and show a loading state on page change.**
Put pagination above or below the table; show a spinner/skeleton while the next page loads. (See `04-breadcrumbs-and-pagination.md`.)
*Source: UX Design World — Data tables (https://uxdworld.com/data-table-design-best-practices/)*

---

## Quick reference

- Text left · magnitude-numbers right · headers match their column · never center text/numbers.
- Tabular figures · consistent decimals.
- One row style: zebra (big sets) / light lines / none (small sets) — don't pile on grays.
- Sticky header · semantic `<table>` · truncate-with-tooltip · density + resize options.
