export function OEMTag({ code }: { code: string }) {
  return (
    <span className="inline-flex items-center rounded-input border border-border bg-soft-bg px-2 py-1 text-xs font-mono text-text-secondary">
      {code}
    </span>
  );
}
