"use client";
import React, { useEffect, useRef } from "react";
import { Ripple } from "../ui/ripple";

export default function Quote() {
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.2 },
    );

    const children = quoteRef.current?.querySelectorAll("[data-animate]");
    children?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-10 md:px-12">
      <div className="max-w-7xl mx-auto px-4 h-screen flex items-center justify-center">
        {/* Main card */}
        <div className="relative h-[86vh] w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
          {/* Ripple background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Ripple />
          </div>

          {/* Decorative corner accents */}
          <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-black/20 dark:border-white/20 rounded-tl-sm z-10" />
          <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-black/20 dark:border-white/20 rounded-tr-sm z-10" />
          <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-black/20 dark:border-white/20 rounded-bl-sm z-10" />
          <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-black/20 dark:border-white/20 rounded-br-sm z-10" />

          {/* Floating decorative orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-black/[0.03] dark:bg-white/[0.03] blur-3xl z-0 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-black/[0.03] dark:bg-white/[0.03] blur-3xl z-0 animate-pulse [animation-delay:1.5s]" />

          {/* Thin horizontal rule lines for editorial feel */}
          <div className="absolute top-16 inset-x-10 h-px bg-gradient-to-r from-transparent via-black/15 dark:via-white/15 to-transparent z-10" />
          <div className="absolute bottom-16 inset-x-10 h-px bg-gradient-to-r from-transparent via-black/15 dark:via-white/15 to-transparent z-10" />

          {/* Content */}
          <div
            ref={quoteRef}
            className="relative z-10 h-full w-full flex items-center justify-center px-8 md:px-16"
          >
            <div className="max-w-4xl w-full text-center">
              {/* Giant decorative opening quote mark */}
              <div
                data-animate
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out [transition-delay:100ms]"
              >
                <span className="font-serif text-[9rem] md:text-[13rem] leading-none select-none text-black/8 dark:text-white/8 block -mb-14 md:-mb-20 -mt-8">
                  &#8220;
                </span>
              </div>

              {/* Quote text */}
              <h1
                data-animate
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out [transition-delay:250ms] font-serif text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.25] tracking-[-0.01em] text-black dark:text-white"
              >
                Entrepreneurship isn&apos;t about running companies — it&apos;s
                about creating{" "}
                <em className="not-italic relative inline-block">
                  <span className="relative z-10">opportunities</span>
                  <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-black/20 dark:bg-white/20 rounded-full" />
                </em>{" "}
                that outlive you.
              </h1>

              {/* Divider with dots */}
              <div
                data-animate
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out [transition-delay:400ms] flex items-center justify-center gap-3 mt-10 mb-8"
              >
                <div className="h-px w-16 bg-black/25 dark:bg-white/25" />
                <div className="w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/30" />
                <div className="w-1 h-1 rounded-full bg-black/20 dark:bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/30" />
                <div className="h-px w-16 bg-black/25 dark:bg-white/25" />
              </div>

              {/* Author */}
              <div
                data-animate
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out [transition-delay:550ms]"
              >
                <p className="text-base md:text-lg font-light tracking-[0.2em] uppercase text-black/50 dark:text-white/50">
                  Md Shariar Rahman
                </p>
              </div>
            </div>
          </div>

          {/* Bottom depth gradient */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/5 dark:from-white/[0.03] to-transparent z-10" />
        </div>
      </div>
    </div>
  );
}
