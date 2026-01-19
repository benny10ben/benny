"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    // reducing padding slightly for mobile so it doesn't take up half the screen
    <footer className="py-8 md:py-10 text-center text-sm text-muted/60 bg-background relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // snappy fade-in when the user hits the bottom
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="space-y-2 px-6"
      >
        <p>
          Built and designed by Benny Rohit.
        </p>
        <p>
          All rights reserved. &copy; {new Date().getFullYear()}
        </p>
      </motion.div>
    </footer>
  );
}