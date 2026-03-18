# Belomor Group — Component Reference & React Hierarchy

Tailwind-oriented specs for all required components. Colors and layout from DESIGN-SYSTEM.md (primary #0F3D91, accent #F59E0B, Inter, 8px grid, card radius 16px, input/button radius 12px).

---

## 1. Header with Mega Search

**Structure:** Logo | Search (full-width or max 560px) | Nav | Phone/WhatsApp | Account | Cart.

**Tailwind (container):** `sticky top-0 z-50 border-b border-[#CBD5E1] bg-white`; inner `max-w-[1280px] mx-auto px-4 h-16 flex items-center gap-6`.

**Search input:** `flex-1 max-w-xl rounded-xl border border-[#CBD5E1] bg-white px-4 py-2.5 text-base text-[#0F172A] placeholder-[#64748B] focus:border-[#0F3D91] focus:ring-1 focus:ring-[#0F3D91]` — placeholder "OEM, SKU sau VIN".

**Nav links:** `text-sm font-medium text-[#334155] hover:text-[#0F3D91]`. Cart with count badge.

---

## 2. ProductCard (grid)

**Content:** Image | Title | Brand | SKU | Price | Stock badge | Delivery ETA badge | Add to cart.

**Tailwind (card):** `rounded-2xl border border-[#CBD5E1] bg-white overflow-hidden hover:border-[#0F3D91]/30 transition-colors`.

**Image:** `aspect-square bg-[#F8FAFC] object-contain`. **Title:** `text-sm font-semibold text-[#0F172A] line-clamp-2`. **SKU:** `text-xs font-mono text-[#64748B]`. **Price:** `text-lg font-semibold text-[#0F172A]`. **CTA:** primary button `rounded-xl`, full width in card.

---

## 3. ProductListRow (list view)

**Content:** Image (small) | Title | Brand | SKU | OEM tags | Price | Stock badge | ETA badge | Add to cart.

**Tailwind (row):** `flex items-center gap-4 py-3 border-b border-[#CBD5E1]`. Image `w-16 h-16 rounded-xl object-contain bg-[#F8FAFC]`. Title + brand + SKU in one column; OEM tags `flex flex-wrap gap-1`. Price, badges, button aligned right. Dense, scannable.

---

## 4. Stock Badge

**Variants:** In stock | Low | On order | Out.

**Tailwind (base):** `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium`.

| Variant | Classes |
|---------|---------|
| In stock | `bg-green-100 text-[#16A34A]` or `text-green-800` |
| Low | `bg-amber-100 text-[#D97706]` |
| On order | `bg-slate-100 text-[#64748B]` |
| Out | `bg-red-100 text-[#DC2626]` |

---

## 5. Delivery ETA Badge

**Variants:** 1–3 days | 3–7 days | On request.

**Tailwind:** Same base as stock. Green for fast, amber for 3–7, muted for on request.

---

## 6. OEM Tags

**Tailwind:** `inline-flex items-center rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-2 py-1 text-xs font-mono text-[#334155]`. Multiple in a row: `flex flex-wrap gap-2`.

---

## 7. Compatibility Section

**Content:** Heading "Compatibil cu" + list or table of vehicles (make, model, year/engine). Expandable if long.

**Tailwind:** Section `rounded-2xl border border-[#CBD5E1] bg-white p-4`. List `text-sm text-[#334155]`. Table: `text-sm`, header `text-xs font-semibold text-[#64748B] uppercase`.

---

## 8. Sidebar Filters

**Structure:** Per filter: label (text-sm font-medium text-[#0F172A]), then checkboxes/radios/inputs. Border between sections.

**Tailwind (sidebar):** `w-64 shrink-0 space-y-4 pr-6`. Each block `border-b border-[#CBD5E1] pb-4`. Inputs/checkboxes use design system tokens (rounded-xl, border-[#CBD5E1]). "Resetează" link `text-sm text-[#0F3D91]`.

---

## 9. Cart Item

**Content:** Image | Name | SKU | Price | Qty input | Stock/ETA line | Remove.

**Tailwind:** Row `flex items-center gap-4 py-4 border-b border-[#CBD5E1]`. Image `w-20 h-20 rounded-xl`. Name `font-medium text-[#0F172A]`. SKU `text-xs font-mono text-[#64748B]`. Qty input `w-20 rounded-xl border ...`.

---

## 10. Order Summary (sticky)

**Content:** Title "Comanda ta" | Line items (compact) | Subtotal | Delivery | Total | CTA.

**Tailwind:** `rounded-2xl border border-[#CBD5E1] bg-white p-6 sticky top-24`. Lines `text-sm`. Total `text-lg font-semibold text-[#0F172A]`. CTA primary button full width.

---

## 11. VIN Request Form

**Fields:** VIN (required) | Upload docs | Nume, Email, Telefon | Tip client (select) | Comentariu (textarea) | Submit.

**Tailwind:** Form `space-y-4`. All inputs `rounded-xl border border-[#CBD5E1] ...`. Submit primary `rounded-xl w-full sm:w-auto`.

---

## 12. B2B Registration Form

**Fields:** Company name | VAT | Contact (name, email, phone) | Submit.

**Tailwind:** Same as VIN form. Optional: container `rounded-2xl border border-[#CBD5E1] bg-white p-6`.

---

## 13. Account Dashboard Blocks

**Blocks:** Orders table | Addresses list | Documents list | B2B tools (when B2B). Compact layout.

**Tailwind:** Section titles `text-lg font-semibold text-[#0F172A]`. Tables: see Tables. Cards `rounded-2xl border border-[#CBD5E1] bg-white p-4`.

---

## 14. Tables (B2B / Orders)

**Tailwind:** `w-full border-collapse`. `th`: `text-left text-xs font-semibold uppercase text-[#64748B] py-3 px-4 border-b border-[#CBD5E1] bg-[#F8FAFC]`. `td`: `py-3 px-4 text-sm text-[#0F172A] border-b border-[#CBD5E1]`. Row hover `hover:bg-[#F8FAFC]`. Actions: ghost button or link `text-sm text-[#0F3D91]`.

---

## 15. Tailwind Config Snippet (Custom Colors)

```js
// tailwind.config.js
theme: {
  extend: {
    fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
    colors: {
      primary: { DEFAULT: '#0F3D91', dark: '#0A2B66' },
      accent: '#F59E0B',
    },
    borderColor: { border: '#CBD5E1' },
    maxWidth: { content: '1280px', layout: '1440px' },
  },
}
```

---

## 16. React Component Hierarchy

```
app/
├── layout.tsx                    # Shell: max-w-[1440px], Header, Footer, main
├── page.tsx                     # Homepage
├── catalog/page.tsx
├── product/[slug]/page.tsx
├── vin-request/page.tsx
├── b2b/page.tsx
├── b2b/register/page.tsx
├── cart/page.tsx
├── checkout/page.tsx
└── account/
    ├── layout.tsx               # Sidebar + outlet
    ├── page.tsx                 # Dashboard
    ├── orders/page.tsx
    ├── addresses/page.tsx
    ├── documents/page.tsx
    └── b2b/page.tsx             # B2B tools (when B2B)

components/
├── layout/
│   ├── Header.tsx               # Mega search, nav, account, cart
│   ├── Footer.tsx
│   └── Main.tsx
├── catalog/
│   ├── SidebarFilters.tsx       # Category, brand, price, availability, delivery
│   ├── FilterChips.tsx
│   ├── ProductCard.tsx
│   ├── ProductListRow.tsx
│   └── CatalogToolbar.tsx       # Count, sort, view toggle
├── product/
│   ├── ProductGallery.tsx
│   ├── ProductInfo.tsx          # Title, brand, SKU, OEM, price, B2B, compatibility, CTA, VIN
│   ├── CompatibilitySection.tsx
│   ├── AlternativesBlock.tsx
│   └── RelatedProducts.tsx
├── cart/
│   ├── CartItem.tsx
│   ├── CartTable.tsx
│   └── OrderSummary.tsx         # Sticky block
├── checkout/
│   ├── CheckoutForm.tsx         # Contact, address, company/VAT, delivery, payment
│   └── CheckoutSummary.tsx      # Sticky
├── forms/
│   ├── VinRequestForm.tsx
│   └── B2BRegistrationForm.tsx
├── account/
│   ├── AccountSidebar.tsx
│   ├── OrdersTable.tsx
│   ├── AddressList.tsx
│   └── B2BTools.tsx
└── ui/
    ├── Button.tsx               # primary, secondary, ghost; rounded-xl
    ├── Input.tsx                # rounded-xl, border-[#CBD5E1]
    ├── Badge.tsx                # Stock, Delivery ETA variants
    ├── OEMTag.tsx
    ├── Card.tsx                 # rounded-2xl, border
    └── Table.tsx                # B2B/orders style
```

---

*Use with DESIGN-SYSTEM.md (tokens) and UI-SCREENS.md (wireframes).*
