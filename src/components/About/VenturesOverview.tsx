// components/VenturesOverview.tsx
import Image from "next/image";
import React from "react";

type Venture = {
  id: string;
  year: string;
  title: string;
  desc: string;
  image: string;
  imageAlt?: string;
};

export default function VenturesOverview() {
  const VENTURES: Venture[] = [
    {
      id: "v2025",
      year: "2025",
      title: "SM FOODS",
      desc: "Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage.",
      image: "/images/venture-1.jpg",
      imageAlt: "colorful product hero",
    },
    {
      id: "v2024",
      year: "2024",
      title: "SM Cars",
      desc: "Cut through the yawns, grab your audience’s attention, and turn passive attendees into active participants.",
      image: "/images/venture-2.jpg",
      imageAlt: "dark UI grid mockups",
    },
    {
      id: "v2023",
      year: "2023",
      title: "Analyze",
      desc: "Track the success of your events with deep insights and analytics measured across the entire attendee experience.",
      image: "/images/venture-3.jpg",
      imageAlt: "analytics dashboard preview",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:items-start">
        {/* Heading on the right for large screens */}
        <header className="lg:col-start-9 lg:col-span-4 text-left lg:text-right">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
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
                  <div className="rounded-[30px] overflow-hidden bg-white">
                    <Image
                      src={v.image}
                      alt={v.imageAlt ?? v.title}
                      width={1200}
                      height={320}
                      className="w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[140px] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* separator except after last */}
              {idx < VENTURES.length - 1 && (
                <hr className="border-t border-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
