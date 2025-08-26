import Image from "next/image";
import { GridPattern } from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-30 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div
        // container that pins the pattern to the bottom half and applies a mask so it fades upward
        className={cn(
          "pointer-events-none absolute left-0 right-0 bottom-0 h-1/2 -z-10",
          "opacity-55 text-white/10",
          "[mask-image:linear-gradient(to_top,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_80%)]",
          "[webkit-mask-image:linear-gradient(to_top,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_80%)]"
        )}
      >
        <GridPattern
          width={30}
          height={30}
          strokeDasharray={"4 2"}
          className="w-full h-full"
        />
      </div>

      <h2 className="text-4xl md:text-6xl font-semibold mb-6">
        Meet <br /> Shahriar Rahman
      </h2>
      <div className="flex flex-col md:flex-row  justify-between gap-12">
        <div className="flex-shrink-0">
          <Image
            alt="CEO"
            width={200}
            height={300}
            className="rounded-2xl shadow-lg object-cover"
            src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
          />
        </div>
        <p className="text-lg text-foreground/80 mb-6 max-w-xl text-start md:text-right">
          passionate about creating applications that make everyday life feel a
          bit lighter—tools that just work, quietly in the background.passionate
          about creating applications that make everyday life feel a bit
          lighter—tools that just work, quietly in the background.
        </p>
      </div>
    </section>
  );
}
