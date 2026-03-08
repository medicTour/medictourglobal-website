'use client';

import JourneySection from '../../journey/JourneySection';
import styles from './RegionJourney.module.scss';

interface RegionJourneyProps {
  regionSlug: string;
}

export default function RegionJourney({ regionSlug }: RegionJourneyProps) {
  return (
    <section className={styles.section}>
      <JourneySection />
    </section>
  );
}