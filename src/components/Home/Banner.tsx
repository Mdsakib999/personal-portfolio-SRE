import { GridPattern } from "../magicui/grid-pattern";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="relative h-screen  flex size-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-semibold">Md Shariar Rahaman</h1>
        <p className="text-xl text-muted-foreground mt-4 mx-4">
          Entrepreneur & Visionary Leader
        </p>
        <p className="text-sm text-gray-700 dark:text-white mt-2 mb-4">
          Turning ideas into scalable businesses and lasting impact.
        </p>
        <Link href="#ventures">
          <Button
            variant="outline"
            className="cursor-pointer relative overflow-hidden rounded-full px-1 pl-4 py-3 flex items-center gap-4 group border-slate-300 dark:border-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-300/40 dark:hover:shadow-slate-900/40"
          >
            <span className="absolute inset-0 bg-slate-900 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-slate-900">
              Explore My Ventures
            </span>
            <span
              aria-hidden
              className="relative z-10 inline-flex items-center justify-center w-7 h-7 rounded-full border border-slate-700 dark:border-slate-600 bg-slate-900 dark:bg-white text-white dark:text-slate-900 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
            >
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Button>
        </Link>
      </div>

      <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
