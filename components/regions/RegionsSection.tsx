"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import styles from "./regions.module.scss";

// Explicit mapping of region slugs to their image paths
const regionImages: Record<string, string> = {
  africa: "/images/regions/africa.png",
  uk: "/images/regions/united-kingdom.png",
  uae: "/images/regions/uae.png",
};

export default function RegionsSection() {
  const t = useTranslations("Regions");
  const locale = useLocale();
  const items = t.raw("items") as Array<{
    title: string;
    description: string;
    button: string;
    slug: string;
  }>;

  return (
    <section id="global-regions" className={styles.regionsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("title")}</h2>
        <p className={styles.sectionSubtitle}>{t("subtitle")}</p>

        <div className={styles.grid}>
          {items.map((region, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={regionImages[region.slug] || "/images/regions/placeholder.png"}
                  alt={region.title}
                  width={400}
                  height={250}
                  className={styles.image}
                  onError={(e) => {
                    e.currentTarget.src = "/images/regions/placeholder.png";
                  }}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.regionTitle}>{region.title}</h3>
                <p className={styles.regionDesc}>{region.description}</p>
                <Link href={`/${locale}/regions/${region.slug}`} className={styles.regionButton}>
                  {region.button} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}