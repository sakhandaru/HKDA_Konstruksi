"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background py-16 md:py-24">
      {/* Background decoration or image would go here */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-background" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Building Dreams with <br />
          <span className="text-primary">Precision & Excellence</span>
        </motion.h1>
        <motion.p
          className="mb-10 max-w-[700px] text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          HKDA Konstruksi delivers premier residential and commercial
          construction solutions. We turn complex blueprints into enduring
          reality.
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link href="/projects">
              View Our Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-8 text-base"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
