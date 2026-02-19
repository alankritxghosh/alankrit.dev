import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Apps from "@/components/Apps";
import Websites from "@/components/Websites";
import Strategic from "@/components/Strategic";
import RemoteReady from "@/components/RemoteReady";
import TechStack from "@/components/TechStack";
import VisionBoard from "@/components/VisionBoard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Apps />
      <Websites />
      <Strategic />
      <RemoteReady />
      <TechStack />
      <VisionBoard />
      <Contact />
      <Footer />
    </main>
  );
}
