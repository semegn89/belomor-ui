# Документация проекта — Belomor Group Auto Parts

## Основные документы

| Документ | Назначение |
|----------|------------|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Бизнес и ИА: три контура (B2C, B2B, Content/SEO), шесть слоёв, sitemap, роли, фазы запуска |
| [TECHNICAL-SPEC.md](./TECHNICAL-SPEC.md) | **Developer-ready:** архитектура, фронт (Next.js), бэкенд-сервисы, поиск, цены, корзина, VIN, роли, перф, безопасность, MVP scope |
| [DATABASE.md](./DATABASE.md) | Схема БД (PostgreSQL): таблицы, поля, индексы — контракт для миграций и ORM |
| [API-CONTRACTS.md](./API-CONTRACTS.md) | Контракты API: auth, products, catalog, search, cart, checkout, orders, VIN, B2B, ошибки |
| [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) | **Industrial UI system:** blueprint colors (#0F3D91, #F59E0B), Inter, 8px grid, 16/12 radius, UX rules, component inventory, Tailwind tokens |
| [UI-SCREENS.md](./UI-SCREENS.md) | Wireframe-level structure for all 8 screens (home, catalog, product, VIN, B2B, cart, checkout, account) |
| [COMPONENTS-REFERENCE.md](./COMPONENTS-REFERENCE.md) | Tailwind-oriented spec for every required component + React component hierarchy |

## Контекст проекта

- **Продукт:** Belomor Group Auto Parts — каталожно-коммерческая платформа (B2C + B2B + SEO), Румыния, EU-ready.
- **Стек:** Next.js, TanStack Query, Zustand; Backend API, PostgreSQL, Meilisearch/Elastic, object storage; ERP, платежи, курьеры, email, аналитика.
- **Строить по:** TECHNICAL-SPEC.md + DATABASE.md + API-CONTRACTS.md. ARCHITECTURE.md — контекст. DESIGN-SYSTEM.md + UI-SCREENS.md + COMPONENTS-REFERENCE.md — UI (v2: усилен B2B, каталог, конверсия продукта, меньше визуального шума, единые токены).
