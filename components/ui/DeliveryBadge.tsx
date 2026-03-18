import type { DeliveryETA } from "@/lib/mock-data";

const labels: Record<DeliveryETA, string> = {
  "1-3": "1–3 zile",
  "3-7": "3–7 zile",
  on_request: "La cerere",
};

const classes: Record<DeliveryETA, string> = {
  "1-3": "bg-green-100 text-green-800",
  "3-7": "bg-amber-100 text-amber-800",
  on_request: "bg-slate-100 text-[#64748B]",
};

export function DeliveryBadge({ eta }: { eta: DeliveryETA }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${classes[eta]}`}
    >
      {labels[eta]}
    </span>
  );
}
