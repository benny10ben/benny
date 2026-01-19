import Navbar from "@/components/Navbar";
import Intro from "@/components/sections/Intro"; // <--- Import the new Intro
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects"; 
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-0">
      <Navbar />
      
      {/* 1. INTRO (Includes Sticky Hero + About) */}
      <Intro />

      {/* 2. REMAINING SECTIONS */}
      <div className="flex flex-col gap-26 mt-16 mb-16">
        <Experience />
        <Projects />
      </div>

      {/* 3. FOOTER */}
      <Footer />
    </main>
  );
}