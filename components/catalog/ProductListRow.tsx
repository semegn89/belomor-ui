import Link from "next/link";
import type { Product } from "@/lib/mock-data";
import { StockBadge } from "@/components/ui/StockBadge";
import { DeliveryBadge } from "@/components/ui/DeliveryBadge";
import { OEMTag } from "@/components/ui/OEMTag";
import { Button } from "@/components/ui/Button";

export function ProductListRow({ product }: { product: Product }) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-b border-[#CBD5E1] py-4 sm:flex-nowrap">
      <Link href={`/product/${product.slug}`} className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#F8FAFC]">
        {product.image ? (
          <img src={product.image} alt="" className="h-full w-full object-contain" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[10px] text-[#64748B]">—</div>
        )}
      </Link>
      <div className="min-w-0 flex-1">
        <Link href={`/product/${product.slug}`}>
          <p className="font-medium text-[#0F172A] hover:text-primary">{product.name}</p>
        </Link>
        <p className="text-xs text-[#334155]">{product.brand}</p>
        <p className="text-xs font-mono text-[#64748B]">{product.sku}</p>
        {product.oem.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
            {product.oem.slice(0, 3).map((code) => (
              <OEMTag key={code} code={code} />
            ))}
          </div>
        )}
      </div>
      <p className="text-lg font-semibold text-[#0F172A]">{product.price.toFixed(2)} Lei</p>
      <div className="flex flex-wrap items-center gap-2">
        <StockBadge status={product.stockStatus} />
        <DeliveryBadge eta={product.deliveryETA} />
      </div>
      <Button href={`/product/${product.slug}`} variant="primary">
        Adaugă în coș
      </Button>
    </div>
  );
}
