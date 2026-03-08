"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import styles from "./resources.module.scss";

export default function ResourcesSection() {
  const t = useTranslations("Resources");
  const locale = useLocale();
  const items = t.raw("items") as Array<{ title: string; description: string; button: string; slug: string }>;

  return (
    <section className={styles.resourcesSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("title")}</h2>
        <p className={styles.sectionSubtitle}>{t("subtitle")}</p>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={`/images/resources/${item.slug}.png`}
                  alt={item.title}
                  width={400}
                  height={250}
                  className={styles.image}
                  onError={(e) => (e.currentTarget.src = "/images/resources/placeholder.png")}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.resourceTitle}>{item.title}</h3>
                <p className={styles.resourceDesc}>{item.description}</p>
                <Link href={`/${locale}/resources/${item.slug}`} className={styles.resourceLink}>
                  {item.button} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}