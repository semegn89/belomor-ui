import Link from "next/link";
import type { Product } from "@/lib/mock-data";
import { StockBadge } from "@/components/ui/StockBadge";
import { DeliveryBadge } from "@/components/ui/DeliveryBadge";
import { OEMTag } from "@/components/ui/OEMTag";
import { Button } from "@/components/ui/Button";

export function ProductAlternativesTable({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <table className="w-full min-w-[600px] text-left text-sm">
      <thead>
        <tr className="border-b border-border bg-surface-muted">
          <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted">Produs</th>
          <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted">OEM</th>
          <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted">Stoc</th>
          <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted">Livrare</th>
          <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted">Preț</th>
          <th className="w-[100px] px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted">Acțiune</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id} className="border-b border-border transition-colors last:border-b-0 hover:bg-soft-bg/50">
            <td className="px-5 py-3.5">
              <Link href={`/product/${p.slug}`} className="font-medium text-text-main hover:text-primary">
                {p.name}
              </Link>
              <p className="mt-0.5 text-xs text-muted">{p.brand} · {p.sku}</p>
            </td>
            <td className="px-5 py-3.5">
              <div className="flex flex-wrap gap-1">
                {p.oem.slice(0, 2).map((code) => (
                  <OEMTag key={code} code={code} />
                ))}
              </div>
            </td>
            <td className="px-5 py-3.5">
              <StockBadge status={p.stockStatus} />
            </td>
            <td className="px-5 py-3.5">
              <DeliveryBadge eta={p.deliveryETA} />
            </td>
            <td className="px-5 py-3.5 font-semibold text-text-main">{p.price.toFixed(2)} Lei</td>
            <td className="px-5 py-3.5">
              <Button href={`/product/${p.slug}`} variant="primary" className="min-h-[36px]">
                Adaugă
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
