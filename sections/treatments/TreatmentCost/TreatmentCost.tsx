"use client";

import { useTranslations } from "next-intl";
import styles from "./treatmentCost.module.scss";

export default function TreatmentCost() {
  const t = useTranslations("TreatmentCost");

  return (
    <section className={styles.costSection}>
      <div className="container">
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.desc}>{t("desc")}</p>
      </div>
    </section>
  );
}