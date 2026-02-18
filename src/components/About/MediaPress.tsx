"use client";

import React, { useState } from "react";
import Image from "next/image";

type MediaItem = {
  id: string;
  type: "press" | "interview" | "keynote" | "podcast";
  title: string;
  source: string;
  date: string;
  description: string;
  link?: string;
  thumbnail?: string;
};

const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "m1",
    type: "press",
    title: "SM Group's Vision for Digital Transformation in Bangladesh",
    source: "The Daily Star",
    date: "Coming Soon",
    description:
      "An in-depth look at how SM Group is revolutionizing the tech landscape in Bangladesh through innovative solutions and strategic partnerships.",
    thumbnail: "/img/project-1.png",
  },
  {
    id: "m2",
    type: "interview",
    title: "Building a Tech Empire: Interview with CEO Md Shariar Rahman",
    source: "Business Insider Bangladesh",
    date: "Coming Soon",
    description:
      "Exclusive interview discussing entrepreneurship, leadership philosophy, and the future of technology in emerging markets.",
    thumbnail: "/img/project-2.png",
  },
  {
    id: "m3",
    type: "keynote",
    title: "Empowering the Next Generation of Entrepreneurs",
    source: "Startup Bangla Summit",
    date: "Coming Soon",
    description:
      "Keynote speech on nurturing youth entrepreneurship and creating sustainable business ecosystems in Bangladesh.",
    thumbnail: "/img/project-1.png",
  },
];

const TYPE_LABELS: Record<string, string> = {
  press: "Press",
  interview: "Interview",
  keynote: "Keynote",
  podcast: "Podcast",
};

export default function MediaPress() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      className="min-h-screen py-24 px-6 lg:px-8 max-w-7xl mx-auto"
      id="media"
    >
      {/* Header */}
      <div className="mb-20">
        <p className="text-[11px] uppercase tracking-[0.35em] text-black/50 dark:text-white/35 mb-5 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-black/40 dark:bg-white/30" />
          Media & Press
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-black dark:text-white">
            Public
            <br />
            <em className="text-black/35 dark:text-white/35">Appearances.</em>
          </h2>
          <p className="text-[11px] uppercase tracking-[0.3em] text-black/25 dark:text-white/20 md:pb-3 tabular-nums">
            {String(MEDIA_ITEMS.length).padStart(2, "0")} features
          </p>
        </div>
        <p className="mt-6 text-base text-black/55 dark:text-white/45 max-w-xl leading-relaxed">
          Press coverage, interviews, and keynote speeches featuring SM Group
          and Md Shariar Rahman.
        </p>
      </div>

      {/* Full-width top rule */}
      <div className="w-full h-px bg-black/10 dark:bg-white/10 mb-0" />

      {/* Media list */}
      <div className="divide-y divide-black/8 dark:divide-white/8">
        {MEDIA_ITEMS.map((item, i) => {
          const isHovered = hoveredId === item.id;
          const idx = String(i + 1).padStart(2, "0");

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 items-start cursor-default"
            >
              {/* Index + type */}
              <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-3 md:gap-4 md:pt-1">
                <span className="text-[10px] tabular-nums tracking-[0.2em] text-black/25 dark:text-white/20">
                  {idx}
                </span>
              </div>

              {/* Image */}
              <div className="md:col-span-3 order-first md:order-none">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/8">
                  <Image
                    src={item.thumbnail || "/img/project-1.png"}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div
                    className={`absolute inset-0 bg-black/0 transition-colors duration-500 ${isHovered ? "bg-black/8" : ""}`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-6 flex flex-col gap-4">
                {/* Type tag + source */}
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-black/40 dark:text-white/30 border border-black/15 dark:border-white/10 rounded-full px-3 py-1">
                    {TYPE_LABELS[item.type]}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-black/15 dark:bg-white/15" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-black/35 dark:text-white/25">
                    {item.source}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-serif text-xl md:text-2xl font-medium leading-snug transition-colors duration-300 ${isHovered ? "text-black dark:text-white" : "text-black/70 dark:text-white/65"}`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-black/50 dark:text-white/40 leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>

              {/* Right — date + arrow */}
              <div className="md:col-span-2 flex md:flex-col md:items-end md:justify-between h-full gap-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-black/30 dark:text-white/20">
                  {item.date}
                </span>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors duration-200 group/link"
                  >
                    Read
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="group-hover/link:translate-x-0.5 transition-transform duration-200"
                    >
                      <path
                        d="M2 6H10M7 3L10 6L7 9"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`text-black/15 dark:text-white/15 transition-all duration-300 ${isHovered ? "text-black/30 dark:text-white/30 translate-x-1" : ""}`}
                  >
                    <path
                      d="M3 8H13M9 4L13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom rule + footer */}
      <div className="w-full h-px bg-black/10 dark:bg-white/10 mt-0 mb-8" />
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.35em] text-black/20 dark:text-white/15">
          Md Shariar Rahman
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-black/15 dark:text-white/10">
          Media & Press
        </span>
      </div>

      {/* Commented section kept as-is */}
      {/* <div className="pt-12 border-t border-foreground/20">
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-slate-600 dark:text-white mb-8">
            Featured in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {FEATURED_IN.map((outlet, idx) => (
              <span
                key={idx}
                className="text-2xl md:text-3xl font-bold text-slate-500 dark:text-slate-300 hover:text-slate-800 transition-colors cursor-pointer"
              >
                {outlet}
              </span>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
