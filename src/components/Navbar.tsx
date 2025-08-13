"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { ThemeToggle } from "@/app/theme-toggle"

export default function Navbar() {
  const pathname = usePathname() || "/"

  // normalize to avoid mismatches with trailing slashes
  const normalize = (p: string) => (p === "/" ? "/" : p.replace(/\/$/, ""))

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between bg-transparent">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-lg md:text-xl font-semibold  tracking-tight hover:opacity-90">
            sr.
          </Link>
        </div>

        {/* Center: desktop nav */}
        <ul className="flex gap-5 md:gap-10 items-center">
          {navItems.map((item) => {
            const isActive = normalize(pathname) === normalize(item.href)

            return (
              <li key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center text-sm transition-all py-1 px-1 ${
                    isActive ? "font-medium" : "opacity-80 hover:opacity-100 "
                  }`}
                >

                  <span
                    aria-hidden
                    className={`mr-2 inline-block w-2 h-2 rounded-full transition-all duration-200 transform ${
                      isActive ? "opacity-100 bg-current scale-100" : "opacity-0 scale-90"
                    }`}
                  />

                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right: CTA + theme toggle */}
        <div className="flex items-center gap-2">
          <div className="block">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
