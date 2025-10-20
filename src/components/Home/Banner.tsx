import { GridPattern } from "../magicui/grid-pattern";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="relative h-screen  flex size-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-semibold">Shariar Rahaman</h1>
        <p className="text-xl text-muted-foreground m-4">Founder & CEO</p>
        <Link href="#ventures">
          <Button
            variant="outline"
            className="rounded-full px-1 pl-4 py-2 flex items-center gap-4 group"
          >
            <span>Explore My Ventures</span>
            <span
              aria-hidden
              className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-slate-700 bg-slate-900 text-white transition-transform duration-200 group-hover:scale-105"
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
