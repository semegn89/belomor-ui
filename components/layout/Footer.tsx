import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#CBD5E1] bg-white">
      <div className="mx-auto max-w-content px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-[#0F172A]">Catalog</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/catalog" className="text-sm text-[#64748B] hover:text-primary">Toate categoriile</Link></li>
              <li><Link href="/brands" className="text-sm text-[#64748B] hover:text-primary">Branduri</Link></li>
              <li><Link href="/vehicles" className="text-sm text-[#64748B] hover:text-primary">Pe vehicul</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#0F172A]">Companie</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/about" className="text-sm text-[#64748B] hover:text-primary">Despre noi</Link></li>
              <li><Link href="/delivery" className="text-sm text-[#64748B] hover:text-primary">Livrare</Link></li>
              <li><Link href="/returns" className="text-sm text-[#64748B] hover:text-primary">Retur</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#0F172A]">Legal</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/privacy" className="text-sm text-[#64748B] hover:text-primary">Confidențialitate</Link></li>
              <li><Link href="/terms" className="text-sm text-[#64748B] hover:text-primary">Termeni</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#0F172A]">Contact</h3>
            <p className="mt-3 text-sm text-[#64748B]">+40 123 456 789</p>
            <p className="text-sm text-[#64748B]">contact@belomor.ro</p>
          </div>
        </div>
        <p className="mt-8 border-t border-[#CBD5E1] pt-8 text-center text-sm text-[#64748B]">
          © {new Date().getFullYear()} Belomor Group. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
