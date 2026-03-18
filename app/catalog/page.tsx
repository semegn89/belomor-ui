import { Suspense } from "react";
import Link from "next/link";
import { getProducts } from "@/lib/mock-data";
import { categories } from "@/lib/mock-data";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ProductListRow } from "@/components/catalog/ProductListRow";
import { CatalogFilters } from "@/components/catalog/CatalogFilters";

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

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-content px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <CatalogFilters />
          </aside>

          <div className="min-w-0 flex-1">
            {/* Chips + toolbar */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-[#64748B]">
                {products.length} produse
                {(q || category) && (
                  <>
                    {" "}
                    <Link href="/catalog" className="text-primary hover:underline">
                      Resetează
                    </Link>
                  </>
                )}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#334155]">Sortare:</span>
                <select
                  className="rounded-xl border border-[#CBD5E1] bg-white px-3 py-2 text-sm text-[#0F172A] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  defaultValue="relevance"
                >
                  <option value="relevance">Relevanță</option>
                  <option value="price_asc">Preț crescător</option>
                  <option value="price_desc">Preț descrescător</option>
                  <option value="stock">În stoc first</option>
                </select>
                <div className="flex rounded-xl border border-[#CBD5E1] bg-white p-1">
                  <Link
                    href={queryStr ? `/catalog?view=list&${queryStr}` : "/catalog?view=list"}
                    className={`rounded-lg px-3 py-1.5 text-sm ${view === "list" ? "bg-primary text-white" : "text-[#334155]"}`}
                  >
                    Listă
                  </Link>
                  <Link
                    href={queryStr ? `/catalog?view=grid&${queryStr}` : "/catalog?view=grid"}
                    className={`rounded-lg px-3 py-1.5 text-sm ${view === "grid" ? "bg-primary text-white" : "text-[#334155]"}`}
                  >
                    Grid
                  </Link>
                </div>
              </div>
            </div>

            {/* Results */}
            {products.length === 0 ? (
              <div className="rounded-2xl border border-[#CBD5E1] bg-white p-12 text-center">
                <p className="text-[#64748B]">Niciun produs găsit.</p>
                <Link href="/catalog" className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
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
              <div className="rounded-2xl border border-[#CBD5E1] bg-white">
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
