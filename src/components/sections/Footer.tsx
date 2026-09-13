"use client";

import { Container } from "../layout/Container";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pb-10 pt-0 md:pt-4 bg-background">
      <Container>
        <div className="bg-[#FFB057] rounded-[2rem] p-8 md:p-10 lg:p-12 flex flex-col gap-10 md:gap-14 relative overflow-hidden">
          
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-md relative z-10">
              <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight text-foreground mb-3 leading-tight">
                Get in touch
              </h2>
              <p className="text-[15px] md:text-[17px] text-foreground/90 leading-[1.6] font-medium">
                Siap untuk membuat undangan digital yang bebas stres dan elegan? Cukup hubungi kami untuk memulai diskusi santai.
              </p>
            </div>

            {/* Rotating Badge */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0 hidden sm:block">
              {/* Spinning Text SVG */}
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full text-foreground/80 overflow-visible">
                  <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                  <text className="text-[10.5px] font-bold uppercase tracking-[0.2em]">
                    <textPath href="#circlePath" startOffset="0%">
                      MERIJÉ STUDIO • UNDANGAN DIGITAL • MERIJÉ STUDIO • UNDANGAN DIGITAL •
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Inner Avatar */}
              <div className="absolute inset-0 m-auto w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-foreground/10">
                 <Image src="/founder.jpg" alt="Merijé" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Bottom Section: Links */}
          <div className="flex flex-col gap-2 relative z-10 w-full">
            
            {/* Email Link */}
            <a href="mailto:merijeofficial@gmail.com" className="w-full flex flex-wrap items-center justify-between gap-x-4 gap-y-2 bg-[#FFD628] px-5 py-3 md:px-6 md:py-3.5 rounded-[1rem] hover:bg-[#f0c822] transition-colors group">
              <span className="font-bold text-[14px] md:text-[15px] text-foreground">Email</span>
              <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
                <span className="bg-foreground/10 text-foreground/80 text-[10px] md:text-[11px] font-bold px-2 py-0.5 rounded-full group-hover:bg-foreground/20 transition-colors">Copy</span>
                <span className="min-w-0 break-all text-right font-bold text-[12px] md:text-[14px] text-foreground">merijeofficial@gmail.com</span>
              </div>
            </a>

            {/* WhatsApp Link */}
            <a href="#" className="w-full flex items-center justify-between bg-[#FFD628] px-5 py-3 md:px-6 md:py-3.5 rounded-[1rem] hover:bg-[#f0c822] transition-colors">
              <span className="font-bold text-[14px] md:text-[15px] text-foreground">WhatsApp Kami</span>
              <span className="text-foreground">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </span>
            </a>

            {/* Instagram Link */}
            <a href="https://www.instagram.com/merije.official/?utm_source=ig_web_button_share_sheet" className="w-full flex items-center justify-between bg-[#FFD628] px-5 py-3 md:px-6 md:py-3.5 rounded-[1rem] hover:bg-[#f0c822] transition-colors">
              <span className="font-bold text-[14px] md:text-[15px] text-foreground">Instagram</span>
              <span className="text-foreground">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </span>
            </a>

            {/* Back to Top */}
            <button onClick={scrollToTop} className="w-full flex items-center justify-between bg-[#FFD628] px-5 py-3 md:px-6 md:py-3.5 rounded-[1rem] hover:bg-[#f0c822] transition-colors">
              <span className="font-bold text-[14px] md:text-[15px] text-foreground">Back to Top</span>
              <span className="text-foreground -rotate-90">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </span>
            </button>

          </div>

        </div>
        
        {/* Simple Copyright */}
        <div className="mt-8 text-center">
           <p className="text-sm font-medium text-foreground/50">© {new Date().getFullYear()} Merijé. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
