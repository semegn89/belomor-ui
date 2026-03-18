import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProducts } from "@/lib/mock-data";
import { StockBadge } from "@/components/ui/StockBadge";
import { DeliveryBadge } from "@/components/ui/DeliveryBadge";
import { OEMTag } from "@/components/ui/OEMTag";
import { Button } from "@/components/ui/Button";
import { CopyableSKU } from "@/components/ui/CopyableSKU";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ProductAddToCartBar } from "@/components/product/ProductAddToCartBar";
import { ProductAlternativesTable } from "@/components/product/ProductAlternativesTable";

type Props = { params: Promise<{ slug: string }> };

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const alternatives = getProducts({ category: product.categoryId })
    .filter((p) => p.id !== product.id)
    .slice(0, 4);
  const relatedByBrand = getProducts({})
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-soft-bg pb-24 md:pb-20">
      <ProductAddToCartBar
        slug={product.slug}
        name={product.name}
        price={product.price}
        stockStatus={product.stockStatus}
        deliveryETA={product.deliveryETA}
      />
      <div className="mx-auto max-w-content px-4 py-6 sm:py-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Gallery — elevated card */}
          <div className="overflow-hidden rounded-card-lg border border-border bg-surface shadow-card">
            <div className="aspect-square flex items-center justify-center bg-surface-muted p-6 md:p-8">
              {product.image ? (
                <img src={product.image} alt={product.name} className="max-h-full w-full object-contain" />
              ) : (
                <span className="text-sm text-muted">Fără imagine</span>
              )}
            </div>
          </div>

          {/* Info — conversion order, refined sections */}
          <div className="space-y-6">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-text-main sm:text-2xl md:text-3xl">
                {product.name}
              </h1>
              <p className="mt-1.5 text-sm font-medium text-text-secondary">{product.brand}</p>
              <div className="mt-2.5">
                <span className="text-xs font-medium text-muted">SKU </span>
                <CopyableSKU sku={product.sku} />
              </div>
            </div>

            {product.oem.length > 0 && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">OEM</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.oem.map((code) => (
                    <OEMTag key={code} code={code} />
                  ))}
                </div>
              </div>
            )}

            {/* Stock & delivery — prominent line */}
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="sr-only">Disponibilitate: </span>
              <StockBadge status={product.stockStatus} />
              <span className="text-border-strong">·</span>
              <DeliveryBadge eta={product.deliveryETA} />
            </div>

            {/* Price + B2B — card with accent */}
            <div className="rounded-card-lg border border-border bg-surface p-5 shadow-card md:p-6">
              <p className="text-2xl font-bold tracking-tight text-text-main md:text-3xl">
                {product.price.toFixed(2)} Lei
              </p>
              <p className="mt-1 text-sm text-muted">TVA inclus · Preț retail</p>
              <div className="mt-4 rounded-input border border-primary/20 bg-soft-bg p-4">
                <p className="text-sm font-semibold text-text-main">Cont B2B?</p>
                <p className="mt-0.5 text-sm text-text-secondary">
                  Autentificați-vă pentru preț partener sau înregistrați compania.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Link href="/b2b" className="text-sm font-medium text-primary hover:underline">
                    Înregistrare partener
                  </Link>
                  <span className="text-border">|</span>
                  <Link href="/account" className="text-sm font-medium text-primary hover:underline">
                    Autentificare
                  </Link>
                </div>
              </div>
            </div>

            {/* Compatibility */}
            {product.compatibility && product.compatibility.length > 0 && (
              <div className="rounded-card-lg border border-border bg-surface p-5 shadow-card">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Compatibil cu</h3>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  {product.compatibility.map((v, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {v.make} {v.model} ({v.year})
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add to cart + VIN */}
            <div id="product-add-to-cart-main" className="flex flex-wrap items-end gap-3 rounded-card-lg border border-border bg-surface p-5 shadow-card">
              <div>
                <label htmlFor="product-qty" className="mb-1 block text-sm font-medium text-text-main">
                  Cantitate
                </label>
                <input
                  id="product-qty"
                  type="number"
                  name="qty"
                  min={1}
                  defaultValue={1}
                  className="min-h-[44px] w-20 rounded-input border border-border bg-soft-bg px-3 py-2.5 text-base text-text-main focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <Button variant="primary">Adaugă în coș</Button>
              <Link
                href="/vin-request"
                className="inline-flex min-h-[44px] items-center rounded-input border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-soft-bg hover:text-primary"
              >
                Solicită ofertă VIN
              </Link>
            </div>
          </div>
        </div>

        {/* Alternatives — comparison table */}
        {alternatives.length > 0 && (
          <section className="mt-12 md:mt-16" aria-labelledby="alternatives-heading">
            <p className="section-tag">Comparație</p>
            <h2 id="alternatives-heading" className="section-title mt-1">
              Analog / produse similare
            </h2>
            <p className="mt-1 text-sm text-muted">Compară preț, stoc și livrare</p>
            <div className="mt-6 overflow-x-auto overflow-y-hidden rounded-card-lg border border-border bg-surface shadow-card">
              <ProductAlternativesTable products={alternatives} />
            </div>
          </section>
        )}

        {/* Related by brand */}
        {relatedByBrand.length > 0 && (
          <section className="mt-12 md:mt-16">
            <p className="section-tag">Același producător</p>
            <h2 className="section-title mt-1">Același brand ({product.brand})</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
              {relatedByBrand.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
