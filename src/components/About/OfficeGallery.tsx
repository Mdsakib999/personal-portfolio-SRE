"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import {
  X,
  Play,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
} from "lucide-react";

type MediaType = "image" | "video";
type Category = "all" | "photos" | "videos";

interface MediaItem {
  id: number;
  type: MediaType;
  src: string;
  thumb: string;
  caption: string;
  location: string;
  colSpan?: number;
  rowSpan?: number;
}

const MEDIA: MediaItem[] = [
  {
    id: 1,
    type: "video",
    src: "https://res.cloudinary.com/dvwhbp6vw/video/upload/v1769684187/smitOffice_pcmjnz.mp4",
    thumb: "office/eightballpool.png",
    caption: "Office Tour",
    location: "SM IT, Dhaka",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: 2,
    type: "image",
    src: "/office/office1.jpg",
    thumb: "/office/office1.jpg",
    caption: "Our Office",
    location: "SM IT, Dhaka",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 3,
    type: "image",
    src: "/office/office2.jpg",
    thumb: "/office/office2.jpg",
    caption: "Work Space",
    location: "SM IT, Dhaka",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 4,
    type: "image",
    src: "/office/office3.jpg",
    thumb: "/office/office3.jpg",
    caption: "Team Area",
    location: "SM IT, Dhaka",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 5,
    type: "image",
    src: "/office/office4.jpg",
    thumb: "/office/office4.jpg",
    caption: "Meeting Room",
    location: "SM IT, Dhaka",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 6,
    type: "image",
    src: "/office/office5.jpg",
    thumb: "/office/office5.jpg",
    caption: "Creative Studio",
    location: "SM IT, Dhaka",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 7,
    type: "image",
    src: "/office/office6.jpg",
    thumb: "/office/office6.jpg",
    caption: "Executive Suite",
    location: "SM IT, Dhaka",
    colSpan: 2,
    rowSpan: 1,
  },
];

export default function OfficeGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = MEDIA.filter((m) => {
    if (activeCategory === "photos") return m.type === "image";
    if (activeCategory === "videos") return m.type === "video";
    return true;
  });

  const openLightbox = useCallback(
    (index: number) => setLightboxIndex(index),
    [],
  );
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setLightboxIndex((i) =>
        i === null ? 0 : (i - 1 + filtered.length) % filtered.length,
      );
    },
    [filtered.length],
  );

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filtered.length));
    },
    [filtered.length],
  );

  const activeItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const categories: { key: Category; label: string; count: number }[] = [
    { key: "all", label: "All", count: MEDIA.length },
    {
      key: "photos",
      label: "Photos",
      count: MEDIA.filter((m) => m.type === "image").length,
    },
    {
      key: "videos",
      label: "Videos",
      count: MEDIA.filter((m) => m.type === "video").length,
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <span className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-900 dark:text-white">
                Our Spaces
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-gray-900 dark:text-white">
              Inside Our <br />
              <span className="text-gray-300 dark:text-gray-700">Offices</span>
            </h2>
          </div>
          <p className="text-base text-gray-500 dark:text-gray-500 max-w-xs leading-relaxed">
            The spaces where ideas come alive and our teams do their best work.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="flex items-center gap-1.5 p-1.5 bg-gray-100 dark:bg-gray-900 rounded-full w-fit border border-gray-200 dark:border-gray-800 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {cat.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                  activeCategory === cat.key
                    ? "bg-white/20 dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-400"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* ── Masonry Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-[220px] lg:auto-rows-[250px] gap-3 sm:gap-4">
          {filtered.map((item, idx) => {
            const col = item.colSpan === 2 ? "col-span-2" : "col-span-1";
            const row = item.rowSpan === 2 ? "row-span-2" : "row-span-1";
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100 dark:bg-gray-900 ${col} ${row}`}
              >
                {/* Image */}
                <Image
                  src={item.thumb}
                  alt={item.caption}
                  fill
                  className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                />

                {/* Video badge */}
                {item.type === "video" && (
                  <div className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/10">
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                      Video
                    </span>
                  </div>
                )}

                {/* Play button */}
                {item.type === "video" && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isHovered
                          ? "bg-white border-white scale-110"
                          : "bg-white/20 border-white/40 backdrop-blur-sm"
                      }`}
                    >
                      <Play
                        className={`w-5 h-5 ml-0.5 fill-current transition-colors duration-300 ${isHovered ? "text-gray-900" : "text-white"}`}
                      />
                    </div>
                  </div>
                )}

                {/* Expand icon */}
                <div
                  className={`absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  <Maximize2 className="w-3.5 h-3.5 text-white" />
                </div>

                {/* Caption */}
                <div
                  className={`absolute bottom-0 left-0 right-0 z-20 p-4 transition-all duration-300 ${
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                >
                  <p className="text-white font-bold text-sm leading-tight">
                    {item.caption}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-white/60 shrink-0" />
                    <span className="text-white/60 text-xs">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Stats ── */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-gray-100 dark:border-gray-900 grid grid-cols-3 gap-4 sm:gap-8">
          {[
            { value: "2", label: "Office Locations" },
            { value: "15+", label: "Team Members" },
            { value: "2022", label: "Established" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 dark:text-gray-600 font-semibold uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-5 z-50 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="text-white text-sm font-bold">
              {lightboxIndex + 1} / {filtered.length}
            </span>
          </div>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-3 sm:left-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-3 sm:right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Content */}
          <div
            className="w-full max-w-5xl flex flex-col items-center gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-video">
              {activeItem.type === "image" ? (
                <Image
                  src={activeItem.src}
                  alt={activeItem.caption}
                  fill
                  className="object-cover"
                  sizes="90vw"
                  priority
                />
              ) : (
                <video
                  src={activeItem.src}
                  poster="/office/office1.jpg"
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Caption */}
            <div className="text-center">
              <p className="text-white font-bold text-lg">
                {activeItem.caption}
              </p>
              <div className="flex items-center justify-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-white/40" />
                <span className="text-white/40 text-sm">
                  {activeItem.location}
                </span>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2">
              {filtered.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setLightboxIndex(idx)}
                  className={`shrink-0 w-14 h-10 rounded-lg overflow-hidden relative border-2 transition-all duration-200 ${
                    idx === lightboxIndex
                      ? "border-white scale-110"
                      : "border-transparent opacity-40 hover:opacity-70"
                  }`}
                >
                  <Image
                    src={item.thumb}
                    alt={item.caption}
                    fill
                    className="object-cover"
                    sizes="60px"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <Play className="w-3 h-3 text-white fill-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
