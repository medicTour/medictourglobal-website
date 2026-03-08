"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./aboutTrust.module.scss";

const trustItems = [
  { key: "hospitals", icon: "/icons/trust/hospitals.png" },
  { key: "specialists", icon: "/icons/trust/specialists.png" },
  { key: "transparency", icon: "/icons/trust/transparency.png" },
  { key: "support", icon: "/icons/trust/support.png" },
];

export default function AboutTrust() {
  const t = useTranslations("About.trust");

  return (
    <section className={styles.trustSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("title")}</h2>
        <div className={styles.grid}>
          {trustItems.map((item) => (
            <div key={item.key} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src={item.icon}
                  alt=""
                  width={48}
                  height={48}
                  className={styles.icon}
                  onError={(e) => (e.target as HTMLImageElement).src = "/icons/trust/default.svg"}
                />
              </div>
              <h3 className={styles.cardTitle}>{t(`${item.key}.title`)}</h3>
              <p className={styles.cardDesc}>{t(`${item.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}