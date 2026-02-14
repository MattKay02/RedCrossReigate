import Link from "next/link";
import { PUB_INFO } from "@/lib/data/hours";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/drinks", label: "Drinks" },
  { href: "/whats-on", label: "What's On" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-light/70">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand & address */}
          <div>
            <h3 className="font-heading text-xl font-bold text-secondary">
              {PUB_INFO.name}
            </h3>
            <p className="mt-2 text-sm">{PUB_INFO.address}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-light">
              Navigation
            </h4>
            <nav className="mt-2 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-light">
              Follow Us
            </h4>
            <div className="mt-2 flex gap-4">
              <a
                href="#"
                className="text-sm transition-colors hover:text-secondary"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm transition-colors hover:text-secondary"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-light/40">
          &copy; {new Date().getFullYear()} {PUB_INFO.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
