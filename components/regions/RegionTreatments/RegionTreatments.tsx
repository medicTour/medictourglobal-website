'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import styles from './RegionTreatments.module.scss';

// Map treatment title to image number (1‑based)
const titleToImage: Record<string, number> = {
  'Cardiac Surgery': 1,
  'Orthopedic Surgery': 2,
  'Cancer Treatment': 3,
  'Cosmetic Surgery': 4,
  'Fertility Treatment': 5,
  'Organ Transplant': 6,
};

// Helper to convert title to slug
const titleToSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

interface RegionTreatmentsProps {
  regionSlug: string;
}

export default function RegionTreatments({ regionSlug }: RegionTreatmentsProps) {
  const t = useTranslations(`Regions.${regionSlug}.treatments`);
  const locale = useLocale();
  const items = t.raw('items') as Array<{ title: string; desc: string }>;

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.grid}>
          {items.map((item, index) => {
            const imageNumber = titleToImage[item.title];
            // Fallback to index+1 if title not found (should not happen)
            const finalImageNumber = imageNumber || index + 1;
            const slug = titleToSlug(item.title);
            return (
              <div key={index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={`/icons/treatments/treatment-${finalImageNumber}.png`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                    onError={(e) => {
                      e.currentTarget.src = '/icons/treatments/placeholder.png';
                    }}
                  />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <Link href={`/${locale}/treatments/${slug}`} className={styles.cardLink}>
                  Read More →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}