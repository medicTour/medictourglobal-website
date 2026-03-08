"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./journey.module.scss";

const getIconPath = (title: string) => {
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return `/icons/journey/${slug}.png`; // using PNG icons
};

export default function JourneySection() {
  const t = useTranslations("Journey");
  const steps = t.raw("steps") as Array<{ title: string; description: string }>;

  return (
    <section className={styles.journeySection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
        <p className={styles.sectionSubtitle}>{t("sectionSubtitle")}</p>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.iconWrapper}>
                  <Image
                    src={`/icons/journey/step-${index + 1}.svg`}  // step-1.png, step-2.png, …
                    alt=""
                    width={48}
                    height={48}
                    className={styles.icon}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/icons/journey/default.svg";
                    }}
                  />
                </div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}