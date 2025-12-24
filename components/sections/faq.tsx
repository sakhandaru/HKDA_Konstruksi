"use client";

import { Container } from "@/components/layout/container";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of construction projects do you handle?",
    answer:
      "We specialize in both residential and commercial construction, including custom homes, office buildings, retail spaces, and industrial facilities. We also handle renovations and remodeling projects.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary significantly depending on scope and complexity. A custom home might take 8-12 months, while smaller renovations could take 4-8 weeks. We provide detailed timelines during the consultation phase.",
  },
  {
    question: "Do you provide architectural design services?",
    answer:
      "Yes, we offer comprehensive design-build services. Our team includes experienced architects and designers who work closely with our construction teams to ensure your vision is realized efficiently.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. HKDA Konstruksi is fully licensed and carries comprehensive general liability and workers' compensation insurance to protect our clients and our team.",
  },
  {
    question: "How do you handle project budgets?",
    answer:
      "We prioritize transparency. We provide detailed cost estimates upfront and work with you to establish a realistic budget. We communicate any potential changes immediately to avoid surprises.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <Container className="max-w-4xl">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Common Questions
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-border pb-4 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-4 text-left text-lg font-medium hover:text-primary transition-colors"
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-primary" />
                ) : (
                  <Plus className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
