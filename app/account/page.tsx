import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AccountPage() {
  const orders: { id: string; date: string; status: string; total: number }[] = [];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-content px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="w-full shrink-0 lg:w-56">
            <nav className="space-y-1 rounded-2xl border border-[#CBD5E1] bg-white p-2">
              <Link href="/account" className="block rounded-xl bg-[#F8FAFC] py-2 px-3 text-sm font-medium text-[#0F172A]">
                Dashboard
              </Link>
              <Link href="/account/orders" className="block rounded-xl py-2 px-3 text-sm text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0F172A]">
                Comenzi
              </Link>
              <Link href="/account/addresses" className="block rounded-xl py-2 px-3 text-sm text-[#334155] hover:bg-[#F8FAFC]">
                Adrese
              </Link>
              <Link href="/account/profile" className="block rounded-xl py-2 px-3 text-sm text-[#334155] hover:bg-[#F8FAFC]">
                Date cont
              </Link>
            </nav>
          </aside>
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-[#0F172A]">Contul meu</h1>
            <p className="mt-1 text-[#64748B]">Bine ați venit. Gestionați comenzile și datele.</p>

            <section className="mt-8 rounded-2xl border border-[#CBD5E1] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#0F172A]">Comenzi recente</h2>
              {orders.length === 0 ? (
                <p className="mt-4 text-sm text-[#64748B]">Nicio comandă încă.</p>
              ) : (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#CBD5E1] bg-[#F8FAFC]">
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-[#64748B]">Comandă</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-[#64748B]">Data</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-[#64748B]">Status</th>
                        <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-[#64748B]">Total</th>
                        <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-[#64748B]">Acțiuni</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#CBD5E1]">
                      {orders.map((o) => (
                        <tr key={o.id}>
                          <td className="px-4 py-3 text-sm font-mono text-[#0F172A]">{o.id}</td>
                          <td className="px-4 py-3 text-sm text-[#334155]">{o.date}</td>
                          <td className="px-4 py-3 text-sm text-[#334155]">{o.status}</td>
                          <td className="px-4 py-3 text-sm text-right text-[#0F172A]">{o.total.toFixed(2)} Lei</td>
                          <td className="px-4 py-3 text-right">
                            <Link href={`/account/orders/${o.id}`} className="text-sm text-primary hover:underline">Detalii</Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <Button href="/account/orders" variant="secondary" className="mt-4">
                Toate comenzile
              </Button>
            </section>

            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/account/addresses" variant="secondary">Adrese</Button>
              <Button href="/account/profile" variant="ghost">Date cont</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
