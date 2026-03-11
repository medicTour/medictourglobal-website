'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from './TreatmentHero.module.scss';

interface TreatmentHeroProps {
  slug?: string;
  data: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
}

export default function TreatmentHero({ slug: propSlug, data }: TreatmentHeroProps) {
  const params = useParams();
  const slug = propSlug || (params?.slug as string);
  const heroImageSrc = slug
    ? `/images/treatments/hero/${slug}-hero.png`
    : '/images/treatments/hero/placeholder.png';

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src={heroImageSrc}
          alt={data.title}
          width={1200}
          height={600}
          priority
          className={styles.image}
          onError={(e) => {
            e.currentTarget.src = '/images/treatments/hero/placeholder.png';
          }}
        />
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