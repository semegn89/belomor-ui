# Belomor Group — Wireframe-Level Page Structure

All 8 required screens. Structure only; visual tokens in DESIGN-SYSTEM.md.

---

## Global Shell

- **Container:** max-width 1440px; content 1280px; 8px spacing system.
- **Header:** Logo | Mega search (OEM/SKU/VIN) | Nav (Catalog, Vehicle, B2B) | Phone / WhatsApp | Account | Cart.
- **Footer:** Catalog links, Company (About, Delivery, Returns), Legal, Contact.
- **Main:** min-h-screen; content area with consistent padding.

---

## 1. Homepage

**Route:** `/`

| Block | Content |
|-------|---------|
| Hero | Search by OEM/SKU/VIN (single input + CTA). Vehicle selector below. |
| Category grid | 8–12 categories; icon + label; link to /catalog?category=… |
| Brands block | Logo strip or grid; link to /brands. |
| B2B CTA | One line + button "Înregistrare partener" → /b2b. |
| Trust section | 4 items: Livrare, Retur, Garanție, Asistență. |
| Delivery/returns info | Short text + link to /delivery, /returns. |
| Footer | Standard. |

**Wireframe order:** [Header] → [Hero search + vehicle] → [Categorii] → [Branduri] → [B2B CTA] → [Trust] → [Delivery/returns] → [Footer].

---

## 2. Catalog Page

**Route:** `/catalog`

| Block | Content |
|-------|---------|
| Left sidebar | Filters: Category (tree/accordion), Brand (checkboxes), Price (min–max), Availability, Delivery. URL-synced. |
| Top bar | Active filter chips + "Resetează". Result count. Sort (Relevanță, Preț, În stoc first, Nou). View toggle: list preferred. |
| Content | Product list (preferred) or grid. Each row/card: image, title, brand, SKU, OEM, price, Stock badge, Delivery ETA badge, Add to cart. |
| Footer | Optional. |

**Wireframe order:** [Header] → [Sidebar | Chips + count + sort + view] → [ProductListRow[] or ProductCard[]] → [Footer].

**UX:** List view preferred. Fast add to cart. Always SKU, stock, ETA.

---

## 3. Product Page

**Route:** `/product/[slug]`

| Block | Content |
|-------|---------|
| Left | Gallery (main + thumbs). |
| Right | Title. Brand. SKU. OEM (tags). Stock badge. Delivery ETA badge. Price. B2B hint (partner price or "Preț partener la cont"). Compatibility section (highly visible). Add to cart. VIN CTA (fallback). |
| Below | Alternatives (analog/similar). Related products. Specs if needed (collapsible). |

**Wireframe order:** [Header] → [Gallery | Info column (title, brand, SKU, OEM, stock, ETA, price, B2B, compatibility, CTA, VIN)] → [Alternatives] → [Related] → [Footer].

**UX:** Compatibility highly visible. B2B value clear. VIN fallback always present.

---

## 4. VIN Request Page

**Route:** `/vin-request`

| Block | Content |
|-------|---------|
| Explanation | Short text: process, what we need, response SLA. |
| Form | VIN (required). Upload docs (optional). Contact (name, email, phone). Client type. Comment. Submit. |
| Trust / SLA | Response time (e.g. 24h). Trust line. |

**Wireframe order:** [Header] → [Short explanation] → [VIN form] → [Trust / SLA] → [Footer].

---

## 5. B2B Page

**Route:** `/b2b`

| Block | Content |
|-------|---------|
| Hero | Headline + one CTA "Înregistrare partener". |
| Partner benefits | 4–6 items; icon + title + one line. |
| Pricing logic | Explanation: how partner pricing works (no public list). |
| Onboarding steps | 1. Form 2. Verification 3. Account 4. Order. |
| Trust | Optional testimonial or partners line. |
| Registration | Form or link to /b2b/register (company, VAT, contact). |

**Wireframe order:** [Header] → [Hero + CTA] → [Benefits] → [Pricing explanation] → [Steps] → [Trust] → [Registration form] → [Footer].

---

## 6. Cart Page

**Route:** `/cart`

| Block | Content |
|-------|---------|
| Items | Per row: image, name, SKU, price, qty, stock, ETA, remove. |
| Promo | Optional promo input. |
| Order summary (sticky) | Subtotal, delivery, total. CTA "Finalizează comanda" → checkout. |

**Wireframe order:** [Header] → [Cart items table/list] → [Promo] → [Sticky Order summary + CTA] → [Footer].

**UX:** Stock and ETA visible per line. Sticky summary on desktop.

---

## 7. Checkout Page

**Route:** `/checkout`

| Block | Content |
|-------|---------|
| Contact | Email, phone. Guest checkout option. |
| Address | Delivery address. |
| Company/VAT | Shown for B2B or when "Invoice" selected. Company name, VAT, address. |
| Delivery | Method (radio). |
| Payment | Method (card, cash, invoice). |
| Summary (sticky) | Order lines, subtotal, delivery, total. Submit "Plasează comanda". |

**Wireframe order:** [Header] → [Form: Contact | Address | Company/VAT | Delivery | Payment] + [Sticky summary] → [Footer].

**UX:** Simple and short. Guest checkout. Company/VAT fields clear. Sticky summary.

---

## 8. Account Dashboard

**Route:** `/account` (+ /account/orders, /account/addresses, etc.)

| Block | Content |
|-------|---------|
| Sidebar | Dashboard, Orders, Reorder, Addresses, Documents, B2B tools (when B2B). |
| Main | Orders table (number, date, status, total, actions: View, Reorder). Addresses list. Documents. B2B tools (pricing, docs). Compact operational layout. |

**Wireframe order:** [Header] → [Sidebar | Content area (orders table / addresses / documents / B2B)] → [Footer].

**UX:** Tables for B2B and orders. Compact. Reorder, addresses, documents, B2B tools.

---

## Screen Summary

| # | Screen | Key blocks |
|---|--------|------------|
| 1 | Homepage | Hero search, vehicle, categories, brands, B2B CTA, trust, delivery/returns |
| 2 | Catalog | Sidebar filters, list/grid, sort, chips, ProductCard/ProductListRow |
| 3 | Product | Gallery, title, brand, SKU, OEM, stock, ETA, price, B2B, compatibility, CTA, VIN, alternatives, related |
| 4 | VIN | Explanation, form (VIN, upload, contact, type), trust/SLA |
| 5 | B2B | Hero, benefits, pricing logic, steps, trust, registration |
| 6 | Cart | Items (with stock, ETA), promo, sticky order summary |
| 7 | Checkout | Contact, address, company/VAT, delivery, payment, sticky summary |
| 8 | Account | Sidebar nav, orders table, reorder, addresses, documents, B2B tools |
