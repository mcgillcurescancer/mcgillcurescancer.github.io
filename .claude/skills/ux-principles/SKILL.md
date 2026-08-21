---
name: ux-principles
description: >-
  Use when planning, building, or reviewing static informational or fundraising
  websites, especially nonprofit, club, sponsor-facing, student-facing, or
  donor-facing pages. Covers user jobs, content order, credibility, scannability,
  navigation, CTAs, accessibility, SEO, mobile performance, and when not to use
  heavier application UI patterns. For visual polish alone, pair with
  ui-principles.
---

# UX Principles for Static Fundraising Websites

This skill governs how a simple static website works before component-level UI decisions begin.
For a cancer research fundraising club, the site needs to help potential sponsors, donors, students,
and community visitors answer a few questions quickly: who is this, what do they do, can I trust
them, what impact have they had, and what should I do next?

Use the existing UI skills for component execution, but let this skill decide whether the component
belongs on the page at all.

## Research Basis

- NN/g homepage research: effective homepages communicate who the organization is, show examples,
  prompt action, and stay simple.
- NN/g nonprofit research: donors need clear-spoken information about mission, goals, and use of
  money before deciding to donate.
- M+R Benchmarks 2026: nonprofit traffic is mobile-heavy, but desktop still drives more donation
  revenue; mobile paths and payment friction matter.
- Stanford Web Credibility Guidelines: trust improves when visitors can verify claims, see real
  organization details, contact real people, and find recently maintained information.
- W3C WAI and Google page-experience guidance: accessibility, mobile usability, and performance are
  part of user satisfaction, not separate chores.

Sources:

- NN/g homepage principles: https://www.nngroup.com/articles/homepage-design-principles/
- NN/g nonprofit report: https://www.nngroup.com/reports/attracting-donors-and-volunteers-non-profit/
- M+R Benchmarks 2026 website performance: https://mrbenchmarks.com/website-performance/
- Stanford Web Credibility Guidelines: https://credibility.stanford.edu/guidelines/index.html
- W3C WAI designing tips: https://www.w3.org/WAI/tips/designing/
- Google page experience: https://developers.google.com/search/docs/appearance/page-experience
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

## A. Start With Visitor Jobs

Before layout, rank the visitor jobs. For this site, assume these top tasks unless project-specific
research says otherwise:

1. Sponsors want to know legitimacy, audience, impact, sponsor value, and how to contact the team.
2. Students want to know what the club does, how to join, what events happen, and whether it feels
   active and welcoming.
3. Donors want to know what their money supports, why it matters, and whether giving is trustworthy.
4. Faculty, alumni, and community visitors want proof of real activity, affiliation, and outcomes.

Design the page around those jobs, not around a list of components.

## B. First Screen Contract

The first viewport should answer, in plain language:

- Organization identity: name, affiliation, and cancer research fundraising purpose.
- Concrete value: what the club actually does, not only an abstract mission statement.
- Proof cue: a real image, amount raised, partner name, event count, or recent campaign.
- Primary action: one dominant next step, such as `Sponsor Research`, `Donate`, or `Join`.
- Secondary path: one quieter path if needed, such as `See Our Impact`.

Avoid false floors: the first screen should hint that more content continues below. Do not let a
full-bleed hero image make the page look finished after one screen.

## C. Credibility And Trust

For a fundraising club, credibility is content, not decoration. Include the strongest available
proof close to the top and repeat supporting proof near CTAs.

- Show funds raised with dates and context, such as `Raised $X for Y in 2025`.
- Explain how funds are used before asking for a gift or sponsorship.
- Show real people: current executive team, event photos, partner researchers, advisors, or club
  members where privacy permits.
- Include real contact routes: email, social links, and ideally a named partnerships contact.
- Show affiliation carefully: use McGill/Cancer-related names only in approved ways and avoid
  implying endorsements that are not real.
- Keep content current: add a visible year, recent event, recent campaign, or last-updated signal.
- Link out to verifiable sources where possible: donation platform, financial summary, partner lab,
  sponsor package, or public social profile.

## D. Static Page Structure

Use a simple, predictable page shape:

- Header: logo/name on the left, visible desktop section links, compact mobile menu, and one CTA.
- Hero: identity, mission, proof cue, and primary/secondary action.
- Impact: funds raised, where money went, what changed, and the evidence behind the numbers.
- What We Do: fundraisers, awareness events, research education, campaigns, or community work.
- Sponsor Path: sponsor value proposition, audience/reach, available packages, proof, and contact.
- Student Path: what members do, roles, time commitment, benefits, and join action.
- Team/Partners: real people and organizations that make the project credible.
- FAQ/Contact/Footer: donation details, sponsorship questions, contact, social links, legal/privacy
  if needed.

For a one-page site, anchor navigation is enough. For a multi-page site, keep page titles and URLs
descriptive.

## E. Content For Scanning

Visitors scan. Help them.

- Put the point first in headings and paragraphs.
- Use short sections, short paragraphs, and lists for specifics.
- Use numbers, dates, names, and concrete nouns.
- Replace generic CTAs like `Learn More` with destination-specific links.
- Keep body text left-aligned and within readable line length.
- Avoid jargon such as internal committee names unless immediately explained.
- Do not lock important content in images, carousels, PDFs, hover-only UI, or social embeds.

## F. Interaction Restraint

A static fundraising website should feel fast, direct, and trustworthy. Default to visible content
over hidden controls.

Usually use:

- Top navigation, section anchors, buttons/links, cards for repeated items, lists, simple forms,
  semantic sections, real images, and concise stat blocks.

Use only when justified:

- Forms: contact, sponsorship inquiry, email signup, or student signup.
- Tables: sponsor tier comparison or accountability data.
- Accordions/tabs: compact FAQs or peer content that is genuinely too long to show at once.

Avoid by default:

- Sidebars, dashboards, breadcrumbs, pagination, search, toasts, popups, splash screens, autoplay
  carousels, scrolljacking, and tooltips for essential information.

## G. Accessibility Baseline

Static pages are often the easiest to make accessible. Keep that advantage.

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Provide a visible skip link.
- Use one `h1`; keep heading order logical.
- Make links and buttons descriptive and keyboard reachable.
- Maintain visible focus states.
- Meet WCAG contrast: 4.5:1 for normal text and 3:1 for large text and meaningful UI boundaries.
- Do not use color alone for state, sponsor tier, donation status, or error messaging.
- Add useful alt text for informative images; use empty alt for decorative images.
- Provide captions/transcripts for meaningful video or audio.
- Preserve browser zoom and responsive reflow; avoid horizontal scrolling.

## H. Performance And SEO

Static HTML/CSS/JS should be fast by default. Protect that advantage.

- Keep JavaScript minimal and progressive; do not require JS for core content.
- Optimize images, set width/height to avoid layout shift, and lazy-load below-fold media.
- Avoid heavy animation libraries for simple reveal effects.
- Target good Core Web Vitals: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1.
- Use a unique `<title>`, useful meta description, semantic headings, and descriptive link text.
- Put important cause, location, and organization terms in real text, not only in graphics.
- Use social preview metadata for sharing sponsor packets or campaign links.

## Review Checklist

- [ ] First screen answers who, what, why it matters, proof, and next action.
- [ ] Sponsor, student, and donor paths are visible without hunting.
- [ ] Funds raised and donation use are concrete, dated, and verifiable.
- [ ] Real people, contact information, affiliation, and recent activity establish credibility.
- [ ] The page is scannable: specific headings, short text, meaningful links, visible sections.
- [ ] No heavy app pattern is used where visible static content would work better.
- [ ] Mobile view keeps the primary CTA, proof, and content readable.
- [ ] Accessibility basics pass: semantic structure, contrast, focus, alt text, keyboard, reflow.
- [ ] Performance basics pass: optimized media, low JS, no layout shift, PageSpeed/Lighthouse checked.
