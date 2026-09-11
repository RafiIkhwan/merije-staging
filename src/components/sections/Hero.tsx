"use client";

import { Container } from "../layout/Container";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <section ref={containerRef} className="pt-24 pb-20 md:pt-28 md:pb-32 overflow-hidden">
      <Container className="flex flex-col items-center">
        {/* Main Title */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="w-full text-center mb-10 md:mb-16"
        >
          <motion.h1 
            variants={textVariant}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-sans font-semibold tracking-tight text-foreground leading-[0.9]"
          >
            Merijé Studio
          </motion.h1>
        </motion.div>

        {/* Unified Grid Block */}
        <div className="w-full flex flex-col gap-6">
          {/* Two Column Layout */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Colorful Card */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={cardVariant}
              className="relative bg-[#F466E3] rounded-[2rem] p-8 md:p-12 overflow-hidden flex flex-col items-start min-h-[360px] md:min-h-[400px]"
            >
              <div className="relative z-10 w-full mb-auto">
                <h2 className="text-[28px] md:text-[32px] lg:text-[38px] text-foreground font-medium leading-[1.15] tracking-tight mb-8 whitespace-nowrap md:whitespace-normal">
                  Bukan sekadar tautan,<br />
                  tapi undangan digital<br />
                  yang terasa personal.
                </h2>
                <Link 
                  href="/buat"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-transform hover:scale-105"
                >
                  Buat undangan sekarang
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              
              {/* Decorative Flower Graphic */}
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-10 -right-10 text-[#FF9EBA]"
              >
                <motion.div style={{ rotate }}>
                  <svg className="w-[180px] h-[180px] md:w-[220px] md:h-[220px]" viewBox="-100 -100 200 200" fill="currentColor">
                    {/* Central Body */}
                    <circle cx="0" cy="0" r="70" />
                    {/* 12 Petals around the center */}
                    <circle cx="0" cy="-65" r="25" />
                    <circle cx="32.5" cy="-56.29" r="25" />
                    <circle cx="56.29" cy="-32.5" r="25" />
                    <circle cx="65" cy="0" r="25" />
                    <circle cx="56.29" cy="32.5" r="25" />
                    <circle cx="32.5" cy="56.29" r="25" />
                    <circle cx="0" cy="65" r="25" />
                    <circle cx="-32.5" cy="56.29" r="25" />
                    <circle cx="-56.29" cy="32.5" r="25" />
                    <circle cx="-65" cy="0" r="25" />
                    <circle cx="-56.29" cy="-32.5" r="25" />
                    <circle cx="-32.5" cy="-56.29" r="25" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image Card */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={cardVariant}
              className="relative bg-[#EAE5D9] rounded-[2rem] overflow-hidden min-h-[360px] md:min-h-[400px]"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="font-serif italic text-foreground/40 text-xl">Visual Fotografi Studio</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Horizontal Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full bg-[#D4F636] rounded-[2rem] p-6 md:p-8 flex items-center overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 font-bold text-foreground text-sm md:text-base mx-auto">
              <span>Tanpa Iklan</span>
              <span className="text-foreground/30 hidden sm:inline">•</span>
              <span>Desain Bersih</span>
              <span className="text-foreground/30 hidden sm:inline">•</span>
              <span>RSVP Mudah</span>
              <span className="text-foreground/30 hidden md:inline">•</span>
              <span className="hidden md:inline">Mobile Friendly</span>
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
                <h3 className="font-bold text-[15px] md:text-[17px] text-foreground leading-tight">Lebih Dekat</h3>
                <p className="text-foreground/80 text-[13px] md:text-sm leading-relaxed">
                  Dibuat agar terasa seperti undangan fisik yang dikirim langsung dari tangan kalian sendiri.
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
                <h3 className="font-bold text-[15px] md:text-[17px] text-foreground leading-tight">Bersih & Nyaman</h3>
                <p className="text-foreground/80 text-[13px] md:text-sm leading-relaxed">
                  Desain tertata rapi tanpa elemen berlebihan. Tamu bisa langsung fokus membaca kabar baik kalian.
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
                <h3 className="font-bold text-[15px] md:text-[17px] text-foreground leading-tight">Semua Terpusat</h3>
                <p className="text-foreground/80 text-[13px] md:text-sm leading-relaxed">
                  Konfirmasi kehadiran, ucapan tamu, dan lokasi acara, semuanya terangkum di satu tempat.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
