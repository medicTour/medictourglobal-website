import {useTranslations} from 'next-intl';
import Hero from "@/components/hero/Hero";
import TrustSection from "@/components/trust/TrustSection";
import TreatmentsSection from "@/components/treatments/TreatmentsSection";
import JourneySection from "@/components/journey/JourneySection";
import CostComparison from "@/components/cost/CostComparison";
import RegionsSection from "@/components/regions/RegionsSection";
import ResourcesSection from "@/components/resources/ResourcesSection";
import CtaSection from "@/components/cta/CtaSection";


export default function Page() {
  return (
    <>
      <Hero />
      <TrustSection />
      <TreatmentsSection />
      <JourneySection />
      <CostComparison />
      <RegionsSection />
      <ResourcesSection />
      <CtaSection />
    </>
  );
}
