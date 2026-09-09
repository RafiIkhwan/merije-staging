"use client";

import { Container } from "../layout/Container";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section className="pb-20 md:pb-32">
      <Container className="flex flex-col gap-6">
        {/* Horizontal Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full bg-[#D4F636] rounded-[2rem] p-6 md:p-8 flex items-center overflow-hidden"
        >
          <div className="flex flex-wrap items-center gap-4 md:gap-10 font-bold text-foreground text-sm md:text-base mx-auto">
            <span className="text-foreground/60 font-medium">Fokus Kami:</span>
            <span>Desain Eksklusif</span>
            <span className="text-foreground/30 hidden sm:inline">•</span>
            <span>Pengalaman Personal</span>
            <span className="text-foreground/30 hidden sm:inline">•</span>
            <span>Tanpa Template Kaku</span>
            <span className="text-foreground/30 hidden md:inline">•</span>
            <span className="hidden md:inline">Akses Terintegrasi</span>
          </div>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="bg-[#FFD628] rounded-[2rem] p-6 md:p-8 flex items-start gap-5"
          >
            <div className="w-14 h-14 shrink-0 rounded-full bg-[#FDFBF7] flex items-center justify-center overflow-hidden">
              <span className="font-serif italic text-xl text-foreground/40">M</span>
            </div>
            <div className="flex flex-col gap-1.5 pt-0.5">
              <h3 className="font-bold text-[15px] md:text-[17px] text-foreground leading-tight">Studio Merijé</h3>
              <p className="text-foreground/80 text-[13px] md:text-sm leading-relaxed">
                Merancang undangan digital dengan pendekatan artistik untuk setiap pasangan.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-[#FFD628] rounded-[2rem] p-6 md:p-8 flex items-start gap-5"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#FF9EBA] flex items-center justify-center overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
            <div className="flex flex-col gap-1.5 pt-0.5">
              <h3 className="font-bold text-[15px] md:text-[17px] text-foreground leading-tight">Desain & Tata Letak</h3>
              <p className="text-foreground/80 text-[13px] md:text-sm leading-relaxed">
                Bukan sekadar template, tapi kanvas digital yang diracik khusus untuk ceritamu.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="bg-[#FFD628] rounded-[2rem] p-6 md:p-8 flex items-start gap-5"
          >
            <div className="w-14 h-14 shrink-0 rounded-full bg-[#FFB057] flex items-center justify-center overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
            </div>
            <div className="flex flex-col gap-1.5 pt-0.5">
              <h3 className="font-bold text-[15px] md:text-[17px] text-foreground leading-tight">Fitur Terintegrasi</h3>
              <p className="text-foreground/80 text-[13px] md:text-sm leading-relaxed">
                Buku tamu otomatis, konfirmasi RSVP, hingga petunjuk arah dalam satu tautan.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
