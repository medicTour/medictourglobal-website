import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { regions } from '@/config/regions';
import RegionHero from '@/components/regions/RegionHero/RegionHero';
import RegionTrust from '@/components/regions/RegionTrust/RegionTrust';
import RegionTreatments from '@/components/regions/RegionTreatments/RegionTreatments';
import RegionCost from '@/components/regions/RegionCost/RegionCost';
import RegionJourney from '@/components/regions/RegionJourney/RegionJourney';
import RegionHospitals from '@/components/regions/RegionHospitals/RegionHospitals';
import RegionTestimonials from '@/components/regions/RegionTestimonials/RegionTestimonials';
import RegionTravelSupport from '@/components/regions/RegionTravelSupport/RegionTravelSupport';
import RegionCTA from '@/components/regions/RegionCTA/RegionCTA';






// Generate static paths for all regions
export async function generateStaticParams() {
    return regions.map((region) => ({ region: region.slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ locale: string; region: string }> }) {
    const { locale, region } = await params;
    const regionConfig = regions.find((r) => r.slug === region);
    if (!regionConfig) return {};

    return {
        title: `Medical Treatment in India for Patients from ${regionConfig.name} | MedicTour Global`,
        description: `Trusted medical travel support for patients from ${regionConfig.name} seeking advanced and affordable treatment options in India.`,
    };
}

export default async function RegionPage({ params }: { params: Promise<{ locale: string; region: string }> }) {
    const { locale, region } = await params;
    setRequestLocale(locale);

    const regionConfig = regions.find((r) => r.slug === region);
    if (!regionConfig) notFound();

    return (
        <>
            <RegionHero regionSlug={region} config={regionConfig} />
            <RegionTrust regionSlug={region} />
            <RegionTreatments regionSlug={region} />
            <RegionCost regionSlug={region} />
            <RegionJourney regionSlug={region} />
            <RegionHospitals regionSlug={region} />
            <RegionTestimonials regionSlug={region} />
            <RegionTravelSupport regionSlug={region} />
            <RegionCTA regionSlug={region} />

        </>
    );
}