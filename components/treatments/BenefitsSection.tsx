'use client';

import styles from './BenefitsSection.module.scss';

interface BenefitsSectionProps {
  data: {
    title: string;
    items: string[];
  };
}

export default function BenefitsSection({ data }: BenefitsSectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>{data.title}</h2>
        <ul className={styles.list}>
          {data.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}