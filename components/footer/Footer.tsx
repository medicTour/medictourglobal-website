"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";

// Contact data (constants)
const WHATSAPP_NUMBER = "919895332222";
const PHONE_NUMBER = "+919895332222";
const EMAIL = "medictour.global@gmail.com";

// Social media links
const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61583923826063",
    icon: "/icons/social/facebook.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/medictour_/",
    icon: "/icons/social/instagram.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/medictour-a972a8397/",
    icon: "/icons/social/linkedin.png",
  },
  {
    name: "X",
    url: "https://x.com/Medictour_",
    icon: "/icons/social/x.png",
  },
];



export default function Footer() {
  const t = useTranslations("Footer");

  // Helper to get region slug mapping
  const regionLinks = [
    { key: "africa", slug: "africa" },
    { key: "uk", slug: "uk" },
    { key: "uae", slug: "uae" },
  ];
  const locale = useLocale();

  const treatmentLinks = [
  { slug: 'cardiac-surgery', key: 'cardiac', label: t('treatments.cardiac') },
  { slug: 'orthopedic-surgery', key: 'orthopedic', label: t('treatments.orthopedic') },
  { slug: 'cancer-treatment', key: 'cancer', label: t('treatments.cancer') },
  { slug: 'cosmetic-surgery', key: 'cosmetic', label: t('treatments.cosmetic') },
  { slug: 'fertility-treatment', key: 'fertility', label: t('treatments.fertility') },
  { slug: 'organ-transplant', key: 'transplant', label: t('treatments.transplant') },
];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Brand / About */}
          <div className={styles.column}>
            <div className={styles.logo}>
              <Image
                src="/images/logo.png"
                alt="Medictour Global"
                width={150}
                height={40}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <p className={styles.aboutText}>{t("about")}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t("quickLinks.title")}</h4>
            <ul className={styles.linkList}>
              <li><Link href="/">{t("quickLinks.home")}</Link></li>
              <li><Link href="/about">{t("quickLinks.about")}</Link></li>
              <li><Link href="/treatments">{t("quickLinks.treatments")}</Link></li>
              <li><Link href="/journey">{t("quickLinks.journey")}</Link></li>
              <li><Link href={`/${locale}/#global-regions`}>{t("quickLinks.regions")}</Link></li>
              <li><Link href="/resources">{t("quickLinks.resources")}</Link></li>
              <li><Link href="/contact">{t("quickLinks.contact")}</Link></li>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t("treatments.title")}</h4>
            <ul className={styles.linkList}>
              {treatmentLinks.map((item) => (
                <li key={item.key}>
                  <Link href={`/${locale}/treatments/${item.slug}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Regions */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t("regions.title")}</h4>
            <ul className={styles.linkList}>
              {regionLinks.map((region) => (
                <li key={region.key}>
                  <Link href={`/${locale}/regions/${region.slug}`}>{t(`regions.${region.key}`)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t("contact.title")}</h4>
            <ul className={styles.contactList}>
              <li>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/whatsapp-footer.svg" alt="" width={18} height={18} />
                  <span>{t("contact.whatsapp")}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Image src="/icons/phone.png" alt="" width={18} height={18} />
                  <span>{t("contact.phone")}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>
                  <Image src="/icons/mail.png" alt="" width={18} height={18} />
                  <span>{t("contact.email")}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Row */}
        <div className={styles.socialRow}>
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={social.name}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={24}
                height={24}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/icons/social/default.png";
                }}
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}