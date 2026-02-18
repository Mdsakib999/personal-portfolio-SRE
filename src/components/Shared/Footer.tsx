"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className=" px-6 md:px-12 pb-8 pt-[-8px]">
      {/* outer rounded card */}
      <div className="max-w-7xl bg-[#10182b] mx-auto rounded-2xl border md:py-12 py-8 px-6 md:px-12  shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                sr.
              </span>
            </div>

            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Feel free to reach out if you want to collaborate with us, or
              simply have a chat.
            </p>

            <div>
              <a
                href="mailto:shariar@smitsolution.com.bd"
                className="inline-flex items-center gap-3 text-white text-lg md:text-xl font-medium hover:underline"
                aria-label="Email hello at thirdweb studio"
              >
                <span>Shariar@smitsolution.com.bd</span>
                <svg
                  className="w-5 h-5 transform transition-transform duration-150 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            {/* Our projects */}
            {/* <nav aria-label="Our projects" className="md:col-span-1">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">
                Our projects
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/#ventures" className="hover:text-white">
                    SM Travels
                  </Link>
                </li>
                <li>
                  <Link href="/#ventures" className="hover:text-white">
                    SM Foods
                  </Link>
                </li>
                <li>
                  <Link href="/#ventures" className="hover:text-white">
                    SM Auto
                  </Link>
                </li>
              </ul>
            </nav> */}
            {/* Follow us */}
            <nav aria-label="Follow us" className="md:col-span-1">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">
                Follow us
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2 items-center">
                  <a
                    href="https://www.facebook.com/Shahriar.rahma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border hover:bg-foreground/10"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.facebook.com/Shahriar.rahma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Facebook
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/in/shariar-rahman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border hover:bg-foreground/10"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shariar-rahman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>

                <li className="flex gap-2 items-center">
                  <a
                    href="https://www.instagram.com/smitsolution.uae/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border hover:bg-foreground/10"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.instagram.com/smitsolution.uae/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
                {/* <li className="flex gap-2 items-center">
                  <a
                    href="https://x.com/smitsolutionuae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border hover:bg-foreground/10"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://x.com/smitsolutionuae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    X
                  </a>
                </li> */}
                
              </ul>
            </nav>
            {/* Quick Links */}
            <nav aria-label="Quick links" className=" md:col-span-1">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* bottom small copyright row */}
        <div className="mt-10 border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Shariar Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
