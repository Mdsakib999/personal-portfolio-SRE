import React from "react";
import ArticleRow from "./ArticleRow";
import { getSortedPostsData } from "../../../lib/posts";
import Link from "next/link";

export default function Articles() {
  const posts = getSortedPostsData() || [];
  const topFive = posts.slice(0, 5);

  return (
    <section id="articles" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-black/35 dark:text-white/35 mb-4 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-black/30 dark:bg-white/30" />
              Writing
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-black dark:text-white">
              Latest
              <br />
              <em className="text-black/40 dark:text-white/40">Articles</em>
            </h1>
          </div>

          <div className="md:text-right">
            <p className="text-[11px] uppercase tracking-[0.3em] text-black/25 dark:text-white/25 tabular-nums">
              {String(topFive.length).padStart(2, "0")} entries
            </p>
          </div>
        </div>

        {/* Full-width top divider */}
        <div className="w-full h-px bg-black/10 dark:bg-white/10 mb-0" />

        {/* Article list */}
        <div className="divide-y divide-black/8 dark:divide-white/8">
          {topFive.map((post, i) => (
            <ArticleRow key={post.id} article={post} index={i + 1} />
          ))}
        </div>

        {/* Footer row */}
        <div className="w-full h-px bg-black/10 dark:bg-white/10 mt-0 mb-10" />
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.35em] text-black/20 dark:text-white/20">
            Md Shariar Rahman
          </span>
          <Link
            href="#articles"
            className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            View all
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path
                d="M2 6H10M7 3L10 6L7 9"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
