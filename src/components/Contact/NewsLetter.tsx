import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Newsletter() {
  return (
    <section className="my-20 px-6">
      <div className="max-w-7xl mx-auto rounded-2xl dark:bg-gray-900 shadow-sm shadow-gray-300 dark:shadow-white p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Join our newsletter
            </h2>
            <p className="text-foreground/60 mt-2">
              Get product updates and important announcements.
            </p>
          </div>

          {/* form */}
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 rounded-full border border-slate-300 dark:border-slate-700 bg-transparent px-5 py-3 outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 rounded-full border border-slate-300 dark:border-slate-700 bg-transparent px-5 py-3 outline-none focus:ring-2 focus:ring-sky-500"
            />

            <Button
              type="submit"
              className="rounded-full px-5 py-3"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}