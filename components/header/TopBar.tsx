"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import styles from "./header.module.scss";

const WHATSAPP_NUMBER = "919865332222";
const PHONE_NUMBER = "+919895332222";
const EMAIL = "medictour.global@gmail.com";

interface TopBarProps {
  scrolled: boolean;
  mobileOpen: boolean;
  toggleMobile: () => void;
}

export default function TopBar({ scrolled, mobileOpen, toggleMobile }: TopBarProps) {
  const locale = useLocale();
  const t = useTranslations("TopBar");
  const router = useRouter();
  const pathname = usePathname();

  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (newLocale: string) => {
    if (newLocale === locale) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setLangOpen(false);
  };

  return (
    <div className={styles.topBar}>
      <div className={`container ${styles.topContent}`}>
        {/* Logo */}
        <Link href={`/${locale}`} className={styles.logoLink}>
          <div className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Medictour Global"
              width={150}
              height={40}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </Link>

        {/* Desktop & Mobile contact + language */}
        <div className={styles.topRight}>
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconLink} ${styles.whatsapp}`}
          >
            <Image src="/icons/whatsapp.png" alt="whatsapp" width={18} height={18} />
            <span>{t("whatsapp")}</span>
          </a>

          {/* Call */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className={`${styles.iconLink} ${styles.neutral}`}
          >
            <Image src="/icons/phone.png" alt="call" width={18} height={18} />
            <span>{t("call")}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className={`${styles.iconLink} ${styles.neutral}`}
          >
            <Image src="/icons/mail.png" alt="" width={18} height={18} />
            <span>{t("email")}</span>
          </a>

          {/* Right group (language + hamburger) */}
          <div className={styles.rightGroup}>
            {/* Language dropdown */}
            <div className={styles.langWrapper} ref={dropdownRef}>
              <button onClick={() => setLangOpen(!langOpen)} className={styles.langButton}>
                <Image src={`/flags/${locale}.png`} alt={locale} width={18} height={12} />
                <span>{locale.toUpperCase()}</span>
                <Image
                  src="/icons/chevron-down.png"
                  alt="arrow"
                  width={14}
                  height={14}
                  className={langOpen ? styles.rotate : ""}
                />
              </button>
              <div className={`${styles.langDropdown} ${langOpen ? styles.show : ""}`}>
                {["en", "ar", "fr"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`${styles.dropdownItem} ${locale === lang ? styles.activeLang : ""
                      }`}
                  >
                    <Image src={`/flags/${lang}.png`} alt={lang} width={18} height={12} />
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Hamburger button (visible on mobile) */}
            <button
              className={styles.mobileHamburger}
              onClick={toggleMobile}
              aria-label="Toggle menu"
            >
              <div className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
