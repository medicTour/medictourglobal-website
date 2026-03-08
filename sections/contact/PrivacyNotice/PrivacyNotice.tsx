"use client";

import { useTranslations } from "next-intl";
import styles from "./privacyNotice.module.scss";

export default function PrivacyNotice() {
  const t = useTranslations("PrivacyNotice");

  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.text}>{t("text")}</p>
      </div>
    </section>
  );
}