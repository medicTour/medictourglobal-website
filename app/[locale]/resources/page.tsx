import ResourcesHero from "@/sections/resources/ResourcesHero/ResourcesHero";
import ResourcesIntro from "@/sections/resources/ResourcesIntro/ResourcesIntro";
import MedicalTravelGuides from "@/sections/resources/MedicalTravelGuides/MedicalTravelGuides";
import TreatmentEducation from "@/sections/resources/TreatmentEducation/TreatmentEducation";
import PatientPreparation from "@/sections/resources/PatientPreparation/PatientPreparation";
import HospitalInformation from "@/sections/resources/HospitalInformation/HospitalInformation";
import Downloads from "@/sections/resources/Downloads/Downloads";
import ResourcesFAQ from "@/sections/resources/ResourcesFAQ/ResourcesFAQ";
import ResourcesCTA from "@/sections/resources/ResourcesCTA/ResourcesCTA";

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourcesIntro />
      <MedicalTravelGuides />
      <TreatmentEducation />
      <PatientPreparation />
      <HospitalInformation />
      <Downloads />
      <ResourcesFAQ />
      <ResourcesCTA />
    </>
  );
}