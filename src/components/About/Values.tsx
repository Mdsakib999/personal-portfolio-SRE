// components/ValuesClient.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ValueItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imgAlt?: string;
};

export default function ValuesClient() {
  const ITEMS: ValueItem[] = [
    {
      id: "innovation",
      title: "Innovation as a Culture",
      description:
        "Fostering a workplace where creativity thrives and bold ideas are encouraged. We embrace experimentation and continuous improvement to stay ahead in a rapidly evolving world.",
      imgAlt: "innovation and creativity",
    },
    {
      id: "integrity",
      title: "Integrity in Leadership",
      description:
        "Leading with transparency, accountability, and ethical decision-making. Building trust through consistent actions that align with our values and commitments.",
      imgAlt: "leadership and integrity",
    },
    {
      id: "global",
      title: "Global Vision with Local Impact",
      description:
        "Thinking globally while acting locally. Creating solutions that scale internationally while making meaningful differences in the communities we serve.",
      imgAlt: "global vision local impact",
    },
    {
      id: "empowering",
      title: "Empowering Youth Entrepreneurs",
      description:
        "Investing in the next generation of leaders and innovators. Providing mentorship, resources, and opportunities for young entrepreneurs to turn their dreams into reality.",
      imgAlt: "empowering youth entrepreneurs",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const active = ITEMS[activeIndex];

  // keyboard nav: left/right or up/down to change active item
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setActiveIndex((s) => (s + 1) % ITEMS.length);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setActiveIndex((s) => (s - 1 + ITEMS.length) % ITEMS.length);
      }
      if (e.key === "Home") setActiveIndex(0);
      if (e.key === "End") setActiveIndex(ITEMS.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ITEMS.length]);

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 min-h-screen flex flex-col justify-center">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-5xl md:text-6xl font-semibold mb-6">
          Leading With Purpose
        </h2>
        <p className="text-lg md:text-xl text-foreground/85 max-w-4xl">
          As CEO, Md Shariar Rahman leads with a philosophy rooted in
          innovation, empathy, and strategic growth. He believes that great
          leadership is about empowering teams, nurturing creativity, and
          building systems that scale with integrity.
        </p>
      </div>

      <h3 className="text-3xl md:text-4xl font-semibold mb-8">Core Values</h3>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
        {/* left list */}
        <div className="lg:col-span-1">
          <ul className="space-y-6">
            {ITEMS.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveIndex(i)}
                    className={`w-full text-left focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 transition-colors
                      ${isActive ? " font-semibold " : "text-slate-500"} 
                      text-xl md:text-2xl`}
                    aria-pressed={isActive}
                    aria-current={isActive ? "true" : "false"}
                  >
                    {item.title}
                    {item.subtitle && (
                      <div className="text-sm mt-1 text-slate-400">
                        {item.subtitle}
                      </div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* center image */}
        <div className="flex justify-center lg:justify-center lg:col-span-1">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/1595386/pexels-photo-1595386.jpeg"
              alt={active.imgAlt ?? "values image"}
              width={500}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* right description */}
        <div className="lg:col-span-1">
          <div
            key={active.id}
            className="prose max-w-none transition-opacity duration-300 ease-in-out"
            aria-live="polite"
          >
            <h3 className="text-xl font-medium">{active.title}</h3>
            <p className="mt-4 text-lg text-slate-600">{active.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
