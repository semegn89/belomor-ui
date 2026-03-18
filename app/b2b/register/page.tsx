import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function B2BRegisterPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-lg px-4 py-12">
        <h1 className="text-2xl font-bold text-[#0F172A]">Înregistrare partener B2B</h1>
        <p className="mt-2 text-[#334155]">Completați formularul. Vă contactăm pentru verificare.</p>

        <form className="mt-8 space-y-4 rounded-2xl border border-[#CBD5E1] bg-white p-6">
          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F172A]">Denumire firmă *</label>
            <input
              type="text"
              name="company"
              required
              className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base text-[#0F172A] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F172A]">CUI / CIF *</label>
            <input
              type="text"
              name="vat"
              required
              className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base text-[#0F172A] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F172A]">Persoană de contact *</label>
            <input
              type="text"
              name="contactName"
              required
              className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base text-[#0F172A] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F172A]">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base text-[#0F172A] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F172A]">Telefon *</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base text-[#0F172A] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Trimite cererea
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-[#64748B]">
          <Link href="/b2b" className="text-primary hover:underline">Înapoi la B2B</Link>
        </p>
      </div>
    </div>
  );
}
