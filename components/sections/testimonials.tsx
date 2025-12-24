"use client";

import { Container } from "@/components/layout/container";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content:
      "Working with HKDA was a dream. They delivered our custom home on time and exceeded our expectations. The attention to detail is unmatched.",
    author: "Alex Morgan",
    role: "Homeowner",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Their team managed our office renovation with incredible professionalism. Communication was clear, and the results are stunning.",
    author: "Sarah Jenkins",
    role: "Business Owner",
    rating: 5,
  },
  {
    id: 3,
    content:
      "I've worked with many contractors, but HKDA stands out for their integrity and quality. Highly recommended for any complex project.",
    author: "David Chen",
    role: "Property Developer",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <div className="mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What our clients <br /> say about us
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-background p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="mb-8 text-lg font-medium leading-relaxed text-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                  {/* Placeholder for Avatar */}
                  <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary font-bold">
                    {testimonial.author[0]}
                  </div>
                </div>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
