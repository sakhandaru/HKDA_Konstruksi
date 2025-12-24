import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ServicesPreview } from "@/components/sections/services-preview";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <FeaturedProjects />
      <ServicesPreview />
    </div>
  );
}
