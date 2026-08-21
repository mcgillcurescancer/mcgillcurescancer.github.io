---
name: ui-lists
description: >-
  Use when deciding between ordered vs. unordered lists, writing list items, or
  implementing list markup. Covers the ordered/unordered decision rule (sequence
  vs. set), parallel structure requirements, labelled lists for explanations,
  nesting limits, spacing, and semantic HTML for screen-reader accessibility.
---

# Lists (Ordered & Unordered)

Lists turn dense prose into scannable chunks — but only when the list *type* matches the data. The single most important decision is **numbered vs. bulleted**, because choosing wrong actively misleads users. Everything else is about parallelism, brevity, hierarchy, and semantic markup.

---

## A. Choosing the right list type

**A1. Use a numbered (ordered) list ONLY when sequence, rank, or count matters.**
Numbers communicate meaning: "do these in order," "this is #1," or "there are exactly five." Reach for an ordered list for step-by-step instructions, ranked results (top-10), or any time the user needs to reference an item by its position.
*Source: NN/g — 7 Tips for Presenting Bulleted Lists in Digital Content (https://www.nngroup.com/articles/presenting-bulleted-lists/)*

**A2. Never number a list whose order doesn't matter.**
In NN/g testing, when items were numbered, users inferred sequence or completeness that wasn't intended — assuming they had to do every "step," or that the items were ranked. If the items are an unordered set (pick any, do in any order), numbering them sends a false signal. Use bullets.
*Source: NN/g — 7 Tips for Presenting Bulleted Lists (https://www.nngroup.com/articles/presenting-bulleted-lists/)*

**A3. Use a bulleted (unordered) list for sets where order is irrelevant.**
Features, options, requirements, examples — anything where the items are peers. Bullets say "here is a group" without implying sequence or rank.
*Source: NIU — Using Bulleted and Numbered Lists (https://web.news.niu.edu/2024/09/27/using-bulleted-and-numbered-lists/)*

**A4. To signal "all of these are required," say so in the intro — don't switch to numbers.**
A common mistake is numbering a list to imply completeness ("you must satisfy all of these"). Numbers don't mean "all required"; they mean "ordered." Carry that meaning in the lead-in sentence instead: "You must meet *each* of the following:".
*Source: NIU — Using Bulleted and Numbered Lists (https://web.news.niu.edu/2024/09/27/using-bulleted-and-numbered-lists/)*

**A5. For 2–4 short items inside a sentence, consider an in-sentence (run-in) list instead of a block list.**
Block lists draw the eye and imply importance. A handful of short items embedded in prose ("the form accepts JPG, PNG, and WebP") may not warrant the visual weight of a bulleted block. Reserve block lists for content that benefits from scanning.
*Source: BCcampus — Technical Writing 3.3 Lists (https://pressbooks.bccampus.ca/technicalwriting/chapter/lists/)*

---

## B. Writing the items

**B1. Keep every item in parallel grammatical structure.**
If one item starts with a verb, they all start with a verb; if one is a noun phrase, they all are. Parallelism makes the list feel coherent and faster to scan; broken parallelism creates friction and looks careless.
*Source: NN/g — 7 Tips for Presenting Bulleted Lists (https://www.nngroup.com/articles/presenting-bulleted-lists/)*

**B2. Keep items short — ideally a word or a phrase, not a paragraph.**
Lists exist to be scanned. If items grow into multi-sentence chunks, either tighten them, or switch to a **labelled list** (bold lead-in term + short description) so the eye still has anchor points.
*Source: BCcampus — Technical Writing 3.3 Lists (https://pressbooks.bccampus.ca/technicalwriting/chapter/lists/)*

**B3. Introduce the list with a lead-in sentence, usually ending in a colon.**
A stem sentence frames what the list is and how to read it ("To reset your password, do the following:"). Lists dropped in without context force the reader to reverse-engineer their purpose.
*Source: BCcampus — Technical Writing 3.3 Lists (https://pressbooks.bccampus.ca/technicalwriting/chapter/lists/)*

**B4. Use labelled lists when each item needs explanation.**
When items aren't self-explanatory, lead each with a bolded term, then a short gloss. This preserves scannability (the bold terms are the scan targets) while allowing detail.
*Source: BCcampus — Technical Writing 3.3 Lists (https://pressbooks.bccampus.ca/technicalwriting/chapter/lists/)*

**B5. Aim for a small number of items; group or split very long lists.**
A list of 30 flat bullets isn't scannable — it's a wall. Break long lists into labelled subgroups with headings, or into nested lists, so structure carries meaning.
*Source: NN/g — 7 Tips for Presenting Bulleted Lists (https://www.nngroup.com/articles/presenting-bulleted-lists/)*

---

## C. Hierarchy & nesting

**C1. Indent nested items to show their parent–child relationship.**
A sub-list belongs visually *inside* its parent item. Indentation is the primary cue that "these belong to the item above."
*Source: Page One Formula — Bullet Points and Numbered Lists in UX (https://pageoneformula.com/the-role-of-bullet-points-and-numbered-lists-in-ux/)*

**C2. Change the marker style by level to reinforce depth.**
A different bullet glyph (or number/letter scheme) at each level helps users track how deep they are: e.g., disc → circle → square, or 1. → a. → i. Keep the scheme consistent across the app.
*Source: Page One Formula — Bullet Points and Numbered Lists in UX (https://pageoneformula.com/the-role-of-bullet-points-and-numbered-lists-in-ux/)*

**C3. Don't nest more than two or three levels deep.**
Deep nesting is hard to follow and usually signals the content should be restructured (e.g., into sections with headings). Flatten where you can.
*Source: BCcampus — Technical Writing 3.3 Lists (https://pressbooks.bccampus.ca/technicalwriting/chapter/lists/)*

---

## D. Visual formatting & spacing

**D1. Give list items generous vertical breathing room.**
Add spacing between items (a common starting point is ~1.5× the line-height) and whitespace around the whole list so it reads as a distinct block, not a cramped paragraph.
*Source: Page One Formula — Bullet Points and Numbered Lists in UX (https://pageoneformula.com/the-role-of-bullet-points-and-numbered-lists-in-ux/)*

**D2. Keep list line length within the readable range.**
Long list items still obey reading-comfort limits: 45–75 characters per line (~66 optimal), capped near 80. Past that, the eye struggles to find the next line. (Cross-ref foundations C1 / `00-foundations`.)
*Source: Baymard — Line Length & Readability (https://baymard.com/blog/line-length-readability); UXPin — Optimal Line Length (https://www.uxpin.com/studio/blog/optimal-line-length-for-readability/)*

**D3. Use a legible body type for list text.**
Sans-serif at a comfortable body size (≈14–16px on screen) with adequate contrast keeps lists readable; tiny or low-contrast list text defeats the scannability the list is meant to provide. (Cross-ref `01-foundations`.)
*Source: Page One Formula — Bullet Points and Numbered Lists in UX (https://pageoneformula.com/the-role-of-bullet-points-and-numbered-lists-in-ux/)*

---

## E. Semantics & accessibility

**E1. Mark lists up with real list elements — `<ul>`, `<ol>`, `<li>`.**
Screen readers announce "list, N items" and let users jump between items and skip the list. Faking a list with line breaks, dashes, or paragraphs destroys this navigation and the "how many items" cue.
*Source: Université de La Réunion — Bulleted or Numbered Lists: Focus on Readability (https://www.univ-reunion.fr/en/accessibility/bulleted-or-numbered-lists-focus-on-readability/)*

**E2. Match the element to the meaning: `<ol>` for ordered, `<ul>` for unordered.**
The semantic choice mirrors the visual one in A1–A3. An ordered list communicates sequence to assistive tech; an unordered list communicates a set. Don't pick based on whether you want numbers styled in — control markers with CSS, choose the element by meaning.
*Source: Université de La Réunion — Bulleted or Numbered Lists (https://www.univ-reunion.fr/en/accessibility/bulleted-or-numbered-lists-focus-on-readability/)*

**E3. Don't use list markup purely for indentation or layout.**
Wrapping non-list content in `<ul>` to get indentation pollutes the screen-reader experience with spurious "list, 1 item" announcements. Use lists for actual lists.
*Source: Université de La Réunion — Bulleted or Numbered Lists (https://www.univ-reunion.fr/en/accessibility/bulleted-or-numbered-lists-focus-on-readability/)*

---

## Quick reference

- **Order/rank/count matters → numbered `<ol>`. Otherwise → bulleted `<ul>`.** Never number an unordered set (it implies false sequence).
- "All required" lives in the **intro sentence**, not in number markers.
- **Parallel structure** for every item; keep items **short**; lead in with a **colon** sentence.
- Need explanation per item → **labelled list** (bold term + gloss).
- **Indent** to nest, vary the marker by level, ≤2–3 levels deep.
- Spacing between items (~1.5× line-height); line length 45–75 chars; legible body type.
- Use **real `<ul>`/`<ol>`/`<li>`** so screen readers can announce and navigate; never fake lists or abuse them for indentation.
