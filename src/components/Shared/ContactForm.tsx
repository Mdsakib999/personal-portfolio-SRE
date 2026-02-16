"use client";
import React, { useState } from "react";
import { GridPattern } from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // optional: reset after 2 seconds
    setTimeout(() => setSubmitted(false), 2000);
    // console.log("submit", form);
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center px-6 md:px-12 relative overflow-x-hidden"
    >
      {/* --- LEFT / RIGHT blurred blobs (half off-screen) --- */}
      <div aria-hidden="true" className="pointer-events-none -z-20">
        {/* left blob: sits vertically centered, pushed left so half is off-canvas */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2",
            "-left-36 md:-left-48",
            "w-64 h-64 md:w-[360px] md:h-[360px]",
            "rounded-full",
            "bg-gradient-to-tr from-orange-300 via-purple-300 to-indigo-400",
            "opacity-30 filter blur-3xl"
          )}
        />

        {/* right blob: sits vertically centered, pushed right so half is off-canvas */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2",
            "-right-36 md:-right-48",
            "w-64 h-64 md:w-[310px] md:h-[360px]",
            "rounded-full",
            "bg-gradient-to-tr from-indigo-500 to-blue-300",
            "opacity-25 filter blur-3xl"
          )}
        />
      </div>

      <div
        // container that pins the pattern to the bottom half and applies a mask so it fades upward
        className={cn(
          "pointer-events-none absolute left-0 right-0 bottom-0 h-1/2 -z-10",
          "opacity-55 text-white/10",
          "[mask-image:linear-gradient(to_top,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_80%)]",
          "[webkit-mask-image:linear-gradient(to_top,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_80%)]"
        )}
      >
        <GridPattern
          width={30}
          height={30}
          strokeDasharray={"4 2"}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex items-center">
          <h2 className="text-4xl md:text-8xl font-bold leading-tight ">
            Let's
            <br />
            <span className="pl-6">Get In</span>
            <br />
            Touch
          </h2>
        </div>

        <div className="w-full md:w-1/2 lg:w-2/5">
          <form onSubmit={handleSubmit} className="w-full">
            <label className="block text-sm text-foreground/70 mb-2">
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-foreground/20 py-3 placeholder-foreground/30 focus:outline-none focus:border-foreground transition-colors"
            />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              <div>
                <label className="block text-sm text-foreground/70 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-foreground/20 py-3 placeholder-foreground/30 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-foreground/70 mb-2">
                  Phone
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-foreground/20 py-3 placeholder-foreground/30 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm text-foreground/70 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-foreground/20 py-3 resize-none placeholder-foreground/30 focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div className="mt-8 flex items-center justify-end gap-4">
              <button
                type="submit"
                className="cursor-pointer group relative overflow-hidden border border-slate-300 dark:border-slate-700 px-6 py-2 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-300/40 dark:hover:shadow-slate-900/40"
              >
                <span className="absolute inset-0 bg-slate-900 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-slate-900">
                  Send
                </span>
              </button>

              {submitted && (
                <span className="text-green-500 text-sm font-medium whitespace-nowrap">
                  Message sent!
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
