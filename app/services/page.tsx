"use client";

import { Container } from "@/components/layout/container";
import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState(services[0]);

  return (
    <div className="py-24 bg-(--background) min-h-screen">
      <Container>
        {/* Header - Technical Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-(--border) pb-6">
          <div className="max-w-2xl">
            <h1 className="text-sm font-mono tracking-widest text-(--signal) mb-2">
              02. CAPABILITIES
            </h1>
            <h2 className="text-4xl md:text-5xl font-black text-(--foreground) uppercase tracking-tight">
              Integrated <br /> Solutions
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-right font-mono text-xs text-(--muted-foreground)">
              COMPREHENSIVE ENGINEERING
              <br />
              AND EXECUTION PROTOCOLS
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* LEFT: The Technical Manual List */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {services.map((service, index) => {
              const Icon = service.icon;
              const num = (index + 1).toString().padStart(2, "0");
              const isHovered = hoveredService.slug === service.slug;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onMouseEnter={() => setHoveredService(service)}
                  className={`group relative flex items-center border-b border-(--border) py-8 transition-all hover:bg-(--muted) ${
                    isHovered ? "bg-(--muted)/50" : ""
                  }`}
                >
                  {/* Hover Indicator Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-(--signal) scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                  {/* Number */}
                  <span className="pl-6 hidden md:block w-24 text-2xl font-black text-(--border) group-hover:text-(--foreground) transition-colors font-mono">
                    {num}
                  </span>

                  {/* Icon & Title */}
                  <div className="flex-1 w-full flex items-center gap-6">
                    <div className="h-10 w-10 shrink-0 border border-(--border) flex items-center justify-center text-(--foreground) group-hover:border-(--signal) group-hover:text-(--signal) transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                        {service.title}
                      </h4>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex justify-end pr-4">
                    <ArrowRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        isHovered
                          ? "rotate-0 text-(--signal)"
                          : "-rotate-45 text-(--muted-foreground)"
                      }`}
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* RIGHT: Visual Preview (Sticky) */}
          <div className="hidden lg:block w-1/2 relative min-h-[600px]">
            <div className="sticky top-24 w-full h-[600px] border border-(--border) bg-(--structure)">
              {/* Technical Overlays */}
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="bg-(--signal) text-white text-[10px] font-mono px-2 py-1 tracking-widest">
                  VISUAL REF
                </span>
                <span className="bg-black/50 text-white text-[10px] font-mono px-2 py-1 tracking-widest backdrop-blur">
                  IMG-{hoveredService.slug.toUpperCase().slice(0, 3)}
                </span>
              </div>

              {/* Crosshairs */}
              <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-white/20 z-20" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-r border-t border-white/20 z-20" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredService.image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={hoveredService.image}
                    alt={hoveredService.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient for text readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="h-px w-full bg-white/20 mb-4" />
                <h5 className="text-white text-3xl font-black uppercase mb-2">
                  {hoveredService.title}
                </h5>
                <p className="text-white/60 text-sm max-w-md">
                  {hoveredService.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
