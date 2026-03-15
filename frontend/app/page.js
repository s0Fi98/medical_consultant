import Image from "next/image";
import HeroSection from "@/components/herosection";
import AvailableCountries from "@/components/availablecountries";
import WhyAbroad from "@/components/whyabroad";
import Photos from "@/components/photos";
import Testimonials from "@/components/testimonials";
import FAQSection from "@/components/faqsection";

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
