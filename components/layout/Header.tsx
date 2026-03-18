"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const SEARCH_HINTS = [
  "ex: 0 986 423 001",
  "SKU sau cod intern",
  "VIN 17 caractere",
];

export function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("belomor-recent-search");
      if (raw) {
        const parsed = JSON.parse(raw) as string[];
        setRecentSearches(Array.isArray(parsed) ? parsed.slice(0, 5) : []);
      }
    } catch {
      setRecentSearches([]);
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = search.trim();
    if (q) {
      const next = [q, ...recentSearches.filter((s) => s !== q)].slice(0, 5);
      setRecentSearches(next);
      try {
        localStorage.setItem("belomor-recent-search", JSON.stringify(next));
      } catch {}
      setSuggestionsOpen(false);
      router.push(`/catalog?q=${encodeURIComponent(q)}`);
    }
  };

  const handleHintClick = (hint: string) => {
    setSearch(hint);
    setSuggestionsOpen(false);
  };

  const handleRecentClick = (q: string) => {
    setSearch(q);
    setSuggestionsOpen(false);
    router.push(`/catalog?q=${encodeURIComponent(q)}`);
  };

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setSuggestionsOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const cartCount = 0;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface shadow-header">
      <div className="mx-auto flex h-16 max-w-content items-center gap-4 px-4 sm:gap-6">
        <Link href="/" className="shrink-0 text-lg font-bold tracking-tight text-primary">
          Belomor
        </Link>

        <div ref={wrapRef} className="relative flex-1 max-w-2xl">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setSuggestionsOpen(true)}
                placeholder="OEM, SKU sau VIN"
                aria-label="Căutare produse"
                className="h-12 w-full rounded-input border border-border bg-soft-bg pl-4 pr-4 text-base text-text-main placeholder:text-muted focus:border-primary focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {suggestionsOpen && (
                <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-input border border-border bg-surface py-2 shadow-elevated">
                  {recentSearches.length > 0 && (
                    <div className="border-b border-border px-3 pb-2">
                      <p className="section-tag text-[11px]">Căutări recente</p>
                      <ul className="mt-1">
                        {recentSearches.map((q) => (
                          <li key={q}>
                            <button
                              type="button"
                              onClick={() => handleRecentClick(q)}
                              className="block w-full rounded-lg px-3 py-2 text-left text-sm text-text-main hover:bg-soft-bg"
                            >
                              {q}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="px-3 pt-2">
                    <p className="section-tag text-[11px]">Sugestii</p>
                    <ul className="mt-1">
                      {SEARCH_HINTS.map((hint) => (
                        <li key={hint}>
                          <button
                            type="button"
                            onClick={() => handleHintClick(hint)}
                            className="block w-full rounded-lg px-3 py-2 text-left text-sm text-text-secondary hover:bg-soft-bg"
                          >
                            {hint}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <button
              type="submit"
              className="h-12 shrink-0 rounded-input bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Caută
            </button>
          </form>
        </div>

        <nav className="hidden items-center gap-5 md:flex">
          <Link href="/catalog" className="text-sm font-medium text-text-secondary hover:text-primary">
            Catalog
          </Link>
          <Link href="/vehicles" className="text-sm font-medium text-text-secondary hover:text-primary">
            Vehicul
          </Link>
          <Link href="/b2b" className="text-sm font-medium text-text-secondary hover:text-primary">
            B2B <span className="text-[10px] text-muted">parteneri</span>
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+40123456789" className="hidden text-sm text-muted sm:inline hover:text-primary">
            +40 123 456 789
          </a>
          <Link href="/account" className="text-sm font-medium text-text-secondary hover:text-primary">
            Cont
          </Link>
          <Link href="/cart" className="relative flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-primary">
            Coș
            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
