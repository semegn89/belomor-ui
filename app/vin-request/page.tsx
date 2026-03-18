import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function VinRequestPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-2xl font-bold text-[#0F172A]">Cerere pe baza VIN</h1>
        <p className="mt-2 text-[#334155]">
          Nu știți codul piesei? Trimiteți VIN-ul și vă propunem produsele compatibile. Răspundem în maxim 24 de ore.
        </p>

        <form className="mt-8 space-y-4 rounded-2xl border border-[#CBD5E1] bg-white p-6">
          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F172A]">VIN *</label>
            <input
              type="text"
              name="vin"
              maxLength={17}
              placeholder="WBADT43452G123456"
              required
              className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base text-[#0F172A] placeholder-[#64748B] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F172A]">Foto Carte mașină / document (opțional)</label>
            <input
              type="file"
              name="doc"
              accept="image/*,.pdf"
              className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-sm text-[#334155] file:mr-2 file:rounded-lg file:border-0 file:bg-[#F8FAFC] file:px-3 file:py-1 file:text-sm"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F172A]">Nume *</label>
            <input
              type="text"
              name="name"
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
          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F172A]">Tip client *</label>
            <select
              name="clientType"
              required
              className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base text-[#0F172A] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="retail">Detaliu</option>
              <option value="service">Service</option>
              <option value="shop">Magazin</option>
              <option value="b2b">B2B</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-[#0F172A]">Comentariu</label>
            <textarea
              name="comment"
              rows={3}
              className="w-full rounded-xl border border-[#CBD5E1] bg-white px-3 py-2.5 text-base text-[#0F172A] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full sm:w-auto">
            Trimite cererea
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-[#64748B]">
          Răspundem în 24h. Pentru urgențe: +40 123 456 789
        </p>
      </div>
    </div>
  );
}
