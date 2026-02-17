"use client";

import Image from "next/image";
import { GridPattern } from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-[5%] w-40 h-40 bg-slate-400/10 dark:bg-slate-400/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-[10%] w-56 h-56 bg-gray-400/10 dark:bg-gray-400/5 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Grid Pattern */}
      <div
        className={cn(
          "pointer-events-none absolute left-0 right-0 bottom-0 h-2/3 -z-10",
          "opacity-40 dark:opacity-20",
          "text-slate-900/10 dark:text-white/5",
          "[mask-image:linear-gradient(to_top,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_85%)]",
          "[webkit-mask-image:linear-gradient(to_top,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_85%)]",
        )}
      >
        <GridPattern
          width={40}
          height={40}
          strokeDasharray={"6 3"}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header with creative layout */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="relative inline-block">
            {/* Decorative line */}
            <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-slate-500 to-gray-500 dark:from-slate-400 dark:to-gray-400"></div>

            <div className="pl-8">
              <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-slate-600 dark:text-slate-400 mb-3 sm:mb-4">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-zinc-900 dark:text-white">
                Meet <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10">Shahriar Rahman</span>
                  {/* Highlight effect */}
                  <span className="absolute bottom-2 left-0 w-full h-3 sm:h-4 bg-slate-300/40 dark:bg-slate-500/30 -rotate-1 -z-0"></span>
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Main Content - Responsive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Image Column - Creative positioning */}
          <div className="lg:col-span-5 relative group">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-slate-400 to-gray-500 dark:from-slate-500 dark:to-gray-600 opacity-20 dark:opacity-30 rounded-3xl blur-2xl group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-700"></div>

            <div className="relative">
              {/* Corner accent */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-4 border-t-4 border-slate-500 dark:border-slate-400 opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-4 border-b-4 border-gray-500 dark:border-gray-400 opacity-60"></div>

              {/* Image container */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  alt="Shahriar Rahman - CEO"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src="shahriar.jpg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  priority
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-0 sm:-right-0 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-4 sm:p-5 border-2 border-slate-400 dark:border-slate-500">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl p-2 font-black text-slate-600 dark:text-slate-400">
                    3+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300">
                    Years
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Quote/Intro */}
            <div className="relative">
              <div className="absolute -left-4 top-0 text-6xl sm:text-7xl font-black text-slate-500/20 dark:text-slate-400/20 leading-none">
                "
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed text-zinc-800 dark:text-zinc-100 pl-8 sm:pl-12">
                passionate about creating applications that make everyday life
                feel a bit lighter
              </p>
            </div>

            {/* Main description */}
            <div className="space-y-5">
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
                —tools that just work, quietly in the background. From our
                humble beginnings as a tech startup, our journey has been
                nothing short of remarkable.
              </p>

              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
                What drives us? A passionate team of experts and a clear,
                unwavering vision. We're excited to continue delivering
                transformative tech solutions across diverse industries in the
                future.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-gray-500 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                <div className="relative p-4 sm:p-6 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-200 dark:border-zinc-700 group-hover:border-slate-400 dark:group-hover:border-slate-500 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mb-1">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Projects
                  </div>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-gray-500 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                <div className="relative p-4 sm:p-6 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-200 dark:border-zinc-700 group-hover:border-slate-400 dark:group-hover:border-slate-500 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mb-1">
                    25+
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Clients
                  </div>
                </div>
              </div>

              <div className="relative group cursor-pointer col-span-2 sm:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-gray-500 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                <div className="relative p-4 sm:p-6 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-200 dark:border-zinc-700 group-hover:border-slate-400 dark:group-hover:border-slate-500 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mb-1">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link href="/about#ventures">
                <button className="cursor-pointer group relative overflow-hidden text-foreground border border-slate-300 dark:border-slate-700 px-8 py-4 rounded-full flex items-center justify-center whitespace-nowrap text-sm md:text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-300/40 dark:hover:shadow-slate-900/40">
                  <span className="absolute inset-0 bg-slate-900 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white dark:group-hover:text-slate-900">
                    Learn More About Us
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                      →
                    </span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap");

        section {
          font-family:
            "Sora",
            system-ui,
            -apple-system,
            sans-serif;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
