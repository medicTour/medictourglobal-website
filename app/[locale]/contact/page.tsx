import ContactHero from "@/sections/contact/ContactHero/ContactHero";
import QuickContact from "@/sections/contact/QuickContact/QuickContact";
import InquiryIntro from "@/sections/contact/InquiryIntro/InquiryIntro";
import MultiStepForm from "@/sections/contact/MultiStepForm/MultiStepForm";
import UploadSection from "@/sections/contact/UploadSection/UploadSection";
import PrivacyNotice from "@/sections/contact/PrivacyNotice/PrivacyNotice";
import WhatsAppCTA from "@/sections/contact/WhatsAppCTA/WhatsAppCTA";
import FinalReassurance from "@/sections/contact/FinalReassurance/FinalReassurance";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <QuickContact />
      <InquiryIntro />
      <MultiStepForm />
      <UploadSection />
      <PrivacyNotice />
      <WhatsAppCTA />
      <FinalReassurance />
    </>
  );
}