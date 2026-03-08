"use client";

import { useTranslations } from "next-intl";
import styles from "./journeyIntro.module.scss";

export default function JourneyIntro() {
  const t = useTranslations("JourneyIntro");

  return (
    <section className={styles.introSection}>
      <div className="container">
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.desc}>{t("desc")}</p>
      </div>
    </section>
  );
}