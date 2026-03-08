'use client';

import { useTranslations } from 'next-intl';
import styles from './RegionCost.module.scss';

interface RegionCostProps {
  regionSlug: string;
}

export default function RegionCost({ regionSlug }: RegionCostProps) {
  const t = useTranslations('CostComparison');
  const regionT = useTranslations(`Regions.${regionSlug}.cost`);
  const treatments = t.raw('treatments') as Array<{
    name: string;
    us: string;
    uk: string;
    eu: string;
    india: string;
  }>;

  return (
    <section className={styles.costSection}>
      <div className="container">
        <h2 className={styles.title}>{regionT('title')}</h2>
        <p className={styles.subtitle}>{regionT('subtitle')}</p>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Treatment</th>
                <th>🇺🇸 USA</th>
                <th>🇬🇧 UK</th>
                <th>🇪🇺 Europe</th>
                <th className={styles.highlight}>🇮🇳 India</th>
              </tr>
            </thead>
            <tbody>
              {treatments.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.us}</td>
                  <td>{item.uk}</td>
                  <td>{item.eu}</td>
                  <td className={styles.highlight}>{item.india}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.note}>*Final treatment cost depends on medical evaluation and hospital selection.</p>
      </div>
    </section>
  );
}