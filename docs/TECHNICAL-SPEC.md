# Belomor Group Auto Parts — Technical Specification

Developer-ready. Contracts, entities, logic.

---

## 0. Project Overview

| Field | Value |
|-------|--------|
| **Project** | Belomor Group Auto Parts Platform |
| **Type** | Hybrid B2C + B2B e-commerce + catalog system |
| **Region** | Romania (primary), EU-ready |
| **Core complexity** | Catalog + fitment + B2B pricing + search |

**Bottom line:** Not a “shop”, but a **catalog-commerce system** (Autodoc / Exist-lite level).

**Key risks:** Underestimating catalog scope, weak search, weak B2B logic, missing ERP integration.

---

## 1. High-Level Architecture

### 1.1. System Components

```
[Frontend (Next.js)]
        |
        v
[API Layer (Backend)]
        |
        ├── Catalog Service
        ├── Search Service
        ├── Order Service
        ├── User/Auth Service
        ├── B2B Pricing Service
        ├── VIN Request Service
        |
        ├── Database (PostgreSQL)
        ├── Search Engine (Meilisearch/Elastic)
        ├── Object Storage (images/docs)
        |
        ├── ERP Integration
        ├── Payment Provider
        ├── Delivery APIs
        ├── CRM
```

### 1.2. Architectural Principles

- Headless architecture
- API-first
- Separation of catalog vs commerce logic
- B2B pricing isolated
- Search as independent service
- Async integration with ERP

---

## 2. Frontend Architecture (Next.js)

### 2.1. Folder Structure

```
/app
  /catalog
  /product
  /brands
  /vehicles
  /b2b
  /vin-request
  /account
  /checkout
/components
  /ui
  /catalog
  /product
  /forms
  /b2b
/lib
  /api
  /hooks
  /utils
/styles
/types
```

### 2.2. Core Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/catalog` | Product listing |
| `/product/[slug]` | Product page |
| `/vehicles/...` | Fitment navigation |
| `/brands/[brand]` | Brand page |
| `/vin-request` | VIN form |
| `/b2b` | B2B landing |
| `/account` | User dashboard |
| `/checkout` | Checkout |

### 2.3. State Management

- **React Query / TanStack Query** → API data
- **Zustand** → UI state (cart, filters)
- **Cookies/session** → auth

---

## 3. Backend Architecture

### 3.1. Services Breakdown

| Service | Responsibility |
|---------|----------------|
| **Catalog Service** | products, categories, brands, fitment, OEM mapping |
| **Search Service** | indexing, suggestions, fuzzy search, OEM lookup |
| **Order Service** | cart, checkout, order lifecycle |
| **User Service** | auth, roles, B2B flag |
| **B2B Service** | price tiers, permissions, company accounts |
| **VIN Service** | requests, processing queue, manager assignment |

---

## 4. Database Design (PostgreSQL)

See [DATABASE.md](./DATABASE.md) for full schema. Summary:

- **products** — id, name, slug, brand_id, category_id, description, sku, manufacturer_sku, price_retail, price_wholesale_base, vat_rate, weight, created_at
- **brands** — id, name, slug, logo
- **categories** — id, name, slug, parent_id
- **oem_codes** — id, product_id, code
- **product_cross_refs** — id, product_id, related_product_id, type (analog \| substitute)
- **vehicles** — id, make, model, generation, engine, year_from, year_to
- **product_fitment** — product_id, vehicle_id
- **stock** — product_id, warehouse_id, quantity, eta
- **users** — id, email, password_hash, role, company_id
- **companies** — id, name, vat_number, price_tier_id, approved
- **price_tiers** — id, name, discount_percent
- **orders** — id, user_id, status, total_price, payment_status, delivery_status, created_at
- **order_items** — order_id, product_id, price, quantity
- **vin_requests** — id, user_id, vin, comment, status, assigned_manager, created_at

---

## 5. Search Architecture

### 5.1. Indexed Fields

- product name, brand, SKU, OEM codes, category, vehicle compatibility, synonyms

### 5.2. Search Types

| Type | Logic |
|------|--------|
| Exact | SKU / OEM |
| Fuzzy | typo tolerance |
| Semantic-lite | keywords |
| Filtered | category + brand |

### 5.3. Search API

```
GET /search?q=bosch filter&vehicle=bmw-e90
```

---

## 6. Pricing Logic

### 6.1. Pricing Model

```
Final Price = Base Price - Tier Discount (B2B) - Promotion Discount
```

### 6.2. B2B Pricing

```
User → Company → Price Tier → Discount
```

### 6.3. Rules

- **Retail:** sees only retail price
- **B2B:** sees discounted price; bulk pricing optional (phase 2)

---

## 7. Cart & Checkout

### 7.1. Cart Logic

- Stored in local state + DB (for logged users)
- Supports mixed availability
- Calculates: subtotal, VAT, delivery

### 7.2. Checkout Flow

1. User info  
2. Delivery method  
3. Payment  
4. Confirmation  

### 7.3. Payment Integration

- Card  
- Cash on delivery  
- Invoice (B2B)

---

## 8. Delivery Logic

- Courier API integration  
- Cost calculation  
- ETA per product  

---

## 9. VIN Request System

### 9.1. Flow

```
User submits VIN → Stored in DB → Manager assigned → Manager selects products → Sends offer → User converts to order
```

### 9.2. API

- `POST /vin-request`
- `GET /vin-request/:id`

---

## 10. Auth & Roles

| Role | Access |
|------|--------|
| guest | browse |
| retail | buy |
| b2b | special pricing |
| manager | CRM |
| admin | full |

---

## 11. Order Lifecycle

```
NEW → CONFIRMED → PROCESSING → SHIPPED → DELIVERED
```

---

## 12. External Integrations

**Required:**

- Payment provider  
- Courier API  
- ERP (stock sync)  
- Email service  
- Analytics  

---

## 13. Admin Panel

**Modules:** Products, Categories, Brands, Orders, Users, B2B accounts, VIN requests, Pricing, Content.

---

## 14. API Design (Example)

See [API-CONTRACTS.md](./API-CONTRACTS.md) for full contracts.

- **Products:** `GET /products`, `GET /products/:id`
- **Orders:** `POST /orders`, `GET /orders/:id`
- **Auth:** `POST /auth/login`, `POST /auth/register`

---

## 15. Performance Requirements

- &lt; 200ms API response (target)  
- SSR for SEO pages  
- Lazy loading images  
- CDN for assets  

---

## 16. Security

- JWT auth  
- Role-based access  
- Input validation  
- Rate limiting  
- GDPR compliance  

---

## 17. Testing Strategy

- Unit tests (services)  
- Integration tests (API)  
- E2E (checkout flow)  

---

## 18. Analytics Events

- `add_to_cart`  
- `checkout_start`  
- `purchase`  
- `vin_request`  
- `search_query`  

---

## 19. Deployment

| Component | Target |
|-----------|--------|
| Frontend | Vercel |
| Backend | Cloud (Docker) |
| DB | Managed PostgreSQL |
| Search | Managed (Meilisearch/Elastic) |

---

## 20. MVP Scope (Final Cut)

**Must-have:**

- Catalog  
- Search  
- Product page  
- Cart  
- Checkout  
- VIN form  
- B2B registration  
- Admin basic  
