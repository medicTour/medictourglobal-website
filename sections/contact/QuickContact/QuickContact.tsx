"use client";

import { useTranslations } from "next-intl";
import styles from "./quickContact.module.scss";

const WHATSAPP_NUMBER = "919865332222";
const EMAIL = "medictour.global@gmail.com";

export default function QuickContact() {
  const t = useTranslations("QuickContact");

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <span className={styles.icon}>💬</span>
            <h3 className={styles.title}>{t("whatsapp")}</h3>
          </a>
          <a href={`mailto:${EMAIL}`} className={styles.card}>
            <span className={styles.icon}>📧</span>
            <h3 className={styles.title}>{t("email")}</h3>
          </a>
          <div className={styles.card}>
            <span className={styles.icon}>⏱️</span>
            <h3 className={styles.title}>{t("responseTime")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}