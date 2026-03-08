"use client";

import { useTranslations } from "next-intl";
import styles from "./finalReassurance.module.scss";

export default function FinalReassurance() {
  const t = useTranslations("FinalReassurance");

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.text}>{t("text")}</p>
      </div>
    </section>
  );
}