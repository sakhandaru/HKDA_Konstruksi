import { Container } from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about HKDA Konstruksi, our history, and our values.",
};

export default function AboutPage() {
  return (
    <Container className="py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About HKDA Konstruksi
          </h1>
          <p className="text-muted-foreground text-lg">
            Building the future with integrity and excellence.
          </p>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            HKDA Konstruksi has been a trusted partner in the construction
            industry for over a decade. We specialize in delivering high-quality
            residential and commercial projects that stand the test of time.
          </p>
          <p>
            Our team of experienced engineers, architects, and builders work
            together to bring your vision to life. From the initial concept to
            the final handover, we are committed to transparency, quality, and
            customer satisfaction.
          </p>
          <h3>Our Vision</h3>
          <p>
            To be the leading construction firm known for innovation and
            sustainable building practices.
          </p>
          <h3>Our Mission</h3>
          <ul>
            <li>Deliver superior quality in every project.</li>
            <li>Prioritize safety and sustainability.</li>
            <li>
              Foster long-term relationships with our clients and partners.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
