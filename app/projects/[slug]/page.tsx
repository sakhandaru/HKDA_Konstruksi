import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="py-12 md:py-24">
      <div className="space-y-8">
        <Button
          asChild
          variant="ghost"
          className="pl-0 hover:bg-transparent hover:text-primary"
        >
          <Link href="/projects" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-semibold text-primary">
              {project.category}
            </span>
            <span>•</span>
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.completionDate}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {project.description}
          </p>
        </div>
        <div className="aspect-video w-full rounded-lg bg-muted/50" />{" "}
        {/* Placeholder for main image */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">Project Details</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Detailed description of the project goes here. This would
                typically include specific challenges faced, solutions
                implemented, and the final outcome. Since this is a static site
                explanation, we can add more rich text content here.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border p-6 bg-card">
              <h3 className="font-bold mb-4">Project Stats</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-muted-foreground">Client</dt>
                  <dd className="font-medium">Confidential</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Year</dt>
                  <dd className="font-medium">{project.completionDate}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Status</dt>
                  <dd className="font-medium">Completed</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
