import HeroSection from '@/components/home/HeroSection';
import CoreServicesSection from '@/components/home/CoreServicesSection';
import PopularVisasSection from '@/components/home/PopularVisasSection';
import FeaturedHolidaysSection from '@/components/home/FeaturedHolidaysSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import DocumentationPreviewSection from '@/components/home/DocumentationPreviewSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      {/* SECTION A: HERO */}
      <HeroSection />

      {/* SECTION B: FOUR CORE SERVICES */}
      <CoreServicesSection />

      {/* SECTION C: POPULAR VISA DESTINATIONS */}
      <PopularVisasSection />

      {/* SECTION D: FEATURED HOLIDAYS */}
      <FeaturedHolidaysSection />

      {/* SECTION E: WHY CHOOSE US */}
      <WhyChooseUsSection />

      {/* SECTION F: HOW IT WORKS */}
      <HowItWorksSection />

      {/* SECTION G: DOCUMENTATION SERVICES */}
      <DocumentationPreviewSection />

      {/* SECTION H: CUSTOMER TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION I: FAQ */}
      <FaqSection />

      {/* SECTION J: FINAL CTA */}
      <FinalCtaSection />
    </>
  );
}
