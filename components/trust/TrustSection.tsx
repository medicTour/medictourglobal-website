import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./trust.module.scss";

const trustItems = [
  {
    icon: "/icons/personalized-care.png",
    key: "care",
  },
  {
    icon: "/icons/experienced-specialists.png",
    key: "specialists",
  },
  {
    icon: "/icons/advanced-facilities.png",
    key: "facilities",
  },
  {
    icon: "/icons/ethical-guidance.png",
    key: "ethics",
  },
];

export default function TrustSection() {
  const t = useTranslations("Trust");

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
                />
              </div>
              <h3 className={styles.cardTitle}>{t(`items.${item.key}.title`)}</h3>
              <p className={styles.cardDesc}>{t(`items.${item.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}