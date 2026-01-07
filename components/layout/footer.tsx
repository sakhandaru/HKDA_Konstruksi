import { Container } from "./container";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-(--structure) text-white pt-20 pb-10 border-t border-(--structure-light)">
      <Container>
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="text-3xl font-black uppercase tracking-tighter">
              HKDA<span className="text-(--signal)">.</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs font-medium">
              Precision engineering and construction services. Building the
              future of Indonesia with structural integrity since 2010.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="hover:text-(--signal) transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-(--signal) transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-(--signal) transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-(--signal) font-mono text-sm tracking-widest mb-6 uppercase">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
              <li>
                <Link
                  href="/"
                  className="hover:text-(--signal) transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-(--signal) transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-(--signal) transition-colors"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-(--signal) transition-colors"
                >
                  Proyek
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-(--signal) font-mono text-sm tracking-widest mb-6 uppercase">
              Expertise
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white transition-colors">
                General Construction
              </li>
              <li className="hover:text-white transition-colors">
                Renovation & Remodeling
              </li>
              <li className="hover:text-white transition-colors">
                Architectural Planning
              </li>
              <li className="hover:text-white transition-colors">
                Commercial Build
              </li>
            </ul>
          </div>

          {/* Contact Info (Replaces Newsletter) */}
          <div>
            <h3 className="text-(--signal) font-mono text-sm tracking-widest mb-6 uppercase">
              Headquarters
            </h3>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-(--signal) shrink-0 mt-1" />
                <p className="leading-relaxed text-gray-300">
                  Menara Karya, 28th Floor
                  <br />
                  Jl. H. R. Rasuna Said Blok X-5
                  <br />
                  Jakarta Selatan, 12950
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-(--signal) shrink-0" />
                <p className="text-gray-300 font-mono tracking-wide">
                  +62 21 5555 1234
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-(--signal) shrink-0" />
                <a
                  href="mailto:info@hkda-konstruksi.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@hkda-konstruksi.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row text-xs text-gray-500 font-mono tracking-wider uppercase">
          <p>
            &copy; {new Date().getFullYear()} HKDA Konstruksi. All rights
            reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
