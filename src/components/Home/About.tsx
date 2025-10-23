import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-16 min-h-screen">
      <h2 className="text-5xl sm:text-6xl md:text-7xl  text-center mb-16">
        About
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="relative">
          <div className="absolute -top-8 -left-8 w-32 h-42 sm:w-40 sm:h-53 z-10">
            <Image
              alt="Team member"
              fill
              className="rounded-sm shadow-lg object-cover"
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
            />
          </div>

          <div className="mt-24 ml-8">
            <Image
              alt="Team meeting"
              width={600}
              height={450}
              className="rounded-sm shadow-lg object-cover w-full"
              src="/img/home-about.png"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center lg:pl-12 border-l-1 border-gray-300">
          <h3 className="text-2xl sm:text-3xl font-light mb-6">
            The Entrepreneurial Journey
          </h3>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Md Shariar Rahman is a self-made entrepreneur from Bangladesh,
            widely recognized for his innovation-driven approach to business.
            Starting with a passion for technology, he founded SM IT Solution, a
            company focused on delivering modern digital solutions. Over the
            years, his vision expanded into multiple industries including
            travel, fashion, lifestyle, and automotive — creating a powerful
            ecosystem under the SM Group brand. Beyond his ventures, he is
            committed to inspiring young entrepreneurs and building a digital
            future for Bangladesh.
          </p>
          <div className="flex pt-10 gap-4">
            <a
              href="https://www.facebook.com/smitsolution.uae"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border hover:bg-foreground/10"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/smitsolution.uae/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border hover:bg-foreground/10"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/smitsolutionuae"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border hover:bg-foreground/10"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/smitsolution/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border hover:bg-foreground/10"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
