import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 h-screen flex flex-col md:flex-row items-center justify-center gap-12 mt-16">
      {/* Text content */}
      <div className="flex-1 justify-items-center md:justify-items-start ">
        <h2 className=" text-3xl sm:text-5xl md:text-6xl font-semibold mb-6">
          About
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl text-center md:text-left">
          Passionate about creating applications that make everyday life feel a
          bit lighter tools that just work, quietly in the background.
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
          <a
            href="#"
            className="p-2 rounded-full border hover:bg-foreground/10"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="w-full flex justify-center md:justify-start">
          <Link href="/contact">
            <Button className="rounded-full mt-6 px-6 py-2">Contact Us</Button>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          alt="CEO"
          width={300}
          height={350}
          className="rounded-2xl shadow-lg object-cover"
          src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
        />
      </div>
    </section>
  );
}
