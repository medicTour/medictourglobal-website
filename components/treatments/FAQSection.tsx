'use client';

import { useState } from 'react';
import styles from './FAQSection.module.scss';

interface FAQSectionProps {
  data: Array<{ q: string; a: string }>;
}

export default function FAQSection({ data }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className={styles.accordion}>
          {data.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.question} onClick={() => toggle(index)}>
                <span>{item.q}</span>
                <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}