import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CartPage() {
  const items: { id: string; name: string; sku: string; price: number; qty: number; stock: string; eta: string }[] = [];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-content px-4 py-8">
        <h1 className="text-2xl font-bold text-[#0F172A]">Coș</h1>

        {items.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-[#CBD5E1] bg-white p-12 text-center">
            <p className="text-[#64748B]">Coșul este gol.</p>
            <Button href="/catalog" variant="primary" className="mt-4">
              Mergi la catalog
            </Button>
          </div>
        ) : (
          <div className="mt-8 flex flex-col gap-8 lg:flex-row">
            <div className="flex-1 rounded-2xl border border-[#CBD5E1] bg-white">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#CBD5E1] bg-[#F8FAFC]">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-[#64748B]">Produs</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-[#64748B]">Preț</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-[#64748B]">Cantitate</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-[#64748B]"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#CBD5E1]">
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-3">
                        <p className="font-medium text-[#0F172A]">{item.name}</p>
                        <p className="text-xs font-mono text-[#64748B]">{item.sku}</p>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#0F172A]">{item.price.toFixed(2)} Lei</td>
                      <td className="px-4 py-3">{item.qty}</td>
                      <td className="px-4 py-3 text-right">
                        <button type="button" className="text-sm text-[#DC2626] hover:underline">Elimină</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="border-t border-[#CBD5E1] p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Cod promoțional"
                    className="flex-1 rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <Button variant="secondary">Aplică</Button>
                </div>
              </div>
            </div>
            <aside className="w-full rounded-2xl border border-[#CBD5E1] bg-white p-6 lg:sticky lg:top-24 lg:h-fit lg:w-80">
              <h2 className="text-lg font-semibold text-[#0F172A]">Comanda ta</h2>
              <div className="mt-4 space-y-2 border-t border-[#CBD5E1] pt-4 text-sm">
                <p className="flex justify-between"><span className="text-[#64748B]">Subtotal</span><span>0,00 Lei</span></p>
                <p className="flex justify-between"><span className="text-[#64748B]">Livrare</span><span>—</span></p>
              </div>
              <p className="mt-4 flex justify-between border-t border-[#CBD5E1] pt-4 text-lg font-semibold">
                <span>Total</span><span>0,00 Lei</span>
              </p>
              <Button href="/checkout" variant="primary" className="mt-6 w-full">
                Finalizează comanda
              </Button>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
