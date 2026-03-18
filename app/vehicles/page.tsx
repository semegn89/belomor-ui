import Link from "next/link";

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-content px-4 py-12">
        <h1 className="text-2xl font-bold text-[#0F172A]">Selectare vehicul</h1>
        <p className="mt-2 text-[#334155]">
          Alegeți marca, modelul și anul pentru a vedea piesele compatibile.
        </p>
        <div className="mt-8 rounded-2xl border border-[#CBD5E1] bg-white p-8">
          <p className="text-[#64748B]">
            Modul de selectare vehicul va fi disponibil în curând. Puteți căuta direct după{" "}
            <Link href="/catalog" className="text-primary hover:underline">OEM sau SKU în catalog</Link> sau
            trimiteți o{" "}
            <Link href="/vin-request" className="text-primary hover:underline">cerere pe baza VIN</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
