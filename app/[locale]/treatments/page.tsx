import TreatmentsHero from "@/sections/treatments/TreatmentsHero/TreatmentsHero";
import TreatmentsIntro from "@/sections/treatments/TreatmentsIntro/TreatmentsIntro";
import TreatmentsCategories from "@/sections/treatments/TreatmentsCategories/TreatmentsCategories";
import FeaturedProcedures from "@/sections/treatments/FeaturedProcedures/FeaturedProcedures";
import TreatmentSupport from "@/sections/treatments/TreatmentSupport/TreatmentSupport";
import HospitalsSection from "@/sections/treatments/HospitalsSection/HospitalsSection";
import TreatmentCost from "@/sections/treatments/TreatmentCost/TreatmentCost";
import TreatmentsCTA from "@/sections/treatments/TreatmentsCTA/TreatmentsCTA";

export default function TreatmentsPage() {
  return (
    <>
      <TreatmentsHero />
      <TreatmentsIntro />
      <TreatmentsCategories />
      <FeaturedProcedures />
      <TreatmentSupport />
      <HospitalsSection />
      <TreatmentCost />
      <TreatmentsCTA />
    </>
  );
}