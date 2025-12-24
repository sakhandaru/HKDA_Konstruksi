"use client";

import { Container } from "@/components/layout/container";
import { Users, Clock, Building2, Trophy } from "lucide-react";

const stats = [
  {
    id: 1,
    label: "Projects Completed",
    value: "500+",
    icon: Building2,
  },
  {
    id: 2,
    label: "On-Time Delivery",
    value: "100%",
    icon: Clock,
  },
  {
    id: 3,
    label: "Value Constructed",
    value: "$1.2B+",
    icon: Trophy,
  },
  {
    id: 4,
    label: "Client Satisfaction",
    value: "99%",
    icon: Users,
  },
];

export function Stats() {
  return (
    <section className="border-y bg-background py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <stat.icon className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
