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
                Didirikan atas prinsip integritas, inovasi, dan kualitas, HKDA
                Konstruksi telah berkembang dari tim kecil yang penuh semangat
                menjadi perusahaan konstruksi terkemuka. Kami tidak hanya
                membangun struktur; kami menciptakan lingkungan yang
                menginspirasi.
              </p>
              <p>
                Kami percaya bahwa setiap proyek adalah kesempatan unik untuk
                menunjukkan komitmen kami terhadap keunggulan. Dari rancangan
                awal hingga sentuhan akhir, tim kami bekerja tanpa lelah untuk
                memastikan visi Anda terwujud dengan presisi.
              </p>
              <p>
                Baik itu kompleks komersial maupun rumah tinggal pribadi, kami
                membawa tingkat dedikasi dan keahlian yang sama ke setiap lokasi
                proyek.
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
            className="relative aspect-4/3 overflow-hidden  bg-slate-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Placeholder for About Image - Blueprint or Construction Site */}
            <img
              src="/hero.jpeg" // Pastikan path gambar benar
              alt="Construction site"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
