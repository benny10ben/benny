"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" }, 
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

// Official X Brand SVG Component
// keeping this exactly as provided to maintain branding accuracy
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

export default function Navbar() {
  // state for the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // smoother scroll handler that also closes the mobile menu if it's open
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault(); 
    setIsOpen(false); // close menu when a link is clicked
    
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // speeding this up to 0.5s so the site feels ready faster
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md h-16 md:h-20 flex items-center border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 w-full h-full flex items-center justify-between relative">
          
          {/* --- LEFT: LOGO --- */}
          <div className="flex-shrink-0 z-20">
            <Link 
              href="#hero" 
              onClick={(e) => handleScroll(e, "#hero")}
              className="text-foreground font-bold text-xl md:text-2xl tracking-tight hover:text-accent transition-colors"
            >
              Benny Rohit
            </Link>
          </div>

          {/* --- CENTER: NAVIGATION LINKS (DESKTOP) --- */}
          {/* hiding this on mobile because it won't fit */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)} 
                className="text-lg font-medium text-muted hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- RIGHT: SOCIAL ICONS (DESKTOP) --- */}
          {/* hiding on mobile to keep the header clean */}
          <div className="hidden md:flex items-center gap-5 z-20">
             <SocialLinks />
          </div>

          {/* --- RIGHT: HAMBURGER MENU (MOBILE ONLY) --- */}
          <div className="flex md:hidden z-20">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }} // super fast toggle
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col items-center gap-8"
          >
            {/* mobile nav links */}
            <div className="flex flex-col items-center gap-6 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-2xl font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* divider line */}
            <div className="w-16 h-[1px] bg-white/10" />

            {/* mobile social icons */}
            <div className="flex items-center gap-8">
               <SocialLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// helper component to avoid repeating these 4 links twice (desktop + mobile)
function SocialLinks() {
  return (
    <>
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
        href="https://www.linkedin.com/in/benny-rohit-5220a23a7/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-muted hover:text-accent transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>

      <a 
        href={`${process.env.NEXT_PUBLIC_X_PROFILE}`}        
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-muted hover:text-accent transition-colors"
        aria-label="X (Twitter)"
      >
        <XIcon className="w-[17px] h-[17px]" />
      </a>
    </>
  );
}