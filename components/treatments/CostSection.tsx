'use client';

import styles from './CostSection.module.scss';

interface CostSectionProps {
  data: {
    title: string;
    description: string;
  };
}

export default function CostSection({ data }: CostSectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p className={styles.note}>*Final cost depends on medical evaluation and hospital selection.</p>
      </div>
    </section>
  );
}