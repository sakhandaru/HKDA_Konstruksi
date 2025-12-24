import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Browse our portfolio of commercial and residential construction projects.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-12 md:py-24">
      <div className="space-y-12">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Projects
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Explore our diverse portfolio of successful construction projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video w-full bg-muted/50 object-cover" />{" "}
              {/* Placeholder Image */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.location}
                  </p>
                </div>
                <p className="text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/projects/${project.slug}`}>View Project</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
