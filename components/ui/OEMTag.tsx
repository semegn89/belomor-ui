export function OEMTag({ code }: { code: string }) {
  return (
    <span className="inline-flex items-center rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-2 py-1 text-xs font-mono text-[#334155]">
      {code}
    </span>
  );
}
