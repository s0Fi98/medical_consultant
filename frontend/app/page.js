import Image from "next/image";
import HeroSection from "@/components/herosection";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Testimonials />
    </main>
  );
}
