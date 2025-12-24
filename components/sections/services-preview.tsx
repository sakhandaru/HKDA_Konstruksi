import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-4">
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              Layanan Kami
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Layanan Konstruksi <br /> Komprehensif
            </h2>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              Dari mahakarya arsitektur hingga infrastruktur yang tahan lama,
              layanan kami mencakup spektrum penuh kebutuhan konstruksi.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="hidden md:inline-flex bg-[#b22212] text-white hover:bg-[#8e1b0e]"
          >
            <Link href="/services">Lihat Semua</Link>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex overflow-hidden rounded-xl border bg-background transition-all hover:shadow-lg hover:-translate-y-1"
              >
                {/* Content Section (Left) */}
                <div className="flex-1 p-8">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-[#b22212]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Image Section (Right) */}
                <div className="w-2/5 relative">
                  <div className="absolute inset-0 h-full w-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 md:hidden">
          <Button
            asChild
            size="lg"
            className="w-full bg-[#b22212] text-white hover:bg-[#8e1b0e]"
          >
            <Link href="/services">Lihat Semua</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
