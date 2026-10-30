"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";

export function Values() {
  return (
    <section className="pb-20 md:pb-32 pt-0 overflow-hidden bg-background">
      <Container className="flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] text-foreground font-medium tracking-tight leading-[1.1]">
            Janji Kami
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mx-auto">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col rounded-[2rem] overflow-hidden"
          >
            <div className="bg-[#F5EEDC] p-6 md:p-8 flex-1">
              <p className="text-foreground/80 text-[14px] md:text-[15px] leading-[1.6]">
                Hari bahagiamu adalah tentang kalian, bukan tentang kami. Karena itu, kami menjamin <strong className="font-bold text-foreground">tidak akan ada logo vendor raksasa atau iklan tersembunyi</strong> yang merusak estetika undangan kalian. Semuanya bersih, rapi, dan elegan dari awal hingga akhir.
              </p>
            </div>
            <div className="bg-[#FFD628] p-5 md:p-6 flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-foreground text-[15px] md:text-base tracking-tight leading-tight mb-0.5">100% Bersih & Elegan</h4>
                <p className="text-[12px] md:text-[13px] text-foreground/80 font-medium">Tanpa Iklan Vendor</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col rounded-[2rem] overflow-hidden"
          >
            <div className="bg-[#F5EEDC] p-6 md:p-8 flex-1">
              <p className="text-foreground/80 text-[14px] md:text-[15px] leading-[1.6]">
                Kami paham tidak semua tamu terbiasa dengan teknologi. Kami merancang antarmuka yang sangat intuitif, sehingga <strong className="font-bold text-foreground">kakek, nenek, dan kerabat yang lebih tua</strong> pun dapat membaca informasi acara dan mengisi RSVP tanpa kebingungan sama sekali.
              </p>
            </div>
            <div className="bg-[#FF9EBA] p-5 md:p-6 flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-foreground text-[15px] md:text-base tracking-tight leading-tight mb-0.5">Sangat Mudah Digunakan</h4>
                <p className="text-[12px] md:text-[13px] text-foreground/80 font-medium">Ramah Semua Usia</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col rounded-[2rem] overflow-hidden"
          >
            <div className="bg-[#F5EEDC] p-6 md:p-8 flex-1">
              <p className="text-foreground/80 text-[14px] md:text-[15px] leading-[1.6]">
                Tidak ada yang lebih menjengkelkan dari undangan yang lambat memuat halaman. Kami sangat menjaga performa dengan merapikan ukuran setiap foto dan kode agar <strong className="font-bold text-foreground">undanganmu terbuka instan di perangkat apa pun</strong>, bahkan dengan sinyal lemah.
              </p>
            </div>
            <div className="bg-[#A881F3] p-5 md:p-6 flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-foreground text-[15px] md:text-base tracking-tight leading-tight mb-0.5">Super Cepat</h4>
                <p className="text-[12px] md:text-[13px] text-foreground/80 font-medium">Optimasi Performa</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col rounded-[2rem] overflow-hidden"
          >
            <div className="bg-[#F5EEDC] p-6 md:p-8 flex-1">
              <p className="text-foreground/80 text-[14px] md:text-[15px] leading-[1.6]">
                Tidak ada biaya jebakan. Semua fitur esensial yang kamu butuhkan sudah termasuk di awal. <strong className="font-bold text-foreground">Kami tidak akan pernah memintamu membayar ekstra</strong> hanya untuk menambah jumlah tamu atau sekadar menghilangkan <em>watermark</em>.
              </p>
            </div>
            <div className="bg-[#D4F636] p-5 md:p-6 flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-foreground text-[15px] md:text-base tracking-tight leading-tight mb-0.5">Jujur & Transparan</h4>
                <p className="text-[12px] md:text-[13px] text-foreground/80 font-medium">Satu Harga Pasti</p>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
