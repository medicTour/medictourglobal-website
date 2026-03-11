'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './TreatmentCTA.module.scss';

export default function TreatmentCTA() {
  const t = useTranslations('TreatmentDetailCTA');

  return (
    <section className={styles.cta}>
      <div className="container">
        <h2>{t('title')}</h2>
        <p>{t('subtitle')}</p>
        <Link href="/contact" className={styles.button}>
          {t('button')}
        </Link>
      </div>
    </section>
  );
}