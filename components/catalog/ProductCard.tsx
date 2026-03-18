import Link from "next/link";
import type { Product } from "@/lib/mock-data";
import { StockBadge } from "@/components/ui/StockBadge";
import { DeliveryBadge } from "@/components/ui/DeliveryBadge";
import { OEMTag } from "@/components/ui/OEMTag";
import { Button } from "@/components/ui/Button";

export function ProductCard({ product }: { product: Product }) {
  const oemShow = product.oem.slice(0, 2);

  return (
    <article className="flex flex-col overflow-hidden rounded-card-lg border border-border bg-surface shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover">
      <Link href={`/product/${product.slug}`} className="block aspect-square bg-surface-muted p-3">
        <div className="flex h-full w-full items-center justify-center rounded-input bg-surface text-muted">
          {product.image ? (
            <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
          ) : (
            <span className="text-xs">Fără imagine</span>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-mono text-muted">{product.sku}</p>
        <p className="mt-0.5 text-xs font-medium text-text-secondary">{product.brand}</p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-snug tracking-tight text-text-main hover:text-primary">
            {product.name}
          </h3>
        </Link>
        {oemShow.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {oemShow.map((code) => (
              <OEMTag key={code} code={code} />
            ))}
          </div>
        )}
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <StockBadge status={product.stockStatus} />
          <DeliveryBadge eta={product.deliveryETA} />
        </div>
        <p className="mt-3 text-lg font-semibold tracking-tight text-text-main">{product.price.toFixed(2)} Lei</p>
        {product.priceB2B != null && (
          <p className="mt-0.5 text-xs text-muted">
            Preț partener la <Link href="/account" className="text-primary hover:underline">autentificare</Link>
          </p>
        )}
        <div className="mt-3">
          <Button href={`/product/${product.slug}`} variant="primary" className="w-full">
            Adaugă în coș
          </Button>
        </div>
      </div>
    </article>
  );
}
