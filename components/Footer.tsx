"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-muted/60 bg-background relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-2 "
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