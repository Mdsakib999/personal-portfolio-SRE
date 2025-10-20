"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const slides = [
  {
    title: "SM Foods",
    subtitle: "Landing Page",
    image: "/img/slider-01.png",
  },
  {
    title: "SM Travels",
    subtitle: "Dashboard",
    image: "/img/slider-02.png",
  },
  {
    title: "SM Auto",
    subtitle: "Website",
    image: "/img/slider-01.png",
  },
];

import type { Swiper as SwiperClass } from "swiper";

export default function SelectedVenturesCarousel() {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="min-h-screen flex items-center py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="pt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-4">
              Selected Ventures
            </h2>
            <button className="text-gray-300 border border-gray-700 px-2 md:px-4 py-2 rounded-full hover:bg-gray-800 flex items-center w-64 justify-center">
              See all features
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
          </div>

          <div className="mt-2 text-gray-400 text-right">
            <p className="max-w-md ml-auto">
              passionate about creating applications that make everyday life
              feel a bit lighter—tools that just work, quietly in the
              background.
            </p>
          </div>

          <div className="relative mt-8">
            {/* Left navigation arrow - desktop only */}
            <button
              onClick={() => swiperRef?.slidePrev()}
              aria-label="Previous slide"
              aria-disabled={isBeginning}
              disabled={isBeginning}
              className={
                "hidden md:flex md:absolute md:top-1/2 md:-left-8 md:transform md:-translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none z-30 " +
                (isBeginning
                  ? "opacity-50 cursor-not-allowed pointer-events-none"
                  : "")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Swiper carousel */}
            <Swiper
              onSwiper={(swiper) => {
                setSwiperRef(swiper as unknown as SwiperClass);
                setActiveIndex((swiper as any).realIndex ?? 0);
                setIsBeginning((swiper as any).isBeginning ?? false);
                setIsEnd((swiper as any).isEnd ?? false);
              }}
              onSlideChange={(swiper) => {
                setActiveIndex((swiper as any).realIndex ?? 0);
                setIsBeginning((swiper as any).isBeginning ?? false);
                setIsEnd((swiper as any).isEnd ?? false);
              }}
              modules={[Navigation]}
              allowTouchMove={false}
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={30}
              breakpoints={{
                768: { slidesPerView: 3 },
              }}
              className="mx-auto overflow-visible"
            >
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;
                const prevIndex =
                  (activeIndex - 1 + slides.length) % slides.length;
                const nextIndex = (activeIndex + 1) % slides.length;
                const isAdjacent = index === prevIndex || index === nextIndex;

                let slideClass = "transform transition-transform duration-300";
                if (isActive) {
                  slideClass += " scale-100 z-20";
                } else if (isAdjacent) {
                  slideClass += " scale-75 filter blur-sm brightness-50 z-10";
                } else {
                  slideClass += " hidden";
                }

                return (
                  <SwiperSlide key={index} className={slideClass}>
                    <div className="rounded-lg overflow-hidden bg-gray-800">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="p-4">
                        <h3
                          className={`text-lg ${
                            isActive ? "text-white" : "text-gray-400"
                          } font-semibold`}
                        >
                          {slide.title}
                        </h3>
                        <p
                          className={`${
                            isActive ? "text-gray-300" : "text-gray-500"
                          } text-sm`}
                        >
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Right navigation arrow - desktop only */}
            <button
              onClick={() => swiperRef?.slideNext()}
              aria-label="Next slide"
              aria-disabled={isEnd}
              disabled={isEnd}
              className={
                "hidden md:flex md:absolute md:top-1/2 md:-right-8 md:transform md:-translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none z-30 " +
                (isEnd
                  ? "opacity-50 cursor-not-allowed pointer-events-none"
                  : "")
              }
            >
              <svg
                className="w-6 h-6"
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

            {/* Mobile navigation - below cards (visible only on small screens) */}
            <div className="flex md:hidden mt-4 justify-center gap-4">
              <button
                onClick={() => swiperRef?.slidePrev()}
                aria-label="Previous slide"
                aria-disabled={isBeginning}
                disabled={isBeginning}
                className={
                  "bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none " +
                  (isBeginning
                    ? "opacity-50 cursor-not-allowed pointer-events-none"
                    : "")
                }
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() => swiperRef?.slideNext()}
                aria-label="Next slide"
                aria-disabled={isEnd}
                disabled={isEnd}
                className={
                  "bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none " +
                  (isEnd
                    ? "opacity-50 cursor-not-allowed pointer-events-none"
                    : "")
                }
              >
                <svg
                  className="w-5 h-5"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
