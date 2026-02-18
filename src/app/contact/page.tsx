"use client";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import Newsletter from "@/components/Contact/NewsLetter";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const socials = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/Shahriar.rahma",
  },
  {
    icon: FaLinkedin,
    label: "Linkedin",
    href: "https://www.linkedin.com/in/shariar-rahman/",
  },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FaXTwitter, label: "X", href: "https://twitter.com" },
];

const fields = [
  { name: "name", label: "Your Name", type: "input", inputType: "text" },
  { name: "email", label: "Email Address", type: "input", inputType: "email" },
  { name: "phone", label: "Phone Number", type: "input", inputType: "tel" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen py-20 overflow-x-hidden relative">
      {/* Grid background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "opacity-[0.06] dark:opacity-[0.10]",
          "[mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,black_30%,transparent_100%)]",
        )}
      >
        <GridPattern
          width={40}
          height={40}
          strokeDasharray={"4 2"}
          className="w-full h-full"
        />
      </div>

      {/* Ambient blobs — very subtle */}
      <div className="pointer-events-none absolute top-1/2 -left-40 -translate-y-1/2 w-80 h-80 rounded-full bg-black/[0.025] dark:bg-white/[0.025] blur-[100px] -z-10" />
      <div className="pointer-events-none absolute top-1/2 -right-40 -translate-y-1/2 w-80 h-80 rounded-full bg-black/[0.025] dark:bg-white/[0.025] blur-[100px] -z-10" />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-black/20 dark:border-white/15 pointer-events-none" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-black/20 dark:border-white/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-black/50 dark:text-white/35 mb-5 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-black/40 dark:bg-white/30" />
              Contact
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-black dark:text-white">
              Get in
              <br />
              <em className="text-black/35 dark:text-white/40">Touch.</em>
            </h1>
            <p className="mt-5 text-base text-black/55 dark:text-white/50 max-w-md leading-relaxed">
              We&apos;re here to assist you. Reach out and we&apos;ll get back
              to you as soon as possible.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group w-10 h-10 rounded-full border border-black/20 dark:border-white/15 flex items-center justify-center text-black/50 dark:text-white/40 hover:border-black/50 dark:hover:border-white/40 hover:text-black dark:hover:text-white transition-all duration-200"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/10 dark:bg-white/10 mb-14" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-5xl">
          {/* Top 3 fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 mb-10">
            {fields.map((field) => {
              const isFocused = focused === field.name;
              const hasValue = !!form[field.name as keyof typeof form];
              return (
                <div key={field.name} className="relative flex flex-col gap-0">
                  <motion.label
                    htmlFor={field.name}
                    animate={{
                      opacity: isFocused || hasValue ? 1 : 0.55,
                      fontSize: isFocused || hasValue ? "9px" : "11px",
                      y: isFocused || hasValue ? -2 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="uppercase tracking-[0.3em] text-black dark:text-white font-medium pointer-events-none mb-1"
                  >
                    {field.label}
                  </motion.label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.inputType}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border-b border-black/20 dark:border-white/15 py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-300 text-black dark:text-white text-base"
                  />
                  {/* Animated underline */}
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

          {/* Message */}
          <div className="relative flex flex-col gap-0 mb-12">
            <motion.label
              htmlFor="message"
              animate={{
                opacity: focused === "message" || !!form.message ? 1 : 0.55,
                fontSize:
                  focused === "message" || !!form.message ? "9px" : "11px",
                y: focused === "message" || !!form.message ? -2 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="uppercase tracking-[0.3em] text-black dark:text-white font-medium pointer-events-none mb-1"
            >
              Message
            </motion.label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              rows={4}
              className="w-full bg-transparent border-b border-black/20 dark:border-white/15 py-3 resize-none focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-300 text-black dark:text-white text-base"
            />
            <motion.div
              className="absolute bottom-0 left-0 h-px bg-black dark:bg-white origin-left"
              animate={{ scaleX: focused === "message" ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>

          {/* Submit */}
          <div className="flex items-center gap-5">
            <button
              type="submit"
              className="group relative flex items-center gap-3 border border-black/25 dark:border-white/20 hover:border-black dark:hover:border-white rounded-full pl-7 pr-5 py-3.5 transition-all duration-300 hover:-translate-y-px overflow-hidden"
            >
              <span className="absolute inset-0 bg-black dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <span className="relative z-10 text-[11px] uppercase tracking-[0.25em] text-black/70 dark:text-white/60 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                Leave us a Message
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="relative z-10 text-black/35 dark:text-white/30 group-hover:text-white dark:group-hover:text-black transition-all duration-300 group-hover:translate-x-0.5"
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

            <AnimatePresence>
              {submitted && (
                <motion.span
                  className="text-[11px] uppercase tracking-[0.2em] text-black/60 dark:text-white/50"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  Sent ✓
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </form>

        {/* Bottom divider */}
        <div className="w-full h-px bg-black/10 dark:bg-white/10 mt-16 mb-4" />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.35em] text-black/30 dark:text-white/20">
            Md Shariar Rahman
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-black/25 dark:text-white/15">
            Open to Collaboration
          </span>
        </div>
      </div>

      <Newsletter />
    </section>
  );
}
