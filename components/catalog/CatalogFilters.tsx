"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, brands } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";

export function CatalogFilters({ inDrawer, onApply }: { inDrawer?: boolean; onApply?: () => void }) {
  const [open, setOpen] = useState<Record<string, boolean>>({
    category: true,
    brand: true,
    price: true,
    availability: true,
  });

  const toggle = (id: string) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-0">
      <div className={open.category ? "border-b border-border pb-3" : "border-b border-border pb-2"}>
        <button
          type="button"
          onClick={() => toggle("category")}
          className="flex w-full items-center justify-between rounded-lg py-2 pl-0 pr-1 text-left text-sm font-semibold text-text-main hover:bg-soft-bg"
          aria-expanded={open.category}
        >
          Categorie
          <span className="text-muted" aria-hidden>{open.category ? "−" : "+"}</span>
        </button>
        {open.category && (
          <ul className="mt-1 space-y-0.5">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/catalog?category=${c.slug}`}
                  className="block rounded-lg py-2 pl-2 text-sm text-text-secondary hover:bg-soft-bg hover:text-primary"
                >
                  {c.name}
                  {c.productCount != null && (
                    <span className="ml-1 text-muted">({c.productCount})</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={open.brand ? "border-b border-border pb-3" : "border-b border-border pb-2"}>
        <button
          type="button"
          onClick={() => toggle("brand")}
          className="flex w-full items-center justify-between rounded-lg py-2 pl-0 pr-1 text-left text-sm font-semibold text-text-main hover:bg-soft-bg"
          aria-expanded={open.brand}
        >
          Brand
          <span className="text-muted" aria-hidden>{open.brand ? "−" : "+"}</span>
        </button>
        {open.brand && (
          <ul className="mt-1 space-y-0.5">
            {brands.map((b) => (
              <li key={b.id}>
                <Link
                  href={`/catalog?brand=${b.slug}`}
                  className="block rounded-lg py-2 pl-2 text-sm text-text-secondary hover:bg-soft-bg hover:text-primary"
                >
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={open.price ? "border-b border-border pb-3" : "border-b border-border pb-2"}>
        <button
          type="button"
          onClick={() => toggle("price")}
          className="flex w-full items-center justify-between rounded-lg py-2 pl-0 pr-1 text-left text-sm font-semibold text-text-main hover:bg-soft-bg"
          aria-expanded={open.price}
        >
          Preț
          <span className="text-muted" aria-hidden>{open.price ? "−" : "+"}</span>
        </button>
        {open.price && (
          <div className="mt-2 flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              min={0}
              className="w-full rounded-input border border-border bg-surface px-3 py-2 text-sm text-text-main placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <span className="text-muted">–</span>
            <input
              type="number"
              placeholder="Max"
              min={0}
              className="w-full rounded-input border border-border bg-surface px-3 py-2 text-sm text-text-main placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        )}
      </div>

      <div className={open.availability ? "border-b border-border pb-3" : "border-b border-border pb-2"}>
        <button
          type="button"
          onClick={() => toggle("availability")}
          className="flex w-full items-center justify-between rounded-lg py-2 pl-0 pr-1 text-left text-sm font-semibold text-text-main hover:bg-soft-bg"
          aria-expanded={open.availability}
        >
          Disponibilitate
          <span className="text-muted" aria-hidden>{open.availability ? "−" : "+"}</span>
        </button>
        {open.availability && (
          <div className="mt-2 space-y-1.5">
            {[
              { value: "all", label: "Toate" },
              { value: "in_stock", label: "În stoc" },
              { value: "on_order", label: "La comandă" },
            ].map(({ value, label }) => (
              <label
                key={value}
                className="flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg py-2 pl-2 text-sm text-text-secondary hover:bg-soft-bg"
              >
                <input
                  type="radio"
                  name="availability"
                  value={value}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                {label}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="pt-3">
        <Link href="/catalog" className="text-sm font-medium text-primary hover:underline">
          Resetează filtrele
        </Link>
      </div>

      {inDrawer && onApply && (
        <div className="mt-4 border-t border-border pt-4">
          <Button variant="primary" className="min-h-[44px] w-full" onClick={onApply}>
            Aplică filtre
          </Button>
        </div>
      )}
    </div>
  );
}
