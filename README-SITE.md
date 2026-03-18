# Belomor Group — UI (site)

Interfață Next.js pentru platforma de piese auto Belomor (B2C + B2B). Construită conform documentației din `/docs`.

## Pornire

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

## Pagini

- **/** — Homepage (căutare, categorii, branduri, B2B CTA, trust, produse recomandate)
- **/catalog** — Catalog cu filtre, listă/grid, sortare
- **/product/[slug]** — Pagină produs (galerie, SKU, OEM, stoc, ETA, preț, compatibilitate, alternative)
- **/vin-request** — Formular cerere VIN
- **/b2b** — Landing B2B + **/b2b/register** — Înregistrare partener
- **/cart** — Coș (gol în demo)
- **/checkout** — Checkout (guest, adresă, livrare, plată)
- **/account** — Dashboard cont (comenzi, adrese)
- **/vehicles** — Placeholder selectare vehicul

## Design

- Culori: primary #0F3D91, accent #F59E0B, text/border din DESIGN-SYSTEM
- Font: Inter
- 8px grid, card radius 16px, input/button 12px
- Componente: Header (mega search), ProductCard, ProductListRow, Stock/Delivery badges, OEM tags, filtre sidebar

## Date

- Mock date în `lib/mock-data.ts` (produse, categorii, branduri). Conectarea la API real se face prin înlocuirea apelurilor din pagini cu fetch/React Query către backend-ul din API-CONTRACTS.md.

## Build

```bash
npm run build
npm run start
```
