"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                About Us
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Our Story
              </h2>
            </div>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Founded on the principles of integrity, innovation, and quality,
                HKDA Konstruksi has grown from a small passionate team into a
                leading construction firm. We don't just build structures; we
                create environments that inspire.
              </p>
              <p>
                We believe that every project is a unique opportunity to
                demonstrate our commitment to excellence. From the initial
                blueprint to the final finishing touch, our team works
                tirelessly to ensure your vision is realized with precision.
              </p>
              <p>
                Whether it&apos;s a commercial complex or a bespoke residential
                home, we bring the same level of dedication and expertise to
                every job site.
              </p>
            </div>
            <div className="mt-8">
              <Button
                asChild
                variant="default"
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Link href="/contact">
                  Discover More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative aspect-4/3 overflow-hidden rounded-2xl bg-slate-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Placeholder for About Image - Blueprint or Construction Site */}
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
              <span className="text-slate-400 font-medium">
                About Image Placeholder
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
