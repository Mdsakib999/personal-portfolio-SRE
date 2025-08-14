import { cn } from "@/lib/utils";
import { GridPattern } from "../magicui/grid-pattern";
import Image from "next/image";

const ventures = [
  {
    year: "2025",
    items: [
      {
        name: "SM Foods",
        desc: "passionate about creating applications that make everyday life feel a bit lighter—tools that just work.",
        img: "/path/to/image1.png",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        name: "SM Travel",
        desc: "passionate about creating applications that make everyday life feel a bit lighter—tools that just work.",
        img: "/path/to/image2.png",
      },
      {
        name: "SM Auto",
        desc: "passionate about creating applications that make everyday life feel a bit lighter—tools that just work.",
        img: "/path/to/image3.png",
      },
    ],
  },
];

export default function Journey() {
  return (
    <div className="relative max-w-7xl mx-auto pt-20">
      <h1 className="text-5xl md:text-6xl font-semibold mb-16">
        Journey
      </h1>

      <div className="relative">
        <GridPattern
          width={60}
          height={90}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "absolute inset-0 -z-10 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
          )}
        />

        <div className="space-y-10 max-w-5xl mx-auto">
          {ventures.map((venture) => (
            <div key={venture.year} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Year */}
              <div className="text-2xl font-light ">{venture.year}</div>

              {/* Ventures in this year */}
              <div className="flex flex-col gap-10 col-span-2">
                {venture.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row md:items-start gap-6"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-gray-400 mt-2">{item.desc}</p>
                    </div>
                    <div className="flex-shrink-0 border rounded-2xl bg-slate-800">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

{/* CTA */}
          <div className="flex justify-center pt-10">
            <button className="px-6 py-3 bg-white text-black rounded-full shadow hover:scale-105 transition">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
