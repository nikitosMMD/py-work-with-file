import { Directions } from "@/components/Directions";
import { Exercise } from "@/components/Exercise";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProgressSection } from "@/components/ProgressSection";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Header />
      <main>
        <Hero />
        <Directions />
        <HowItWorks />
        <Exercise />
        <ProgressSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
