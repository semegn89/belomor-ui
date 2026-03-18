"use client";

import { useState, useEffect } from "react";
import { CatalogFilters } from "./CatalogFilters";

export function CatalogFilterDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-input border border-border bg-surface px-4 text-sm font-medium text-text-secondary shadow-card hover:bg-soft-bg lg:hidden"
        aria-label="Deschide filtre"
      >
        Filtre
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-text-main/50 lg:hidden"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-card-lg border-t border-border bg-surface shadow-elevated-lg safe-area-pb lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Filtre catalog"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-border bg-surface px-4 py-3">
              <h2 className="text-base font-semibold text-text-main">Filtre</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="min-h-[44px] min-w-[44px] rounded-input text-muted hover:bg-soft-bg hover:text-text-main"
                aria-label="Închide"
              >
                ✕
              </button>
            </div>
            <div className="px-4 py-4">
              <CatalogFilters inDrawer onApply={() => setOpen(false)} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
