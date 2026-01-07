import Link from "next/link";
import { Container } from "./container";
import { Button } from "../ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { services } from "@/data/services";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/projects", label: "Proyek" },
  { href: "/services", label: "Layanan", isDropdown: true },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-(--border) bg-(--background)/95 backdrop-blur supports-[backdrop-filter]:bg-(--background)/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 font-black text-2xl uppercase tracking-tighter"
          >
            <span>HKDA</span>
            <span className="text-(--signal)">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.label} className="relative group">
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors hover:text-(--signal) text-(--foreground)"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </Link>
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full pt-4 w-64 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                      <div className="bg-(--structure) border border-(--border) shadow-xl flex flex-col p-2">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block px-4 py-3 text-sm text-(--structure-foreground) hover:bg-(--signal) hover:text-white transition-colors uppercase tracking-tight font-medium"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-wider transition-colors hover:text-(--signal) text-(--foreground)"
                >
                  {link.label}
                </Link>
              );
            })}
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
