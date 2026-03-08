'use client';

import styles from './SymptomsSection.module.scss';

interface SymptomsSectionProps {
  data: {
    title: string;
    items: string[];
  };
}

export default function SymptomsSection({ data }: SymptomsSectionProps) {
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