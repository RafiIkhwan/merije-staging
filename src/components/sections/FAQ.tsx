"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../layout/Container";

const faqs = [
  {
    question: "Apakah ada batas jumlah tamu yang diundang?",
    answer: "Tidak ada sama sekali! Kamu bebas menyebarkan tautan undanganmu ke sebanyak mungkin orang tanpa ada biaya tambahan atau batasan kuota tamu."
  },
  {
    question: "Berapa lama proses pembuatan undangan?",
    answer: "Sangat instan. Setelah memilih paket, kamu bisa langsung masuk ke dasbor, mengisi data, mengunggah foto, dan membagikan undangan saat itu juga."
  },
  {
    question: "Apakah saya bisa mengubah data setelah disebar?",
    answer: "Tentu saja. Kamu punya kontrol penuh untuk mengedit detail acara, foto, atau teks kapan pun, dan perubahannya akan langsung terlihat oleh tamu secara real-time."
  },
  {
    question: "Apakah fitur RSVP dan Buku Tamu sudah termasuk?",
    answer: "Ya, semuanya sudah menjadi fitur standar kami. Kamu bisa memantau dan mengunduh daftar tamu yang akan hadir langsung dari dasbor dengan sangat mudah."
  },
  {
    question: "Apakah bisa mengganti palet warna?",
    answer: "Bisa. Kami menyediakan puluhan kombinasi palet warna premium yang sudah dikurasi agar apapun pilihanmu, undangan akan tetap terlihat elegan dan harmonis."
  },
  {
    question: "Bagaimana jika tamu saya gaptek?",
    answer: "Tenang saja. Antarmuka undangan kami dirancang setransparan dan semudah mungkin, sehingga kerabat yang lebih tua pun tidak akan kesulitan mencari lokasi atau mengisi RSVP."
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-[#F5EEDC] px-5 py-4 md:px-6 md:py-4 rounded-[1rem] hover:bg-[#eadebf] transition-colors text-left"
      >
        <span className="font-bold text-[14px] md:text-[15px] text-foreground pr-4">{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="shrink-0 w-5 h-5 flex items-center justify-center text-foreground"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4 pt-1 md:px-6 md:pb-5 md:pt-1 text-[13px] md:text-[14px] text-foreground/80 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-10 md:py-16 bg-background">
      <Container>
        <div className="mb-6 md:mb-10">
          <h2 className="text-[36px] md:text-[42px] font-medium tracking-tight text-foreground">
            FAQs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-start">
          <div className="flex flex-col gap-3 md:gap-4">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
