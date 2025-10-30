"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ThemeToggle } from "@/app/theme-toggle";

export default function Navbar() {
  const pathname = usePathname() || "/";

  const normalize = (p: string) => (p === "/" ? "/" : p.replace(/\/$/, ""));

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const THRESHOLD = 80;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    // run once on mount
    setScrolled(
      typeof window !== "undefined" ? window.scrollY > THRESHOLD : false
    );

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgClass = scrolled
    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
    : "bg-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${bgClass}`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl md:text-xl font-semibold tracking-tight hover:opacity-90"
          >
            sr.
          </Link>
        </div>

        <ul className="flex md:gap-10 items-center">
          {navItems.map((item) => {
            const isActive = normalize(pathname) === normalize(item.href);
            return (
              <li key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center text-sm transition-all py-1 px-1 ${
                    isActive ? "font-medium" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`mr-2 inline-block w-2 h-2 rounded-full transition-all duration-200 transform ${
                      isActive
                        ? "opacity-100 bg-current scale-100"
                        : "opacity-0 scale-90"
                    }`}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
