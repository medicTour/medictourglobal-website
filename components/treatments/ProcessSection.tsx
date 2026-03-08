'use client';

import styles from './ProcessSection.module.scss';

interface ProcessSectionProps {
  data: {
    title: string;
    steps: string[];
  };
}

export default function ProcessSection({ data }: ProcessSectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>{data.title}</h2>
        <div className={styles.timeline}>
          {data.steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <span className={styles.number}>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}