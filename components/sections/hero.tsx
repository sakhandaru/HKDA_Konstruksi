"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-background pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Dark background for Hero specifically */}
      <div className="absolute inset-0 bg-[#0f1115] z-0" />

      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-[#0f1115] to-[#0f1115] z-0 opacity-50" />

      {/* Grid Pattern or Texture could go here */}

      <Container className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
              Transforming <br />
              Ideas into{" "}
              <span className="text-primary">Stunning Structures</span>
            </h1>
            <p className="mb-8 max-w-[600px] text-lg text-gray-400 md:text-xl leading-relaxed">
              We build more than just walls; we build dreams. HKDA Konstruksi
              delivers premier construction solutions tailored to your vision.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base bg-white text-black hover:bg-gray-200 border-none"
            >
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base bg-primary text-white hover:bg-primary/90 border-none"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right side image placeholder - Ideally this would be an actual image from the user */}
        <motion.div
          className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-xl bg-muted/10 ring-1 ring-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-gray-700">
            {/* Placeholder for Hero Image */}
            <span className="text-muted-foreground">Hero Image Placement</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
