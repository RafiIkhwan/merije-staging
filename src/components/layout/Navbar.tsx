import Link from "next/link";
import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="w-full py-4 md:py-5">
      <Container className="flex items-center justify-between lg:justify-center relative">
        {/* Mobile Logo */}
        <Link href="/" className="lg:hidden font-sans font-bold text-xl tracking-tight text-foreground">
          Merijé
        </Link>
        
        {/* Pill Navigation */}
        <nav className="hidden lg:flex items-center gap-2.5">
          <Link href="#koleksi" className="px-4 py-1.5 rounded-full bg-[#FFF0CB] text-[13px] font-medium text-foreground hover:bg-[#F2E0B6] transition-colors">
            Koleksi
          </Link>
          <Link href="#fitur" className="px-4 py-1.5 rounded-full bg-[#FFF0CB] text-[13px] font-medium text-foreground hover:bg-[#F2E0B6] transition-colors">
            Fitur
          </Link>
          <Link href="#harga" className="px-4 py-1.5 rounded-full bg-[#FFF0CB] text-[13px] font-medium text-foreground hover:bg-[#F2E0B6] transition-colors">
            Harga
          </Link>
          <Link href="#faq" className="px-4 py-1.5 rounded-full bg-[#FFF0CB] text-[13px] font-medium text-foreground hover:bg-[#F2E0B6] transition-colors">
            FAQ
          </Link>
          <Link href="/buat" className="px-4 py-1.5 rounded-full bg-[#FFF0CB] text-[13px] font-medium text-foreground hover:bg-[#F2E0B6] transition-colors">
            Hubungi Kami
          </Link>
        </nav>
        
        <button className="lg:hidden p-2 text-foreground" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </Container>
    </header>
  );
}
