"use client";
import React, { useState } from "react";
import { GridPattern } from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fields = [
    { name: "name", label: "Full Name", type: "input", col: "full" },
    { name: "email", label: "Email Address", type: "input", col: "half" },
    { name: "phone", label: "Phone Number", type: "input", col: "half" },
    { name: "message", label: "Message", type: "textarea", col: "full" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center px-6 md:px-12 relative overflow-hidden"
    >
      {/* Grid background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 opacity-[0.06] dark:opacity-[0.10]",
          "[mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]",
        )}
      >
        <GridPattern
          width={40}
          height={40}
          strokeDasharray={"4 2"}
          className="w-full h-full"
        />
      </div>

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -left-48 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-black/[0.03] dark:bg-white/[0.03] blur-[120px] -z-10" />
      <div className="pointer-events-none absolute -right-48 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-black/[0.03] dark:bg-white/[0.03] blur-[120px] -z-10" />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-black/15 dark:border-white/15 pointer-events-none" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-black/15 dark:border-white/15 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-black/15 dark:border-white/15 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-black/15 dark:border-white/15 pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
        {/* Left — heading */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <p className="text-[11px] uppercase tracking-[0.35em] text-black/35 dark:text-white/35 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-black/30 dark:bg-white/30" />
            Contact
          </p>

          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.0] tracking-tight text-black dark:text-white">
            Let's
            <br />
            <em className="text-black/30 dark:text-white/30 pl-6 md:pl-10">
              Get In
            </em>
            <br />
            Touch.
          </h2>

          {/* Vertical stem */}
          <div className="w-px h-16 bg-gradient-to-b from-black/20 dark:from-white/20 to-transparent ml-1" />

          {/* Contact info */}
          <div className="flex flex-col gap-5">
            {[
              { label: "Email", value: "hello@shariar.com" },
              { label: "Location", value: "Dhaka, Bangladesh" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-black/25 dark:text-white/25">
                  {item.label}
                </span>
                <span className="text-sm text-black/60 dark:text-white/60 font-light">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical divider */}
        <div className="hidden lg:flex lg:col-span-1 justify-center">
          <div className="w-px h-full max-h-[500px] bg-gradient-to-b from-transparent via-black/10 dark:via-white/10 to-transparent" />
        </div>

        {/* Right — form */}
        <div className="lg:col-span-6 lg:pl-10">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
            {/* Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fields.map((field) => {
                const isFocused = focused === field.name;
                const hasValue = !!form[field.name as keyof typeof form];

                return (
                  <div
                    key={field.name}
                    className={cn(
                      "relative flex flex-col gap-0",
                      field.col === "full" && "md:col-span-2",
                    )}
                  >
                    {/* Floating label */}
                    <motion.label
                      htmlFor={field.name}
                      animate={{
                        y: isFocused || hasValue ? -4 : 0,
                        fontSize: isFocused || hasValue ? "9px" : "11px",
                        opacity: isFocused || hasValue ? 1 : 0.4,
                        letterSpacing:
                          isFocused || hasValue ? "0.3em" : "0.25em",
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="uppercase text-black dark:text-white font-medium pointer-events-none origin-left"
                    >
                      {field.label}
                    </motion.label>

                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        onFocus={() => setFocused(field.name)}
                        onBlur={() => setFocused(null)}
                        rows={4}
                        className="w-full bg-transparent border-b border-black/15 dark:border-white/15 py-3 resize-none focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-300 text-black dark:text-white text-sm"
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        onFocus={() => setFocused(field.name)}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent border-b border-black/15 dark:border-white/15 py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-300 text-black dark:text-white text-sm"
                      />
                    )}

                    {/* Animated underline fill */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-black dark:bg-white origin-left"
                      animate={{ scaleX: isFocused ? 1 : 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Submit row */}
            <div className="flex items-center pt-2 pb-12 sm:pb-6">
              <div className="flex items-center gap-4">
                <AnimatePresence>
                  {submitted && (
                    <motion.span
                      className="text-[11px] uppercase tracking-[0.2em] text-black/50 dark:text-white/50"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      Sent ✓
                    </motion.span>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  className="group relative flex items-center mb-8 gap-3 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white rounded-full pl-6 pr-4 py-3 transition-all duration-300 hover:-translate-y-px overflow-hidden"
                >
                  {/* Fill on hover */}
                  <span className="absolute inset-0 bg-black dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />

                  <span className="relative z-10 text-[11px] uppercase tracking-[0.25em] text-black/60 dark:text-white/60 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                    Send Message
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="relative z-10 text-black/30 dark:text-white/30 group-hover:text-white dark:group-hover:text-black transition-all duration-300 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M2 7H12M8 3L12 7L8 11"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom label */}
      <span className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.4em] text-black/15 dark:text-white/15 whitespace-nowrap pointer-events-none">
        Open to Collaboration
      </span>
    </section>
  );
}
