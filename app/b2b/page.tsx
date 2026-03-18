import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function B2BPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero */}
      <section className="border-b border-[#CBD5E1] bg-white py-12">
        <div className="mx-auto max-w-content px-4 text-center">
          <h1 className="text-2xl font-bold text-[#0F172A]">Prețuri speciale pentru parteneri</h1>
          <p className="mt-2 text-[#334155]">
            Cont B2B cu prețuri negociate și comenzi repetitive.
          </p>
          <Button href="/b2b/register" variant="primary" className="mt-6">
            Înregistrare partener
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-content px-4 py-12">
        <h2 className="text-xl font-semibold text-[#0F172A]">Beneficii</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Prețuri dedicate", desc: "Negociate în funcție de volum" },
            { title: "Manager personal", desc: "Un contact direct pentru comenzi" },
            { title: "Comenzi rapide", desc: "Recomandare și repetare ușoară" },
            { title: "Facturare", desc: "Factură și plată la termen" },
            { title: "Livrări programate", desc: "Posibilitate livrări recurente" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-[#CBD5E1] bg-white p-6">
              <h3 className="font-semibold text-[#0F172A]">{item.title}</h3>
              <p className="mt-1 text-sm text-[#64748B]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-[#CBD5E1] bg-white py-12">
        <div className="mx-auto max-w-content px-4">
          <h2 className="text-xl font-semibold text-[#0F172A]">Cum funcționează</h2>
          <p className="mt-2 text-[#334155]">
            După aprobare, primiți acces la prețuri de partener și la istoricul comenzilor. Fără listă de prețuri publică.
          </p>
          <ol className="mt-6 list-decimal space-y-4 pl-6 text-[#334155]">
            <li>Completați formularul de înregistrare</li>
            <li>Verificăm datele companiei</li>
            <li>Cont activat cu prețuri partener</li>
            <li>Comandați din cont sau prin manager</li>
          </ol>
        </div>
      </section>

      {/* CTA again */}
      <section className="border-t border-[#CBD5E1] bg-[#F8FAFC] py-12">
        <div className="mx-auto max-w-content px-4 text-center">
          <Button href="/b2b/register" variant="primary">
            Înregistrare partener
          </Button>
        </div>
      </section>
    </div>
  );
}
