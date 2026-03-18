import Link from "next/link";
import { categories } from "@/lib/mock-data";

export function CatalogFilters() {
  return (
    <div className="space-y-4 border-b border-[#CBD5E1] pr-6">
      <div className="pb-4">
        <h3 className="text-sm font-medium text-[#0F172A]">Categorie</h3>
        <ul className="mt-2 space-y-1">
          {categories.map((c) => (
            <li key={c.id}>
              <Link
                href={`/catalog?category=${c.slug}`}
                className="block rounded-lg py-1.5 pl-2 text-sm text-[#334155] hover:bg-[#F8FAFC] hover:text-primary"
              >
                {c.name}
                {c.productCount != null && (
                  <span className="ml-1 text-[#64748B]">({c.productCount})</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pb-4">
        <h3 className="text-sm font-medium text-[#0F172A]">Disponibilitate</h3>
        <div className="mt-2 space-y-2">
          {["all", "in_stock", "on_order"].map((v) => (
            <label key={v} className="flex items-center gap-2 text-sm text-[#334155]">
              <input type="radio" name="availability" value={v} className="rounded border-[#CBD5E1]" />
              {v === "all" && "Toate"}
              {v === "in_stock" && "În stoc"}
              {v === "on_order" && "La comandă"}
            </label>
          ))}
        </div>
      </div>
      <div className="pb-4">
        <Link href="/catalog" className="text-sm font-medium text-primary hover:underline">
          Resetează filtrele
        </Link>
      </div>
    </div>
  );
}
