import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About"
import Projects from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
