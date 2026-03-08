"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import styles from "./header.module.scss";

interface MainNavProps {
  scrolled: boolean;
}

export default function MainNav({ scrolled }: MainNavProps) {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const [regionsOpen, setRegionsOpen] = useState(false);

  const regionItems = [
    { key: "africa", label: t("regionsMenu.africa"), slug: "africa" },
    { key: "uk", label: t("regionsMenu.uk"), slug: "uk" },
    { key: "uae", label: t("regionsMenu.uae"), slug: "uae" },
  ];

  return (
    <nav className={`${styles.mainNav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navInner}>
        <ul className={styles.navMenu}>
          <li>
            <Link href={`/${locale}`}>{t("home")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/about`}>{t("about")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/treatments`}>{t("treatments")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/journey`}>{t("journey")}</Link>
          </li>

          {/* Global Regions with dropdown */}
          <li
            className={styles.hasDropdown}
            onMouseEnter={() => setRegionsOpen(true)}
            onMouseLeave={() => setRegionsOpen(false)}
          >
            <span className={styles.dropdownTrigger}>
              {t("regions")} <span className={styles.arrow}>▼</span>
            </span>
            <ul className={`${styles.dropdown} ${regionsOpen ? styles.show : ""}`}>
              {regionItems.map((item) => (
                <li key={item.key}>
                  <Link href={`/${locale}/regions/${item.slug}`} onClick={() => setRegionsOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href={`/${locale}/resources`}>{t("resources")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/contact`}>{t("contact")}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}