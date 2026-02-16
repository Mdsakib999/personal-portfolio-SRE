"use client";

import Image from "next/image";
import React, { useState } from "react";

type Venture = {
  id: string;
  year: string;
  title: string;
  desc: string;
  image: string;
  imageAlt?: string;
  tag?: string;
};

export default function VenturesOverview() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const VENTURES: Venture[] = [
    {
      id: "v2026",
      year: "2026",
      title: "BnpCandidates",
      desc: "A dedicated platform built around the 2026 national election in Bangladesh. It presents detailed profiles of BNP candidates and key party figures, while offering an interactive feature that lets supporters generate personalized photo frames with their preferred leaders.",
      image: "/ventures/sm-bnp.png",
      imageAlt: "BnpCandidates platform preview",
      tag: "Election Platform",
    },
    {
      id: "v2025",
      year: "2025",
      title: "BiteBytes",
      desc: "Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage.",
      image: "/ventures/sm-bitebytes.png",
      imageAlt: "BiteBytes landing page",
      tag: "Landing Page",
    },
    {
      id: "v2024",
      year: "2024",
      title: "SM Automobiles",
      desc: "Cut through the yawns, grab your audience's attention, and turn passive attendees into active participants.",
      image: "/ventures/sm-car.png",
      imageAlt: "SM Automobiles SAAS interface",
      tag: "SAAS Platform",
    },
    {
      id: "v2023",
      year: "2023",
      title: "BY Transport Ltd.",
      desc: "Track the success of your events with deep insights and analytics measured across the entire attendee experience.",
      image: "/ventures/sm-pos.png",
      imageAlt: "BY Transport dashboard",
      tag: "Dashboard",
    },
  ];

  return (
    <section
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden bg-white dark:bg-gray-900"
      id="ventures"
    >
      <div className="max-w-[1600px] mx-auto relative">
        {/* Header Section */}
        <div className="mb-16 sm:mb-20 lg:mb-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
            {/* Left side - Eyebrow + Description */}
            <div className="lg:max-w-xl space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800">
                <span className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></span>
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-gray-900 dark:text-white">
                  Our Portfolio
                </span>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Showcasing our journey through innovation, one project at a time. Each venture represents
                our commitment to excellence and cutting-edge solutions.
              </p>
            </div>

            {/* Right side - Large heading */}
            <div className="lg:text-right">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-gray-900 dark:text-white">
                Ventures
                <br />
                <span className="text-gray-900 dark:text-white">
                  at a Glance
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Ventures Timeline */}
        <div className="space-y-0">
          {VENTURES.map((v, idx) => {
            const isExpanded = expandedId === v.id;
            const isHovered = hoveredId === v.id;

            return (
              <article
                key={v.id}
                className={`group relative transition-all duration-700 ${isExpanded ? "mb-12 sm:mb-16 lg:mb-20" : "mb-0"
                  }`}
                onMouseEnter={() => setHoveredId(v.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Year marker - Timeline style */}
                <div className="absolute left-0 top-0 hidden lg:flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 border-2 ${isHovered
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white scale-110"
                      : "bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-300 border-gray-200 dark:border-gray-800"
                      }`}
                  >
                    {v.year}
                  </div>
                  {idx < VENTURES.length - 1 && (
                    <div className="w-0.5 h-32 bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-800 dark:to-transparent mt-4"></div>
                  )}
                </div>

                {/* Main Content */}
                <div className="lg:pl-28">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start p-6 sm:p-8 lg:p-10 rounded-3xl transition-all duration-500 cursor-pointer border-2 ${isHovered
                      ? "bg-gray-50 dark:bg-gray-950 shadow-md shadow-white"
                      : "bg-white dark:bg-gray-900 shadow shadow-gray-400 border-transparent hover:border-gray-200 dark:hover:border-gray-800"
                      }`}
                    onClick={() =>
                      setExpandedId(expandedId === v.id ? null : v.id)
                    }
                  >
                    {/* Left: Content */}
                    <div className="lg:col-span-5 space-y-4 lg:space-y-6">
                      {/* Mobile year */}
                      <div className="lg:hidden inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800">
                        <span className="text-xs font-bold text-gray-900 dark:text-white">
                          {v.year}
                        </span>
                      </div>

                      {/* Tag */}
                      {v.tag && (
                        <div className="inline-flex items-center gap-2">
                          <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-500">
                            {v.tag}
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-gray-900 dark:text-white transition-all duration-500">
                        {v.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-sm sm:text-base leading-relaxed transition-all duration-500 ${isExpanded
                          ? "text-gray-700 dark:text-gray-300"
                          : "text-gray-600 dark:text-gray-400 line-clamp-3"
                          }`}
                      >
                        {v.desc}
                      </p>

                      {/* Expand indicator */}
                      <div className="flex items-center gap-2 pt-2">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {isExpanded ? "Show less" : "View details"}
                        </span>
                        <span
                          className={`text-xl transition-transform duration-500 ${isExpanded ? "rotate-180" : "rotate-0"
                            }`}
                        >
                          ↓
                        </span>
                      </div>
                    </div>

                    {/* Right: Image */}
                    <div className="lg:col-span-7 relative">
                      <div
                        className={`relative rounded-2xl overflow-hidden transition-all duration-700 shadow-lg ${isHovered
                          ? "shadow-gray-300 dark:shadow-white"
                          : ""
                          }`}
                      >
                        {/* Gradient overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 transition-opacity duration-500 ${isHovered ? "opacity-60" : "opacity-30"
                            }`}
                        ></div>

                        {/* Image with scroll effect */}
                        <div
                          className={`relative transition-all duration-700 overflow-hidden ${isExpanded
                            ? "h-[280px] sm:h-[350px] lg:h-[400px]"
                            : "h-[200px] sm:h-[240px] lg:h-[280px]"
                            }`}
                        >
                          <div className={`absolute inset-0 transition-transform duration-[2000ms] ease-out ${isHovered ? "translate-y-[-25%] md:translate-y-[-50%] lg:translate-y-[-60%]" : "translate-y-0"
                            }`}>
                            <Image
                              src={v.image}
                              alt={v.imageAlt ?? v.title}
                              width={1200}
                              height={800}
                              className="w-full h-auto object-cover object-top"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                            />
                          </div>
                        </div>

                        {/* Badge on image */}
                        <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-800">
                          <span className="text-xs font-bold text-gray-900 dark:text-white">
                            #{String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator line */}
                {idx < VENTURES.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent my-8 lg:my-12 lg:ml-28"></div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800;900&display=swap');

        section {
          font-family: 'Archivo', system-ui, -apple-system, sans-serif;
        }
      `}</style>
    </section>
  );
}