"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./aboutGlobal.module.scss";

const regions = [
  { key: "africa", flag: "/flags/africa.png" },
  { key: "uk", flag: "/flags/uk.png" },
  { key: "uae", flag: "/flags/uae.png" },
];

export default function AboutGlobal() {
  const t = useTranslations("About.global");

  return (
    <section className={styles.globalSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("title")}</h2>
        <p className={styles.sectionSubtitle}>{t("subtitle")}</p>
        <div className={styles.grid}>
          {regions.map((region) => (
            <div key={region.key} className={styles.card}>
              <div className={styles.flagWrapper}>
                <Image
                  src={region.flag}
                  alt=""
                  width={60}
                  height={40}
                  className={styles.flag}
                  onError={(e) => (e.target as HTMLImageElement).src = "/flags/default.png"}
                />
              </div>
              <h3 className={styles.regionTitle}>{t(`${region.key}.title`)}</h3>
              <p className={styles.regionDesc}>{t(`${region.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}