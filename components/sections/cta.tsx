"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-32 text-white">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        {/* Ideally an image of a construction site or finished building */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/40" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Your Dream Project Starts Here
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">
            Ready to bring your vision to life? Contact us today for a free
            consultation and let's discuss how we can build something great
            together.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-primary px-8 text-base text-white hover:bg-primary/90"
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 border-white/20 bg-transparent px-8 text-base text-white hover:bg-white hover:text-black"
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
