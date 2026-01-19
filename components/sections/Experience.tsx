"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const jobs = [
  {
    company: "WebbHeads",
    role: "Technical Lead",
    date: "JAN 2026 - PRESENT",
    points: [
      "Architected scalable system infrastructures for high-traffic platforms, optimizing database interactions to reduce load by ~85% through advanced caching strategies.",
      "Leading the end-to-end technical execution for multiple product lines, driving the roadmap from initial concept to successful market launch.",
      "Streamlined deployment workflows and established core engineering standards, accelerating feature delivery timelines and ensuring production stability.",
    ],
  },
  {
    company: "GITAM University",
    role: "President (Sports Club)",
    date: "2024 - 2025",
    points: [
      "Directed a student organization of 80+ members, organizing 10+ university-level tournaments with over 200 participants.",
      "Managed cross-functional teams across 8 domains, boosting student engagement and technical workshop participation.",
    ],
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(0);

  return (
    // UPDATED: Changed max-w-5xl to max-w-6xl to match Projects section
    <section id="experience" className="max-w-6xl mx-auto py-24 px-6 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            <span className="mr-4 font-mono text-4xl">/</span>
            experience
          </h2>
          <div className="h-[1px] bg-zinc-800 flex-1 max-w-sm ml-4" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* LEFT: Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-48 shrink-0 md:border-r border-zinc-800 md:h-fit">
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`relative px-4 py-3 text-left font-mono text-sm md:text-sm transition-all duration-300 ${
                  selected === index
                    ? "text-accent bg-gradient-to-l from-accent/10 to-transparent"
                    : "text-muted hover:text-foreground hover:bg-zinc-900/50"
                }`}
              >
                {/* HIGHLIGHTER */}
                {selected === index && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute right-[-1px] top-0 w-[2px] h-full bg-accent z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {job.company}
              </button>
            ))}
          </div>

          {/* RIGHT: Content */}
          <div className="flex-1 min-h-[300px]">
            {jobs.map((job, index) =>
              selected === index ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {job.role} <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <p className="font-mono text-xs text-muted mb-6 tracking-wider uppercase">
                    {job.date}
                  </p>

                  <ul className="space-y-4">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-muted text-lg md:text-xl leading-relaxed">
                        <span className="text-accent mt-[6px] text-[10px] shrink-0">
                          ▶
                        </span>
                        <span>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : null
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}