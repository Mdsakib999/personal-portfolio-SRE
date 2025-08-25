import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import Newsletter from "@/components/Contact/NewsLetter";

export default function ContactPage() {
  return (
    <section className="py-20 overflow-x-hidden relative">
      <div
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
          className="w-full h-full z-10 relative"
        />
      </div>
      {/*  */}

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-semibold mb-6">
              Get in touch
              <br />
              We’re here to assist you
            </h1>
          </div>
          {/* socials */}
          <div className="flex flex-col gap-4">
            <a href="#" className="p-2 rounded-full border hover:bg-gray-100">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full border hover:bg-gray-100">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full border hover:bg-gray-100">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div aria-hidden="true" className="pointer-events-none -z-10">
          {/* left blob */}
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2
             w-72 h-72 md:w-[360px] md:h-[360px] rounded-full
             bg-gradient-to-tr from-orange-300 via-purple-300 to-indigo-400
             opacity-30 filter blur-3xl"
          />

          {/* right blob */}
          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2
             w-64 h-64 md:w-[310px] md:h-[360px] rounded-full
             bg-gradient-to-tr from-indigo-500 to-blue-300
             opacity-25 filter blur-3xl"
          />
        </div>

        {/* Contact Form */}
        <form className="space-y-8 max-w-7xl z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Name */}
            <label className="block">
              <span className="sr-only">Your Name</span>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-0 border-b-[1.5px] border-slate-300 placeholder:text-slate-400 py-3 text-lg outline-none transition-colors
                       focus:border-sky-600 focus:placeholder:text-slate-300"
                aria-label="Your Name"
              />
            </label>

            {/* Email */}
            <label className="block">
              <span className="sr-only">Email Address</span>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-0 border-b-[1.5px] border-slate-300 placeholder:text-slate-400 py-3 text-lg outline-none transition-colors
                       focus:border-sky-600 focus:placeholder:text-slate-300"
                aria-label="Email Address"
              />
            </label>

            {/* Phone */}
            <label className="block">
              <span className="sr-only">Phone Number</span>
              <input
                type="tel"
                placeholder="Phone Number (optional)"
                className="w-full bg-transparent border-0 border-b-[1.5px] border-slate-300 placeholder:text-slate-400 py-3 text-lg outline-none transition-colors
                       focus:border-sky-600 focus:placeholder:text-slate-300"
                aria-label="Phone Number"
              />
            </label>
          </div>

          {/* Message textarea with bottom-line style */}
          <label className="block">
            <span className="sr-only">Message</span>
            <textarea
              placeholder="Message"
              className="w-full bg-transparent border-0 border-b-[1.5px] border-slate-300 placeholder:text-slate-400 min-h-[120px] py-4 text-base outline-none resize-y transition-colors
                     focus:border-sky-600 focus:placeholder:text-slate-300"
              aria-label="Message"
            />
          </label>

          <div>
            <button
              type="submit"
              className="bg-[#0f1b2a] text-white rounded-full px-6 py-4 text-lg hover:opacity-95 transition"
            >
              Leave us a Message
            </button>
          </div>
        </form>
      </div>

      <Newsletter />
    </section>
  );
}
