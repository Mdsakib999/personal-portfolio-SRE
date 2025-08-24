import React from "react";
import ArticleRow from "./ArticleRow";


export default function Articles() {
  const sampleArticles = [
    {
      id: 1,
      year: "2025",
      title: "Urban\nwest\nDevelopment",
      image: "/images/article-1.jpg",
      href: "/articles/urban-west-1",
    },
    {
      id: 2,
      year: "2025",
      title: "Urban\nwest\nDevelopment",
      image: "/images/article-2.jpg",
      href: "/articles/urban-west-2",
    },
    {
      id: 3,
      year: "2025",
      title: "Urban\nwest\nDevelopment",
      image: "/images/article-3.jpg",
      href: "/articles/urban-west-3",
    },
    {
      id: 4,
      year: "2025",
      title: "Urban\nwest\nDevelopment",
      image: "/images/article-4.jpg",
      href: "/articles/urban-west-4",
    },
    {
      id: 5,
      year: "2025",
      title: "Urban\nwest\nDevelopment",
      image: "/images/article-5.jpg",
      href: "/articles/urban-west-5",
    },
    {
      id: 6,
      year: "2025",
      title: "Urban\nwest\nDevelopment",
      image: "/images/article-6.jpg",
      href: "/articles/urban-west-6",
    },
  ];



  return (
    <section className="min-h-screen py-10 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-x-16">
          {/* Heading and description as a grid item */}
          <div className="flex flex-col justify-start h-full">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4">
              Latest
              <br />
              Articles
            </h1>
          </div>

          {/* First article */}
          <div>
            <ArticleRow article={sampleArticles[0]} />
          </div>
          {/* Second article */}
          <div>
            <ArticleRow article={sampleArticles[1]} />
          </div>
          {/* Third article */}
          <div>
            <ArticleRow article={sampleArticles[2]} />
          </div>
          {/* Fourth article */}
          <div>
            <ArticleRow article={sampleArticles[3]} />
          </div>
          {/* Fifth article */}
          <div>
            <ArticleRow article={sampleArticles[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
