"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./medicalTravelGuides.module.scss";

export default function MedicalTravelGuides() {
  const t = useTranslations("MedicalTravelGuides");
  const items = t.raw("items") as string[];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("title")}</h2>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src="/icons/guide-icon.svg" // single icon for all
                  alt=""
                  width={48}
                  height={48}
                  className={styles.icon}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/icons/guides/default.svg";
                  }}
                />
              </div>
              <h3 className={styles.cardTitle}>{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}