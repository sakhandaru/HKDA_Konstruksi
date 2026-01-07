"use client";

import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="bg-[var(--structure)] py-24 text-white overflow-hidden relative border-t border-[var(--structure-light)]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--structure-light)]/20 -skew-x-12 transform origin-top-right translate-x-32 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT: Project Spotlight (Sticky-ish?) */}
          <div className="lg:w-7/12 relative min-h-[500px]">
            <div className="sticky top-24">
              <div className="mb-6 flex items-baseline gap-4">
                <span className="text-[var(--signal)] font-mono text-xs tracking-widest">
                  PROJECT SPOTLIGHT
                </span>
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={activeProject.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-4xl lg:text-5xl font-black uppercase leading-[0.9]"
                  >
                    {activeProject.title}
                  </motion.h2>
                </AnimatePresence>
              </div>

              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden border border-white/10 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.image}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {/* In real app use Image, but using div bg for now to match file */}
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover opacity-60"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[var(--structure)] to-transparent">
                  <div className="flex justify-between items-end border-b border-white/20 pb-4">
                    <div>
                      <p className="text-xs font-mono text-white/50 mb-1">
                        LOCATION
                      </p>
                      <p className="font-bold">{activeProject.location}</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono text-white/50 mb-1">
                        YEAR
                      </p>
                      <p className="font-bold">
                        {activeProject.completionDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="max-w-md text-white/60 text-sm leading-relaxed">
                  {activeProject.description}
                </p>
                <Button
                  asChild
                  className="shrink-0 rounded-none bg-white text-black hover:bg-[var(--signal)] hover:text-white transition-colors h-12 px-6"
                >
                  <Link href={`/projects/${activeProject.slug}`}>
                    VIEW PROJECT <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT: Project Index (List) */}
          <div className="lg:w-5/12 pt-12 lg:pt-0 flex flex-col justify-center">
            <div className="mb-8 pl-4 border-l-2 border-[var(--signal)]">
              <h3 className="text-xl font-bold uppercase">Archive Selection</h3>
              <p className="text-sm text-white/50">
                Select a project to view details
              </p>
            </div>

            <div className="space-y-0">
              {projects.slice(0, 5).map((project, idx) => (
                <button
                  key={project.slug}
                  onClick={() => setActiveProject(project)}
                  onMouseEnter={() => setActiveProject(project)}
                  className={`w-full text-left py-6 px-4 border-b border-white/10 transition-colors hover:bg-white/5 group flex items-center justify-between
                           ${
                             activeProject.slug === project.slug
                               ? "bg-white/5 border-l-4 border-l-[var(--signal)] pl-3"
                               : "border-l-4 border-l-transparent"
                           }
                        `}
                >
                  <div>
                    <span className="block text-xs font-mono text-[var(--signal)] mb-1">
                      0{idx + 1}
                    </span>
                    <h4
                      className={`text-xl font-bold uppercase ${
                        activeProject.slug === project.slug
                          ? "text-white"
                          : "text-white/50 group-hover:text-white"
                      }`}
                    >
                      {project.title}
                    </h4>
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 transition-opacity ${
                      activeProject.slug === project.slug
                        ? "opacity-100 text-[var(--signal)]"
                        : "opacity-0 group-hover:opacity-50"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="mt-12 flex justify-center lg:justify-start">
              <Link
                href="/projects"
                className="text-sm font-mono text-[var(--signal)] hover:underline underline-offset-4 tracking-widest flex items-center gap-2"
              >
                VIEW FULL ARCHIVE
                <div className="h-[1px] w-8 bg-[var(--signal)]" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
