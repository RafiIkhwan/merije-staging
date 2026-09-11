"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import Link from "next/link";

export function Showcase() {
  return (
    <section className="pb-20 md:pb-32 overflow-hidden">
      <Container className="flex flex-col gap-6">
        {/* Intro Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full bg-[#F5EEDC] rounded-[2rem] p-8 md:p-16 lg:p-24 overflow-hidden flex items-center min-h-[350px] md:min-h-[400px]"
        >
          <div className="relative z-10 w-full max-w-2xl">
            <h2 className="text-[32px] md:text-5xl lg:text-[56px] text-foreground font-medium tracking-tight mb-4 md:mb-6 leading-[1.1]">
              Desain yang bermakna
            </h2>
            <p className="text-foreground/80 text-[15px] md:text-lg leading-relaxed max-w-xl">
              Undangan yang baik tidak diukur dari seberapa banyak animasi atau dekorasi yang menumpuk. Kami percaya pada kejernihan, kenyamanan membaca, dan keindahan tata letak. Setiap karya dirancang agar cerita kalian tetap menjadi bintang utamanya—elegan, rapi, dan tak lekang oleh waktu.
            </p>
          </div>
          
          {/* Decorative Right Graphic (Abstract Flower) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute -right-20 top-1/2 -translate-y-1/2 text-[#FFD628] hidden sm:block"
          >
            <svg width="400" height="400" viewBox="0 0 400 400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M200 0C255.228 0 300 44.7715 300 100C300 155.228 255.228 200 200 200C144.772 200 100 155.228 100 100C100 44.7715 144.772 0 200 0Z" />
              <path d="M400 200C400 255.228 355.228 300 300 300C244.772 300 200 255.228 200 200C200 144.772 244.772 100 300 100C355.228 100 400 144.772 400 200Z" />
              <path d="M200 400C144.772 400 100 355.228 100 300C100 244.772 144.772 200 200 200C255.228 200 300 244.772 300 300C300 355.228 255.228 400 200 400Z" />
              <path d="M0 200C0 144.772 44.7715 100 100 100C155.228 100 200 144.772 200 200C200 255.228 155.228 300 100 300C44.7715 300 0 255.228 0 200Z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Project Showcase Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative w-full bg-[#A881F3] rounded-[2rem] p-6 md:p-16 lg:p-20 overflow-hidden min-h-[480px] md:min-h-[600px] flex flex-col items-center justify-center text-center mt-2"
        >
          {/* Top navigation/tags mockup */}
          <div className="absolute top-6 left-6 right-6 md:top-8 md:left-8 md:right-8 flex justify-between items-center z-10 text-white">
            <span className="font-bold text-[17px] md:text-xl tracking-tight hidden sm:block">Merijé x <span className="font-serif italic font-normal">Klien</span></span>
            <div className="flex gap-2 text-[10px] md:text-sm font-medium w-full sm:w-auto justify-center sm:justify-end">
              <span className="bg-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm">Nuansa Floral</span>
              <span className="bg-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm">Desain Bersih</span>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center mt-16 md:mt-0 mb-32 md:mb-40">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              className="text-[#D4F636] font-serif italic text-2xl md:text-3xl mb-4"
            >
              Kisah di Bali
            </motion.div>
            <h3 className="text-4xl md:text-5xl lg:text-[64px] text-white font-medium tracking-tight mb-6 leading-[1.1]">
              Rania & Dimas
            </h3>
            <p className="text-white/90 text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
              Desain undangan dengan sentuhan pesisir yang tenang. Terinspirasi dari deburan ombak dan hangatnya kebersamaan.
            </p>
            <Link 
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4F636] text-foreground rounded-full text-sm md:text-base font-bold hover:bg-[#D4F636]/90 transition-transform hover:scale-105"
            >
              Lihat Undangan
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Abstract Phone/Web Mockup Element rising from bottom */}
          <motion.div 
            initial={{ y: 150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] max-w-[600px] h-[250px] md:h-[350px] bg-white rounded-t-[2rem] shadow-2xl p-6 md:p-10 flex flex-col items-center justify-start overflow-hidden border-t-8 border-x-8 border-white/40"
          >
             <div className="w-16 h-1.5 bg-gray-200 rounded-full mb-8"></div>
             <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-[#FF9EBA]/30 to-[#FDF8E1] mb-8 border border-gray-100 flex items-center justify-center">
                <span className="font-serif italic text-3xl text-foreground/20">R & D</span>
             </div>
             <div className="w-1/2 h-5 bg-gray-100 rounded-full mb-4"></div>
             <div className="w-1/3 h-3 bg-gray-100 rounded-full"></div>
          </motion.div>
          
          {/* Sparkle Decorations */}
          <div className="absolute top-1/4 left-1/4 text-white/40 hidden md:block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-white/30 hidden md:block">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14 9L23 11L14 13L12 22L10 13L1 11L10 9L12 0Z"/>
            </svg>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
