"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./journeyHero.module.scss";

export default function JourneyHero() {
  const t = useTranslations("JourneyHero");

  return (
    <section className={styles.heroSection}>
      <div className={styles.bgWrapper}>
        <Image
          src="/images/journey/hero.png"
          alt="Doctor reviewing medical reports with patient"
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