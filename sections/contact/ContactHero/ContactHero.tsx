"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import styles from "./contactHero.module.scss";

export default function ContactHero() {
  const t = useTranslations("ContactHero");

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h1 className={styles.title}>{t("title")}</h1>
            <p className={styles.subtitle}>{t("subtitle")}</p>
            <Link href="#form" className={styles.cta}>
              {t("cta")}
            </Link>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/contact/hero.png"
              alt="Doctor reviewing medical reports"
              width={500}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}