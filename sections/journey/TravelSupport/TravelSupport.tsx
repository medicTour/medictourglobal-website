"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./travelSupport.module.scss";

export default function TravelSupport() {
  const t = useTranslations("TravelSupport");

  return (
    <section className={styles.travelSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.desc}>{t("desc")}</p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/journey/travel-support.png"
              alt="Airport welcome"
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