import path from "path";
import { promises as fs } from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "public", "blogs");
  try {
    const files = await fs.readdir(postsDirectory);
    return files
      .filter((f) => f.endsWith(".md"))
      .map((file) => ({ blogId: file.replace(/\.md$/, "") }));
  } catch {
    return [];
  }
}

export default async function BlogPage(props: any) {
  const { params } = props as { params: { blogId: string } };
  const postsDirectory = path.join(process.cwd(), "public", "blogs");
  const fullPath = path.join(postsDirectory, `${params.blogId}.md`);

  try {
    await fs.access(fullPath);
  } catch {
    console.warn("Article file not found at:", fullPath);
    notFound();
  }

  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const title = data?.title ?? "Untitled";
  const date = data?.date ?? "";
  const image = data?.image ?? "";

  return (
    <div className="min-h-screen">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <Link
          href="/#articles"
          className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-black/35 dark:text-white/35 hover:text-black dark:hover:text-white transition-colors duration-200"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          >
            <path
              d="M10 6H2M5 3L2 6L5 9"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All Articles
        </Link>
      </div>

      {/* Hero section */}
      <header className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-[11px] uppercase tracking-[0.35em] text-black/35 dark:text-white/35 mb-6 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-black/30 dark:bg-white/30" />
            Writing
          </p>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-black dark:text-white mb-8">
            {title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-4">
            <div className="w-6 h-px bg-black/20 dark:bg-white/20" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-black/35 dark:text-white/35">
              {date}
            </span>
            <div className="w-1 h-1 rounded-full bg-black/20 dark:bg-white/20" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-black/35 dark:text-white/35">
              Md Shariar Rahman
            </span>
          </div>
        </div>
      </header>

      {/* Full-width divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="w-full h-px bg-black/8 dark:bg-white/8" />
      </div>

      {/* Hero image */}
      {image && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
          <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
            {/* Subtle bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      )}

      {/* Article body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky left sidebar */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-24 flex flex-col gap-6">
              <div className="w-px h-16 bg-gradient-to-b from-black/20 dark:from-white/20 to-transparent mx-auto" />
              <p className="text-[9px] uppercase tracking-[0.4em] text-black/20 dark:text-white/20 [writing-mode:vertical-rl] rotate-180 mx-auto">
                {date}
              </p>
            </div>
          </aside>

          {/* Main content */}
          <article className="lg:col-span-8">
            <div
              className="
                prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight
                prose-h1:text-4xl prose-h1:leading-tight
                prose-h2:text-3xl prose-h2:leading-snug prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-black/65 dark:prose-p:text-white/65 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-black dark:prose-a:text-white prose-a:underline prose-a:underline-offset-4 prose-a:decoration-black/20 dark:prose-a:decoration-white/20 hover:prose-a:decoration-black dark:hover:prose-a:decoration-white
                prose-strong:text-black dark:prose-strong:text-white prose-strong:font-semibold
                prose-blockquote:border-l-2 prose-blockquote:border-black/20 dark:prose-blockquote:border-white/20 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-black/50 dark:prose-blockquote:text-white/50 prose-blockquote:not-italic
                prose-code:text-black dark:prose-code:text-white prose-code:bg-black/5 dark:prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
                prose-pre:bg-black/[0.04] dark:prose-pre:bg-white/[0.04] prose-pre:border prose-pre:border-black/8 dark:prose-pre:border-white/8 prose-pre:rounded-xl
                prose-img:rounded-xl prose-img:shadow-sm
                prose-hr:border-black/8 dark:prose-hr:border-white/8
                prose-li:text-black/65 dark:prose-li:text-white/65
              "
            >
              <ReactMarkdown>{content || ""}</ReactMarkdown>
            </div>
          </article>

          {/* Right gutter */}
          <div className="hidden lg:block lg:col-span-2" />
        </div>
      </div>

      {/* Footer divider + nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="w-full h-px bg-black/8 dark:bg-white/8 mb-10" />
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.35em] text-black dark:text-white/50">
            Md Shariar Rahman
          </span>
          <Link
            href="/#articles"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-black/35 dark:text-white/35 hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            >
              <path
                d="M10 6H2M5 3L2 6L5 9"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
