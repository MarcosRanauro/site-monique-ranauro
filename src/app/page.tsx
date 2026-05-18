import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import OnCall from "@/components/sections/OnCall";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Differentials from "@/components/sections/Differentials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

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
    </>
  );
}
