"use client";

import { useTranslations } from "next-intl";
import styles from "./journeySteps.module.scss";

export default function JourneySteps() {
  const t = useTranslations("JourneySteps");
  const steps = t.raw("steps") as Array<{ title: string; desc: string }>;

  return (
    <section className={styles.stepsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("title")}</h2>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}