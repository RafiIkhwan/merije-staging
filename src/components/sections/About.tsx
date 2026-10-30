"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/links";

export function About() {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <Container className="flex flex-col gap-6">
        
        {/* Top Block: Bento Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Portrait */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 h-[400px] lg:h-auto rounded-[2rem] overflow-hidden relative"
          >
            <Image 
              src="/founder.jpg" 
              alt="Merijé Studio" 
              fill 
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </motion.div>

          {/* Right Column: Content Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
             
             {/* Top Wide Card */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="sm:col-span-2 bg-[#FFD628] p-8 md:p-12 lg:p-16 rounded-[2rem] relative overflow-hidden"
             >
               <h2 className="text-4xl md:text-[56px] font-medium tracking-tight mb-3 leading-[1.1]">
                 Halo, dari Merijé.
               </h2>
               <p className="text-xl md:text-2xl font-serif italic mb-8 text-foreground/80">
                 Kawan perjalanan bahagiamu.
               </p>
               <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl">
                 Berawal dari pengalaman sulit mencari undangan digital yang simpel dan tidak norak, Merijé lahir. Kami percaya undangan adalah representasi visual pertama dari hari pernikahanmu—sebuah cerita yang pantas disampaikan dengan cantik, bersih, dan tanpa embel-embel iklan.
               </p>
               
               {/* Decorative subtle graphic */}
               <div className="absolute -bottom-16 -right-16 text-[#FFC400] opacity-50">
                  <svg width="300" height="300" viewBox="0 0 200 200" fill="currentColor">
                    <path d="M100 0 C155 0 200 45 200 100 C200 155 155 200 100 200 C45 200 0 155 0 100 C0 45 45 0 100 0 Z" />
                  </svg>
               </div>
             </motion.div>

             {/* Bottom Left Card */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-[#D4F636] p-8 md:p-10 lg:p-12 rounded-[2rem] flex flex-col justify-between"
             >
               <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-6 leading-snug">
                 Estetika &<br/>Empati.
               </h3>
               <p className="text-foreground/80 text-[15px] md:text-base leading-[1.6]">
                 Kami tidak hanya memasukkan teks ke dalam template. Kami merancang tata letak yang nyaman dibaca dan memastikan setiap tamu—termasuk orang tua—bisa mengakses informasi dengan mudah.
               </p>
             </motion.div>

             {/* Bottom Right Card */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="bg-[#FF9EBA] p-8 md:p-10 lg:p-12 rounded-[2rem] flex flex-col justify-between"
             >
               <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-6 leading-snug">
                 Kualitas Butik.<br/>Harga Jujur.
               </h3>
               <p className="text-foreground/80 text-[15px] md:text-base leading-[1.6]">
                 Kualitas desain sekelas agensi premium tanpa biaya tersembunyi. Tidak ada &ldquo;upgrade&rdquo; paksaan atau biaya tambahan untuk sekadar menghilangkan iklan. Semuanya sudah bersih dari awal.
               </p>
             </motion.div>

          </div>
        </div>

        {/* Bottom Block: 50/50 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Specialization Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5EEDC] p-10 lg:p-16 rounded-[2rem] flex flex-col items-center text-center overflow-hidden relative min-h-[500px]"
          >
            <h3 className="text-[36px] md:text-[48px] font-medium tracking-tight mb-6 leading-[1.1] max-w-sm relative z-10">
              Spesialis Gaya Minimalis
            </h3>
            <p className="text-base md:text-[17px] text-foreground/80 leading-[1.6] max-w-[340px] relative z-10">
              Gaya desain kami difokuskan pada tipografi yang elegan dan pemanfaatan ruang kosong (<em>white space</em>). Kami menghindari dekorasi berlebihan agar foto kalian yang menjadi bintangnya.
            </p>

            {/* Abstract Graphic (Stacking semicircles) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
               <div className="w-32 h-16 bg-[#FF9EBA] rounded-t-full -mb-1 relative z-30"></div>
               <div className="w-48 h-24 bg-[#FFB057] rounded-t-full -mb-1 relative z-20"></div>
               <div className="w-64 h-32 bg-[#A881F3] rounded-t-full relative z-10"></div>
            </div>
          </motion.div>

          {/* Right CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#F5EEDC] rounded-[2rem] flex flex-col overflow-hidden relative"
          >
            {/* Top Half */}
            <div className="p-10 lg:p-16 pb-8 relative">
              <h3 className="text-4xl md:text-[40px] font-medium tracking-tight mb-4 leading-[1.1] max-w-[280px]">
                Diskusikan Kebutuhanmu
              </h3>
              <p className="text-base md:text-[17px] text-foreground/80 leading-[1.6] max-w-[300px]">
                Bingung memilih tema atau punya permintaan khusus? Mari mengobrol santai dengan kami.
              </p>

              {/* Circular Sticker Badge */}
              <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-[#D4F636] border border-dashed border-foreground/20 flex items-center justify-center -rotate-12 hidden sm:flex">
                 <span className="text-center font-bold text-[10px] uppercase tracking-widest leading-tight p-2">Konsultasi<br/>Gratis</span>
              </div>
            </div>

            {/* Bottom Half */}
            <div className="bg-[#FFD628] p-10 lg:p-16 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-bold text-[15px] mb-4">Dalam obrolan ini, kita bisa:</p>
                <ul className="space-y-3 mb-10 text-[15px] text-foreground/90">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    Membahas kecocokan tema dengan palet warna pernikahanmu
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    Menentukan fitur RSVP yang paling pas
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    Menjawab semua pertanyaan teknis undangan digital
                  </li>
                </ul>
              </div>
              
              <Link
                href={getWhatsAppUrl("Halo Merijé, saya ingin diskusi soal undangan digital.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full text-[15px] font-bold hover:bg-foreground/90 transition-transform hover:scale-105"
              >
                Hubungi Kami via WA
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </motion.div>

        </div>

      </Container>
    </section>
  );
}
