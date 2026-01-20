"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";

const skills = [
  "Next.js",
  "TypeScript",
  "Java / Kotlin",
  "Python & Django",
  "Docker / Redis",
  "PostgreSQL",
  "Spring Boot",
  "CI/CD Pipelines", 
];

export default function Intro() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-0">
      <div className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12">

        {/* left column text content */}
        <div className="flex flex-col">

          {/* hero section */}
          <section id="hero" className="flex flex-col justify-center pt-32 md:pt-64 pb-20 md:pb-48">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="text-4xl md:text-7xl font-bold tracking-tight text-foreground"
              >
                hi, <span className="text-accent">benny</span> here.
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    repeat: Infinity, 
                    repeatType: "reverse"
                  }}
                  className="inline-block w-[3px] h-8 md:h-16 text-accent ml-2 align-bottom md:align-middle"
                />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                className="text-muted text-lg md:text-xl leading-relaxed max-w-lg"
              >
                I&apos;m a <span className="text-accent">Founding Engineer</span> @ WebbHeads an athelete from Vizag!
                I&apos;m fascinated by large-scale, high-impact products and have contributed to building comprehensive 
                web platforms and full-stack applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
                className="pt-4"
              >
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                  className="group flex items-center gap-3 border border-text-accent text-accent px-6 py-3 rounded w-fit font-mono text-sm hover:text-accent/10 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  Say hi!
                </a>
              </motion.div>
            </div>
            
            {/* MOBILE IMAGE WAS HERE - REMOVED */}
          </section>

          {/* about section */}
          <section id="about" className="flex flex-col justify-center pt-12 pb-24 md:pb-30">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
             >
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    <span className="mr-4 font-mono text-4xl">/</span>
                    about me
                  </h2>
                  <div className="h-[1px] bg-zinc-800 flex-1 max-w-sm ml-4" />
                </div>

                <div className="space-y-6 text-muted text-lg md:text-xl leading-relaxed">
                  <p>
                    Currently, I serve as a <span className="text-accent">Technical Lead</span> at WebbHeads, 
                    architecting scalable full-stack solutions and leading a technical team. My expertise spans beyond just web - I have 
                    engineered AR navigation system, encrypted mobile apps and high-performance backend architectures.
                  </p>

                  <p className="font-mono text-sm pt-2 text-foreground">
                    Here are a few technologies I&apos;ve been working with recently:
                  </p>

                  <ul className="grid grid-cols-2 gap-2 mt-2 font-mono text-sm">
                    {skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-3 text-muted">
                        <span className="text-accent text-[10px]">▶</span> {skill}
                      </li>
                    ))}
                  </ul>

                  <p>
                    Outside of work, I am a competitive <span className="text-accent">Badminton player</span> having performed at the National level. 
                    I also served as President of my university&apos;s sports club, where I directed large-scale tournaments and led student engagement initiatives.
                  </p>
                </div>
             </motion.div>
          </section>

        </div>

        {/* right column sticky image */}
        {/* hidden on mobile (hidden), visible on medium screens and up (md:flex) */}
        <div className="hidden md:flex sticky top-0 h-screen items-center justify-end">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, ease: "backOut" }}
             className="relative w-[350px] h-[450px] rounded-2xl overflow-hidden shadow-2xl group"
           >
              <Image 
                src="/me.jpg" 
                fill 
                className="object-cover transition-all duration-500 " 
                alt="Benny Rohit" 
              />
           </motion.div>
        </div>

      </div>
    </div>
  );
}