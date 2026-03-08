'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './RegionTravelSupport.module.scss';

interface RegionTravelSupportProps {
  regionSlug: string;
}

export default function RegionTravelSupport({ regionSlug }: RegionTravelSupportProps) {
  const t = useTranslations(`Regions.${regionSlug}.travelSupport`);
  const items = t.raw('items') as string[];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src={`/icons/travel-support/travel-support-${index}.png`}
                  alt=""
                  width={48}
                  height={48}
                  className={styles.icon}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/icons/travel-support/default.png';
                  }}
                />
              </div>
              <p className={styles.text}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}