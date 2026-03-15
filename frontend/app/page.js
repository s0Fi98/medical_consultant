import HeroSection from "@/components/heroSection";
import AvailableCountries from "@/components/availableCountries";
import WhyAbroad from "@/components/whyAbroad";
import Photos from "@/components/photos";
import Testimonials from "@/components/testimonials";
import FAQSection from "@/components/faqSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AvailableCountries />
      <WhyAbroad />
      <Photos />
      <Testimonials />
      <FAQSection />
    </main>
  );
}
