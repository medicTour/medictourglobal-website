"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./aboutHero.module.scss";

export default function AboutHero() {
  const t = useTranslations("About.hero");

  return (
    <section className={styles.heroSection}>
      <div className={styles.bgWrapper}>
        <Image
          src="/images/about/hero.png"
          alt=""
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