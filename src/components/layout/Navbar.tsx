"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "./Container";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Auto-hide navbar on scroll down
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsMobileMenuOpen(false); // Close mobile menu when scrolling down
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 w-full py-2.5 md:py-3.5 z-50 bg-background/80 backdrop-blur-md"
    >
      <Container className="flex items-center justify-between lg:justify-center relative">
        {/* Mobile Logo */}
        <Link href="/" className="lg:hidden font-sans font-bold text-xl tracking-tight text-foreground">
          Merijé
        </Link>
        
        {/* Pill Navigation (Desktop) */}
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
        
        {/* Hamburger Button (Mobile) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground" 
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 mt-2 bg-[#F5EEDC] rounded-2xl p-4 flex flex-col gap-2 shadow-2xl border border-foreground/5 lg:hidden origin-top"
            >
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#koleksi" className="px-4 py-3 font-bold text-foreground hover:bg-[#eadebf] rounded-xl transition-colors">Koleksi</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#fitur" className="px-4 py-3 font-bold text-foreground hover:bg-[#eadebf] rounded-xl transition-colors">Fitur</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#harga" className="px-4 py-3 font-bold text-foreground hover:bg-[#eadebf] rounded-xl transition-colors">Harga</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#faq" className="px-4 py-3 font-bold text-foreground hover:bg-[#eadebf] rounded-xl transition-colors">FAQ</Link>
              <div className="h-px bg-foreground/10 my-1 w-full"></div>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/buat" className="px-4 py-3.5 font-bold text-foreground bg-[#FFD628] rounded-xl text-center mt-1 flex justify-center items-center gap-2">
                Hubungi Kami
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
