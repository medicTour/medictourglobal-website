"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./journeyFAQ.module.scss";

export default function JourneyFAQ() {
  const t = useTranslations("JourneyFAQ");
  const questions = t.raw("questions") as Array<{ q: string; a: string }>;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("title")}</h2>
        <div className={styles.accordion}>
          {questions.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.question} onClick={() => toggle(index)}>
                <span>{item.q}</span>
                <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
              </div>
              <div className={`${styles.answer} ${openIndex === index ? styles.open : ""}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}