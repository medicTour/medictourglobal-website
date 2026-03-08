"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./aboutStory.module.scss";

export default function AboutStory() {
  const t = useTranslations("About.story");

  return (
    <section className={styles.storySection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <Image
              src="/images/about/story.png"
              alt=""
              width={600}
              height={500}
              className={styles.image}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.text}>{t("text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}