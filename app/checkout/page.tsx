import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-content px-4 py-8">
        <h1 className="text-2xl font-bold text-[#0F172A]">Checkout</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <form className="space-y-6 lg:col-span-2">
            <section className="rounded-2xl border border-[#CBD5E1] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#0F172A]">Date contact</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-[#0F172A]">Email *</label>
                  <input type="email" required className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-[#0F172A]">Telefon *</label>
                  <input type="tel" required className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
              </div>
              <p className="mt-2 text-sm text-[#64748B]">Ai cont? <Link href="/account" className="text-primary hover:underline">Autentificare</Link></p>
            </section>

            <section className="rounded-2xl border border-[#CBD5E1] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#0F172A]">Adresă livrare</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-[#0F172A]">Nume *</label>
                  <input type="text" required className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-[#0F172A]">Adresă *</label>
                  <input type="text" required className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#0F172A]">Oraș *</label>
                    <input type="text" required className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#0F172A]">Cod poștal *</label>
                    <input type="text" required className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#CBD5E1] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#0F172A]">Livrare</h2>
              <div className="mt-4 space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="delivery" value="courier" defaultChecked className="rounded border-[#CBD5E1]" />
                  <span className="text-sm">Curier</span>
                </label>
              </div>
            </section>

            <section className="rounded-2xl border border-[#CBD5E1] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#0F172A]">Plată</h2>
              <div className="mt-4 space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" value="card" defaultChecked className="rounded border-[#CBD5E1]" />
                  <span className="text-sm">Card</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" value="cod" className="rounded border-[#CBD5E1]" />
                  <span className="text-sm">Ramburs</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" value="invoice" className="rounded border-[#CBD5E1]" />
                  <span className="text-sm">Factură (B2B)</span>
                </label>
              </div>
            </section>
          </form>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-[#CBD5E1] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#0F172A]">Comanda ta</h2>
              <p className="mt-4 text-sm text-[#64748B]">Coș gol. Adăugați produse din <Link href="/catalog" className="text-primary hover:underline">catalog</Link>.</p>
              <p className="mt-4 flex justify-between border-t border-[#CBD5E1] pt-4 text-lg font-semibold">
                <span>Total</span><span>0,00 Lei</span>
              </p>
              <Button variant="primary" className="mt-6 w-full">
                Plasează comanda
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
