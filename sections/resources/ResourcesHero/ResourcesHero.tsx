"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./resourcesHero.module.scss";

export default function ResourcesHero() {
  const t = useTranslations("ResourcesHero");

  return (
    <section className={styles.heroSection}>
      <div className={styles.bgWrapper}>
        <Image
          src="/images/resources/hero.png"
          alt="Patient reading medical information"
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