import About from "@/components/Home/About";
import Articles from "@/components/Home/Articles";
import Banner from "@/components/Home/Banner";
import Journey from "@/components/Home/Journey";
import Quote from "@/components/Home/Quote";
import Ventures from "@/components/Home/Ventures";
import ContactForm from "@/components/Shared/ContactForm";
import ScrollContext from "@/lib/ScrollContext";

export default function Home() {
  return (
    <div className="">
      <ScrollContext>
        <Banner />
        <About />
        <Quote />
        <Journey />
        <Ventures />
        <Articles />
        <ContactForm />
      </ScrollContext>
    </div>
  );
}
