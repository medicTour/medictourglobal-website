'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './RegionHospitals.module.scss';

interface RegionHospitalsProps {
  regionSlug: string;
}

export default function RegionHospitals({ regionSlug }: RegionHospitalsProps) {
  const t = useTranslations(`Regions.${regionSlug}.hospitals`);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>{t('title')}</h2>
            <p className={styles.desc}>{t('desc')}</p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/regions/hospital.png"
              alt="Modern hospital"
              width={500}
              height={300}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}