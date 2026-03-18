# Belomor Group — Industrial UI System

Complete design system for a hybrid B2C + B2B catalog-first auto parts platform. Not a generic e-commerce site. Production interface for serious auto parts commerce.

---

## 1. Visual Style

- **Clean industrial** — no decorative gradients or playful shapes
- **Structured** — clear hierarchy, grids, aligned data
- **Professional** — high-trust, B2B-friendly
- **Catalog-first** — search and product data dominate
- **Minimal decorative effects** — borders, subtle backgrounds, no heavy shadows or motion

---

## 2. Color System (Strict)

| Role | Hex | Usage |
|------|-----|--------|
| **Primary** | `#0F3D91` | Nav, primary buttons, key CTAs, links |
| **Primary dark** | `#0A2B66` | Primary hover, active states |
| **Accent** | `#F59E0B` | Highlights, alerts, secondary CTA (sparingly) |
| **Text main** | `#0F172A` | Headings, body primary |
| **Text secondary** | `#334155` | Subheads, secondary copy |
| **Muted** | `#64748B` | Captions, placeholders, disabled |
| **Border** | `#CBD5E1` | All borders, dividers |
| **Soft background** | `#F8FAFC` | Page background, section bg |
| **White cards** | `#FFFFFF` | Cards, panels, modals |
| **Success** | `#16A34A` | In stock, success messages |
| **Warning** | `#D97706` | Low stock, ETA > 7 days |
| **Error** | `#DC2626` | Out of stock, errors |

**Semantic:** Stock = success/warning/error. Delivery ETA = success (fast) / warning (slower) / muted (on request). B2B = primary or subtle primary-tint background. SKU/OEM = muted or text secondary, monospace.

---

## 3. Typography

- **Font:** Inter only. Prioritize readability for SKU, OEM, tables, filters, and B2B data.
- **Avoid oversized headings** in catalog areas (category pages, product list, tables).

**Google Fonts:**

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**CSS:**

```css
--font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
```

**Hierarchy:**

| Token | Size | Weight | Use |
|-------|------|--------|-----|
| H1 | 24px | 700 | Page title (home, B2B); avoid huge hero type |
| H2 | 20px | 600 | Section title |
| H3 | 18px | 600 | Card title, block title |
| H4 | 16px | 600 | List heading, table header |
| Body | 16px | 400 | Body copy |
| Body small | 14px | 400 | Secondary, tables, filters |
| Caption | 12px | 400 | SKU, OEM, labels, badges |
| Mono | 14px | 400 | SKU, OEM codes (font-mono) |

**Tailwind:** `font-sans` = Inter. Body/table never below 14px for B2B readability.

---

## 4. Layout

| Token | Value | Implementation |
|-------|--------|-----------------|
| **Max width** | 1440px | Outer container max-w-[1440px] mx-auto |
| **Content width** | 1280px | Inner content max-w-[1280px] mx-auto (or max-w-7xl ≈1280) |
| **Grid** | 12 columns | Desktop 12-col; gap from 8px system |
| **Spacing system** | 8px base | 4, 8, 12, 16, 24, 32, 40, 48, 64 (Tailwind 1, 2, 3, 4, 6, 8, 10, 12, 16) |
| **Card radius** | 16px | rounded-2xl for cards, panels |
| **Input / button radius** | 12px | rounded-xl for inputs, buttons, tags |

---

## 5. Core UX Rules

- **Search must dominate** — mega search in header; hero search on homepage; single search handles OEM, SKU, VIN.
- **Always show** SKU, OEM, stock, and ETA in every product context (card, row, product page).
- **Product compatibility** must be highly visible (dedicated section, not buried).
- **B2B value** clearly presented (partner price, registration CTA, account B2B tools).
- **Fallback VIN flow** — user can always submit VIN request (link/button on product, dedicated page).
- **Avoid deep navigation** — catalog → product → cart → checkout; minimal levels.
- **Reduce purchase friction** — fast add to cart, guest checkout, short checkout.

---

## 6. Component Inventory (Required)

| Component | Purpose |
|-----------|---------|
| **Header with mega search** | Logo, dominant search (OEM/SKU/VIN), nav (Catalog, Vehicle, B2B), phone/WhatsApp, account, cart |
| **ProductCard** | Image, title, brand, SKU, price, Stock badge, Delivery ETA badge, Add to cart |
| **ProductListRow** | List view: image, title, brand, SKU, OEM tags, price, stock, ETA, Add to cart |
| **Stock badge** | In stock / Low / On order / Out — success / warning / muted / error |
| **Delivery ETA badge** | 1–3 days / 3–7 days / On request — same color semantics |
| **OEM tags** | Small tags, monospace, border or soft bg |
| **Compatibility section** | List or table of vehicles; expandable if long |
| **Sidebar filters** | Category, brand, price, availability, delivery; URL-synced; chips above results |
| **Cart item** | Image, name, SKU, price, qty, stock/ETA, remove |
| **Order summary** | Sticky block: lines, subtotal, delivery, total, CTA |
| **VIN request form** | VIN input, upload docs, contact, client type, submit |
| **B2B registration form** | Company, VAT, contact, submit |
| **Account dashboard blocks** | Orders table, reorder, addresses, documents, B2B tools — compact layout |
| **Tables (B2B / orders)** | Dense, readable; headers text secondary; rows body small; actions ghost |

---

## 7. Tailwind-Oriented Specification

### 7.1. Theme Extension (tailwind.config.js)

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: { DEFAULT: '#0F3D91', dark: '#0A2B66' },
        accent: '#F59E0B',
        'text-main': '#0F172A',
        'text-secondary': '#334155',
        muted: '#64748B',
        border: '#CBD5E1',
        'soft-bg': '#F8FAFC',
        success: '#16A34A',
        warning: '#D97706',
        error: '#DC2626',
      },
      maxWidth: {
        content: '1280px',
        layout: '1440px',
      },
      borderRadius: {
        card: '16px',   // rounded-2xl
        input: '12px',  // rounded-xl
      },
    },
  },
};
```

### 7.2. Token Mapping (Tailwind classes)

| Element | Classes |
|---------|---------|
| Page background | `bg-[#F8FAFC]` or bg-slate-50 |
| Card | `bg-white rounded-2xl border border-[#CBD5E1]` |
| Primary button | `bg-[#0F3D91] hover:bg-[#0A2B66] text-white rounded-xl px-4 py-2.5 font-medium` |
| Secondary button | `bg-white border border-[#CBD5E1] text-[#0F172A] rounded-xl px-4 py-2.5 font-medium hover:bg-slate-50` |
| Input | `w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base text-[#0F172A] placeholder-[#64748B] focus:border-[#0F3D91] focus:ring-1 focus:ring-[#0F3D91]` |
| Text main | `text-[#0F172A]` or text-slate-900 |
| Text secondary | `text-[#334155]` or text-slate-700 |
| Muted | `text-[#64748B]` or text-slate-500 |
| Stock in stock | `bg-green-100 text-green-800` (or #16A34A tint) |
| Stock low/order | `bg-amber-100 text-amber-800` |
| Stock out | `bg-red-100 text-red-800` |
| Section title | `text-xl font-semibold text-[#0F172A]` (avoid oversized in catalog) |

### 7.3. Spacing (8px grid)

Use `p-4` (16), `p-6` (24), `gap-4`, `gap-6` for cards/sections. Header height `h-16` (64px). Sidebar filters `w-64` or `w-72`.

---

## 8. Fixed Component Tokens (Consistency)

| Component | Fixed tokens |
|-----------|--------------|
| Buttons | `rounded-xl`, `py-2.5`, `font-medium`, `transition-colors` |
| Inputs | `rounded-xl`, `border border-[#CBD5E1]`, `px-3 py-2.5`, `text-base` |
| Badges | `rounded-full` or `rounded-lg`, `px-2.5 py-0.5`, `text-xs font-medium` |
| Cards | `rounded-2xl`, `border border-[#CBD5E1]`, `bg-white` |
| Tables | `text-sm` body, `text-xs font-semibold uppercase` header, `border-[#CBD5E1]` |

---

*Page wireframes and React hierarchy are in UI-SCREENS.md and COMPONENTS-REFERENCE.md.*
