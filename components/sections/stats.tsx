"use client";

import { Container } from "@/components/layout/container";

const stats = [
  { label: "Completed Projects", value: "500+", code: "SEQ-01" },
  { label: "On-Time Delivery", value: "100%", code: "SEQ-02" },
  { label: "Project Value (USD)", value: "$1.2B", code: "SEQ-03" },
  { label: "Client Rate", value: "99.8%", code: "SEQ-04" },
];

export function Stats() {
  return (
    <section className="bg-[var(--background)] border-b border-[var(--border)]">
      <Container className="p-0 max-w-none">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                relative py-16 px-6 flex flex-col items-center justify-center text-center group hover:bg-[var(--muted)]/50 transition-colors
                border-b lg:border-b-0 border-[var(--border)]
                ${index % 2 === 0 ? "border-r border-[var(--border)]" : ""} 
                lg:border-r lg:last:border-r-0
              `}
            >
              {/* Corner Decors */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-[var(--foreground)] opacity-20" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-[var(--foreground)] opacity-20" />

              <span className="inline-block py-1 px-2 mb-6 text-[10px] font-mono tracking-widest text-[var(--signal)] bg-[var(--signal)]/5 rounded">
                {stat.code}
              </span>

              <span className="text-5xl lg:text-6xl font-black text-[var(--foreground)] tracking-tighter mb-3">
                {stat.value}
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                {stat.label}
              </span>

              {/* Hover Indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--signal)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
