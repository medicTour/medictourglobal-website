'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './RegionTreatments.module.scss';

interface RegionTreatmentsProps {
  regionSlug: string;
}

export default function RegionTreatments({ regionSlug }: RegionTreatmentsProps) {
  const t = useTranslations(`Regions.${regionSlug}.treatments`);
  const items = t.raw('items') as Array<{ title: string; desc: string }>;

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src={`/icons/treatments/treatment-${index}.png`}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.icon}
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/icons/treatments/default.png';
                  }}
                />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}