import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 h-screen flex flex-col md:flex-row items-center justify-center gap-12 ">
      {/* Text content */}
      <div className="flex-1">
        <h2 className="text-5xl md:text-6xl font-semibold mb-6">About</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
          Passionate about creating applications that make everyday life feel a bit lighter—tools that just work, quietly in the background.
        </p>
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