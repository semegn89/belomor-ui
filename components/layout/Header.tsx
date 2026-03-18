"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const cartCount = 0; // TODO: from cart context

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) router.push(`/catalog?q=${encodeURIComponent(search.trim())}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#CBD5E1] bg-white">
      <div className="mx-auto flex h-16 max-w-content items-center gap-4 px-4 sm:gap-6">
        <Link href="/" className="shrink-0 text-lg font-bold text-primary">
          Belomor
        </Link>
        <form onSubmit={handleSearch} className="flex flex-1 max-w-xl">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="OEM, SKU sau VIN"
            className="w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-2.5 text-base text-[#0F172A] placeholder-[#64748B] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            className="ml-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Caută
          </button>
        </form>
        <nav className="hidden items-center gap-6 sm:flex">
          <Link href="/catalog" className="text-sm font-medium text-[#334155] hover:text-primary">
            Catalog
          </Link>
          <Link href="/vehicles" className="text-sm font-medium text-[#334155] hover:text-primary">
            Vehicul
          </Link>
          <Link href="/b2b" className="text-sm font-medium text-[#334155] hover:text-primary">
            B2B
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+40123456789" className="text-sm text-[#64748B]">
            +40 123 456 789
          </a>
          <Link href="/account" className="text-sm text-[#334155] hover:text-primary">
            Cont
          </Link>
          <Link href="/cart" className="relative flex items-center gap-1 text-sm text-[#334155] hover:text-primary">
            Coș
            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-medium text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
