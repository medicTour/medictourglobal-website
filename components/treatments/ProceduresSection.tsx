'use client';

import styles from './ProceduresSection.module.scss';

interface ProceduresSectionProps {
  data: {
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
}

export default function ProceduresSection({ data }: ProceduresSectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>{data.title}</h2>
        <div className={styles.grid}>
          {data.items.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}