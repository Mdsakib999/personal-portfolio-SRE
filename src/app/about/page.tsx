import AboutSection from "@/components/About/AboutSection";
import Quote from "@/components/About/Quote";
import RevenueStats from "@/components/About/RevenueStats";
import Values from "@/components/About/Values";
import VenturesOverview from "@/components/About/VenturesOverview";
import ContactForm from "@/components/Shared/ContactForm";

export default function page() {
  return (
    <div className="">
      <AboutSection />
      <Values />
      <RevenueStats />
      <VenturesOverview />
      <Quote />
      <ContactForm />
    </div>
  );
}
