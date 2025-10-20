import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 min-h-screen">
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
            Expert, user-friendly advice
          </h3>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We provide our clients with the best prospect of success before
            competition authorities and courts by understanding the competitive
            reality of their industries. We combine this with rigorous economic
            analysis, supported by facts and data, cutting edge techniques,
            presented in clear and compelling expert reports. Our approach is
            practical and user-friendly; we prioritise what matters.
          </p>
          <div className="flex pt-10 gap-4">
            <a
              href="#"
              className="p-2 rounded-full border hover:bg-foreground/10"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border hover:bg-foreground/10"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border hover:bg-foreground/10"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
