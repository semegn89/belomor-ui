# Database Schema — Belomor Auto Parts

PostgreSQL. Reference for migrations and ORM.

---

## Core Tables

### products

| Column | Type | Notes |
|--------|------|--------|
| id | PK | uuid or bigint |
| name | string | |
| slug | string | unique |
| brand_id | FK → brands | |
| category_id | FK → categories | |
| description | text | nullable |
| sku | string | internal SKU |
| manufacturer_sku | string | nullable |
| price_retail | decimal | |
| price_wholesale_base | decimal | base before tier |
| vat_rate | decimal | e.g. 0.19 |
| weight | decimal | nullable |
| created_at | timestamptz | |
| updated_at | timestamptz | |

---

### brands

| Column | Type | Notes |
|--------|------|--------|
| id | PK | |
| name | string | |
| slug | string | unique |
| logo | string | url/path nullable |

---

### categories

| Column | Type | Notes |
|--------|------|--------|
| id | PK | |
| name | string | |
| slug | string | unique |
| parent_id | FK → categories | nullable, tree |

---

### oem_codes

| Column | Type | Notes |
|--------|------|--------|
| id | PK | |
| product_id | FK → products | |
| code | string | OEM code |

---

### product_cross_refs

| Column | Type | Notes |
|--------|------|--------|
| id | PK | |
| product_id | FK → products | |
| related_product_id | FK → products | |
| type | enum | `analog` \| `substitute` |

---

### vehicles

| Column | Type | Notes |
|--------|------|--------|
| id | PK | |
| make | string | e.g. BMW |
| model | string | e.g. 3 Series |
| generation | string | nullable |
| engine | string | nullable |
| year_from | int | nullable |
| year_to | int | nullable |

---

### product_fitment

| Column | Type | Notes |
|--------|------|--------|
| product_id | FK → products | PK part |
| vehicle_id | FK → vehicles | PK part |

Composite PK (product_id, vehicle_id).

---

### stock

| Column | Type | Notes |
|--------|------|--------|
| product_id | FK → products | |
| warehouse_id | FK → warehouses | (table not detailed here) |
| quantity | int | |
| eta | date/timestamp | nullable, delivery ETA |

---

### users

| Column | Type | Notes |
|--------|------|--------|
| id | PK | |
| email | string | unique |
| password_hash | string | |
| role | enum | `guest` \| `retail` \| `b2b` \| `manager` \| `admin` |
| company_id | FK → companies | nullable, for B2B |
| created_at | timestamptz | |
| updated_at | timestamptz | |

---

### companies (B2B)

| Column | Type | Notes |
|--------|------|--------|
| id | PK | |
| name | string | |
| vat_number | string | nullable |
| price_tier_id | FK → price_tiers | |
| approved | boolean | default false |
| created_at | timestamptz | |
| updated_at | timestamptz | |

---

### price_tiers

| Column | Type | Notes |
|--------|------|--------|
| id | PK | |
| name | string | e.g. "Tier 1" |
| discount_percent | decimal | e.g. 15.00 |

---

### orders

| Column | Type | Notes |
|--------|------|--------|
| id | PK | |
| user_id | FK → users | |
| status | enum | NEW, CONFIRMED, PROCESSING, SHIPPED, DELIVERED |
| total_price | decimal | |
| payment_status | string | e.g. pending, paid |
| delivery_status | string | e.g. pending, shipped |
| created_at | timestamptz | |
| updated_at | timestamptz | |

---

### order_items

| Column | Type | Notes |
|--------|------|--------|
| order_id | FK → orders | PK part |
| product_id | FK → products | PK part |
| price | decimal | snapshot at order time |
| quantity | int | |

Composite PK or surrogate id + unique (order_id, product_id).

---

### vin_requests

| Column | Type | Notes |
|--------|------|--------|
| id | PK | |
| user_id | FK → users | nullable (guest can submit) |
| vin | string | |
| comment | text | nullable |
| status | string | e.g. new, assigned, quoted, converted |
| assigned_manager | FK → users | nullable |
| created_at | timestamptz | |
| updated_at | timestamptz | |

---

## Indexes (recommended)

- products: slug, brand_id, category_id, sku  
- oem_codes: code, product_id  
- product_fitment: product_id, vehicle_id  
- vehicles: make, model  
- users: email, company_id  
- orders: user_id, status, created_at  
- vin_requests: status, assigned_manager, created_at  

---

*Use this document as the contract for DB migrations and ORM entities.*
