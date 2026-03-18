import Link from "next/link";
import { Button } from "@/components/ui/Button";

const BENEFITS = [
  { title: "Prețuri dedicate", desc: "Negociate în funcție de volum și tip de partener." },
  { title: "Manager personal", desc: "Un contact direct pentru comenzi și oferte." },
  { title: "Comenzi rapide", desc: "Recomandare și repetare ușoară din cont." },
  { title: "Facturare la termen", desc: "Factură și plată la termen pentru companii aprobate." },
  { title: "Livrări programate", desc: "Posibilitate livrări recurente și comenzi automate." },
];

export default function B2BPage() {
  return (
    <div className="min-h-screen bg-soft-bg">
      {/* Hero */}
      <section className="border-b border-border bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-content px-4 text-center">
          <p className="section-tag">Parteneri B2B</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-text-main md:text-3xl lg:text-4xl">
            Prețuri speciale pentru parteneri
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-text-secondary">
            Cont B2B cu prețuri negociate, comenzi repetitive și manager dedicat. Pentru service-uri, magazine și companii.
          </p>
          <Button href="/b2b/register" variant="primary" className="mt-8 inline-flex h-12 px-8 text-base">
            Înregistrare partener
          </Button>
        </div>
      </section>

      {/* Benefits — cards */}
      <section className="mx-auto max-w-content px-4 py-12 md:py-16">
        <p className="section-tag">Beneficii</p>
        <h2 className="section-title mt-1">De ce parteneri</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className="rounded-card-lg border border-border bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <h3 className="font-semibold text-text-main">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-content px-4">
          <p className="section-tag">Proces</p>
          <h2 className="section-title mt-1">Cum funcționează</h2>
          <p className="mt-3 max-w-2xl text-sm text-text-secondary">
            După aprobare, primiți acces la prețuri de partener și la istoricul comenzilor. Fără listă de prețuri publică.
          </p>
          <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm text-text-secondary">
            <li>Completați formularul de înregistrare</li>
            <li>Verificăm datele companiei</li>
            <li>Cont activat cu prețuri partener</li>
            <li>Comandați din cont sau prin manager</li>
          </ol>
        </div>
      </section>

      {/* CTA again */}
      <section className="border-t border-border bg-soft-bg py-12 md:py-16">
        <div className="mx-auto max-w-content px-4 text-center">
          <p className="text-sm text-text-secondary">Gata să începeți?</p>
          <Button href="/b2b/register" variant="primary" className="mt-4 inline-flex h-12 px-8 text-base">
            Înregistrare partener
          </Button>
        </div>
      </section>
    </div>
  );
}
