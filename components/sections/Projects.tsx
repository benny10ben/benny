"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Folder, ChevronLeft, ChevronRight, Lock } from "lucide-react";

// --- FEATURED: PROFESSIONAL WORK ---
const featuredProjects = [
  {
    title: "Real Estate CRM Portal",
    label: "Professional Work @ WebbHeads",
    description: "A comprehensive CRM platform architected for WebbHeads to manage client relationships, property listings, and sales pipelines. I led the technical team in building the frontend architecture and optimizing database performance.",
    tech: "NEXT.JS, TAILWIND, SUPABASE",
    // Use your CRM screenshot here.
    image: "/project-crm.jpg", 
    isPrivate: true, 
    links: { 
      external: "#" 
    },
  },
  {
    title: "2 Active Projects",
    label: "Currently in Development",
    description: "I am currently working on two other major projects. These platforms are in active development, focusing on scalable architecture and high-performance backend systems. Details coming soon.",
    tech: "NEXT.JS, TYPESCRIPT, CLOUD",
    image: null, 
    isPrivate: true, 
    links: { 
      external: "#" 
    },
  },
];

// --- GRID: YOUR OPEN SOURCE REPOS ---
const otherProjects = [
  {
    title: "Periodt",
    description: "A menstrual cycle forecasting app engineered with a linear regression model, achieving 80% prediction coverage with just 1.7 days average error.",
    tech: ["Kotlin", "Android", "ML Algorithms"],
    links: { github: "https://github.com/benny10ben/Periodt", external: "#" },
  },
  {
    title: "Amori Widget Sync",
    description: "A real-time widget syncing tool implementing Hybrid End-to-End Encryption (AES-256 + RSA-2048) to secure user data across devices.",
    tech: ["Kotlin", "Firebase FCM", "Security"],
    links: { github: "https://github.com/benny10ben/Amori-Widget-Sync", external: "#" },
  },
  {
    title: "AR Indoor Navigation",
    description: "GPS-free indoor navigation system using ARCore + SLAM. Implemented A* pathfinding to achieve <1m positioning accuracy in real-time.",
    tech: ["C#", "Unity", "ARCore"],
    links: { github: "https://github.com/benny10ben/AR-Indoor-Navigation", external: "#" },
  },
  {
    title: "Badminton Club Website",
    description: "A web platform for the GITAM badminton club to manage events, memberships, and club activities for 200+ active participants.",
    tech: ["Python", "Django", "HTML/CSS"], 
    links: { github: "https://github.com/benny10ben/Badminton-Club-Website-GITAM", external: "#" },
  },
  {
    title: "Portfolio v2",
    description: "This website! A showcase of my work and experience, built with the latest Next.js 14 features and Framer Motion animations.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    links: { github: "https://github.com/benny10ben", external: "#" },
  },
];

// --- SLIDE ANIMATION VARIANTS ---
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // SAFETY CHECK
  if (!featuredProjects[current]) {
    setCurrent(0);
    return null;
  }

  const showArrows = featuredProjects.length > 1;

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  const jumpToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-6 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* HEADER: / projects */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            <span className="mr-4 font-mono text-4xl">/</span>
            projects
          </h2>
          <div className="h-[1px] bg-zinc-800 flex-1 max-w-sm ml-4" />
        </div>

        {/* --- PART 1: FEATURED CAROUSEL --- */}
        <div className="relative h-[500px] w-full bg-[#1f2838] rounded-xl overflow-hidden shadow-2xl border border-zinc-800 group">
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-zinc-900/80" />
              
              {/* Optional: Real Image Background */}
              {featuredProjects[current].image && (
                 // eslint-disable-next-line @next/next/no-img-element
                 <img 
                   src={featuredProjects[current].image} 
                   alt={featuredProjects[current].title}
                   className="absolute inset-0 w-full h-full object-cover opacity-20"
                 /> 
              )}

              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 z-10">
                <p className="text-accent font-mono text-sm mb-4">
                  {featuredProjects[current].label}
                </p>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {featuredProjects[current].title}
                </h3>
                
                <div className="bg-[#1f2838]/90 backdrop-blur-sm p-6 rounded-lg max-w-2xl shadow-lg border border-zinc-700/50">
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {featuredProjects[current].description}
                  </p>
                </div>
                
                <p className="text-accent font-mono text-sm mt-8 tracking-wider">
                  {featuredProjects[current].tech}
                </p>
                
                <div className="flex gap-6 mt-8 items-center">
                  {featuredProjects[current].isPrivate ? (
                    <div className="flex items-center gap-2 text-zinc-500 cursor-not-allowed" title="Private Repository">
                      <Lock className="w-5 h-5" />
                      <span className="font-mono text-xs">Private Repo</span>
                    </div>
                  ) : (
                    <a href="#" className="text-zinc-400 hover:text-accent transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  
                  {featuredProjects[current].links.external !== "#" && (
                    <a href={featuredProjects[current].links.external} className="text-zinc-400 hover:text-accent transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ARROWS INSIDE THE CARD */}
          {showArrows && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-accent hover:text-black rounded-full text-white transition-all z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-accent hover:text-black rounded-full text-white transition-all z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* DASH INDICATORS (UPDATED TO RECTANGULAR BARS) */}
        {showArrows && (
          <div className="flex justify-center gap-4 mt-8">
            {featuredProjects.map((_, index) => (
                <button
                key={index}
                onClick={() => jumpToSlide(index)}
                className={`h-1 transition-all duration-300  ${
                    current === index 
                    ? "w-12 bg-[#6c8fff]" // <--- Change this to 'bg-highlight' (Teal)
                    : "w-12 bg-zinc-600 hover:bg-zinc-500" // Inactive: Grey
                }`}
                aria-label={`Go to slide ${index + 1}`}
                />
            ))}
            </div>
        )}

        {/* --- PART 2: OPEN SOURCE GRID --- */}
        <div className="mt-24">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center md:text-center">
                open source & personal
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1f2838] p-8 rounded-lg hover:-translate-y-2 transition-transform duration-300 group shadow-lg flex flex-col h-full"
                >
                <div className="flex justify-between items-center mb-8">
                    <Folder className="w-10 h-10 text-accent" />
                    <div className="flex gap-4">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-accent">
                        <Github className="w-5 h-5" />
                    </a>
                    {project.links.external !== "#" && (
                        <a href={project.links.external} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-accent">
                        <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                    </div>
                </div>

                <h4 className="text-xl font-bold text-zinc-100 mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                </h4>
                <p className="text-zinc-400 text-lg md:text-l leading-relaxed mb-8 flex-grow">
                    {project.description}
                </p>

                <ul className="flex flex-wrap gap-3 font-mono text-sm text-white mt-auto">
                    {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                    ))}
                </ul>
                </motion.div>
            ))}
            </div>
        </div>
      </motion.div>
    </section>
  );
}