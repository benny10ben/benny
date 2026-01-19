import Navbar from "@/components/Navbar";
import Intro from "@/components/sections/Intro"; 
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects"; 
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-0">
      <Navbar />
      
      {/* 1. INTRO (Includes Sticky Hero + About) */}
      <Intro />

      {/* 2. REMAINING SECTIONS 
          - Mobile: gap-12 (tight) and mt-0 (relying on Intro's internal padding)
          - Desktop: gap-32 (spacious) and mt-16 to preserve the layout you liked
      */}
      <div className="flex flex-col gap-12 md:gap-32 mt-0 md:mt-16 mb-16">
        <Experience />
        <Projects />
      </div>

      {/* 3. FOOTER */}
      <Footer />
    </main>
  );
}