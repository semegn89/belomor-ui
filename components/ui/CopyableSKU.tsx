"use client";

import { useState } from "react";

export function CopyableSKU({ sku }: { sku: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(sku).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center gap-2">
      <code className="rounded-input border border-border bg-soft-bg px-2.5 py-1.5 text-sm font-mono text-text-main">
        {sku}
      </code>
      <button
        type="button"
        onClick={copy}
        className="rounded-input border border-border bg-surface px-2.5 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:bg-soft-bg hover:text-primary focus:outline-none focus:ring-1 focus:ring-primary"
        title="Copiază SKU"
      >
        {copied ? "Copiat" : "Copiază"}
      </button>
    </div>
  );
}
