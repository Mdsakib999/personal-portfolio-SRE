import { Button } from "../ui/button";

export default function Newsletter() {
  return (
    <div className="py-16 px-6 bg-foreground/10 backdrop-blur-sm my-10 z-10 relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none -z-50">
        {/* left blob */}
        <div
          className="absolute left-1/2 md:left-10 -bottom-34 w-72 h-72 rounded-full
                     bg-gradient-to-tr from-orange-300 via-orange-300 to-indigo-400
                     opacity-30 filter blur-3xl transform -translate-x-1/2 md:translate-x-0"
        />
        {/* right blob */}
        <div
          className="absolute -right-2 -bottom-32 w-66 h-96 rounded-full
                     bg-gradient-to-tr from-teal-200 to-blue-400
                     opacity-25 filter blur-3xl"
        />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-light mb-2">
            Signup for the <br /> newsletter
          </h2>
          <p className="text-foreground/40">Stay connected</p>
        </div>
        <form className="flex  sm:flex-row gap-4">
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

          <Button
            type="submit"
            className="bg-[#0f1b2a] text-white rounded-full px-6"
          >
            →
          </Button>
        </form>
      </div>
    </div>
  );
}
