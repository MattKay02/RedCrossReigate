# Red Cross Pub Website - Build Specs

**Reference:** https://www.craftunionpubs.com/red-cross-reigate
**Type:** Drinks-only pub

---

## Tech Stack

```
Next.js 14+ (App Router)
TypeScript
Tailwind CSS
shadcn/ui
Framer Motion
Vercel (hosting + analytics)
```

---

## Site Structure

```
/
├── / (Homepage)
├── /drinks (Drinks menu)
├── /whats-on (Events)
├── /about
└── /contact
```

---

## Homepage Sections

1. **Hero**
   - Rotating images (pub exterior, interior, garden, atmosphere)
   - "Great Drinks, Great Atmosphere"
   - CTA: "View Drinks" + "What's On"
   - Info bar: Hours | Phone | Location

2. **Quick Actions (Mobile Sticky)**
   - Call Now
   - Get Directions
   - View Drinks
   - What's On

3. **What's On This Week**
   - Event cards with images
   - Current offers (drink deals)

4. **Drinks Preview**
   - Featured drinks with images
   - "View Full Drinks Menu" CTA

5. **About**
   - Pub description
   - USPs: Dog-friendly, Beer garden, Live sports

6. **Location & Hours**
   - Google Maps iframe embed (no API key needed)
   - Opening hours table

7. **Footer**
   - Contact info
   - Social links
   - Navigation

---

## Data Models

```tsx
interface DrinkItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'beer' | 'wine' | 'spirits' | 'cocktails' | 'soft-drinks';
  image?: string;
  featured?: boolean;
}

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  image: string;
  recurring?: 'weekly' | 'monthly';
  category: 'live-music' | 'sports' | 'quiz' | 'offer';
}
```

---

## Design System

```css
/* Colors */
--primary: #8B0000      /* Dark Red */
--secondary: #D4AF37    /* Gold */
--accent: #2C5F2D       /* Green */
--dark: #1A1A1A
--light: #F5F5F5

/* Fonts */
--heading: 'Playfair Display'
--body: 'Inter'
```

---

## Performance Targets

```
LCP: < 2.5s
FID: < 100ms
CLS: < 0.1
Lighthouse: 90+
```

---

## Images

Use placeholder divs with descriptive alt text for all images. Each placeholder should indicate what image belongs there (e.g. "Pub exterior - sunny day", "Beer garden seating area", "Interior bar area"). Real images to be added later.

---

## SEO / Metadata (Low Priority)

- Basic `metadata` export in layout.tsx (title, description)
- Open Graph tags for social sharing
- No structured data for now

---

## File Structure

```
app/
├── layout.tsx
├── page.tsx
├── drinks/page.tsx
├── whats-on/page.tsx
├── about/page.tsx
└── contact/page.tsx

components/
├── ui/              (shadcn)
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── QuickActions.tsx
├── home/
│   ├── Hero.tsx
│   ├── EventsSection.tsx
│   ├── DrinksPreview.tsx
│   └── AboutSection.tsx
└── shared/
    ├── EventCard.tsx
    ├── DrinkCard.tsx
    └── GoogleMap.tsx

lib/
├── data/
│   ├── drinks.ts
│   ├── events.ts
│   └── hours.ts
└── utils.ts
```

---

## Setup

```bash
npx create-next-app@latest . --typescript --tailwind --app
npx shadcn@latest init
npm install framer-motion @radix-ui/react-icons
npx shadcn@latest add button card carousel tabs badge
```

---

## Analytics Events

```
- Drinks menu views
- Phone clicks
- Directions clicks
- Event card clicks
- Social media clicks
- Time on page
- Mobile vs Desktop
```
