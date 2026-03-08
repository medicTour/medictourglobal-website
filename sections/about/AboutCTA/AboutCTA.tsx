"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "./aboutCTA.module.scss";

export default function AboutCTA() {
  const t = useTranslations("About.cta");

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subtitle}>{t("subtitle")}</p>
          <Link href="/contact" className={styles.button}>
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}