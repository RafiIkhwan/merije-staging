import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { About } from "@/components/sections/About";
import { Values } from "@/components/sections/Values";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Showcase />
      <ProblemSolution />
      <About />
      <Values />
      <FAQ />
      <Footer />
    </main>
  );
}
