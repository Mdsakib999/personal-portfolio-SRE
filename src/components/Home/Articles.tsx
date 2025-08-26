import React from "react";
import ArticleRow from "./ArticleRow";

export default function Articles() {
  const sampleArticles = [
    {
      id: 1,
      year: "2025",
      title: "Urban\nwest\nDevelopment",
      image: "/img/article-img-1.png",
      href: "",
    },
    {
      id: 2,
      year: "2020",
      title: "Urban\nwest\nDevelopment",
      image: "/img/article-img-2.png",
      href: "/articles/urban-west-2",
    },
    {
      id: 3,
      year: "2025",
      title: "Urban\nwest\nDevelopment",
      image: "/img/article-img-1.png",
      href: "",
    },
    {
      id: 4,
      year: "2025",
      title: "Urban\nwest\nDevelopment",
      image: "/img/article-img-2.png",
      href: "",
    },
    {
      id: 5,
      year: "2022",
      title: "Urban\nwest\nDevelopment",
      image: "/img/article-img-1.png",
      href: "",
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
