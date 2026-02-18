"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type ValueItem = {
  id: string;
  title: string;
  description: string;
  imgAlt?: string;
  image: string;
  index: string;
};

const ITEMS: ValueItem[] = [
  {
    id: "innovation",
    index: "01",
    title: "Innovation as a Culture",
    description:
      "Fostering a workplace where creativity thrives and bold ideas are encouraged. We embrace experimentation and continuous improvement to stay ahead in a rapidly evolving world.",
    imgAlt: "innovation and creativity",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    id: "integrity",
    index: "02",
    title: "Integrity in Leadership",
    description:
      "Leading with transparency, accountability, and ethical decision-making. Building trust through consistent actions that align with our values and commitments.",
    imgAlt: "leadership and integrity",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
  },
  {
    id: "global",
    index: "03",
    title: "Global Vision, Local Impact",
    description:
      "Thinking globally while acting locally. Creating solutions that scale internationally while making meaningful differences in the communities we serve.",
    imgAlt: "global vision local impact",
    image: "https://images.pexels.com/photos/1595386/pexels-photo-1595386.jpeg",
  },
  {
    id: "empowering",
    index: "04",
    title: "Empowering Youth Entrepreneurs",
    description:
      "Investing in the next generation of leaders and innovators. Providing mentorship, resources, and opportunities for young entrepreneurs to turn their dreams into reality.",
    imgAlt: "empowering youth entrepreneurs",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  },
];

export default function ValuesClient() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const active = ITEMS[activeIndex];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight")
        setActiveIndex((s) => (s + 1) % ITEMS.length);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft")
        setActiveIndex((s) => (s - 1 + ITEMS.length) % ITEMS.length);
      if (e.key === "Home") setActiveIndex(0);
      if (e.key === "End") setActiveIndex(ITEMS.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden px-6 sm:px-10 lg:px-16 py-24 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Background large ghost index number */}
      <AnimatePresence mode="wait">
        <motion.span
          key={active.index}
          className="pointer-events-none select-none absolute -right-6 top-1/2 -translate-y-1/2 font-serif text-[22rem] leading-none text-black/[0.03] dark:text-white/[0.03] hidden lg:block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {active.index}
        </motion.span>
      </AnimatePresence>

      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <motion.p
          className="text-[11px] uppercase tracking-[0.35em] text-black/40 dark:text-white/40 mb-4 flex items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block w-6 h-px bg-black/30 dark:bg-white/30" />
          Leadership Philosophy
        </motion.p>
        <motion.h2
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-black dark:text-white"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Leading With
          <br />
          <em className="text-black/50 dark:text-white/50">Purpose.</em>
        </motion.h2>
        <motion.p
          className="mt-6 text-base md:text-lg text-black/55 dark:text-white/55 leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Md Shariar Rahman leads with a philosophy rooted in innovation,
          empathy, and strategic growth — empowering teams and building systems
          that scale with integrity.
        </motion.p>
      </div>

      {/* Divider */}
      <motion.div
        className="w-full h-px bg-black/10 dark:bg-white/10 mb-12"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Core Values grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
        {/* Left — value list */}
        <div className="lg:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-black/30 dark:text-white/30 mb-6">
            Core Values
          </p>
          <ul className="divide-y divide-black/8 dark:divide-white/8">
            {ITEMS.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveIndex(i)}
                    className="group w-full text-left py-5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/20 rounded-sm"
                    aria-pressed={isActive}
                  >
                    <div className="flex items-center gap-4">
                      {/* Active indicator dot */}
                      <span className="relative flex items-center justify-center w-5 h-5 shrink-0">
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? "bg-black dark:bg-white scale-125" : "bg-black/20 dark:bg-white/20"}`}
                        />
                        {isActive && (
                          <motion.span
                            className="absolute inset-0 rounded-full border border-black/30 dark:border-white/30"
                            layoutId="ring"
                            transition={{ duration: 0.35, ease: "easeOut" }}
                          />
                        )}
                      </span>
                      <span
                        className={`font-serif text-lg md:text-xl transition-all duration-300 leading-snug ${isActive ? "text-black dark:text-white" : "text-black/35 dark:text-white/35 group-hover:text-black/60 dark:group-hover:text-white/60"}`}
                      >
                        {item.title}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] tabular-nums tracking-widest transition-opacity duration-300 shrink-0 ${isActive ? "opacity-40" : "opacity-0"}`}
                    >
                      {item.index}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Center — image */}
        <div className="lg:col-span-4 flex justify-center px-0 lg:px-8">
          <div className="relative w-full max-w-xs">
            {/* Decorative offset border */}
            <div className="absolute -inset-3 border border-black/8 dark:border-white/8 rounded-2xl pointer-events-none" />

            <div className="relative rounded-xl overflow-hidden aspect-[3/4] w-full shadow-2xl shadow-black/10 dark:shadow-black/30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Image
                    src={active.image}
                    alt={active.imgAlt ?? "values image"}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Index label on image */}
              <div className="absolute bottom-4 left-4 z-10">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={active.index}
                    className="text-white/70 text-[10px] uppercase tracking-[0.3em] font-medium"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    {active.index} / {String(ITEMS.length).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-1.5 mt-5">
              {ITEMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="relative h-1 rounded-full overflow-hidden bg-black/10 dark:bg-white/10 transition-all duration-300 focus-visible:outline-none"
                  style={{ width: i === activeIndex ? 24 : 8 }}
                >
                  {i === activeIndex && (
                    <motion.span
                      className="absolute inset-0 bg-black dark:bg-white rounded-full"
                      layoutId="dot"
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right — description */}
        <div className="lg:col-span-4 lg:pl-8 lg:border-l border-black/8 dark:border-white/8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              aria-live="polite"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/30 dark:text-white/30 mb-4">
                About
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-black dark:text-white leading-snug mb-5">
                {active.title}
              </h3>
              <div className="w-8 h-px bg-black/20 dark:bg-white/20 mb-5" />
              <p className="text-base text-black/55 dark:text-white/55 leading-relaxed">
                {active.description}
              </p>

              {/* Navigation arrows */}
              <div className="flex gap-3 mt-10">
                <button
                  onClick={() =>
                    setActiveIndex((s) => (s - 1 + ITEMS.length) % ITEMS.length)
                  }
                  className="w-10 h-10 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center text-black/40 dark:text-white/40 hover:border-black/40 dark:hover:border-white/40 hover:text-black dark:hover:text-white transition-all duration-200 focus-visible:outline-none"
                  aria-label="Previous value"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M9 2L4 7L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveIndex((s) => (s + 1) % ITEMS.length)}
                  className="w-10 h-10 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center text-black/40 dark:text-white/40 hover:border-black/40 dark:hover:border-white/40 hover:text-black dark:hover:text-white transition-all duration-200 focus-visible:outline-none"
                  aria-label="Next value"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M5 2L10 7L5 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
