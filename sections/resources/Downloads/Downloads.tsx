"use client";

import { useTranslations } from "next-intl";
import styles from "./downloads.module.scss";

export default function Downloads() {
  const t = useTranslations("Downloads");
  const items = t.raw("items") as string[];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("title")}</h2>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>📥</div>
              <h3 className={styles.cardTitle}>{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}