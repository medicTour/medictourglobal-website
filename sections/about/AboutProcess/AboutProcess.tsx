"use client";

import { useTranslations } from "next-intl";
import styles from "./aboutProcess.module.scss";

const steps = [
  { key: "inquiry" },
  { key: "review" },
  { key: "planning" },
  { key: "travel" },
  { key: "recovery" },
];

export default function AboutProcess() {
  const t = useTranslations("About.process");

  return (
    <section className={styles.processSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("title")}</h2>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={step.key} className={styles.step}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <h3 className={styles.stepTitle}>{t(`${step.key}.title`)}</h3>
              <p className={styles.stepDesc}>{t(`${step.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}