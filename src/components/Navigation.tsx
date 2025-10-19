"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all",
        "glass-card",
        scrolled ? "border-b border-[color:var(--gold)]/20" : "border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="text-gold-gradient font-semibold text-lg">SD</a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[color:var(--gold)] after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded glass-card"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-4 top-16 rounded-xl p-4 glass-card">
          <div className="flex flex-col divide-y divide-white/10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-white/90"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}


