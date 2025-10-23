"use client";
import React from "react";
import { Ripple } from "../ui/ripple";

export default function Quote() {
  return (
    <div className="py-10 md:px-12">
      <div className="max-w-7xl mx-auto px-4 h-screen flex items-center justify-center">
        {/* main card */}
        <div className="relative h-[86vh] w-full overflow-hidden rounded-lg border ">
          {/* Ripple background (behind content but above the parent's background) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Ripple />
          </div>

          {/* content (on top) */}
          <div className="relative z-10 h-full w-full flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                ““Entrepreneurship isn’t about running companies — it’s about
                creating opportunities that outlive you.”
              </h1>

              <p className="mt-6 text-lg text-gray-600">Md Shariar Rahman</p>
            </div>
          </div>

          {/* subtle bottom shadow for depth (inside card) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/6 to-transparent" />
        </div>
      </div>
    </div>
  );
}
