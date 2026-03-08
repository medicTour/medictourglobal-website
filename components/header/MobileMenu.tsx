"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const [regionsExpanded, setRegionsExpanded] = useState(false);

  const regionItems = [
    { key: "africa", label: t("regionsMenu.africa"), slug: "africa" },
    { key: "uk", label: t("regionsMenu.uk"), slug: "uk" },
    { key: "uae", label: t("regionsMenu.uae"), slug: "uae" },
  ];

  return (
    <div className={`${styles.mobileOverlay} ${isOpen ? styles.open : ""}`}>
      <ul className={styles.mobileMenu}>
        <li onClick={onClose}>
          <Link href={`/${locale}`}>{t("home")}</Link>
        </li>
        <li onClick={onClose}>
          <Link href={`/${locale}/about`}>{t("about")}</Link>
        </li>
        <li onClick={onClose}>
          <Link href={`/${locale}/treatments`}>{t("treatments")}</Link>
        </li>
        <li onClick={onClose}>
          <Link href={`/${locale}/journey`}>{t("journey")}</Link>
        </li>

        <li className={styles.hasSubmenu}>
          <div
            className={styles.submenuTrigger}
            onClick={() => setRegionsExpanded(!regionsExpanded)}
          >
            {t("regions")} <span className={styles.arrow}>{regionsExpanded ? "▲" : "▼"}</span>
          </div>
          <ul className={`${styles.submenu} ${regionsExpanded ? styles.expanded : ""}`}>
            {regionItems.map((item) => (
              <li key={item.key} onClick={onClose}>
                <Link href={`/${locale}/regions/${item.slug}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </li>

        <li onClick={onClose}>
          <Link href={`/${locale}/resources`}>{t("resources")}</Link>
        </li>
        <li onClick={onClose}>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </li>
      </ul>
    </div>
  );
}