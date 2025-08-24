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
      title: "Innovation First",
      description:
        "We pioneer, we don’t copy — inventing products that actually matter.",
      imgAlt: "hand sketching wireframes",
    },
    {
      id: "people",
      title: "People Over Profit",
      description: "Human impact drives every decision. Stronger together.",
      imgAlt: "people collaborating over a desk",
    },
    {
      id: "collab",
      title: "Collaboration Wins",
      description:
        "Cross-discipline teamwork makes better outcomes for everyone.",
      imgAlt: "teamwork hands together",
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
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 h-screen  flex flex-col justify-center">
      <h2 className="text-5xl md:text-6xl font-semibold mb-10">Core Values</h2>

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
                      text-2xl md:text-3xl`}
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
