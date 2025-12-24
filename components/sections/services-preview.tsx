import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Home, Ruler, Users } from "lucide-react";

export function ServicesPreview() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Comprehensive Services
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            We offer end-to-end solutions for all your construction needs,
            ensuring quality and efficiency.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="font-bold">Commercial</h3>
            <p className="text-sm text-muted-foreground">
              Office buildings, retail spaces, and industrial facilities.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Home className="h-6 w-6" />
            </div>
            <h3 className="font-bold">Residential</h3>
            <p className="text-sm text-muted-foreground">
              Custom homes, renovations, and housing developments.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Ruler className="h-6 w-6" />
            </div>
            <h3 className="font-bold">Planning</h3>
            <p className="text-sm text-muted-foreground">
              Architectural design, structural engineering, and permits.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-bold">Consulting</h3>
            <p className="text-sm text-muted-foreground">
              Project management and cost estimation services.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
