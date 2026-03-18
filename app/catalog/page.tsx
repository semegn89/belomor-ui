import Link from "next/link";
import { getProducts, categories } from "@/lib/mock-data";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ProductListRow } from "@/components/catalog/ProductListRow";
import { CatalogFilters } from "@/components/catalog/CatalogFilters";
import { CatalogFilterDrawer } from "@/components/catalog/CatalogFilterDrawer";

type Props = { searchParams: Promise<{ q?: string; category?: string; view?: string }> };

export default async function CatalogPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = params.category;
  const q = params.q;
  const view = params.view ?? "list";
  const query = new URLSearchParams();
  if (q) query.set("q", q);
  if (category) query.set("category", category);
  const queryStr = query.toString();

  const products = getProducts({ category, q });
  const categoryLabel = category ? categories.find((c) => c.slug === category)?.name : null;

  return (
    <div className="min-h-screen bg-soft-bg">
      <div className="mx-auto max-w-content px-4 py-6 md:py-8">
        {/* Breadcrumbs — refined */}
        <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/catalog" className="hover:text-primary">
                Catalog
              </Link>
            </li>
            {categoryLabel && (
              <>
                <li aria-hidden className="text-border-strong">/</li>
                <li className="font-medium text-text-main">{categoryLabel}</li>
              </>
            )}
            {q && (
              <>
                <li aria-hidden className="text-border-strong">/</li>
                <li className="font-medium text-text-main">„{q}"</li>
              </>
            )}
          </ol>
        </nav>

        <div className="flex gap-6 lg:gap-8">
          {/* Sidebar — card surface */}
          <aside className="hidden shrink-0 lg:block lg:w-60">
            <div className="sticky top-24 rounded-card-lg border border-border bg-surface p-5 shadow-card">
              <p className="section-tag">Filtre</p>
              <h2 className="section-title mt-1 text-base">Refinează</h2>
              <div className="mt-5">
                <CatalogFilters />
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            {/* Toolbar — clear hierarchy */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-card-lg border border-border bg-surface px-4 py-3 shadow-card md:px-5">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm font-medium text-text-main">
                  <span className="text-muted">{products.length}</span> produse
                </p>
                {(q || category) && (
                  <Link href="/catalog" className="text-sm text-primary hover:underline">
                    Resetează
                  </Link>
                )}
                <CatalogFilterDrawer />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <label htmlFor="catalog-sort" className="sr-only">
                  Sortare
                </label>
                <select
                  id="catalog-sort"
                  className="min-h-[44px] rounded-input border border-border bg-soft-bg px-3 py-2 text-sm text-text-main focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  defaultValue="relevance"
                >
                  <option value="relevance">Relevanță</option>
                  <option value="price_asc">Preț crescător</option>
                  <option value="price_desc">Preț descrescător</option>
                  <option value="stock">În stoc</option>
                </select>
                <div className="flex rounded-input border border-border bg-soft-bg p-1" role="group" aria-label="Vizualizare">
                  <Link
                    href={queryStr ? `/catalog?view=list&${queryStr}` : "/catalog?view=list"}
                    className={`min-h-[40px] rounded-lg px-3 py-2 text-sm font-medium ${view === "list" ? "bg-primary text-white" : "text-text-secondary hover:bg-surface"}`}
                  >
                    Listă
                  </Link>
                  <Link
                    href={queryStr ? `/catalog?view=grid&${queryStr}` : "/catalog?view=grid"}
                    className={`min-h-[40px] rounded-lg px-3 py-2 text-sm font-medium ${view === "grid" ? "bg-primary text-white" : "text-text-secondary hover:bg-surface"}`}
                  >
                    Grid
                  </Link>
                </div>
              </div>
            </div>

            {products.length === 0 ? (
              <div className="rounded-card-lg border border-border bg-surface p-12 text-center shadow-card">
                <p className="text-muted">Niciun produs găsit.</p>
                <Link href="/catalog" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
                  Resetează filtrele
                </Link>
              </div>
            ) : view === "grid" ? (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="overflow-hidden rounded-card-lg border border-border bg-surface shadow-card">
                {products.map((p) => (
                  <ProductListRow key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
