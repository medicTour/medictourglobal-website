"use client";

import { useTranslations } from "next-intl";
import styles from "./aboutMission.module.scss";

export default function AboutMission() {
  const t = useTranslations("About.mission");

  return (
    <section className={styles.missionSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{t("missionTitle")}</h3>
            <p className={styles.cardText}>{t("missionText")}</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{t("visionTitle")}</h3>
            <p className={styles.cardText}>{t("visionText")}</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{t("valuesTitle")}</h3>
            <ul className={styles.valuesList}>
              <li>{t("values.transparency")}</li>
              <li>{t("values.patientFirst")}</li>
              <li>{t("values.ethical")}</li>
              <li>{t("values.trusted")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}