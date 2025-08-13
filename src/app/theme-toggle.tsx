"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sun, MoonStar } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-transparent" aria-hidden />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-8 p-1 rounded-full overflow-hidden"
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* Track / background color */}
      <span
        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
          isDark ? "bg-slate-700/80" : "bg-gray-200/70"
        }`}
        aria-hidden
      />

      {/* Sliding knob */}
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ease-out transform ${
          isDark ? "translate-x-6" : "translate-x-0"
        } ${isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"}`}
      >
        {/* Sun icon (visible in light) */}
        <Sun
          className={`absolute w-4 h-4 transition-all duration-250 ease-out transform ${
            isDark ? "opacity-0 scale-75 -rotate-12" : "opacity-100 scale-100 rotate-0"
          }`}
        />

        {/* Moon icon (visible in dark) */}
        <MoonStar
          className={`absolute w-4 h-4 transition-all duration-250 ease-out transform ${
            isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-12"
          }`}
        />
      </span>
    </Button>
  )
}
