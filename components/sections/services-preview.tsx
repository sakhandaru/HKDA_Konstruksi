import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/data/services";

export function ServicesPreview() {
  // Take first 4 services for preview
  const previewServices = services.slice(0, 4);

  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-4">
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              Our Services
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Comprehensive <br /> Construction Services
            </h2>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              From architectural masterpieces to durable infrastructure, our
              services cover the full spectrum of construction needs.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="hidden md:inline-flex bg-primary text-white hover:bg-primary/90"
          >
            <Link href="/services">View all</Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {previewServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-xl border bg-background p-8 transition-all hover:shadow-lg hover:-translate-y-1 block"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 md:hidden">
          <Button
            asChild
            size="lg"
            className="w-full bg-primary text-white hover:bg-primary/90"
          >
            <Link href="/services">View all</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
