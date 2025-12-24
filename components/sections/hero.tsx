"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; // Menggunakan icon yang lebih mirip (panah miring)
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background Grid Pattern (Sisi Kiri) */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-[90vh]">
        {/* SISI KIRI: Konten Teks */}
        <div className="flex w-full flex-col justify-center px-6 py-20 lg:w-[45%] lg:pl-16 xl:pl-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hallo <br />
              Ideas into <span className="block">Stunning</span>
              Structures
            </h1>
            
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-gray-400">
              From concept to completion, we deliver quality construction 
              services for homes, businesses, and communities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {/* Tombol Putih */}
              <Button
                asChild
                className="h-14 rounded-md bg-white px-8 text-base font-semibold text-black hover:bg-gray-200"
              >
                <Link href="/projects" className="flex items-center">
                  Explore Our Projects
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              {/* Tombol Merah */}
              <Button
                asChild
                className="h-14 rounded-md bg-[#b22212] px-8 text-base font-semibold text-white hover:bg-[#8e1b0e]"
              >
                <Link href="/contact" className="flex items-center">
                  Get a free quote
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* SISI KANAN: Gambar dengan Pemisah Miring */}
        <div className="relative w-full lg:w-[55%] min-h-[400px] lg:min-h-full">
          <motion.div 
            className="absolute inset-0 h-full w-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              // Efek miring menggunakan clip-path
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <img
              src="/hero.jpeg" // Pastikan path gambar benar
              alt="Construction site"
              className="h-full w-full object-cover"
            />
            {/* Overlay tipis agar menyatu dengan nuansa gelap */}
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}