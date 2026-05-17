import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import OnCall from "@/components/sections/OnCall";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Differentials from "@/components/sections/Differentials";

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
      </main>
    </>
  );
}
