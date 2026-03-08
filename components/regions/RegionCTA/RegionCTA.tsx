'use client';

import CtaSection from '../../cta/CtaSection';
import styles from './RegionCTA.module.scss';

interface RegionCTAProps {
  regionSlug: string;
}

export default function RegionCTA({ regionSlug }: RegionCTAProps) {
  return (
    <section className={styles.section}>
      <CtaSection />
    </section>
  );
}