"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./recoverySupport.module.scss";

export default function RecoverySupport() {
  const t = useTranslations("RecoverySupport");

  return (
    <section className={styles.recoverySection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.desc}>{t("desc")}</p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/journey/recovery-support.png"
              alt="Doctor consulting patient"
              width={500}
              height={300}
              className={styles.image}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}