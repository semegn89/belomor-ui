import type { StockStatus } from "@/lib/mock-data";

const labels: Record<StockStatus, string> = {
  in_stock: "În stoc",
  low: "Stoc limitat",
  on_order: "La comandă",
  out: "Indisponibil",
};

const classes: Record<StockStatus, string> = {
  in_stock: "bg-green-100 text-[#16A34A]",
  low: "bg-amber-100 text-[#D97706]",
  on_order: "bg-slate-100 text-[#64748B]",
  out: "bg-red-100 text-[#DC2626]",
};

export function StockBadge({ status }: { status: StockStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${classes[status]}`}
    >
      {labels[status]}
    </span>
  );
}
