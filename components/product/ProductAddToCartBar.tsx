"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { StockBadge } from "@/components/ui/StockBadge";
import { DeliveryBadge } from "@/components/ui/DeliveryBadge";
import type { StockStatus, DeliveryETA } from "@/lib/mock-data";

type Props = {
  slug: string;
  name: string;
  price: number;
  stockStatus: StockStatus;
  deliveryETA: DeliveryETA;
  mainBlockId?: string;
};

export function ProductAddToCartBar({
  slug,
  name,
  price,
  stockStatus,
  deliveryETA,
  mainBlockId = "product-add-to-cart-main",
}: Props) {
  const [qty, setQty] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(mainBlockId);

    const checkMobile = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 768) setVisible(true);
    };
    checkMobile();

    const obs = new IntersectionObserver(
      (entries) => {
        if (typeof window !== "undefined" && window.innerWidth >= 768 && entries[0]) {
          setVisible(!entries[0].isIntersecting);
        }
      },
      { threshold: 0, rootMargin: "0px" }
    );
    if (el) {
      obs.observe(el);
      if (typeof window !== "undefined" && window.innerWidth >= 768) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0) setVisible(true);
      }
    }

    const onResize = () => {
      checkMobile();
      if (window.innerWidth >= 768 && el) {
        const rect = el.getBoundingClientRect();
        setVisible(rect.bottom < 0);
      }
    };
    window.addEventListener("resize", onResize);
    return () => {
      if (el) obs.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [mainBlockId]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-surface shadow-sticky-bar safe-area-pb"
      role="region"
      aria-label="Adaugă în coș"
    >
      <div className="mx-auto flex max-w-content items-center gap-3 px-4 py-3 md:gap-4 md:py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-text-main">{name}</p>
          <div className="mt-0.5 flex flex-wrap items-center gap-2">
            <StockBadge status={stockStatus} />
            <DeliveryBadge eta={deliveryETA} />
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="text-base font-semibold text-text-main">{price.toFixed(2)} Lei</span>
          <label className="sr-only" htmlFor="sticky-qty">
            Cantitate
          </label>
          <input
            id="sticky-qty"
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Math.max(1, parseInt(String(e.target.value), 10) || 1))}
            className="h-11 w-14 rounded-input border border-border bg-soft-bg text-center text-sm text-text-main focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <Button variant="primary" className="min-h-[44px] min-w-[120px] shrink-0 md:min-w-[140px]">
          Adaugă în coș
        </Button>
        <Link
          href="/b2b"
          className="hidden shrink-0 text-xs font-medium text-muted hover:text-primary md:inline"
        >
          B2B
        </Link>
      </div>
    </div>
  );
}
