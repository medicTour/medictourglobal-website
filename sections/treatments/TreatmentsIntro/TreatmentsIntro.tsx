"use client";

import { useTranslations } from "next-intl";
import styles from "./treatmentsIntro.module.scss";

export default function TreatmentsIntro() {
  const t = useTranslations("TreatmentsIntro");

  return (
    <section className={styles.introSection}>
      <div className="container">
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.description}>{t("description")}</p>
      </div>
    </section>
  );
}