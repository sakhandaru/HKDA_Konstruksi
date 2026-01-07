import { Container } from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about HKDA Konstruksi, our history, and our values.",
};

export default function AboutPage() {
  return (
    <Container className="py-24 bg-(--background)">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        {/* Sticky Header */}
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <span className="text-sm font-mono font-bold uppercase tracking-widest text-(--signal)">
            01. FIRM PROFILE
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl font-black uppercase tracking-tighter text-(--foreground) leading-[0.9]">
            History <br /> & Vision
          </h1>
        </div>

        {/* Content */}
        <div className="lg:w-2/3 space-y-12">
          {/* Intro */}
          <div className="prose max-w-none text-lg text-(--muted-foreground) font-medium leading-relaxed">
            <p>
              HKDA Konstruksi has been a trusted partner in the construction
              industry for over a decade. We specialize in delivering
              high-quality residential and commercial projects that stand the
              test of time.
            </p>
            <p>
              Our team of experienced engineers, architects, and builders work
              together to bring your vision to life. From the initial concept to
              the final handover, we are committed to transparency, quality, and
              customer satisfaction.
            </p>
          </div>

          <hr className="border-(--border)" />

          {/* Vision & Mission Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-(--foreground)">
                Our Vision
              </h3>
              <p className="text-(--muted-foreground)">
                To be the leading construction firm known for innovation and
                sustainable building practices, setting the standard for
                structural integrity in Indonesia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-(--foreground)">
                Our Mission
              </h3>
              <ul className="space-y-4">
                {[
                  "Deliver superior quality in every project.",
                  "Prioritize safety and sustainability.",
                  "Foster long-term relationships.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 bg-(--signal) shrink-0" />
                    <span className="text-(--muted-foreground)">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
