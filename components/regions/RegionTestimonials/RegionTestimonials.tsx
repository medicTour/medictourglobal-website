'use client';

import { useTranslations } from 'next-intl';
import styles from './RegionTestimonials.module.scss';

interface RegionTestimonialsProps {
  regionSlug: string;
}

export default function RegionTestimonials({ regionSlug }: RegionTestimonialsProps) {
  const t = useTranslations(`Regions.${regionSlug}.testimonials`);
  const testimonials = t.raw('items') as Array<{ name: string; text: string }>;

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.text}>&ldquo;{item.text}&rdquo;</p>
              <p className={styles.name}>— {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}
