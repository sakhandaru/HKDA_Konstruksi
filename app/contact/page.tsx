import { Container } from "@/components/layout/container";
import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with HKDA Konstruksi for your next project.",
};

export default function ContactPage() {
  return (
    <Container className="py-24 bg-(--background) min-h-[80vh]">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column: Heading */}
        <div className="lg:w-1/2">
          <span className="text-sm font-mono font-bold uppercase tracking-widest text-(--signal)">
            06. CONTACT BASE
          </span>
          <h1 className="mt-4 text-5xl md:text-7xl font-black uppercase tracking-tighter text-(--foreground) leading-[0.9]">
            Let's <br /> Build <br />{" "}
            <span className="text-(--structure-light)">Structure</span>.
          </h1>
          <p className="mt-8 text-lg text-(--muted-foreground) max-w-md font-medium">
            Ready to initiate your project? Connect with our engineering team
            for a consultation.
          </p>
        </div>

        {/* Right Column: Details */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-12">
          {/* Address */}
          <div className="flex gap-6 group">
            <div className="w-12 h-12 border border-(--border) flex items-center justify-center bg-white shrink-0 group-hover:border-(--signal) transition-colors">
              <MapPin className="w-6 h-6 text-(--structure)" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-2">
                Headquarters
              </h3>
              <p className="text-(--muted-foreground) leading-relaxed">
                Menara Karya, 28th Floor
                <br />
                Jl. H. R. Rasuna Said Blok X-5
                <br />
                Jakarta Selatan, 12950
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-6 group">
            <div className="w-12 h-12 border border-(--border) flex items-center justify-center bg-white shrink-0 group-hover:border-(--signal) transition-colors">
              <Phone className="w-6 h-6 text-(--structure)" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-2">
                Direct Line
              </h3>
              <p className="text-(--muted-foreground) leading-relaxed font-mono">
                +62 21 5555 1234
              </p>
              <p className="text-xs text-(--muted-foreground) mt-1 uppercase tracking-wider">
                Mon-Fri, 09:00 - 17:00
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-6 group">
            <div className="w-12 h-12 border border-(--border) flex items-center justify-center bg-white shrink-0 group-hover:border-(--signal) transition-colors">
              <Mail className="w-6 h-6 text-(--structure)" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-2">
                Electronic Mail
              </h3>
              <a
                href="mailto:info@hkda-konstruksi.com"
                className="text-(--muted-foreground) hover:text-(--signal) transition-colors font-mono text-lg underline underline-offset-4"
              >
                info@hkda-konstruksi.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
