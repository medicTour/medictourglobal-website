"use client";

import { useTranslations } from "next-intl";
import styles from "./patientSafety.module.scss";

export default function PatientSafety() {
  const t = useTranslations("PatientSafety");

  return (
    <section className={styles.safetySection}>
      <div className="container">
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.desc}>{t("desc")}</p>
      </div>
    </section>
  );
}