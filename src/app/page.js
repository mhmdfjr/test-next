import HeroSection from "@/components/heroSection";
import ServicesSection from "@/components/servicesSection";
import AboutSection from "@/components/aboutSection";
import TestimoniSection from "@/components/testimoniSection";
import BannerSection from "@/components/bannerSection";
import FooterSection from "@/components/footerSection";

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] flex flex-col gap-16 overflow-hidden">
      <HeroSection />
      <BannerSection />
      <ServicesSection />
      <AboutSection />
      <TestimoniSection />
      <FooterSection />
    </main>
  );
}
