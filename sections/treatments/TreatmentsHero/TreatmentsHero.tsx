"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./treatmentsHero.module.scss";

export default function TreatmentsHero() {
  const t = useTranslations("TreatmentsHero");

  return (
    <section className={styles.heroSection}>
      <div className={styles.bgWrapper}>
        <Image
          src="/images/treatments/hero.png"
          alt="Doctor explaining MRI scan to patient"
          fill
          priority
          className={styles.bgImage}
          style={{ objectFit: "cover" }}
        />
        <div className={styles.overlay} />
      </div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>
      </div>
    </section>
  );
}