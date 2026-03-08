"use client";

import { useTranslations } from "next-intl";
import styles from "./resourcesIntro.module.scss";

export default function ResourcesIntro() {
  const t = useTranslations("ResourcesIntro");

  return (
    <section className={styles.introSection}>
      <div className="container">
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.desc}>{t("desc")}</p>
      </div>
    </section>
  );
}