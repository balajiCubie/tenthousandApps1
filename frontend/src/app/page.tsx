import { Hero } from '@/components/homepage/Hero';
import { Overview } from '@/components/homepage/Overview';
import { FeatureGrid } from '@/components/homepage/FeatureGrid';
import { CalculatorPreview } from '@/components/homepage/CalculatorPreview';
import { AccordionSection } from '@/components/homepage/AccordionSection';
import { ServicesTable } from '@/components/homepage/ServicesTable';
import { PerformanceStats } from '@/components/homepage/PerformanceStats';
import { GetStartedCards } from '@/components/homepage/GetStartedCards';
import { FAQ } from '@/components/homepage/FAQ';
import { FeedbackStrip } from '@/components/homepage/FeedbackStrip';
import { Footer } from '@/components/homepage/Footer';  

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Section 2: Hero */}
      <Hero />

      {/* Section 3: Overview */}
      <Overview />

      {/* Section 4: Feature Category Grid */}
      <FeatureGrid />

      {/* Section 5: Interactive Calculator Preview */}
      <CalculatorPreview />

      {/* Section 6: Accordion */}
      <AccordionSection />

      {/* Section 7: Services Table */}
      <ServicesTable />

      {/* Section 8: Performance Stats */}
      <PerformanceStats />

      {/* Section 9: Get Started Cards */}
      <GetStartedCards />

      {/* Section 10: FAQ */}
      <FAQ />

      {/* Section 11: Feedback Strip */}
      <FeedbackStrip />

      {/* Section 12: Footer */}
      <Footer />
    </div>
  );
}
