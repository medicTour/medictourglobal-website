'use client';

import styles from './RecoverySection.module.scss';

interface RecoverySectionProps {
  data: {
    title: string;
    description: string;
  };
}

export default function RecoverySection({ data }: RecoverySectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </section>
  );
}