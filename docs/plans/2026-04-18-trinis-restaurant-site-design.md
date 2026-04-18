# Downtown Trini's Restaurant Site — Design Doc

## Context

Downtown Trini's is a 30+ year Tex-Mex restaurant in Sparta, MI. Their current site (downtowntrinis.com) is functional but dated — basic layout, minimal styling, no visual personality. The goal is to rebuild it as a modern, image-forward restaurant site using the Payload CMS website template already scaffolded in this repo.

**Design reference:** Sancho's Mexican Restaurant WordPress Theme (ThemeForest) — specifically the layout patterns: full-width hero sections, parallax scrolling, image-heavy sections with overlaid text, generous whitespace.

**Color direction:** Warm Mexican palette (terracotta, earthy greens, warm yellows, deep reds).

**Imagery:** Placeholder images initially, real photos swapped in later.

---

## Pages

All 8 pages from the current site, built using the Payload page builder with existing + new custom blocks:

| Page | Blocks Used |
|------|------------|
| Home | ParallaxHero, Content, MenuSection (highlights), Testimonial, ImageGallery, LocationInfo, CTA |
| Menu | ParallaxHero, MenuSection (multiple — one per category) |
| About | ParallaxHero, Content, MediaBlock, ImageGallery |
| Catering | ParallaxHero, Content, Form (catering inquiry) |
| Jobs | ParallaxHero, Content, Form (application) |
| Visit | ParallaxHero, LocationInfo, MediaBlock (patio/building photos) |
| Contact | ParallaxHero, Form (contact form), LocationInfo |
| Gift Cards | ParallaxHero, CTA (external link to gift card provider) |

---

## New Custom Blocks

### 1. ParallaxHero
Full-width background image with CSS parallax effect, overlaid text content.

**Fields:**
- `backgroundImage` — upload (required)
- `heading` — text (required)
- `subheading` — text (optional)
- `link` — link field (optional CTA button)
- `overlayOpacity` — select: light / medium / dark (controls text readability)

**File:** `src/blocks/ParallaxHero/`

### 2. MenuSection
A category grouping of menu items with structured data in a repeater.

**Fields:**
- `sectionTitle` — text (required, e.g. "Appetizers", "Entrees")
- `sectionDescription` — textarea (optional)
- `items` — array:
  - `name` — text (required)
  - `description` — textarea (optional)
  - `price` — text (required, stored as string for flexibility like "12.99" or "Market Price")
  - `tags` — select multiple: vegetarian, gluten-free, spicy, popular (optional)
  - `image` — upload (optional)

**File:** `src/blocks/MenuSection/`

### 3. LocationInfo
Restaurant location details with hours and optional map embed.

**Fields:**
- `address` — text (required)
- `phone` — text (required)
- `hours` — array:
  - `days` — text (e.g. "Tue - Thu")
  - `time` — text (e.g. "11am - 9pm")
- `mapEmbedUrl` — text (optional, Google Maps embed URL)
- `additionalInfo` — richText (optional, e.g. "Best patio in town")

**File:** `src/blocks/LocationInfo/`

### 4. Testimonial
Customer testimonial/review display.

**Fields:**
- `quotes` — array:
  - `text` — textarea (required)
  - `author` — text (required)
  - `source` — select: Google, Yelp, Facebook, Other (optional)

**File:** `src/blocks/Testimonial/`

### 5. ImageGallery
Grid display of images.

**Fields:**
- `heading` — text (optional)
- `images` — array:
  - `image` — upload (required)
  - `caption` — text (optional)

**File:** `src/blocks/ImageGallery/`

---

## Theme Customization

### Color Palette (CSS Custom Properties in `globals.css`)

```
Light mode:
--background:     cream/warm white
--foreground:     rich dark brown
--primary:        deep terracotta / burnt orange
--primary-foreground: white
--secondary:      earthy sage green
--secondary-foreground: white
--accent:         warm gold / yellow
--accent-foreground: dark brown
--muted:          warm beige
--card:           white
--border:         light terracotta/tan
```

Dark sections (parallax/hero overlays) use deep charcoal with warm-toned text.

### Typography

Replace Geist fonts with:
- **Headings:** A display/serif font (e.g. Playfair Display, Cormorant Garamond, or similar) for warmth and character
- **Body:** A clean sans-serif (e.g. Lato, Source Sans Pro, or Inter) for readability

Loaded via `next/font/google` in the root layout.

### Layout Patterns

- Full-bleed image sections that break out of the content container
- Parallax background scrolling on hero sections (CSS `background-attachment: fixed`)
- Alternating light/dark section backgrounds for visual rhythm
- Generous vertical padding between sections
- Text overlaid on images with configurable overlay opacity

---

## What Stays Unchanged

- **Collections:** Pages, Posts, Media, Categories, Users — all kept as-is
- **Globals:** Header, Footer — structure stays, just populated with Trini's content
- **Plugins:** SEO, Form Builder, Redirects, Nested Docs, Search — all kept
- **Components:** shadcn/ui library, Link, Media, RichText, Pagination — all kept
- **Infrastructure:** MongoDB, live preview, draft mode, admin bar, sitemaps

---

## Verification Plan

1. Build each custom block and confirm it renders in the admin page builder
2. Apply theme colors and typography, verify across light mode
3. Seed content for each page using the admin panel
4. Run dev server (`pnpm run dev`) and visually verify each page in browser
5. Test parallax effect on desktop and mobile (fallback for mobile where `background-attachment: fixed` doesn't work)
6. Verify forms submit correctly via the form builder plugin
7. Check responsive layout at mobile / tablet / desktop breakpoints
8. Confirm SEO fields populate correctly (meta tags, OG images)
