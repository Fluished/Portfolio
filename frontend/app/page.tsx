import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {


  return (
    <main className="min-h-screen bg-background text-text pt-24">
      <Header />
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}