import Link from "next/link";
import React from "react";

const ventures = [
  {
    title: "BiteBytes",
    subtitle: "Landing Page",
    image: "/img/slider-01.png",
  },
  {
    title: "SM Automobiles",
    subtitle: "Dashboard",
    image: "/img/slider-02.png",
  },
  {
    title: "SM Foods",
    subtitle: "Website",
    image: "/img/slider-01.png",
  },
];

export default function SelectedVentures() {
  return (
    <section
      id="ventures"
      className="min-h-screen flex items-center py-12 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="pt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-4">
              Selected Ventures
            </h2>
            <Link href="/about">
              <button className="text-gray-300 border border-gray-700 px-2 md:px-4 py-2 rounded-full hover:bg-gray-800 flex items-center w-64 justify-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>
          </div>

          <div className="mt-2 text-gray-400 text-right">
            <p className="max-w-md ml-auto">
              passionate about creating applications that make everyday life
              feel a bit lighter—tools that just work, quietly in the
              background.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {ventures.map((venture, index) => (
              <div
                key={index}
                className="group rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={venture.image}
                    alt={venture.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg text-white font-semibold">
                    {venture.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{venture.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
