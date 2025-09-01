import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "public", "blogs");
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => ({
    blogId: file.replace(/\.md$/, ""),
  }));
}

type Props = {
  params: { blogId: string };
};

export default async function BlogPage({ params }: Props) {
  const postsDirectory = path.join(process.cwd(), "public", "blogs");
  const fullPath = path.join(postsDirectory, `${params.blogId}.md`);

  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <div className="max-w-7xl mx-auto py-24 px-6">
      <div className="max-w-4xl mx-auto mb-8 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">{data.title}</h1>
      </div>

      {data.image && (
        <Image
          src={data.image}
          alt={data.title}
          className="mb-6 rounded-lg"
          width={450}
          height={100}
        />
      )}
      <div className="text-gray-500 mb-2">{data.date}</div>
      <div className=" mb-12">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
