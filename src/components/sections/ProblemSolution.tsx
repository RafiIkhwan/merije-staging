"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { useState } from "react";

export function ProblemSolution() {
  const [activeTab, setActiveTab] = useState<"desain" | "fitur">("desain");

  return (
    <section className="py-20 md:py-32 overflow-hidden bg-background">
      <Container className="flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mb-12 md:mb-16">
          <p className="text-foreground/70 text-[17px] md:text-lg mb-3">
            Mempersiapkan pernikahan sudah cukup melelahkan.
          </p>
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] text-foreground font-medium tracking-tight leading-[1.1]">
            Jangan biarkan undangan digital<br className="hidden md:block"/> menambah beban pikiran.
          </h2>
        </div>

        {/* 2x2 Pain Points Grid */}
        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-24 md:mb-32">
          {/* Card 1: Pink */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FF9EBA] p-6 md:p-10 rounded-[2rem] flex items-center"
          >
            <p className="text-foreground font-medium text-[15px] md:text-[17px] leading-relaxed">
              <span className="font-bold">Desain terasa kaku dan pasaran.</span> Sulit menemukan tema yang benar-benar mewakili personalitas kalian berdua.
            </p>
          </motion.div>
          
          {/* Card 2: Orange */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#FFB057] p-6 md:p-10 rounded-[2rem] flex items-center"
          >
            <p className="text-foreground font-medium text-[15px] md:text-[17px] leading-relaxed">
              <span className="font-bold">Penuh iklan terselubung.</span> Logo vendor atau watermark yang besar sangat mengganggu estetika undangan.
            </p>
          </motion.div>
          
          {/* Card 3: Orange */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#FFB057] p-6 md:p-10 rounded-[2rem] flex items-center"
          >
            <p className="text-foreground font-medium text-[15px] md:text-[17px] leading-relaxed">
              <span className="font-bold">Tampilan berantakan di HP.</span> Teks terpotong atau foto lambat dimuat, membuat tamu kesulitan membaca.
            </p>
          </motion.div>

          {/* Card 4: Pink */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#FF9EBA] p-6 md:p-10 rounded-[2rem] flex items-center"
          >
            <p className="text-foreground font-medium text-[15px] md:text-[17px] leading-relaxed">
              <span className="font-bold">Sistem RSVP yang rumit.</span> Tamu kebingungan untuk mengonfirmasi kehadiran atau mencari lokasi acara.
            </p>
          </motion.div>
        </div>

        {/* Transition Text */}
        <div className="text-center max-w-2xl mb-16 md:mb-20">
          <p className="text-foreground/80 text-base md:text-lg">
            Merijé hadir untuk menyelesaikan masalah tersebut.<br/>
            Inilah standar yang kamu dapatkan:
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex w-full max-w-[600px] border-b border-foreground/10 mb-16 mx-auto">
          <button 
            onClick={() => setActiveTab("desain")}
            className={`flex-1 pb-4 text-base md:text-lg font-medium transition-colors relative ${activeTab === "desain" ? "text-foreground" : "text-foreground/40 hover:text-foreground/60"}`}
          >
            Desain & Tampilan
            {activeTab === "desain" && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab("fitur")}
            className={`flex-1 pb-4 text-base md:text-lg font-medium transition-colors relative ${activeTab === "fitur" ? "text-foreground" : "text-foreground/40 hover:text-foreground/60"}`}
          >
            Fitur & Fungsi
            {activeTab === "fitur" && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
            )}
          </button>
        </div>

        {/* Features Grid - Desain */}
        {activeTab === "desain" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 text-center mx-auto"
          >
            <FeatureItem 
              color="bg-[#D4F636]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
              title="100% Bebas Iklan"
              desc="Undangan bersih tanpa embel-embel sponsor atau watermark."
            />
            <FeatureItem 
              color="bg-[#FF9EBA]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>}
              title="Kustomisasi Warna"
              desc="Sesuaikan palet warna dan tipografi dengan tema pernikahan kalian."
            />
            <FeatureItem 
              color="bg-[#FFD628]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>}
              title="Proporsional di HP"
              desc="Layout yang dioptimalkan agar rapi dan nyaman dibaca di layar kecil."
            />
            <FeatureItem 
              color="bg-[#F466E3]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>}
              title="Galeri Ala Majalah"
              desc="Susunan foto pre-wedding yang ditata rapi layaknya halaman majalah."
            />
            <FeatureItem 
              color="bg-[#A881F3]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>}
              title="Revisi Cepat"
              desc="Ada perubahan jadwal atau lokasi? Kami bantu sesuaikan dengan sigap."
            />
            <FeatureItem 
              color="bg-[#FFB057]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>}
              title="Tipografi Elegan"
              desc="Pemilihan font yang cermat untuk memastikan teks mudah dibaca oleh semua usia."
            />
          </motion.div>
        )}

        {/* Features Grid - Fitur */}
        {activeTab === "fitur" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 text-center mx-auto"
          >
            <FeatureItem 
              color="bg-[#A881F3]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
              title="RSVP Terintegrasi"
              desc="Tamu bisa langsung konfirmasi kehadiran dan data terkapitulasi rapi."
            />
            <FeatureItem 
              color="bg-[#D4F636]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}
              title="Buku Tamu Digital"
              desc="Kumpulkan doa dan ucapan hangat dari kerabat di satu tempat."
            />
            <FeatureItem 
              color="bg-[#FFB057]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
              title="Integrasi Peta"
              desc="Petunjuk arah sekali klik yang terhubung langsung ke Google Maps."
            />
            <FeatureItem 
              color="bg-[#FF9EBA]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
              title="Simpan ke Kalender"
              desc="Pengingat otomatis ke kalender tamu agar tidak terlewat hari bahagiamu."
            />
            <FeatureItem 
              color="bg-[#FFD628]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>}
              title="Amplop Digital"
              desc="Opsi pemberian kado tanpa kontak fisik yang aman dan praktis."
            />
            <FeatureItem 
              color="bg-[#F466E3]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5c-2.2 0-4 1.8-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>}
              title="Sapaan Personal"
              desc="Sistem penamaan tamu otomatis untuk disebar dengan mudah via pesan."
            />
          </motion.div>
        )}

      </Container>
    </section>
  );
}

function FeatureItem({ color, icon, title, desc }: { color: string, icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mb-4 text-foreground/80`}>
        {icon}
      </div>
      <h3 className="font-bold text-[15px] md:text-base text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70 text-[13px] md:text-sm leading-[1.6] max-w-[240px]">
        {desc}
      </p>
    </div>
  );
}
