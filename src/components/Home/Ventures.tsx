"use client";

import Link from "next/link";
import React from "react";

const ventures = [
  { title: "BnpCandidates", subtitle: "Election Outreach Program", image: "/ventures/sm-bnp.png" },
  { title: "BiteBytes", subtitle: "Landing Page", image: "/ventures/sm-bitebytes.png" },
  { title: "SM Automobiles", subtitle: "SAAS Platform", image: "/ventures/sm-car.png" },
  { title: "SM POS", subtitle: "Dashboard", image: "/ventures/sm-pos.png" },
];

export default function SelectedVentures() {
  return (
    <section id="ventures" className="max-w-7xl mx-auto py-20 overflow-hidden my-20 md:my-28">
      <div>
        {/* header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            Selected Ventures
          </h2>

          {/* your button style */}
          <Link href="/about">
            <button className="cursor-pointer group relative overflow-hidden text-foreground border border-slate-300 dark:border-slate-700 px-4 md:px-6 py-2 md:py-2.5 rounded-full flex items-center justify-center whitespace-nowrap text-sm md:text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-300/40 dark:hover:shadow-slate-900/40">
              <span className="absolute inset-0 bg-slate-900 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-slate-900">
                Learn More
              </span>
              <svg
                className="relative z-10 w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-white dark:group-hover:text-slate-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>

        {/* paragraph */}
        <div className="mt-4 text-gray-400 sm:text-right px-5">
          <p className="max-w-md sm:ml-auto text-sm md:text-base">
            passionate about creating applications that make everyday life feel
            a bit lighter—tools that just work, quietly in the background.
          </p>
        </div>

        {/* carousel */}
        <div className="relative mt-14">
          {/* fades now RESPECT container width */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex gap-4 sm:gap-6 w-max animate-marquee">
            {[...ventures, ...ventures].map((venture, index) => (
              <div
                key={index}
                className="group relative shrink-0 w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px] overflow-hidden rounded-2xl transition-all duration-500"
              >
                <img
                  src={venture.image}
                  alt={venture.title}
                  className="h-[280px] sm:h-[320px] md:h-[360px] w-full object-cover transition-transform duration-700"
                />

                <div className="mt-3 px-1">
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    {venture.subtitle}
                  </p>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                    {venture.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}