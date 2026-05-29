# ReWorks Website — SEO Implementation Prompt

## Context

You are working on the **ReWorks** website, a Next.js 14 app currently deployed at `rework-delta-umber.vercel.app`. The codebase uses the App Router (`app/` directory), Tailwind CSS, and TypeScript.

The goal is to implement a precise set of on-page SEO changes aligned to a professional SEO content brief. The primary target keyword is **"digital marketing agency Mumbai & Dubai"** and secondary is **"digital marketing agency India and UAE"**.

Do not change any visual design, layout structure, animations, or component logic unless explicitly instructed below. Only touch what is specified.

---

## Change 1 — Page Metadata

**File:** `app/page.tsx` or wherever the homepage `metadata` export lives.

Replace the existing `metadata` object with:

```ts
export const metadata: Metadata = {
  title: "Digital Marketing Agency Mumbai & Dubai & India UAE | ReWorks",
  description:
    "ReWorks is a digital marketing agency in Mumbai & Dubai offering branding, social media, video, and digital development for FMCG, entertainment, and hospitality brands. Let's build something.",
};
```

**Why:** Current title "Reworks - A Gen-Z Digital Marketing Studio" contains zero searchable keywords. This fix puts the primary keyword in the title tag and the meta description mentions all 4 services and all 3 target industries.

---

## Change 2 — Hero H1

**File:** Hero section component.

Find the current H1 text:
```
WE DON'T REWORK. WE REVOLUTIONIZE.
```

Replace with:
```
Digital Marketing Agency in Mumbai & Dubai — Where Strategy Meets Culture
```

Keep all existing styling classes on the `<h1>` tag unchanged. Keep the subheading/tagline line that follows — do not remove or move it.

**Why:** The H1 is the single most important on-page SEO signal. The current H1 is a tagline with no search value. The tagline belongs in the subheading, which is where it already lives.

---

## Change 3 — Hero Subheading Body Copy

Find the paragraph:
```
Rework to Revolutionize. We turn scattered brands into sharp, scroll-stopping systems — built to move brands in Dubai and across the UAE.
```

Replace with:
```
Rework to Revolutionize. We turn scattered brands into sharp, scroll-stopping systems — built to move brands from Mumbai to Dubai and across India and the UAE.
```

**Why:** Adds "Mumbai" and "India" to the first visible paragraph — both are missing from the current copy. Both must appear in the first 100 words for keyword relevance.

---

## Change 4 — Services Section H2

Find the H2:
```
Four Disciplines, one Studio.
```

Replace with:
```
Digital Marketing Services We Offer in Mumbai & Dubai
```

Keep all styling classes unchanged.

**Why:** "Four Disciplines" is descriptive but has zero search value. This H2 is the primary services section — it needs the keyword.

---

## Change 5 — New Industries Section

**Insert this section after the "How We Work" section and before the Portfolio/Showreel section.**

Match the existing site's design language: dark background, white text, Tailwind utility classes. Adapt class names to match the project's existing patterns if they differ from below.

```tsx
<section id="industries" className="py-24 px-6 md:px-16 bg-black text-white">
  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
    Industries We Serve
  </p>
  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    Entertainment, FMCG &amp; Hospitality Brands in India &amp; the UAE
  </h2>
  <p className="text-neutral-400 max-w-2xl mb-12 text-lg leading-relaxed">
    We work across entertainment, FMCG, and hospitality — three of India and the UAE's most
    competitive brand categories. We understand the pace of a product launch, the cultural
    nuance of a campaign in Mumbai &amp; Dubai, and the visual standards that premium brands
    demand.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="border border-neutral-800 p-8 rounded-lg">
      <h3 className="text-xl font-semibold mb-3">Entertainment</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">
        Campaigns built for scroll-speed audiences. OTT, live events, music, film — we know
        how entertainment brands earn attention in Mumbai and Dubai.
      </p>
    </div>
    <div className="border border-neutral-800 p-8 rounded-lg">
      <h3 className="text-xl font-semibold mb-3">FMCG</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">
        Fast-moving brands need fast-moving creative. We build visual systems and social
        strategies that keep FMCG brands sharp at every touchpoint across India and the UAE.
      </p>
    </div>
    <div className="border border-neutral-800 p-8 rounded-lg">
      <h3 className="text-xl font-semibold mb-3">Hospitality</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">
        From boutique hotels to F&amp;B chains — digital marketing for hospitality brands in
        Mumbai &amp; Dubai that converts browsers into bookings.
      </p>
    </div>
  </div>
</section>
```

**Why:** This section is entirely missing from the site. The SEO brief identifies it as the single biggest content gap vs. competitors. It enables ranking for long-tail keywords like "digital marketing for hospitality brands Mumbai Dubai" and "FMCG marketing agency India UAE" — low competition, high conversion intent.

---

## Change 6 — About Section Body Copy

Find:
```
A Gen Z-led creative studio partnering with founders and CMOs to rework scattered ideas into bold, conversion-ready brands.
```

Replace with:
```
A Gen Z-led digital marketing agency in Mumbai & Dubai, partnering with founders and CMOs across India and the UAE to rework scattered ideas into bold, conversion-ready brands — for FMCG, entertainment, and hospitality.
```

Find the "Dubai ↔ Mumbai" stat card description:
```
Rooted in Mumbai. Scaling across the UAE and beyond.
```

Replace with:
```
Rooted in Mumbai. Scaling across Dubai, India, and the UAE.
```

---

## Change 7 — Why ReWorks Differentiator Block

In the About/Studio section, alongside the existing stat cards, add the following new card:

```tsx
<div className="border border-neutral-800 p-8 rounded-lg">
  <h3 className="text-lg font-semibold mb-3">
    Why Brands in Mumbai &amp; Dubai Choose ReWorks
  </h3>
  <p className="text-neutral-400 text-sm leading-relaxed">
    Three things set us apart: Gen Z instinct — we don't study culture, we live it.
    AI-powered creative systems — faster builds, sharper briefs, better output.
    Mumbai to Dubai — one agency across two of the world's fastest-growing brand markets.
  </p>
</div>
```

---

## Change 8 — CTA & Footer Copy

Find the subtext below "Let's rework something big." and replace it with:
```
Ready to rework your brand? Work with a digital marketing agency in Mumbai and Dubai
that actually moves — from first brief to final launch. We respond within one business day.
```

Find the footer tagline:
```
A Gen Z-led digital marketing agency in Dubai. We don't do boring.
```

Replace with:
```
A Gen Z-led digital marketing agency in Mumbai & Dubai. Serving FMCG, entertainment & hospitality brands across India and the UAE.
```

---

## Change 9 — FAQ Section

**Insert this section immediately before the contact form / final CTA section.**

```tsx
<section id="faq" className="py-24 px-6 md:px-16 bg-neutral-950 text-white">
  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">FAQ</p>
  <h2 className="text-4xl md:text-5xl font-bold mb-12">Common Questions</h2>
  <div className="max-w-3xl space-y-0 divide-y divide-neutral-800">
    {[
      {
        q: "What does a digital marketing agency in Mumbai and Dubai do?",
        a: "A digital marketing agency in Mumbai & Dubai handles branding, social media, video production, and digital development — helping brands build presence and convert audiences across India and the UAE.",
      },
      {
        q: "How is ReWorks different from other agencies in India and the UAE?",
        a: "ReWorks combines Gen Z cultural instinct with AI-powered creative systems. We move faster, think sharper, and operate across Mumbai & Dubai — one team, two markets.",
      },
      {
        q: "Which industries does ReWorks work with?",
        a: "We specialise in entertainment, FMCG, and hospitality — three of India and the UAE's most competitive brand categories.",
      },
      {
        q: "Do you work with brands outside Mumbai and Dubai?",
        a: "Yes. While we're rooted in Mumbai and Dubai, we work with brands across India, the UAE, and internationally.",
      },
      {
        q: "How does the brand rework process work?",
        a: "We run a 4-step process: Audit → Rework → Build → Launch. No 10-week discovery phases. We move at the speed your brand actually needs.",
      },
    ].map(({ q, a }, i) => (
      <details key={i} className="py-6 group">
        <summary className="cursor-pointer text-lg font-medium list-none flex justify-between items-center gap-4">
          {q}
          <span className="text-neutral-500 group-open:rotate-45 transition-transform duration-200 flex-shrink-0 text-xl">
            +
          </span>
        </summary>
        <p className="mt-4 text-neutral-400 text-sm leading-relaxed">{a}</p>
      </details>
    ))}
  </div>
</section>
```

---

## Change 10 — FAQ JSON-LD Schema

**File:** `app/layout.tsx` or `app/page.tsx` — inside the `<head>` tag or via Next.js `<Script>` component.

Add this structured data block:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a digital marketing agency in Mumbai and Dubai do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A digital marketing agency in Mumbai & Dubai handles branding, social media, video production, and digital development — helping brands build presence and convert audiences across India and the UAE.",
          },
        },
        {
          "@type": "Question",
          "name": "How is ReWorks different from other agencies in India and the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ReWorks combines Gen Z cultural instinct with AI-powered creative systems. We move faster, think sharper, and operate across Mumbai & Dubai — one team, two markets.",
          },
        },
        {
          "@type": "Question",
          "name": "Which industries does ReWorks work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialise in entertainment, FMCG, and hospitality — three of India and the UAE's most competitive brand categories.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you work with brands outside Mumbai and Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While we're rooted in Mumbai and Dubai, we work with brands across India, the UAE, and internationally.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the brand rework process work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We run a 4-step process: Audit → Rework → Build → Launch. No 10-week discovery phases. We move at the speed your brand actually needs.",
          },
        },
      ],
    }),
  }}
/>
```

**Why:** FAQ schema enables **rich results** in Google — the questions appear expanded directly in the SERP. It also feeds directly into **AI Overviews**. This is the fastest way to steal informational traffic from Clutch/Sortlist directory pages that currently dominate the top results.

---

## Change 11 — LocalBusiness JSON-LD Schema

Add a second schema block in `<head>` for local SEO signals:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MarketingAgency",
      "name": "ReWorks Agency",
      "url": "https://rework-delta-umber.vercel.app",
      "logo": "https://rework-delta-umber.vercel.app/logo-black.png",
      "description":
        "A Gen Z-led digital marketing agency in Mumbai & Dubai offering branding, social media, video, and digital development for FMCG, entertainment, and hospitality brands.",
      "email": "reworks.agency@gmail.com",
      "foundingDate": "2019",
      "numberOfEmployees": "38",
      "areaServed": ["Mumbai", "Dubai", "India", "UAE"],
      "serviceType": [
        "Branding & Design",
        "Social Media Marketing",
        "Video & Animation",
        "Digital Development",
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressRegion": "Business Bay",
          "addressCountry": "AE",
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Bandra West",
          "postalCode": "400050",
          "addressCountry": "IN",
        },
      ],
      "sameAs": [
        "https://www.instagram.com/reworks.agency",
        "https://www.linkedin.com/company/reworks-agency",
      ],
    }),
  }}
/>
```

---

## Summary of All Changes

| # | What | Where | SEO Impact |
|---|---|---|---|
| 1 | Title tag + meta description | `metadata` export | 🔴 Critical |
| 2 | H1 text | Hero section | 🔴 Critical |
| 3 | Hero subheading copy | Hero section | 🟠 High |
| 4 | Services H2 | Services section | 🟠 High |
| 5 | New Industries section | After "How We Work" | 🟠 High |
| 6 | About body copy | About section | 🟡 Medium |
| 7 | Why ReWorks card | About stat cards | 🟡 Medium |
| 8 | CTA + footer copy | Footer | 🟡 Medium |
| 9 | FAQ accordion section | Before contact form | 🟠 High |
| 10 | FAQ JSON-LD schema | `<head>` | 🟠 High |
| 11 | LocalBusiness JSON-LD schema | `<head>` | 🟡 Medium |

**Do not change** any animations, component structure, color system, fonts, spacing, or any copy not explicitly listed above.
