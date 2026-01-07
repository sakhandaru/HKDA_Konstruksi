import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Browse our portfolio of commercial and residential construction projects.",
};

export default function ProjectsPage() {
  return (
    <div className="py-24 bg-(--background) min-h-screen">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-(--border) pb-6">
          <div className="max-w-2xl">
            <h1 className="text-sm font-mono tracking-widest text-(--signal) mb-2">
              03. SELECTED WORKS
            </h1>
            <h2 className="text-4xl md:text-5xl font-black text-(--foreground) uppercase tracking-tight">
              Project <br /> Archive
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="flex gap-4 font-mono text-xs text-(--muted-foreground) uppercase tracking-wide">
              <span>Total Projects: {projects.length}</span>
              <span>//</span>
              <span>Active Sites: 3</span>
            </div>
          </div>
        </div>

        {/* Technical Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block relative border border-(--border) bg-(--structure) overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <div className="absolute inset-0 bg-(--structure) z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 mix-blend-multiply" />

                {/* Image (Placeholder since actual image is hero.jpeg in data) */}
                <div
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  style={{ backgroundImage: `url('/hero.jpeg')` }}
                />

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-(--signal) z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-(--signal) z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Meta Data */}
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-(--signal) uppercase tracking-widest border border-(--signal) px-2 py-1">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-(--muted-foreground) group-hover:text-(--signal) group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-(--signal) transition-colors">
                  {project.title}
                </h3>

                <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-4">
                  <span className="text-sm text-gray-400 font-mono">
                    {project.location}
                  </span>
                  <span className="text-sm text-gray-500 font-mono">
                    {project.completionDate}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
