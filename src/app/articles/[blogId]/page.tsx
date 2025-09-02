import path from "path";
import { promises as fs } from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "public", "blogs");
  try {
    const files = await fs.readdir(postsDirectory);
    return files
      .filter((f) => f.endsWith(".md"))
      .map((file) => ({ blogId: file.replace(/\.md$/, "") }));
  } catch (err) {
    return [];
  }
}

export default async function BlogPage(props: any) {
  const { params } = props as { params: { blogId: string } };
  const postsDirectory = path.join(process.cwd(), "public", "blogs");
  const fullPath = path.join(postsDirectory, `${params.blogId}.md`);

  // ensure file exists in an async-safe way
  try {
    await fs.access(fullPath);
  } catch (err) {
    // file is missing -> 404
    console.warn("Article file not found at:", fullPath);
    notFound();
  }

  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Defensive defaults in case frontmatter is missing something
  const title = data?.title ?? "Untitled";
  const date = data?.date ?? "";
  const image = data?.image ?? "";

  return (
    <div className="max-w-7xl mx-auto py-24 px-6">
      <div className="max-w-4xl mx-auto mb-8 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
      </div>

      {image && (
        <Image
          src={image}
          alt={title}
          className="mb-6 rounded-lg"
          width={1200}
          height={600}
        />
      )}

      <div className="text-gray-500 mb-2">{date}</div>

      <div className="mb-12">
        <ReactMarkdown>{content || ""}</ReactMarkdown>
      </div>
    </div>
  );
}
