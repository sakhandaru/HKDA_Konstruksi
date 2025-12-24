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
    <section className="py-16 md:py-24 bg-muted/30">
      <Container>
        <div className="mb-12 flex items-end justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              Highlights from our recent work.
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/projects">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
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
                className="group block space-y-3"
              >
                <div className="overflow-hidden rounded-lg">
                  <div className="aspect-video w-full bg-muted object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:underline decoration-primary decoration-2 underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.category} • {project.location}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="ghost">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
