'use client';

import styles from './ConditionSection.module.scss';

interface ConditionSectionProps {
  data: {
    title: string;
    description: string;
  };
}

export default function ConditionSection({ data }: ConditionSectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </section>
  );
}