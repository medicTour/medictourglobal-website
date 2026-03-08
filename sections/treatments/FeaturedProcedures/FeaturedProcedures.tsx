"use client";

import { useTranslations } from "next-intl";
import styles from "./featuredProcedures.module.scss";

export default function FeaturedProcedures() {
  const t = useTranslations("FeaturedProcedures");

  return (
    <section className={styles.proceduresSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("title")}</h2>
        <div className={styles.grid}>
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Cardiac</h3>
            <ul className={styles.list}>
              {t.raw("cardiac").map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Orthopedic</h3>
            <ul className={styles.list}>
              {t.raw("orthopedic").map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Fertility</h3>
            <ul className={styles.list}>
              {t.raw("fertility").map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}