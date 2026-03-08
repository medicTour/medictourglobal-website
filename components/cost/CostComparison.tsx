"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import styles from "./costCards.module.scss";

const getIconPath = (name: string) => {
  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return `/icons/cost/${slug}.png`;
};

// Region display names and flag paths
const regionData = {
  us: { flag: "/flags/us.png", label: "US USA" },
  uk: { flag: "/flags/gb.png", label: "GB UK" },
  eu: { flag: "/flags/eu.png", label: "EU Europe" },
  india: { flag: "/flags/in.png", label: "IN India" },
};

export default function CostCards() {
  const t = useTranslations("CostComparison");
  const treatments = t.raw("treatments") as Array<{
    name: string;
    us: string;
    uk: string;
    eu: string;
    india: string;
  }>;

  return (
    <section className={styles.costSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("title")}</h2>
        <p className={styles.sectionSubtitle}>{t("subtitle")}</p>

        <div className={styles.grid}>
          {treatments.map((treatment, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src={getIconPath(treatment.name)}
                  alt=""
                  width={48}
                  height={48}
                  className={styles.icon}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/icons/cost/default.svg";
                  }}
                />
              </div>
              <h3 className={styles.treatmentName}>{treatment.name}</h3>
              <div className={styles.regionList}>
                {/* USA */}
                <div className={styles.regionRow}>
                  <span className={styles.flagWrapper}>
                    <Image src={regionData.us.flag} alt="USA" width={24} height={16} />
                    <span className={styles.regionLabel}>{regionData.us.label}</span>
                  </span>
                  <span className={styles.regionCost}>{treatment.us}</span>
                </div>
                {/* UK */}
                <div className={styles.regionRow}>
                  <span className={styles.flagWrapper}>
                    <Image src={regionData.uk.flag} alt="UK" width={24} height={16} />
                    <span className={styles.regionLabel}>{regionData.uk.label}</span>
                  </span>
                  <span className={styles.regionCost}>{treatment.uk}</span>
                </div>
                {/* Europe */}
                <div className={styles.regionRow}>
                  <span className={styles.flagWrapper}>
                    <Image src={regionData.eu.flag} alt="Europe" width={24} height={16} />
                    <span className={styles.regionLabel}>{regionData.eu.label}</span>
                  </span>
                  <span className={styles.regionCost}>{treatment.eu}</span>
                </div>
                {/* India (highlighted) */}
                <div className={`${styles.regionRow} ${styles.indiaRow}`}>
                  <span className={styles.flagWrapper}>
                    <Image src={regionData.india.flag} alt="India" width={24} height={16} />
                    <span className={styles.regionLabel}>{regionData.india.label}</span>
                  </span>
                  <span className={`${styles.regionCost} ${styles.indiaValue}`}>
                    {treatment.india}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <p className={styles.ctaText}>{t("ctaText")}</p>
          <Link href="/contact" className={styles.ctaButton}>
            {t("ctaButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}