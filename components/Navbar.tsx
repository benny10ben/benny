"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" }, 
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault(); 
    
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md h-20 flex items-center border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 w-full h-full flex items-center justify-between relative">
        
        {/* --- LEFT: LOGO --- */}
        <div className="flex-shrink-0 z-20">
          <Link 
            href="#hero" 
            onClick={(e) => handleScroll(e, "#hero")}
            className="text-foreground font-bold text-2xl tracking-tight hover:text-accent transition-colors"
          >
            Benny Rohit
          </Link>
        </div>

        {/* --- CENTER: NAVIGATION LINKS --- */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)} 
              className="text-xl font-medium text-muted hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* --- RIGHT: SOCIAL ICONS --- */}
        <div className="flex items-center gap-5 z-20">
            <a 
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="text-muted hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a 
              href="https://github.com/benny10ben" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a 
              href="https://www.linkedin.com/in/benny-rohit-y-249122309/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
        </div>

      </div>
    </motion.nav>
  );
}