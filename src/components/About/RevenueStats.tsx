// components/RevenueStats.tsx
import React from "react";

type Stat = {
  id: string;
  value: string;
  caption: string;
  meta?: string;
};

export default function RevenueStats() {
  const stats: Stat[] = [
    {
      id: "1",
      value: "+87%",
      caption: "increased attendee engagement",
      meta: "at Bitwise",
    },
    {
      id: "2",
      value: "$1.7M",
      caption: "pipeline generated",
      meta: "at Everbridge",
    },
    {
      id: "3",
      value: "58%",
      caption: "attendee conversion rate",
      meta: "at Interfolio",
    },
  ];

  return (
    <section className="min-h-[70vh] py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left big headline */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="sr-only">Drive Revenue</h2>

          <div className="space-y-6">
            <div className="text-[clamp(4.5rem,8vw,7.5rem)] leading-[0.9] font-extralight">
              Drive
            </div>

            <div className="flex items-center gap-8">
              <span
                aria-hidden
                className="inline-block w-[9.5rem] h-[5.25rem] rounded-[3rem] bg-slate-700"
              />

              <div className="text-[clamp(4.5rem,8vw,7.5rem)] leading-[0.9] font-extralight">
                Revenue
              </div>
            </div>
          </div>
        </div>

        {/* Right stats column */}
        <div className="lg:col-span-5">
          <div className="space-y-10">
            {stats.map((s, idx) => (
              <div key={s.id} className="py-2">
                <div className="text-[clamp(2.25rem,4vw,3.25rem)] font-semibold leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-slate-700">{s.caption}</div>
                {s.meta && (
                  <div className="text-sm text-slate-400 mt-1">{s.meta}</div>
                )}

                {/* separator except after last */}
                {idx < stats.length - 1 && (
                  <div className="mt-6 border-t border-foreground/20 " />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
