import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-4 py-12 md:py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Catalog</h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/catalog" className="text-sm text-text-secondary hover:text-primary">Toate categoriile</Link></li>
              <li><Link href="/brands" className="text-sm text-text-secondary hover:text-primary">Branduri</Link></li>
              <li><Link href="/vehicles" className="text-sm text-text-secondary hover:text-primary">Pe vehicul</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Companie</h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/about" className="text-sm text-text-secondary hover:text-primary">Despre noi</Link></li>
              <li><Link href="/delivery" className="text-sm text-text-secondary hover:text-primary">Livrare</Link></li>
              <li><Link href="/returns" className="text-sm text-text-secondary hover:text-primary">Retur</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/privacy" className="text-sm text-text-secondary hover:text-primary">Confidențialitate</Link></li>
              <li><Link href="/terms" className="text-sm text-text-secondary hover:text-primary">Termeni</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Contact</h3>
            <p className="mt-4 text-sm text-text-secondary">+40 123 456 789</p>
            <p className="text-sm text-text-secondary">contact@belomor.ro</p>
          </div>
        </div>
        <p className="mt-12 border-t border-border pt-8 text-center text-sm text-muted">
          © {new Date().getFullYear()} Belomor Group. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
