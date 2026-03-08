"use client";

import { useTranslations } from "next-intl";
import styles from "./inquiryIntro.module.scss";

export default function InquiryIntro() {
  const t = useTranslations("InquiryIntro");

  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.text}>{t("text")}</p>
      </div>
    </section>
  );
}