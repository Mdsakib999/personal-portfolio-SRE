"use client";
import React, { useState } from "react";
import { GridPattern } from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit", form);
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-12 relative">

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
            <label className="block text-sm text-white/70 mb-2">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 py-3 placeholder-white/30 focus:outline-none focus:border-white transition-colors"
            />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm text-white/70 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 resize-none placeholder-white/30 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div className="mt-8 flex justify-end">
              <button type="submit" className="inline-flex items-center gap-2 border border-white/20 text-white/90 px-6 py-2 rounded-full text-sm hover:bg-white/5 transition">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
