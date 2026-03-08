'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { RegionConfig } from '@/config/regions';
import styles from './RegionHero.module.scss';

interface RegionHeroProps {
  regionSlug: string;
  config: RegionConfig;
}

export default function RegionHero({ regionSlug, config }: RegionHeroProps) {
  const t = useTranslations(`Regions.${regionSlug}.hero`);

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src={config.heroImage}
          alt={config.name}
          fill
          priority
          className={styles.image}
        />
        <div className={styles.overlay} style={{ backgroundColor: config.overlayColor }} />
      </div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.subtitle}>{t('subtitle')}</p>
        <p className={styles.description}>{t('description')}</p>
        <Link href="/contact" className={styles.cta}>
          {t('cta')}
        </Link>
      </div>
    </section>
  );
}