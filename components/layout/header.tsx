import Link from "next/link";
import { Container } from "./container";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/projects", label: "Proyek" },
  { href: "/services", label: "Layanan" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-xl"
          >
            <span>HKDA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Trigger */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </Container>
    </header>
  );
}
