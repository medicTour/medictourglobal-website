'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './TreatmentHero.module.scss';

const slugToIndex: Record<string, number> = {
  'cardiac-surgery': 0,
  'orthopedic-surgery': 1,
  'spine-surgery': 2,
  'ivf-treatment': 3,
  'organ-transplant': 4,
};

interface TreatmentHeroProps {
  slug: string;
  data: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
}

export default function TreatmentHero({ slug, data }: TreatmentHeroProps) {
  const index = slugToIndex[slug];
  // Correct path: treatment-1.png, treatment-2.png, etc.
  const imageSrc = index !== undefined
    ? `/icons/treatments/treatment-${index + 1}.png`
    : '/icons/treatments/placeholder.png';

  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className={styles.bgImage}
          onError={(e) => {
            e.currentTarget.src = '/icons/treatments/placeholder.png';
          }}
        />
        <div className={styles.overlay} />
      </div>
      <div className={`container ${styles.content}`}>
        <h1>{data.title}</h1>
        <p className={styles.subtitle}>{data.subtitle}</p>
        <p className={styles.description}>{data.description}</p>
        <Link href="/contact" className={styles.cta}>
          {data.cta}
        </Link>
      </div>
    </section>
  );
}