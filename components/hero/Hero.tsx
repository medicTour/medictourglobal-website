"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./hero.module.scss";

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = ["slide1", "slide2", "slide3"];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const itemTransition = {
    duration: 0.8,
    ease: [0.4, 0, 0.2, 1] as const,
  };

  return (
    <section className={styles.heroSection}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className={styles.heroSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.heroSlide}>
              <div
                className={`${styles.heroBg} ${
                  activeIndex === index ? styles.zoom : ""
                }`}
                style={{
                  backgroundImage: `url(/images/hero${index + 1}.png)`,
                }}
              />
              <div className={styles.overlay} />
              <div className="container">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={index}
                      className={styles.heroContent}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={containerVariants}
                    >
                      <motion.span
                        variants={itemVariants}
                        transition={itemTransition}
                        className={styles.smallText}
                      >
                        {t(`${slide}.small`)}
                      </motion.span>
                      <motion.h1
                        variants={itemVariants}
                        transition={itemTransition}
                      >
                        {t(`${slide}.title1`)} <br />
                        <span>{t(`${slide}.title2`)}</span>
                      </motion.h1>
                      <motion.p
                        variants={itemVariants}
                        transition={itemTransition}
                        className={styles.subtitle}
                      >
                        {t(`${slide}.subtitle`)}
                      </motion.p>
                      <Link href={`/${locale}/contact`} className={styles.heroButton}>
                        {t("cta")}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
