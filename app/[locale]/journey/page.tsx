import JourneyHero from "@/sections/journey/JourneyHero/JourneyHero";
import JourneyIntro from "@/sections/journey/JourneyIntro/JourneyIntro";
import JourneySteps from "@/sections/journey/JourneySteps/JourneySteps";
import DoctorEvaluation from "@/sections/journey/DoctorEvaluation/DoctorEvaluation";
import TravelSupport from "@/sections/journey/TravelSupport/TravelSupport";
import HospitalCare from "@/sections/journey/HospitalCare/HospitalCare";
import RecoverySupport from "@/sections/journey/RecoverySupport/RecoverySupport";
import PatientSafety from "@/sections/journey/PatientSafety/PatientSafety";
import JourneyFAQ from "@/sections/journey/JourneyFAQ/JourneyFAQ";
import JourneyCTA from "@/sections/journey/JourneyCTA/JourneyCTA";

export default function JourneyPage() {
  return (
    <>
      <JourneyHero />
      <JourneyIntro />
      <JourneySteps />
      <DoctorEvaluation />
      <TravelSupport />
      <HospitalCare />
      <RecoverySupport />
      <PatientSafety />
      <JourneyFAQ />
      <JourneyCTA />
    </>
  );
}