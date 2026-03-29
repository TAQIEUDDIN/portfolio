import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />

      {/* Placeholder sections — replace with your actual sections */}


      <section id="projects" className="min-h-screen flex items-center justify-center bg-zinc-50">
        <h2 className="text-4xl font-bold text-zinc-900">Projects</h2>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center bg-white">
        <h2 className="text-4xl font-bold text-zinc-900">Skills</h2>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-zinc-50">
        <h2 className="text-4xl font-bold text-zinc-900">Contact</h2>
      </section>
    </main>
  );
}
