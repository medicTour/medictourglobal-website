import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import TreatmentHero from '@/components/treatments/TreatmentHero';
import ConditionSection from '@/components/treatments/ConditionSection';
import SymptomsSection from '@/components/treatments/SymptomsSection';
import ProceduresSection from '@/components/treatments/ProceduresSection';
import BenefitsSection from '@/components/treatments/BenefitsSection';
import ProcessSection from '@/components/treatments/ProcessSection';
import CostSection from '@/components/treatments/CostSection';
import RecoverySection from '@/components/treatments/RecoverySection';
import FAQSection from '@/components/treatments/FAQSection';
import TreatmentCTA from '@/components/treatments/TreatmentCTA';

export async function generateStaticParams() {
  const messages = (await import(`@/messages/en.json`)).default;
  const treatments = messages.TreatmentDetail;
  return Object.keys(treatments).map((slug) => ({ slug }));
}

export default async function TreatmentDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  const treatment = messages.TreatmentDetail?.[slug];
  if (!treatment) notFound();

  return (
    <>
      <TreatmentHero data={treatment.hero} />
      {treatment.condition && <ConditionSection data={treatment.condition} />}
      {treatment.symptoms && <SymptomsSection data={treatment.symptoms} />}
      {treatment.procedures && <ProceduresSection data={treatment.procedures} />}
      {treatment.benefits && <BenefitsSection data={treatment.benefits} />}
      {treatment.process && <ProcessSection data={treatment.process} />}
      {treatment.cost && <CostSection data={treatment.cost} />}
      {treatment.recovery && <RecoverySection data={treatment.recovery} />}
      {treatment.faq && <FAQSection data={treatment.faq} />}
      <TreatmentCTA />
    </>
  );
}