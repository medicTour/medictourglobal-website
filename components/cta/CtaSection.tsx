"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import styles from "./cta.module.scss";

export default function CtaSection() {
  const t = useTranslations("CTA");

  return (
    <section className={styles.ctaSection}>
      {/* Background Image */}
      <div className={styles.bgWrapper}>
        <Image
          src="/images/cta/medical-consultation.png"
          alt="Medical consultation"
          fill
          priority
          className={styles.bgImage}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Dark Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.subtitle}>{t("subtitle")}</p>
        <Link href="#contact" className={styles.ctaButton}>
          {t("button")}
        </Link>
      </div>
    </section>
  );
}