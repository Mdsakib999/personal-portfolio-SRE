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

export default function MediaPress() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

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

  const FEATURED_IN = [
    "The Daily Star",
    "Business Insider Bangladesh",
    "Startup Bangla",
  ];

  const getTypeLabel = (type: string) => {
    const labels = {
      press: "Press Coverage",
      interview: "Interview",
      keynote: "Keynote Speech",
      podcast: "Podcast",
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <section className="min-h-screen py-20  px-8  max-w-7xl mx-auto" id="media">
      <div className="mb-20">
        <h2 className="text-5xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Media & <br />
          Public Appearances
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl">
          Press coverage, interviews, and keynote speeches featuring SM Group
          and Md Shariar Rahman.
        </p>
      </div>

      {/* Media Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {MEDIA_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onMouseEnter={() => setExpandedId(item.id)}
            onMouseLeave={() => setExpandedId(null)}
            onClick={() =>
              setExpandedId(expandedId === item.id ? null : item.id)
            }
          >
            {/* Card Container */}
            <div className="bg-background rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Media Thumbnail */}
              <div className="relative overflow-hidden bg-slate-100">
                <Image
                  src={item.thumbnail || "/img/project-1.png"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-[220px] object-cover transition-all duration-300 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-foreground text-xs font-medium text-background mb-3">
                  {getTypeLabel(item.type)}
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <div className="text-xs text-slate-500 mb-3">
                  {item.source} • {item.date}
                </div>
                <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read More
                    <svg
                      className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured In Section */}
      <div className="pt-12 border-t border-foreground/20">
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
      </div>
    </section>
  );
}
