'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './RegionTrust.module.scss';

interface RegionTrustProps {
  regionSlug: string;
}

export default function RegionTrust({ regionSlug }: RegionTrustProps) {
  const t = useTranslations(`Regions.${regionSlug}.trust`);

  // Keys for the 4 trust cards (must match translation structure)
  const cards = [
    { key: 'affordable', icon: '/icons/trust/affordable.png' },
    { key: 'specialists', icon: '/icons/trust/specialists.png' },
    { key: 'hospitals', icon: '/icons/trust/hospitals.png' },
    { key: 'support', icon: '/icons/trust/support.png' },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.key} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src={card.icon}
                  alt=""
                  width={48}
                  height={48}
                  className={styles.icon}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/icons/trust/default.svg';
                  }}
                />
              </div>
              <h3 className={styles.cardTitle}>{t(`${card.key}.title`)}</h3>
              <p className={styles.cardDesc}>{t(`${card.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}