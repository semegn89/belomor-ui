import Link from "next/link";
import type { Product } from "@/lib/mock-data";
import { StockBadge } from "@/components/ui/StockBadge";
import { DeliveryBadge } from "@/components/ui/DeliveryBadge";
import { Button } from "@/components/ui/Button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white transition-colors hover:border-primary/30">
      <Link href={`/product/${product.slug}`} className="block aspect-square bg-[#F8FAFC] p-4">
        <div className="flex h-full w-full items-center justify-center rounded-xl bg-white text-[#64748B]">
          {product.image ? (
            <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
          ) : (
            <span className="text-xs">Fără imagine</span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <p className="text-xs font-mono text-[#64748B]">{product.sku}</p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-[#0F172A] hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-[#334155]">{product.brand}</p>
        <p className="mt-2 text-lg font-semibold text-[#0F172A]">{product.price.toFixed(2)} Lei</p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <StockBadge status={product.stockStatus} />
          <DeliveryBadge eta={product.deliveryETA} />
        </div>
        <div className="mt-3">
          <Button href={`/product/${product.slug}`} variant="primary" className="w-full">
            Adaugă în coș
          </Button>
        </div>
      </div>
    </article>
  );
}
