"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/Button";

const footerLinks = {
  pillars: [
    { label: "Academy", href: "/academy" },
    { label: "Services", href: "/services" },
    { label: "Transform", href: "/transform" },
    { label: "Resources", href: "/resources" },
  ],
  resources: [
    { label: "คอร์สทั้งหมด", href: "/academy/courses" },
    { label: "Workshop", href: "/academy/workshops" },
    { label: "บทความ", href: "/resources/blog" },
    { label: "E-book", href: "/resources/ebooks" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Community", href: "/community" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-bg-deep border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-bold text-white-ice">
              AI<span className="text-accent">_</span>ACADEMY
            </Link>
            <p className="mt-3 text-sm text-text-muted max-w-xs leading-relaxed">
              ระบบพัฒนาความคิด ทักษะ และกระบวนการทำงานด้วย AI ตั้งแต่บุคคลถึงองค์กร
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Pillars
            </p>
            <ul className="space-y-2.5">
              {footerLinks.pillars.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-glow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Resources
            </p>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-glow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-glow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} AI ACADEMY — All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@aiacademy.ai"
              className="text-text-muted hover:text-accent-glow transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="#"
              className="text-text-muted hover:text-accent-glow transition-colors"
              aria-label="LINE"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
