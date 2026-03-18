import Link from "next/link";
import { categories, brands, products } from "@/lib/mock-data";
import { ProductCard } from "@/components/catalog/ProductCard";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero — full-bleed, high contrast */}
      <section className="relative bg-primary-dark py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,43,102,0.92)_0%,rgba(10,43,102,0.98)_100%)]" aria-hidden />
        <div className="relative mx-auto max-w-2xl px-4">
          <p className="section-tag text-white/70">Catalog piese auto</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Găsiți piesa potrivită
          </h1>
          <p className="mt-3 text-base text-white/85 md:text-lg">
            Căutați după OEM, SKU sau VIN. Livrare rapidă, prețuri clare.
          </p>
          <form action="/catalog" method="get" className="mt-8 flex gap-2">
            <input
              type="search"
              name="q"
              placeholder="OEM, SKU sau VIN"
              className="h-14 flex-1 rounded-xl border-0 bg-white/95 px-4 py-3.5 text-base text-text-main shadow-elevated placeholder:text-muted focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button type="submit" variant="primary" className="h-14 shrink-0 px-6 text-base">
              Caută
            </Button>
          </form>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/vehicles" className="font-medium text-white/90 hover:text-white underline underline-offset-2">
              Selectează vehicul
            </Link>
            <Link href="/catalog" className="font-medium text-white/90 hover:text-white underline underline-offset-2">
              Vezi catalogul
            </Link>
          </div>
        </div>
      </section>

      {/* Categories — refined cards with elevation */}
      <section className="mx-auto max-w-content px-4 py-12 md:py-16">
        <p className="section-tag">Navigare</p>
        <h2 className="section-title mt-1">Categorii</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/catalog?category=${cat.slug}`}
              className="group flex flex-col items-center justify-center rounded-card-lg border border-border bg-surface p-6 text-center shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-bg text-lg font-medium text-primary transition-colors group-hover:bg-primary/10">
                +
              </span>
              <span className="mt-3 text-sm font-semibold text-text-main">{cat.name}</span>
              {cat.productCount != null && (
                <span className="mt-1 text-xs text-muted">{cat.productCount} produse</span>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Brands — clean strip */}
      <section className="border-y border-border bg-surface py-10 md:py-12">
        <div className="mx-auto max-w-content px-4">
          <p className="section-tag">Parteneri</p>
          <h2 className="section-title mt-1">Branduri</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {brands.map((b) => (
              <Link
                key={b.id}
                href={`/catalog?brand=${b.slug}`}
                className="rounded-xl border border-border bg-soft-bg px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:border-primary/30 hover:text-primary hover:shadow-card"
              >
                {b.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* B2B — authoritative block with accent */}
      <section className="mx-auto max-w-content px-4 py-12 md:py-16">
        <div className="relative overflow-hidden rounded-card-lg border border-border bg-surface p-8 shadow-card md:p-10">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" aria-hidden />
          <div className="flex flex-col gap-6 pl-4 md:flex-row md:items-center md:justify-between md:pl-6">
            <div>
              <p className="section-tag">Pentru companii</p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight text-text-main md:text-2xl">
                Client B2B?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">
                Prețuri speciale pentru parteneri, comenzi repetitive, facturare la termen și manager dedicat.
              </p>
            </div>
            <Button href="/b2b" variant="primary" className="shrink-0 md:min-w-[180px]">
              Înregistrare partener
            </Button>
          </div>
        </div>
      </section>

      {/* Featured products — elevated surface */}
      <section className="border-t border-border bg-surface-muted py-12 md:py-16">
        <div className="mx-auto max-w-content px-4">
          <p className="section-tag">Recomandări</p>
          <h2 className="section-title mt-1">Produse recomandate</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/catalog" variant="secondary">
              Vezi tot catalogul
            </Button>
          </div>
        </div>
      </section>

      {/* Trust — minimal, confident */}
      <section className="border-t border-border bg-surface py-12 md:py-14">
        <div className="mx-auto max-w-content px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { title: "Livrare rapidă", desc: "2–5 zile lucrătoare" },
              { title: "Retur 30 zile", desc: "Fără întrebări" },
              { title: "Garanție", desc: "Produse originale" },
              { title: "Asistență", desc: "Telefon & email" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-soft-bg text-primary shadow-card">
                  <span className="text-lg font-medium">✓</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-text-main">{item.title}</h3>
                <p className="mt-1 text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <section className="border-t border-border bg-soft-bg py-6">
        <div className="mx-auto flex max-w-content flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            Livrăm în toată România.{" "}
            <Link href="/delivery" className="text-primary hover:underline">Livrare</Link>
            {" · "}
            <Link href="/returns" className="text-primary hover:underline">Retur</Link>
          </p>
          <Link href="/b2b" className="text-sm font-medium text-primary hover:underline">
            Prețuri B2B pentru parteneri →
          </Link>
        </div>
      </section>
    </div>
  );