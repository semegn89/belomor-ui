# API Contracts — Belomor Auto Parts

API-first. Backend must implement these endpoints; frontend consumes them.

---

## Base

- **Base URL:** `https://api.<env>.belomor.ro` (or relative `/api` if BFF)
- **Auth:** `Authorization: Bearer <JWT>` where required
- **Content-Type:** `application/json` for request/response body

---

## Auth

| Method | Path | Description | Body |
|--------|------|-------------|------|
| POST | `/auth/register` | Register (retail or B2B lead) | `{ email, password, role?, companyName?, vatNumber? }` |
| POST | `/auth/login` | Login | `{ email, password }` → `{ token, user }` |
| POST | `/auth/logout` | Invalidate session/token | — |
| GET | `/auth/me` | Current user | → `{ user }` |

---

## Products

| Method | Path | Description | Query / Body |
|--------|------|-------------|--------------|
| GET | `/products` | List (catalog) | `?category=&brand=&vehicle=&q=&page=&limit=&sort=` |
| GET | `/products/:id` | By id | — |
| GET | `/products/by-slug/:slug` | By slug (SEO) | — |

**Response (product):** id, name, slug, brand, category, description, sku, manufacturer_sku, price (retail or B2B by auth), vat_rate, weight, images[], oem_codes[], fitment[], cross_refs[], stock_summary.

---

## Catalog

| Method | Path | Description |
|--------|------|-------------|
| GET | `/categories` | Tree or flat list |
| GET | `/categories/:id` | Single category + children |
| GET | `/brands` | List brands |
| GET | `/brands/:id` | Single brand + product count |

---

## Search

| Method | Path | Description | Query |
|--------|------|-------------|--------|
| GET | `/search` | Unified search | `?q=bosch filter&vehicle=bmw-e90&category=&brand=&page=&limit=` |

**Response:** `{ hits: Product[], total, facets? }`

---

## Cart

| Method | Path | Description | Body |
|--------|------|-------------|------|
| GET | `/cart` | Get current cart | — |
| POST | `/cart/items` | Add item | `{ product_id, quantity }` |
| PATCH | `/cart/items/:id` | Update quantity | `{ quantity }` |
| DELETE | `/cart/items/:id` | Remove item | — |
| DELETE | `/cart` | Clear cart | — |

Cart may be keyed by session (guest) or user_id (logged in). Merge on login if needed.

---

## Checkout & Orders

| Method | Path | Description | Body |
|--------|------|-------------|------|
| POST | `/checkout` | Create order from cart | `{ delivery_address, delivery_method, payment_method, invoice_details? }` |
| GET | `/orders` | My orders | `?page=&limit=` |
| GET | `/orders/:id` | Order detail | — |

---

## VIN Request

| Method | Path | Description | Body |
|--------|------|-------------|------|
| POST | `/vin-request` | Submit VIN request | `{ vin, comment?, email?, phone?, client_type? }` |
| GET | `/vin-request/:id` | Get request (owner or manager) | — |

---

## B2B

| Method | Path | Description | Body |
|--------|------|-------------|------|
| POST | `/b2b/register` | Register company / request B2B | `{ companyName, vatNumber, contactName, email, phone }` |
| GET | `/b2b/account` | My B2B company (if approved) | — |

---

## Admin (protected by role)

- Products: CRUD
- Categories, Brands: CRUD
- Orders: list, update status
- Users, Companies: list, approve B2B, assign price_tier
- VIN requests: list, assign manager, update status
- Pricing: price_tiers CRUD

*(Exact paths can follow REST convention: `/admin/products`, `/admin/orders`, etc.)*

---

## Errors

- **4xx:** `{ error: string, code?: string }`
- **401:** Unauthorized (missing or invalid token)
- **403:** Forbidden (role)
- **404:** Not found
- **422:** Validation error — `{ errors: { field: string[] } }`

---

## Versioning

- Optional: prefix `/v1/` or header `Accept: application/vnd.belomor.v1+json`
- Document any breaking change and bump version when needed.

---

*Frontend and backend teams use this as the contract. Implement and test against it.*
