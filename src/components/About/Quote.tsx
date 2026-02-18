"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GridPattern } from "../magicui/grid-pattern";

const QUOTE =
  "Productivity solutions that capitalize on your network investment.";

function RevealText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <span className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-1">
      {words.map((word, i) => (
        <span key={i} className="relative inline-block overflow-hidden">
          {/* Ghost word (always visible, low opacity) */}
          <span className="text-black/15 dark:text-white/15 select-none">
            {word}
          </span>

          {/* Revealed word sliding up over the ghost */}
          <motion.span
            className="absolute inset-0 text-black dark:text-white"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{
              duration: 0.55,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3 + i * 0.07,
            }}
          >
            {word === "capitalize" ? (
              <span className="relative">
                {word}
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-[2px] rounded-full bg-black/25 dark:bg-white/25 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.3 + i * 0.07 + 0.4,
                  }}
                />
              </span>
            ) : (
              word
            )}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Quote() {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden px-6 md:px-16">
      {/* Grid pattern — radial fade from center */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "opacity-[0.07] dark:opacity-[0.12]",
          "[mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]",
        )}
      >
        <GridPattern
          width={40}
          height={40}
          strokeDasharray={"4 2"}
          className="w-full h-full"
        />
      </div>

      {/* Soft ambient glow blobs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-black/[0.03] dark:bg-white/[0.04] blur-[100px] -z-10" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-black/[0.03] dark:bg-white/[0.04] blur-[80px] -z-10" />

      {/* Main content */}
      <div className="w-full max-w-5xl flex flex-col items-center text-center">
        {/* Top stem line */}
        <motion.div
          className="w-px bg-gradient-to-b from-transparent to-black/20 dark:to-white/20 mb-8"
          initial={{ height: 0 }}
          animate={{ height: 64 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        />

        {/* Opening quote glyph */}
        <motion.span
          className="font-serif text-7xl md:text-9xl leading-none text-black/10 dark:text-white/10 select-none -mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          &ldquo;
        </motion.span>

        {/* Quote text with reveal */}
        <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.5] tracking-tight">
          <RevealText text={QUOTE} />
        </h2>

        {/* Closing quote glyph — offset right */}
        <motion.span
          className="font-serif text-7xl md:text-9xl leading-none text-black/10 dark:text-white/10 select-none -mt-4 self-end mr-8 md:mr-24"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          &rdquo;
        </motion.span>

        {/* Dot-dash divider */}
        <motion.div
          className="flex items-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div className="h-px w-12 bg-black/20 dark:bg-white/20" />
          <div className="w-1 h-1 rounded-full bg-black/30 dark:bg-white/30" />
          <div className="h-px w-12 bg-black/20 dark:bg-white/20" />
        </motion.div>

        {/* Author */}
        <motion.p
          className="mt-4 text-[11px] uppercase tracking-[0.3em] text-black/40 dark:text-white/40 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          Md Shariar Rahman
        </motion.p>

        {/* Bottom stem line */}
        <motion.div
          className="bg-gradient-to-b from-black/20 dark:from-white/20 to-transparent mt-8 w-px"
          initial={{ height: 0 }}
          animate={{ height: 64 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.6 }}
        />
      </div>

      {/* Corner bracket accents */}
      {[
        "top-8 left-8 border-t border-l",
        "top-8 right-8 border-t border-r",
        "bottom-8 left-8 border-b border-l",
        "bottom-8 right-8 border-b border-r",
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute w-8 h-8 border-black/15 dark:border-white/15 ${cls}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
        />
      ))}

      {/* Bottom center label */}
      <motion.span
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.4em] text-black/20 dark:text-white/20 whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        Core Belief
      </motion.span>
    </div>
  );
}
