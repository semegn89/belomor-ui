import Link from "next/link";
import { categories, brands, products } from "@/lib/mock-data";
import { ProductCard } from "@/components/catalog/ProductCard";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero + Search */}
      <section className="border-b border-[#CBD5E1] bg-[#F8FAFC] py-12 md:py-16">
        <div className="mx-auto max-w-2xl px-4">
          <h1 className="text-center text-2xl font-bold text-[#0F172A] md:text-3xl">
            Găsiți piesa potrivită
          </h1>
          <p className="mt-2 text-center text-[#334155]">Căutați după OEM, SKU sau VIN</p>
          <form action="/catalog" method="get" className="mt-6 flex gap-2">
            <input
              type="search"
              name="q"
              placeholder="OEM, SKU sau VIN"
              className="flex-1 rounded-xl border border-[#CBD5E1] bg-white px-4 py-2.5 text-base text-[#0F172A] placeholder-[#64748B] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button type="submit" variant="primary">
              Caută
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/vehicles" className="text-sm font-medium text-primary hover:underline">
              Selectează vehicul
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-content px-4 py-12">
        <h2 className="text-xl font-semibold text-[#0F172A]">Categorii</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/catalog?category=${cat.slug}`}
              className="flex flex-col items-center justify-center rounded-2xl border border-[#CBD5E1] bg-white p-6 text-center transition-colors hover:border-primary/30"
            >
              <span className="text-2xl text-primary">⚙</span>
              <span className="mt-2 text-sm font-medium text-[#0F172A]">{cat.name}</span>
              {cat.productCount != null && (
                <span className="mt-1 text-xs text-[#64748B]">{cat.productCount} produse</span>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="border-t border-[#CBD5E1] bg-white py-12">
        <div className="mx-auto max-w-content px-4">
          <h2 className="text-xl font-semibold text-[#0F172A]">Branduri partenere</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            {brands.map((b) => (
              <Link
                key={b.id}
                href={`/catalog?brand=${b.slug}`}
                className="rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-6 py-3 text-sm font-medium text-[#334155] hover:border-primary/30 hover:text-primary"
              >
                {b.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="border-t border-[#CBD5E1] bg-[#F8FAFC] py-12">
        <div className="mx-auto max-w-content px-4 text-center">
          <p className="text-[#334155]">Client B2B? Prețuri speciale și comenzi repetitive.</p>
          <Button href="/b2b" variant="primary" className="mt-4">
            Înregistrare partener
          </Button>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-content px-4 py-12">
        <h2 className="text-xl font-semibold text-[#0F172A]">Produse recomandate</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/catalog" variant="secondary">
            Vezi tot catalogul
          </Button>
        </div>
      </section>

      {/* Trust */}
      <section className="border-t border-[#CBD5E1] bg-white py-12">
        <div className="mx-auto max-w-content px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { title: "Livrare rapidă", desc: "2–5 zile lucrătoare" },
              { title: "Retur 30 zile", desc: "Fără întrebări" },
              { title: "Garanție", desc: "Produse originale" },
              { title: "Asistență", desc: "Telefon & email" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8FAFC] text-primary">
                  ✓
                </div>
                <h3 className="mt-2 text-sm font-semibold text-[#0F172A]">{item.title}</h3>
                <p className="mt-1 text-xs text-[#64748B]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery info */}
      <section className="border-t border-[#CBD5E1] bg-[#F8FAFC] py-8">
        <div className="mx-auto max-w-content px-4 text-center text-sm text-[#64748B]">
          <p>Livrăm în toată România. Termene și condiții pe pagina{" "}
            <Link href="/delivery" className="text-primary hover:underline">Livrare</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
