import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/smitsolution.uae",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/smitsolution.uae/",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/smitsolutionuae",
    label: "X / Twitter",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/smitsolution/",
    label: "LinkedIn",
  },
];

const stats = [
  { value: "5+", label: "Ventures" },
  { value: "3+", label: "Years" },
  { value: "15+", label: "Team" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      {/* Faint section label watermark */}
      <div className="absolute top-10 right-0 text-[clamp(80px,16vw,200px)] font-black text-gray-900/[0.03] dark:text-white/[0.03] leading-none tracking-tighter select-none pointer-events-none uppercase">
        About
      </div>

      {/* ── Top header row ── */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16 sm:mb-20 lg:mb-24">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-gray-500 dark:text-gray-500 mb-4">
            <span className="w-8 h-px bg-gray-400 dark:bg-gray-600 inline-block" />
            The Person Behind
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-gray-900 dark:text-white">
            About
          </h2>
        </div>

        {/* Inline stats — visible on sm+ */}
        <div className="hidden sm:flex items-center gap-8 lg:gap-12 pb-1">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">
                {s.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600 mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
        {/* ── LEFT: Image composition ── */}
        <div className="lg:col-span-6 xl:col-span-5">
          <div className="relative">
            {/* Main large image */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                alt="Office environment"
                fill
                className="object-cover"
                src="/img/home-about.png"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              {/* Subtle dark vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating portrait card — overlaps bottom-right */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-36 h-44 sm:w-44 sm:h-56 lg:w-48 lg:h-60 rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-950 z-10">
              <Image
                alt="Shahriar Rahman"
                fill
                className="object-cover object-top"
                src="/shahriar2.jpg"
                sizes="200px"
              />
            </div>

            {/* Decorative bracket top-left */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-gray-900 dark:border-white opacity-20 rounded-tl-sm pointer-events-none" />

            {/* Name badge on image */}
            <div className="absolute bottom-6 left-6 z-10">
              <div className="inline-flex flex-col px-4 py-3 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                <span className="text-sm font-black text-gray-900 dark:text-white leading-tight">
                  Md Shahriar Rahman
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500 font-medium mt-0.5">
                  Founder & CEO, SM Group
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center lg:pl-8 xl:pl-12 pt-8 lg:pt-4">
          {/* Section divider line */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 dark:text-gray-600 shrink-0">
              Est. 2022
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-gray-900 dark:text-white mb-6">
            The Entrepreneurial
            <br />
            <span className="text-gray-400 dark:text-gray-600 font-light italic">
              Journey
            </span>
          </h3>

          {/* Body */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Md Shariar Rahman is a self-made entrepreneur from Bangladesh,
            widely recognized for his innovation-driven approach to business.
            Starting with a passion for technology, he founded{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              SM IT Solution
            </span>
            , a company focused on delivering modern digital solutions.
          </p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            Over the years, his vision expanded into multiple industries
            including travel, fashion, lifestyle, and automotive — creating a
            powerful ecosystem under the{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              SM Group
            </span>{" "}
            brand. Beyond his ventures, he is committed to inspiring young
            entrepreneurs and building a digital future for Bangladesh.
          </p>

          {/* Mobile stats */}
          <div className="flex sm:hidden items-center gap-6 mb-10 pb-10 border-b border-gray-100 dark:border-gray-900">
            {stats.map((s, i) => (
              <div key={i} className="text-center flex-1">
                <div className="text-2xl font-black text-gray-900 dark:text-white">
                  {s.value}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600 mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 dark:bg-gray-900 mb-8 hidden sm:block" />

          {/* Social links */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-600 mr-1">
              Follow
            </span>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-900 dark:hover:bg-white transition-all duration-300"
              >
                <Icon className="w-3.5 h-3.5 transition-colors duration-300 group-hover:text-white dark:group-hover:text-gray-900" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
