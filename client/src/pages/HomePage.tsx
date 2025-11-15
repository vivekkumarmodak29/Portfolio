import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certificates } from "@/components/Certificates";
import { Footer } from "@/components/Footer";
import { AnimatedChatbot } from "@/components/AnimatedChatbot";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navigation />
      <AnimatedChatbot />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
      </main>
      
      <Footer />
    </div>
  );
}
