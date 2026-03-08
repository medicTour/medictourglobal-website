"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./hospitalCare.module.scss";

export default function HospitalCare() {
  const t = useTranslations("HospitalCare");

  return (
    <section className={styles.hospitalSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/journey/hospital-care.png"
              alt="Modern hospital interior"
              width={500}
              height={300}
              className={styles.image}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.desc}>{t("desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}