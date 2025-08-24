import { TextReveal } from "../magicui/text-reveal";

export default function Quote() {
  return (
    <div className="mt-18 p-10 ">
    <div className="w-full h-screen flex items-center justify-center px-4 py-10 pt-10">
      <div className=" max-w-4xl w-full p-8 text-center">
        <p className="text-4xl md:text-5xl font-semibold text-center text-gray-900 dark:text-gray-100 leading-tight">
          “Creating tools that make life easier, one line of code at a time.”
        </p>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 text-center">
          Founder & CEO
        </p>
      </div>
    </div>
    </div>
  );
}
