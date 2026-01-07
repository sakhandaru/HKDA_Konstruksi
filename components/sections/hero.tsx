"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[var(--background)] flex flex-col lg:flex-row overflow-hidden border-b border-[var(--border)]">
      {/* Decorative Grid Background for the whole section (subtle) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* LEFT COLUMN: The Desk (Content) */}
      <div className="relative w-full lg:w-[65%] pt-32 pb-20 px-6 lg:pl-20 xl:pl-24 flex flex-col justify-center z-10">
        {/* Top Marker */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-0 lg:left-20 w-32 h-2 bg-[var(--signal)]"
        />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-12 bg-[var(--signal)]"></span>
            <p className="font-mono text-sm tracking-[0.2em] text-[var(--muted-foreground)] uppercase">
              Est. 2024 // Const. Eng.
            </p>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-[var(--foreground)] leading-[0.9] tracking-tighter uppercase mb-8">
            Structure
            <span className="text-[var(--structure-light)]">.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--structure)] to-[var(--muted-foreground)]">
              Precision
            </span>
            <span className="text-[var(--signal)]">.</span>
          </h1>

          <p className="max-w-xl text-lg lg:text-xl text-[var(--muted-foreground)] leading-relaxed border-l-2 border-[var(--border)] pl-6">
            Architecting the future through calculated engineering and robust
            construction. We do not just build; we define space.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center gap-8"
        >
          <Button
            asChild
            className="h-16 px-10 rounded-none bg-[var(--structure)] text-white hover:bg-[var(--structure-light)] text-lg font-bold tracking-wider"
          >
            <Link href="/projects" className="flex items-center gap-3">
              VIEW BLUEPRINTS
              <ArrowRight className="w-5 h-5 text-[var(--signal)]" />
            </Link>
          </Button>

          <Link
            href="/contact"
            className="group flex items-center gap-3 font-mono text-sm tracking-widest hover:text-[var(--signal)] transition-colors"
          >
            <span className="border-b border-black group-hover:border-[var(--signal)] pb-1">
              REQUEST CONSULTATION
            </span>
            <ArrowDownRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: The Structure (Visual) */}
      <div className="relative w-full lg:w-[35%] min-h-[50vh] lg:min-h-auto bg-[var(--structure)] flex flex-col border-l border-[var(--border)]">
        {/* Image Layer with Technical Overlay */}
        <div className="relative flex-grow overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <img
            src="/hero.jpeg"
            alt="Construction Detail"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
          />

          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />

          {/* Crosshair Decor */}
          <div className="absolute top-10 right-10 w-8 h-8 border border-white/20 flex items-center justify-center">
            <div className="w-[1px] h-full bg-white/20" />
            <div className="h-[1px] w-full bg-white/20 absolute" />
          </div>
        </div>

        {/* Bottom Technical Data Block */}
        <div className="p-8 border-t border-white/10 bg-[var(--structure-light)]">
          <div className="grid grid-cols-2 gap-4 font-mono text-xs text-white/60">
            <div>
              <span className="block text-white/30">CLIENTS</span>
              <span className="text-xl text-white block mt-1">150+</span>
            </div>
            <div>
              <span className="block text-white/30">PROJECTS</span>
              <span className="text-xl text-white block mt-1">42</span>
            </div>
            <div className="col-span-2 pt-4 border-t border-white/10">
              <span className="block text-white/30">CURRENT STATUS</span>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-[var(--signal)] animate-pulse" />
                <span className="text-white tracking-wider">OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
