"use client";

import { useTranslations } from "next-intl";
import styles from "./whatsAppCTA.module.scss";

const WHATSAPP_NUMBER = "919895332222";

export default function WhatsAppCTA() {
  const t = useTranslations("WhatsAppCTA");

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>{t("title")}</h2>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            {t("button")}
          </a>
        </div>
      </div>
    </section>
  );
}