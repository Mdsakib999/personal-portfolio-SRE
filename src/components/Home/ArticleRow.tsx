"use client";

import Link from "next/link";
import Image from "next/image";

type Article = {
  id: string;
  date: string;
  title: string;
  image: string;
};

const ArticleRow: React.FC<{ article?: Article; index?: number }> = ({
  article,
  index,
}) => {
  if (!article) return null;

  const idx = String(index ?? 1).padStart(2, "0");

  return (
    <article>
      <Link
        href={`/articles/${article.id}`}
        className="group flex items-center justify-between gap-6 py-6 md:py-7"
      >
        {/* Left — index + title */}
        <div className="flex items-center gap-5 md:gap-8 min-w-0 flex-1">
          {/* Index number */}
          <span className="text-[10px] tabular-nums tracking-[0.2em] text-black/25 dark:text-white/25 flex-shrink-0 w-6 text-right">
            {idx}
          </span>

          {/* Vertical separator */}
          <span className="hidden sm:block w-px h-8 bg-black/10 dark:bg-white/10 flex-shrink-0" />

          {/* Title */}
          <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-medium leading-snug text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 truncate">
            {article.title.replace(/\n/g, " ")}
          </h3>
        </div>

        {/* Center — date (hidden on mobile) */}
        <div className="hidden md:block flex-shrink-0">
          <span className="text-[11px] uppercase tracking-[0.25em] text-black/30 dark:text-white/30">
            {article.date}
          </span>
        </div>

        {/* Right — image + arrow */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Image */}
          <div className="relative w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-28 lg:h-20 rounded-lg overflow-hidden bg-black/5 dark:bg-white/5 flex-shrink-0">
            <Image
              src={article.image}
              alt={article.title.replace(/\n/g, " ")}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
            />
            {/* Shimmer overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Arrow */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-black/20 dark:text-white/20 group-hover:text-black dark:group-hover:text-white transition-all duration-300 group-hover:translate-x-1 flex-shrink-0"
          >
            <path
              d="M3 8H13M9 4L13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Link>
    </article>
  );
};

export default ArticleRow;
