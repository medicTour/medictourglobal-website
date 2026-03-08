"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./treatmentEducation.module.scss";

export default function TreatmentEducation() {
  const t = useTranslations("TreatmentEducation");
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
                  src="/icons/treatment-icon.png"
                  alt=""
                  width={48}
                  height={48}
                  className={styles.icon}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/icons/treatment/default.png";
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