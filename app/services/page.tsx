import { Container } from "@/components/layout/container";
import { Metadata } from "next";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive construction solutions including planning, building, and renovation.",
};

export default function ServicesPage() {
  return (
    <Container className="py-12 md:py-24">
      <div className="space-y-12">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            We provide a wide range of construction and design services tailored
            to your needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-lg border bg-card p-8 shadow-sm flex flex-col gap-4"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary w-fit">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
