"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const ventures = [
  {
    title: "SM Foods – Landing Page",
    img: "/images/sm-foods.png",
  },
  {
    title: "SAAS – Landing Page",
    img: "/images/saas-landing1.png",
  },
  {
    title: "SAAS – Landing Page",
    img: "/images/saas-landing2.png",
  },
];

export default function Ventures() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? ventures.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === ventures.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h1 className="text-5xl md:text-6xl font-semibold">Selected Ventures</h1>
        <p className="max-w-xl text-gray-500 mt-4 md:mt-0">
          passionate about creating applications that make everyday life feel a
          bit lighter—tools that just work, quietly in the background.
        </p>
        <Button variant="outline" className="ml-0 md:ml-6 mt-4 md:mt-0">
          See all features →
        </Button>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center">
        {/* Prev button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-3 rounded-full bg-white shadow hover:bg-gray-100"
        >
          <ArrowLeft />
        </button>

        {/* Slides */}
        <div className="flex gap-8 transition-transform duration-500">
          {ventures.map((venture, index) => {
            const isActive = index === current;
            return (
              <div
                key={index}
                className={`flex flex-col items-center transition-all duration-500 ${
                  isActive
                    ? "scale-105 opacity-100"
                    : "scale-90 opacity-50"
                }`}
              >
                <div
                  className={`p-4 rounded-2xl ${
                    isActive
                      ? "bg-pink-50"
                      : index < current
                      ? "bg-gray-100"
                      : "bg-blue-50"
                  }`}
                >
                  <Image
                    src={venture.img}
                    alt={venture.title}
                    width={400}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-4 text-center">{venture.title}</p>
              </div>
            );
          })}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-3 rounded-full bg-white shadow hover:bg-gray-100"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
