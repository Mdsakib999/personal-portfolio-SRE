import { cn } from "@/lib/utils";
import { GridPattern } from "../magicui/grid-pattern";

export default function Quote() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-12 relative">
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
      Productivity Solutions that capitalizes on your network investment.
    </div>
  );
}
