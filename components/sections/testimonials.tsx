"use client";

import { Container } from "@/components/layout/container";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

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
    role: "CEO, TechFlow",
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
  {
    id: 4,
    content:
      "The structural integrity and finish quality of our new warehouse is exceptional. HKDA understands industrial requirements.",
    author: "Budi Santoso",
    role: "Logistics Manager",
    rating: 5,
  },
  {
    id: 5,
    content:
      "From blueprints to the final coat of paint, the process was seamless. They truly brought our vision of a modern clinic to life.",
    author: "Dr. Amanda Lee",
    role: "Clinic Director",
    rating: 5,
  },
  {
    id: 6,
    content:
      "Professional, punctual, and precise. A construction partner you can actually rely on.",
    author: "James Wilson",
    role: "Real Estate Investor",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-(--muted) border-t border-(--border) overflow-hidden">
      <Container>
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
          <div>
            <span className="text-sm font-mono font-bold uppercase tracking-widest text-(--signal)">
              05. Testimonials
            </span>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl text-(--foreground)">
              Client <br /> Feedback
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex gap-2">
              <Star className="w-5 h-5 text-(--signal) fill-(--signal)" />
              <Star className="w-5 h-5 text-(--signal) fill-(--signal)" />
              <Star className="w-5 h-5 text-(--signal) fill-(--signal)" />
              <Star className="w-5 h-5 text-(--signal) fill-(--signal)" />
              <Star className="w-5 h-5 text-(--signal) fill-(--signal)" />
            </div>
            <p className="font-mono text-xs mt-2 text-right">
              5.0 AVERAGE RATING
            </p>
          </div>
        </div>
      </Container>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden mask-gradient-x">
        <div className="flex">
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {/* Duplicate logic for infinite loop */}
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="shrink-0 w-[320px] bg-white border border-(--border) p-6 rounded-lg shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    <Star className="w-4 h-4 fill-(--signal) text-(--signal)" />
                    <Star className="w-4 h-4 fill-(--signal) text-(--signal)" />
                    <Star className="w-4 h-4 fill-(--signal) text-(--signal)" />
                    <Star className="w-4 h-4 fill-(--signal) text-(--signal)" />
                    <Star className="w-4 h-4 fill-(--signal) text-(--signal)" />
                  </div>
                  <blockquote className="text-sm font-medium leading-relaxed text-(--foreground)">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-(--structure) flex items-center justify-center text-white text-xs font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-tight">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-(--muted-foreground)">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
