import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/mock-data";
import { getProducts } from "@/lib/mock-data";
import { StockBadge } from "@/components/ui/StockBadge";
import { DeliveryBadge } from "@/components/ui/DeliveryBadge";
import { OEMTag } from "@/components/ui/OEMTag";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/catalog/ProductCard";

type Props = { params: Promise<{ slug: string }> };

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const alternatives = getProducts({ category: product.categoryId }).filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-content px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Gallery */}
          <div className="aspect-square overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white">
            <div className="flex h-full w-full items-center justify-center bg-[#F8FAFC] text-[#64748B]">
              {product.image ? (
                <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
              ) : (
                <span>Fără imagine</span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-mono text-[#64748B]">{product.sku}</p>
              <h1 className="mt-1 text-xl font-bold text-[#0F172A]">{product.name}</h1>
              <p className="mt-1 text-sm text-[#334155]">{product.brand}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.oem.map((code) => (
                <OEMTag key={code} code={code} />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <StockBadge status={product.stockStatus} />
              <DeliveryBadge eta={product.deliveryETA} />
            </div>

            <div className="rounded-2xl border border-[#CBD5E1] bg-white p-4">
              <p className="text-2xl font-bold text-[#0F172A]">{product.price.toFixed(2)} Lei</p>
              <p className="text-sm text-[#64748B]">TVA inclus</p>
              <Link href="/b2b" className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
                Preț partener? Înregistrare B2B
              </Link>
            </div>

            <div className="flex flex-wrap items-end gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-[#0F172A]">Cantitate</label>
                <input
                  type="number"
                  min={1}
                  defaultValue={1}
                  className="w-24 rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base text-[#0F172A] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <Button variant="primary">Adaugă în coș</Button>
              <Link href="/vin-request" className="text-sm font-medium text-primary hover:underline">
                Solicită ofertă VIN
              </Link>
            </div>

            {product.compatibility && product.compatibility.length > 0 && (
              <div className="rounded-2xl border border-[#CBD5E1] bg-white p-4">
                <h3 className="text-base font-semibold text-[#0F172A]">Compatibil cu</h3>
                <ul className="mt-2 space-y-1 text-sm text-[#334155]">
                  {product.compatibility.map((v, i) => (
                    <li key={i}>
                      {v.make} {v.model} ({v.year})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Alternatives */}
        {alternatives.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[#0F172A]">Produse similare</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {alternatives.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
