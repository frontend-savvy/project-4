import ContactSection from "@/components/contact-section";
import EnglishPromoSection from "@/components/english-promo-section";
import HeroSection from "@/components/hero-section";
import LearnMoreSection from "@/components/learn-more-section";
import NewsLetterSection from "@/components/news-letter-section";
import OfferingSection from "@/components/offering-section";
import OurCoursesSection from "@/components/our-courses-section";
import ServicesSection from "@/components/services";
import TestimonialsSection from "@/components/testimonials-section";
import WhyChooseUsSection from "@/components/why-choose-us-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <EnglishPromoSection />
      <WhyChooseUsSection />
      <OfferingSection />
      <LearnMoreSection />
      <TestimonialsSection />
      <OurCoursesSection />
      <ContactSection />
      <NewsLetterSection />
    </main>
  );
}
