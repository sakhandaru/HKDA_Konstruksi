import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { ServicesPreview } from "@/components/sections/services-preview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { FAQ } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <Stats />
      <About />
      <ServicesPreview />
      <FeaturedProjects />
      <CTA />
      <FAQ />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
