---
name: ui-navbar
description: >-
  Use when building, reviewing, or designing top navigation bars, primary
  navigation menus, megamenus, or dropdown nav components. Covers placement,
  active states, label clarity, submenu interaction, and mobile/hamburger
  considerations based on NN/g's menu-design checklist.
---

# Navbar (Primary / Top Navigation & Menus)

The global navigation bar and its menus. Its jobs: let people get where they're going, and tell them *where they are* and *what this site is about*. Most of these are distilled from NN/g's "Menu-Design Checklist: 17 UX Guidelines."

---

## A. Visibility & placement

**A1. On desktop, keep primary navigation visible — don't hide it behind a hamburger.**
Out of sight is out of mind. The hamburger is a necessary compromise on small screens only; with desktop space, exposing the categories also communicates the site's scope and identity. Hidden nav loses those context cues.
*Source: NN/g — Menu-design checklist #1 (https://www.nngroup.com/articles/menu-design/)*

**A2. Put each menu where users expect it.**
Primary nav → header (websites) or left side (web apps). Utility/secondary nav → top, above primary nav. Local/section nav → left side. Footer nav → bottom. Honoring these conventions makes navigation findable without thought.
*Source: NN/g — Menu-design checklist #2 (https://www.nngroup.com/articles/menu-design/)*

**A3. Place the logo top-left and link it home.**
NN/g's research shows a top-left logo supports "return home" better than other positions.
*Source: NN/g — Universal navigation (https://www.nngroup.com/articles/universal-navigation/)*

**A4. Don't let an open menu cover the whole screen on large viewports.**
A megamenu/submenu is an ephemeral overlay, not a new page. Covering everything disorients users (they think they navigated away) and hides their location in the IA. (On mobile this guideline often must bend.)
*Source: NN/g — Menu-design checklist #4 (https://www.nngroup.com/articles/menu-design/)*

**A5. Consider a sticky (or partially sticky) header on long pages.**
Keeping nav in view spares users a long scroll back to the top — especially valuable on small screens.
*Source: NN/g — Menu-design checklist #15 (https://www.nngroup.com/articles/menu-design/)*

---

## B. Communicate location & options

**B1. Always indicate the current location in the menu.**
"Where am I?" is a fundamental wayfinding question, and failing to mark the active item is *the single most common menu mistake* NN/g sees. Users frequently land deep (not on the homepage), so the active-state cue is essential — and color alone isn't enough (add weight/underline/indicator).
*Source: NN/g — Menu-design checklist #5 (https://www.nngroup.com/articles/menu-design/)*

**B2. Provide local navigation for closely related content.**
When people compare items or do several tasks within one section, expose the sibling pages (e.g., a left-side local nav) instead of forcing "pogo-sticking" up and down the hierarchy.
*Source: NN/g — Menu-design checklist #6 (https://www.nngroup.com/articles/menu-design/)*

**B3. For large sites, surface multiple tiers via mega menus.**
If typical journeys drill down several levels, a megamenu (good for 2–3 tiers) lets users skip levels. On mobile, sequential ("drill-down") menus handle deep structures better than nested accordions.
*Source: NN/g — Menu-design checklist #9 (https://www.nngroup.com/articles/menu-design/); NN/g — Mega menus (https://www.nngroup.com/articles/mega-menus-work-well/)*

---

## C. Labels & scannability

**C1. Use clear, specific, familiar wording — no jargon or invented terms.**
Menus are not the place for cute brand-speak. Use the terms users already have (validate via card sorts / search analytics).
*Source: NN/g — Menu-design checklist #7 (https://www.nngroup.com/articles/menu-design/)*

**C2. Make labels scannable: left-justify vertical menus and front-load keywords.**
The first two words carry the scanning signal; lead with the distinguishing term.
*Source: NN/g — Menu-design checklist #8 (https://www.nngroup.com/articles/menu-design/); NN/g — Right-justified menus (https://www.nngroup.com/articles/right-justified-navigation-menus/)*

**C3. Keep the link text high-contrast against its background.**
Transparent navbars over hero images/carousels routinely make links unreadable. Don't make users squint. (Meet the 4.5:1 text floor.)
*Source: NN/g — Menu-design checklist #3 (https://www.nngroup.com/articles/menu-design/)*

**C4. Use icons/images only as *additional* signal, never as a label replacement.**
Visual cues can boost "information scent" and differentiation, but icon-only nav fails when users don't recognize the symbol. Always keep a clear text label (accessibility and usability both require it).
*Source: NN/g — Menu-design checklist #10 (https://www.nngroup.com/articles/menu-design/); NN/g — Icon usability (https://www.nngroup.com/articles/icon-usability/)*

**C5. It's fine to have more than 7–9 top-level categories — plan for it.**
Don't shrink fonts, crowd items, or distort your IA just to cram everything into one horizontal bar. If the hierarchy is broad, move to vertical/left navigation (see `03-sidebar.md`) rather than mangling labels.
*Source: NN/g — Left-side vertical navigation (https://www.nngroup.com/articles/vertical-nav/)*

---

## D. Interaction & manipulation

**D1. Make menu links big enough to click/tap easily.**
Tiny, tightly packed links frustrate everyone, not just mobile users. Respect target-size minimums (see foundations D1).
*Source: NN/g — Menu-design checklist #11 (https://www.nngroup.com/articles/menu-design/)*

**D2. Signify submenus with a caret/arrow.**
A caret tells users an item expands rather than navigates. Without it, people may not realize a submenu exists.
*Source: NN/g — Menu-design checklist #12 (https://www.nngroup.com/articles/menu-design/)*

**D3. Activate submenus on click, not hover.**
Hover is unavailable to touch and keyboard users and triggers/dismisses accidentally for everyone. A click-activated submenu is consistent across input modes. (If you must use hover, provide a click/keyboard fallback.)
*Source: NN/g — Menu-design checklist #13 (https://www.nngroup.com/articles/menu-design/)*

**D4. Avoid multi-level cascading flyout menus.**
One tier works; two becomes frustrating; three-plus is error-prone (users "fall out" of the menu). Use a mega menu or send users to a routing/landing page instead.
*Source: NN/g — Menu-design checklist #14 (https://www.nngroup.com/articles/menu-design/)*

**D5. Put frequently used commands closest to the trigger (Fitts's Law).**
In dropdowns, position common items near the launching link so the pointer/finger travels less.
*Source: NN/g — Menu-design checklist #16 (https://www.nngroup.com/articles/menu-design/); NN/g — Fitts's law (https://www.nngroup.com/articles/fitts-law/)*

---

## E. Restraint

**E1. Avoid gimmicky or "innovative" navigation.**
Novelty effects impress stakeholders, not users. People are impressed by good content that's easy to reach through familiar menus. Conventional, predictable nav wins.
*Source: NN/g — Menu-design checklist #17 (https://www.nngroup.com/articles/menu-design/)*

**E2. Build on a foundation of clear information architecture.**
No navbar can rescue a muddled IA. Sort content into buckets that match users' mental models (card sorting, search analytics) before styling the bar. Keep depth shallow; deep hierarchies become unusable.
*Source: Adobe blog — UX of navigation (https://blog.adobe.com/en/publish/2015/12/16/best-practices-for-the-ux-of-navigation)*

**E3. Use the footer for secondary/persona-specific links.**
Investor info, careers, legal, and other non-primary destinations belong in the footer, keeping the primary bar focused.
*Source: NN/g — Menu-design checklist #2 (https://www.nngroup.com/articles/menu-design/)*

---

## Quick reference

- ≤5 top items fit a horizontal bar comfortably; broad IA → go vertical (sidebar).
- Active state: required, multi-channel (not color alone).
- Submenus: caret + click-activated; max ~2 tiers; prefer mega menu for breadth.
- Desktop = nav visible; mobile = hamburger acceptable.
- Logo top-left, links home.
