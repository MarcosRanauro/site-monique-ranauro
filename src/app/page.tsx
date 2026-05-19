import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import OnCall from "@/components/sections/OnCall";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Differentials from "@/components/sections/Differentials";

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => (
    <div
      className="border-t border-border bg-[#0f0f0f] py-16 md:py-28"
      aria-hidden="true"
    />
  ),
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => (
    <div
      className="border-t border-border bg-[#0b0b0b] py-16 md:py-28"
      aria-hidden="true"
    />
  ),
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OnCall />
        <About />
        <PracticeAreas />
        <Differentials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
