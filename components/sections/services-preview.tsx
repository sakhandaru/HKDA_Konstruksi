"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight, Plus } from "lucide-react";

export function ServicesPreview() {
  return (
    <section className="py-24 bg-[var(--background)]">
      <Container>
        {/* Header - Technical Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[var(--border)] pb-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono tracking-widest text-[var(--signal)] mb-2">
              02. CAPABILITIES
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-[var(--foreground)] uppercase tracking-tight">
              Technical <br /> Operations
            </h3>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-right font-mono text-xs text-[var(--muted-foreground)]">
              FULL SCOPE ENGINEERING
              <br />
              AND CONSTRUCTION SERVICES
            </p>
          </div>
        </div>

        {/* The Technical Manual List */}
        <div className="flex flex-col">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Pad index for "01", "02" style
            const num = (index + 1).toString().padStart(2, "0");

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex flex-col md:flex-row items-center border-b border-[var(--border)] py-12 transition-all hover:bg-[var(--muted)]"
              >
                {/* Hover Indicator Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--signal)] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                {/* Number */}
                <span className="hidden md:block w-24 text-3xl font-black text-[var(--border)] group-hover:text-[var(--foreground)] transition-colors font-mono">
                  {num}
                </span>

                {/* Icon & Title */}
                <div className="flex-1 w-full md:w-auto flex items-center gap-6">
                  <div className="h-12 w-12 rounded-none border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] group-hover:border-[var(--signal)] group-hover:text-[var(--signal)] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {service.title}
                    </h4>
                  </div>
                </div>

                {/* Description - Hidden on mobile or simplified */}
                <div className="hidden lg:block w-1/3 pr-12">
                  <p className="text-[var(--muted-foreground)] line-clamp-2 text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Action */}
                <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-end">
                  <div className="h-10 w-10 flex items-center justify-center bg-[var(--structure)] text-white group-hover:bg-[var(--signal)] transition-colors">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="rounded-none border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] h-14 px-8 uppercase tracking-widest font-bold"
          >
            <Link href="/services">
              <Plus className="w-4 h-4 mr-2" />
              View All Services
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
