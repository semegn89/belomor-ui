"use client";

import Link from "next/link";
import type { Product } from "@/lib/mock-data";
import { StockBadge } from "@/components/ui/StockBadge";
import { DeliveryBadge } from "@/components/ui/DeliveryBadge";
import { OEMTag } from "@/components/ui/OEMTag";
import { Button } from "@/components/ui/Button";

export function ProductListRow({ product }: { product: Product }) {
  const oemShow = product.oem.slice(0, 2);

  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-border py-4 transition-colors last:border-b-0 hover:bg-soft-bg/50 sm:flex-nowrap sm:gap-5 sm:px-5">
      <Link
        href={`/product/${product.slug}`}
        className="h-14 w-14 shrink-0 overflow-hidden rounded-input bg-surface-muted sm:h-16 sm:w-16"
      >
        {product.image ? (
          <img src={product.image} alt="" className="h-full w-full object-contain" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[10px] text-muted">—</div>
        )}
      </Link>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-mono text-muted">{product.sku}</p>
        <p className="text-xs font-medium text-text-secondary">{product.brand}</p>
        <Link href={`/product/${product.slug}`}>
          <p className="mt-0.5 font-medium text-text-main hover:text-primary sm:line-clamp-2">
            {product.name}
          </p>
        </Link>
        {oemShow.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
            {oemShow.map((code) => (
              <OEMTag key={code} code={code} />
            ))}
          </div>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <StockBadge status={product.stockStatus} />
        <DeliveryBadge eta={product.deliveryETA} />
      </div>
      <div className="w-24 shrink-0 text-right">
        <p className="text-base font-semibold text-text-main">{product.price.toFixed(2)} Lei</p>
        {product.priceB2B != null && (
          <p className="text-xs text-muted">
            <Link href="/account" className="text-primary hover:underline">B2B</Link>
          </p>
        )}
      </div>
      <div className="shrink-0">
        <Button href={`/product/${product.slug}`} variant="primary" className="sm:min-w-[120px]">
          Adaugă în coș
        </Button>
      </div>
    </div>
  );
}
