import Link from "next/link";
import React from "react";

const ventures = [
  {
    title: "BiteBytes",
    subtitle: "Landing Page",
    image: "/ventures/sm-bitebytes.png",
  },
  {
    title: "SM Automobiles",
    subtitle: "SAAS Platform",
    image: "/ventures/sm-car.png",
  },
  {
    title: "SM POS",
    subtitle: "Dashboard",
    image: "/ventures/sm-pos.png",
  },
];

export default function SelectedVentures() {
  return (
    <section
      id="ventures"
      className="min-h-screen flex items-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="pt-6 md:pt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Selected Ventures
            </h2>
            <Link href="/about">
              <button className="text-foreground border border-gray-700 px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-gray-800 flex items-center justify-center whitespace-nowrap text-sm md:text-base transition-colors">
                Learn More
                <svg
                  className="w-4 h-4 ml-2 textforeground"
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

          <div className="mt-4 sm:mt-2 text-gray-400 text-left sm:text-right">
            <p className="max-w-md sm:ml-auto text-sm md:text-base">
              passionate about creating applications that make everyday life
              feel a bit lighter—tools that just work, quietly in the
              background.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 md:mt-12">
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
                <div className="p-4 md:p-5">
                  <h3 className="text-base md:text-lg text-white font-semibold">
                    {venture.title}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {venture.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
