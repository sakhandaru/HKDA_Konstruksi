"use client";

import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturedProjects() {
  // Show only first 3 projects
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-[#0f1115] py-24 text-white">
      <Container>
        <div className="mb-16 flex items-end justify-between">
          <div className="space-y-4">
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              Our Portfolio
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Building Excellence: <br /> One Project At a Time
            </h2>
            <p className="max-w-[600px] text-lg text-gray-400">
              We take pride in every structure we build. Here are some of our
              recent highlights.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden border-white/20 bg-transparent text-white hover:bg-white hover:text-black sm:inline-flex"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block space-y-4"
              >
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <div className="aspect-video w-full bg-muted object-cover transition-transform duration-500 group-hover:scale-110" />
                  {/* Ideally, we would use <Image /> here with project.images[0] */}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {project.category} • {project.location}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Button
            asChild
            variant="outline"
            className="w-full border-white/20 bg-transparent text-white hover:bg-white hover:text-black"
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
