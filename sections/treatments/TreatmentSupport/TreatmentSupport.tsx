"use client";

import { useTranslations } from "next-intl";
import styles from "./treatmentSupport.module.scss";

export default function TreatmentSupport() {
  const t = useTranslations("TreatmentSupport");
  const items = t.raw("items") as string[];

  return (
    <section className={styles.supportSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("title")}</h2>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.number}>{(index + 1).toString().padStart(2, '0')}</span>
              <p className={styles.text}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}