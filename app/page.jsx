import HeroSection from '@/components/home/HeroSection';
import TrustStatsSection from '@/components/home/TrustStatsSection';
import FeaturedHolidaysSection from '@/components/home/FeaturedHolidaysSection';
import DestinationExplorerSection from '@/components/home/DestinationExplorerSection';
import CoreServicesSection from '@/components/home/CoreServicesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import DocumentationPreviewSection from '@/components/home/DocumentationPreviewSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      {/* 1. HERO WITH MULTI-TAB SEARCH & QUOTE WIDGET (ABOVE THE FOLD) */}
      <HeroSection />

      {/* 2. 4-COLUMN TRUST METRICS STRIP */}
      <TrustStatsSection />

      {/* 3. DEALS & PACKAGES CAROUSEL/GRID (WITH CATEGORY PILLS) */}
      <FeaturedHolidaysSection />

      {/* 5. DESTINATION EXPLORER GRID (DOMESTIC & INTERNATIONAL TABS) */}
      <DestinationExplorerSection />

      {/* 6. FOUR CORE SERVICES OVERVIEW */}
      <CoreServicesSection />

      {/* 7. 4-STEP "HOW IT WORKS" PROCESS */}
      <HowItWorksSection />

      {/* 8. WHY CHOOSE US / VALUE PROPOSITIONS */}
      <WhyChooseUsSection />

      {/* 9. TRAVEL DOCUMENTATION (OTB, POE, HOTEL VOUCHERS) */}
      <DocumentationPreviewSection />

      {/* 10. CUSTOMER TESTIMONIALS & REVIEWS */}
      <TestimonialsSection />

      {/* 11. EXPANDABLE FAQ ACCORDION (VALIDITY, TIMELINES, SECURITY) */}
      <FaqSection />

      {/* 12. FINAL HIGH-CONVERTING WHATSAPP CTA */}
      <FinalCtaSection />
    </>
  );
}
