"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
type Venture = {
  id: string;
  year: string;
  title: string;
  desc: string;
  image: string;
  imageAlt?: string;
};

export default function VenturesOverview() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const VENTURES: Venture[] = [
    {
      id: "v2025",
      year: "2025",
      title: "BiteBytes",
      desc: "Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage.",
      image: "/ventures/sm-bitebytes.png",
      imageAlt: "colorful product hero",
    },
    {
      id: "v2024",
      year: "2024",
      title: "SM Automobiles",
      desc: "Cut through the yawns, grab your audience’s attention, and turn passive attendees into active participants.",
      image: "/ventures/sm-car.png",
      imageAlt: "dark UI grid mockups",
    },
    {
      id: "v2023",
      year: "2023",
      title: "BY Transport Ltd.",
      desc: "Track the success of your events with deep insights and analytics measured across the entire attendee experience.",
      image: "/ventures/sm-pos.png",
      imageAlt: "analytics dashboard preview",
    },
  ];

  return (
    <section
      className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
      id="ventures"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:items-start">
        {/* Heading on the right for large screens */}
        <header className="lg:col-start-9 lg:col-span-4 text-left lg:text-right">
          <h2 className="text-5xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Ventures at a <br className="hidden md:inline" /> Glance
          </h2>
        </header>

        {/* Ventures list spanning full width under/left of the heading */}
        <div className="lg:col-start-1 lg:col-span-12 space-y-12 ">
          {VENTURES.map((v, idx) => (
            <div key={v.id} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
                {/* Left: year + title + desc */}
                <div className="md:col-span-4 lg:col-span-4">
                  <div className="text-sm text-slate-500">{v.year}</div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-medium">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 max-w-md">
                    {v.desc}
                  </p>
                </div>

                {/* Right: pill image spanning remaining cols */}
                <div className="md:col-span-8 lg:col-span-8">
                  <div
                    className="rounded-[30px] overflow-hidden bg-white cursor-pointer"
                    onMouseEnter={() => setExpandedId(v.id)}
                    onMouseLeave={() => setExpandedId(null)}
                    onClick={() =>
                      setExpandedId(expandedId === v.id ? null : v.id)
                    }
                  >
                    <Image
                      src={v.image}
                      alt={v.imageAlt ?? v.title}
                      width={1200}
                      height={320}
                      className={`w-full object-cover transition-all duration-500 ease-in-out ${
                        expandedId === v.id
                          ? "h-[240px] sm:h-[280px] md:h-[320px] lg:h-[280px] scale-105"
                          : "h-[140px] sm:h-[160px] md:h-[180px] lg:h-[140px] scale-100"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* separator except after last */}
              {idx < VENTURES.length - 1 && (
                <hr className="border-t border-foreground/20 " />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
