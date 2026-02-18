"use client";
import { GridPattern } from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Banner() {
  return (
    <div className="mt-12 relative h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20 md:pt-16">
      {/* Grid */}
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "absolute inset-0 -z-10 opacity-[0.07] dark:opacity-[0.12]",
          "[mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]",
        )}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-black/[0.02] dark:bg-white/[0.03] blur-[120px] -z-10" />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-black/15 dark:border-white/15 pointer-events-none" />
      <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-black/15 dark:border-white/15 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-10 h-10 border-b border-l border-black/15 dark:border-white/15 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-10 h-10 border-b border-r border-black/15 dark:border-white/15 pointer-events-none" />

      {/* Main content */}
      <div className="flex flex-col items-center text-center px-6 z-10">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="h-px w-10 bg-black/25 dark:bg-white/25" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-black/50 dark:text-white/40">
            Entrepreneur & Visionary Leader
          </span>
          <div className="h-px w-10 bg-black/25 dark:bg-white/25" />
        </motion.div>

        {/* Main name — giant serif */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-medium leading-[1.0] tracking-tight text-black dark:text-white"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3,
            }}
          >
            Md Shariar
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-medium leading-[1.0] tracking-tight text-black/30 dark:text-white/25 italic"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.45,
            }}
          >
            Rahman.
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          className="text-sm md:text-base text-black/50 dark:text-white/45 max-w-xs md:max-w-sm leading-relaxed mb-10 font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          Turning ideas into scalable businesses
          <br />
          and lasting impact.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="#ventures">
            <button className="group relative flex items-center gap-4 border border-black/20 dark:border-white/15 hover:border-black/50 dark:hover:border-white/40 rounded-full pl-7 pr-2 py-2 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
              <span className="absolute inset-0 bg-black dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <span className="relative z-10 text-[11px] uppercase tracking-[0.25em] text-black/65 dark:text-white/55 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                Explore My Ventures
              </span>
              <span className="relative z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black dark:bg-white text-white dark:text-black group-hover:bg-white dark:group-hover:bg-black group-hover:text-black dark:group-hover:text-white border border-black/10 dark:border-white/10 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom — scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-black/25 dark:text-white/20">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-black/30 dark:from-white/25 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Left side vertical text */}
      <motion.div
        className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-black/20 dark:to-white/15" />
        <span className="text-[9px] uppercase tracking-[0.4em] text-black/25 dark:text-white/20 [writing-mode:vertical-rl] rotate-180">
          Dhaka, Bangladesh
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-black/20 dark:from-white/15 to-transparent" />
      </motion.div>

      {/* Right side vertical text */}
      <motion.div
        className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-black/20 dark:to-white/15" />
        <span className="text-[9px] uppercase tracking-[0.4em] text-black/25 dark:text-white/20 [writing-mode:vertical-rl]">
          CEO — SMIT Solution
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-black/20 dark:from-white/15 to-transparent" />
      </motion.div>
    </div>
  );
}
