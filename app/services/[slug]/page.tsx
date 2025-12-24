import { Container } from "@/components/layout/container";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} - HKDA Konstruksi`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-[#0f1115] py-20 text-white">
        <Container>
          <Link
            href="/services"
            className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 text-primary">
              <Icon className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {service.title}
            </h1>
          </div>
          <p className="max-w-2xl text-xl text-gray-300">
            {service.description}
          </p>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
              {service.details}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold">Key Features</h3>
              <ul className="space-y-3">
                {service.features?.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-slate-900 p-6 text-white text-center">
              <h3 className="mb-2 text-xl font-bold">Ready to start?</h3>
              <p className="mb-6 text-gray-400 text-sm">
                Contact us today to discuss your {service.title.toLowerCase()}{" "}
                project.
              </p>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
