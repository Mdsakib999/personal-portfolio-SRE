"use client";
import React from "react";
import { GridBeams } from "../magicui/grid-beams";

export default function Quote() {
  return (
    <div className="py-10 md:px-12">
      <div className="w-full h-screen flex items-center justify-center px-4 py-10 pt-10">
        <div className="relative h-[86vh] w-full overflow-hidden rounded-lg border">
          <GridBeams
            gridSize={0}
            gridColor="rgba(255, 255, 255, 0.2)"
            rayCount={20}
            rayOpacity={0.55}
            raySpeed={1.5}
            rayLength="60vh"
            gridFadeStart={5}
            gridFadeEnd={90}
            className="h-full w-full"
          >
            <div className="flex h-full items-center justify-center ">
              <div className="text-center space-y-6 px-4 mt-50">
                <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                  “Creating tools that make life easier, one line of code at a
                  time.”
                </h1>
                <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 text-center">
                  Founder & CEO
                </p>
              </div>
            </div>
          </GridBeams>
        </div>
      </div>
    </div>
  );
}
