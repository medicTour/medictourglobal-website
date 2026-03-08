"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./doctorEvaluation.module.scss";

export default function DoctorEvaluation() {
  const t = useTranslations("DoctorEvaluation");

  return (
    <section className={styles.evalSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/journey/doctor-evaluation.png"
              alt="Doctor reviewing medical reports"
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