"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";

const navItems = [
  { label: "Academy", href: "/academy" },
  { label: "Services", href: "/services" },
  { label: "Transform", href: "/transform" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/80 backdrop-blur-xl border-b border-border-subtle">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 h-16">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white-ice"
        >
          AI<span className="text-accent">_</span>ACADEMY
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary hover:text-accent-glow transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact">
            <Button variant="primary" size="sm">
              ปรึกษาโปรเจกต์
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white-ice"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 glass-panel p-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-white-ice hover:text-accent-glow transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-8">
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button variant="primary" className="w-full">
                ปรึกษาโปรเจกต์
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
