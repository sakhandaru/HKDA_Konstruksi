"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Layers, Zap, Banknote, Sparkles } from "lucide-react"; // Icon yang mirip dengan gambar
import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  {
    id: 1,
    label: "Proyek selesai",
    value: "500+",
    icon: Layers,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    label: "Pengiriman tepat waktu",
    value: "100%",
    icon: Zap,
    iconColor: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: 3,
    label: "Nilai proyek dikelola",
    value: "$1.2B+",
    icon: Banknote,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 4,
    label: "Kepuasan klien",
    value: "99%",
    icon: Sparkles,
    iconColor: "text-red-600",
    bgColor: "bg-red-50",
  },
];

export function Stats() {
  return (
    <section className="bg-[#f8f9fa] py-20 lg:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* SISI KIRI: Angka Statistik (Dibalik ke kiri sesuai permintaan) */}
          <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                className="flex items-start gap-4"
              >
                {/* Icon Bulat Abu-abu Muda seperti di gambar */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200/70 text-gray-600">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold tracking-tight text-slate-900">
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SISI KANAN: Copywriting (Dibalik ke kanan) */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Membangun Keunggulan, <br />
                Satu Struktur Sekaligus
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl">
                Komitmen kami terhadap kualitas, keandalan, dan kepuasan klien
                tercermin dalam setiap hal yang kami lakukan. Berikut adalah
                sekilas dari apa yang telah kami capai sejauh ini dalam industri
                konstruksi.
              </p>

              <div className="mt-8">
                <Button
                  asChild
                  className="rounded-md bg-[#b22212] px-10 py-6 text-base font-bold text-white hover:bg-[#8e1b0e] transition-colors shadow-lg shadow-red-900/10"
                >
                  <Link href="/contact">Hubungi Kami</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
