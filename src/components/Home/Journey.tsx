import { cn } from "@/lib/utils";
import { GridPattern } from "../magicui/grid-pattern";
import Image from "next/image";
import Link from "next/link";

const ventures = [
  {
    year: "2026",
    items: [
      {
        name: "BnpCandidates",
        desc: "A dedicated platform built around the 2026 national election in Bangladesh. It presents detailed profiles of BNP candidates and key party figures, while offering an interactive feature that lets supporters generate personalized photo frames with their preferred leaders.",
        img: "/ventures/sm-bnp.png",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        name: "BiteBytes",
        desc: "A modern cloud kitchen venture delivering fresh, homemade flavors with efficiency and tech-driven convenience. Focused on bringing restaurant-quality meals straight to your doorstep.",
        img: "/ventures/sm-bitebytes.png",
      },
      {
        name: "SM Travel",
        desc: "Passionate about creating applications that make everyday life feel a bit lighter — tools that just work.",
        img: "/ventures/sm-travel-solution.png",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        name: "SM Automobiles",
        desc: "Passionate about creating applications that make everyday life feel a bit lighter — tools that just work.",
        img: "/ventures/sm-car.png",
      },
      {
        name: "SM POS",
        desc: "An innovative car bidding platform where buyers can bid based on their plans and vendors can list vehicles with verified details — making the buying and selling experience transparent and engaging.",
        img: "/ventures/sm-pos.png",
      },
    ],
  },
];

const totalVentures = ventures.reduce((acc, v) => acc + v.items.length, 0);

export default function Journey() {
  let globalIndex = 0;

  return (
    <div className="relative min-h-screen max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-24 pb-24">
      {/* Grid background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 opacity-[0.07] dark:opacity-[0.12]",
          "[mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_30%,transparent_100%)]",
        )}
      >
        <GridPattern
          width={40}
          height={40}
          strokeDasharray={"4 2"}
          className="w-full h-full"
        />
      </div>

      {/* Header */}
      <div className="mb-20">
        <p className="text-[11px] uppercase tracking-[0.35em] text-black/35 dark:text-white/35 mb-5 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-black/30 dark:bg-white/30" />
          Ventures
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-black dark:text-white">
            The
            <br />
            <em className="text-black/40 dark:text-white/40">Journey.</em>
          </h1>
          <p className="text-[11px] uppercase tracking-[0.3em] text-black/25 dark:text-white/25 tabular-nums md:pb-3">
            {String(totalVentures).padStart(2, "0")} ventures
          </p>
        </div>
      </div>

      {/* Full-width top rule */}
      <div className="w-full h-px bg-black/10 dark:bg-white/10 mb-0" />

      {/* Timeline */}
      <div className="divide-y divide-black/8 dark:divide-white/8">
        {ventures.map((group) => (
          <div
            key={group.year}
            className="grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Year column */}
            <div className="lg:col-span-2 py-10 lg:py-14 lg:pr-8 flex lg:flex-col lg:justify-start gap-4 lg:gap-0">
              <span className="font-serif text-4xl md:text-5xl font-medium text-black/10 dark:text-white/10 leading-none tabular-nums">
                {group.year}
              </span>
            </div>

            {/* Thin vertical separator on desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="h-full w-px bg-black/8 dark:bg-white/8 mx-auto" />
            </div>

            {/* Ventures in this year */}
            <div className="lg:col-span-9 lg:pl-10 divide-y divide-black/5 dark:divide-white/5">
              {group.items.map((item) => {
                globalIndex++;
                const idx = String(globalIndex).padStart(2, "0");

                return (
                  <div
                    key={item.name}
                    className="group py-10 lg:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
                  >
                    {/* Text */}
                    <div className="md:col-span-7 flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] tabular-nums tracking-[0.2em] text-black/20 dark:text-white/20">
                          {idx}
                        </span>
                        <span className="w-4 h-px bg-black/15 dark:bg-white/15" />
                        <h3 className="font-serif text-2xl md:text-3xl font-medium text-black dark:text-white leading-snug">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-base text-black/50 dark:text-white/50 leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="md:col-span-5">
                      <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/8">
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom rule */}
      <div className="w-full h-px bg-black/10 dark:bg-white/10 mt-0 mb-14" />

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <span className="text-[10px] uppercase tracking-[0.35em] text-black/20 dark:text-white/20">
          Md Shariar Rahman
        </span>

        <Link
          href="/about#ventures"
          className="group flex items-center gap-3 border border-black/15 dark:border-white/15 hover:border-black/40 dark:hover:border-white/40 rounded-full px-6 py-3 transition-all duration-300 hover:-translate-y-px"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-black/50 dark:text-white/50 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
            Explore More
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5"
          >
            <path
              d="M2 6H10M7 3L10 6L7 9"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
