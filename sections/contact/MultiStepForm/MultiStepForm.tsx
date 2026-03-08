"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styles from "./multiStepForm.module.scss";

// Validation schemas per step
const step1Schema = z.object({
  fullName: z.string().min(3, { message: "nameMin" }).regex(/^[A-Za-z\s]+$/, { message: "nameInvalid" }),
  email: z.string().email({ message: "emailInvalid" }),
  phone: z.string().min(8, { message: "phoneMin" }),
  country: z.string().min(1, { message: "countryRequired" }),
  age: z.coerce.number().min(1).max(110, { message: "ageInvalid" }),
  gender: z.enum(["male", "female", "other"], { message: "genderRequired" }),
});

const step2Schema = z.object({
  treatment: z.string().min(1, { message: "treatmentRequired" }),
  condition: z.string().min(30, { message: "conditionMin" }).max(1000, { message: "conditionMax" }),
  previousDiagnosis: z.string().optional(),
  previousTreatments: z.string().optional(),
});

const step3Schema = z.object({
  timeline: z.string().min(1, { message: "timelineRequired" }),
  visitedBefore: z.enum(["yes", "no"], { message: "visitedRequired" }),
  companion: z.enum(["yes", "no"], { message: "companionRequired" }),
  additionalMessage: z.string().optional(),
});

// Combined schema for final validation
const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema);

type FormData = z.infer<typeof fullSchema>;

export default function MultiStepForm() {
  const t = useTranslations("Form");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(fullSchema),
    mode: "onBlur",
  });

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) isValid = await trigger(["fullName", "email", "phone", "country", "age", "gender"]);
    if (step === 2) isValid = await trigger(["treatment", "condition"]);
    if (isValid) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("serverError");
      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError(t("serverError"));
    } finally {
      setLoading(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className={styles.success}>
        <h2>{t("successTitle")}</h2>
        <p>{t("successMessage")}</p>
        <button onClick={() => window.location.href = "/"} className={styles.button}>
          {t("returnHome")}
        </button>
      </div>
    );
  }

  return (
    <section id="form" className={styles.formSection}>
      <div className="container">
        <div className={styles.stepIndicator}>
          <span className={`${styles.step} ${step >= 1 ? styles.active : ""}`}>1</span>
          <span className={styles.line} />
          <span className={`${styles.step} ${step >= 2 ? styles.active : ""}`}>2</span>
          <span className={styles.line} />
          <span className={`${styles.step} ${step >= 3 ? styles.active : ""}`}>3</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {step === 1 && (
            <div className={styles.stepContent}>
              <h3>{t("step1Title")}</h3>
              <div className={styles.field}>
                <label>{t("fullName")}*</label>
                <input {...register("fullName")} />
                {errors.fullName && <span className={styles.error}>{t(errors.fullName.message)}</span>}
              </div>
              <div className={styles.field}>
                <label>{t("email")}*</label>
                <input type="email" {...register("email")} />
                {errors.email && <span className={styles.error}>{t(errors.email.message)}</span>}
              </div>
              <div className={styles.field}>
                <label>{t("phone")}*</label>
                <input {...register("phone")} />
                {errors.phone && <span className={styles.error}>{t(errors.phone.message)}</span>}
              </div>
              <div className={styles.field}>
                <label>{t("country")}*</label>
                <input {...register("country")} />
                {errors.country && <span className={styles.error}>{t(errors.country.message)}</span>}
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>{t("age")}*</label>
                  <input type="number" {...register("age")} />
                  {errors.age && <span className={styles.error}>{t(errors.age.message)}</span>}
                </div>
                <div className={styles.field}>
                  <label>{t("gender")}*</label>
                  <select {...register("gender")}>
                    <option value="">{t("select")}</option>
                    <option value="male">{t("male")}</option>
                    <option value="female">{t("female")}</option>
                    <option value="other">{t("other")}</option>
                  </select>
                  {errors.gender && <span className={styles.error}>{t(errors.gender.message)}</span>}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.stepContent}>
              <h3>{t("step2Title")}</h3>
              <div className={styles.field}>
                <label>{t("treatment")}*</label>
                <select {...register("treatment")}>
                  <option value="">{t("select")}</option>
                  <option value="Cardiac Surgery">{t("cardiac")}</option>
                  <option value="Orthopedic Surgery">{t("orthopedic")}</option>
                  <option value="Cancer Treatment">{t("cancer")}</option>
                  <option value="Fertility Treatment">{t("fertility")}</option>
                  <option value="Cosmetic Surgery">{t("cosmetic")}</option>
                  <option value="Organ Transplant">{t("transplant")}</option>
                  <option value="Other">{t("other")}</option>
                </select>
                {errors.treatment && <span className={styles.error}>{t(errors.treatment.message)}</span>}
              </div>
              <div className={styles.field}>
                <label>{t("condition")}*</label>
                <textarea rows={4} {...register("condition")} />
                {errors.condition && <span className={styles.error}>{t(errors.condition.message)}</span>}
              </div>
              <div className={styles.field}>
                <label>{t("previousDiagnosis")}</label>
                <input {...register("previousDiagnosis")} />
              </div>
              <div className={styles.field}>
                <label>{t("previousTreatments")}</label>
                <input {...register("previousTreatments")} />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={styles.stepContent}>
              <h3>{t("step3Title")}</h3>
              <div className={styles.field}>
                <label>{t("timeline")}*</label>
                <select {...register("timeline")}>
                  <option value="">{t("select")}</option>
                  <option value="Within 1 month">{t("within1")}</option>
                  <option value="Within 3 months">{t("within3")}</option>
                  <option value="Just exploring options">{t("exploring")}</option>
                </select>
                {errors.timeline && <span className={styles.error}>{t(errors.timeline.message)}</span>}
              </div>
              <div className={styles.field}>
                <label>{t("visitedBefore")}*</label>
                <select {...register("visitedBefore")}>
                  <option value="">{t("select")}</option>
                  <option value="yes">{t("yes")}</option>
                  <option value="no">{t("no")}</option>
                </select>
                {errors.visitedBefore && <span className={styles.error}>{t(errors.visitedBefore.message)}</span>}
              </div>
              <div className={styles.field}>
                <label>{t("companion")}*</label>
                <select {...register("companion")}>
                  <option value="">{t("select")}</option>
                  <option value="yes">{t("yes")}</option>
                  <option value="no">{t("no")}</option>
                </select>
                {errors.companion && <span className={styles.error}>{t(errors.companion.message)}</span>}
              </div>
              <div className={styles.field}>
                <label>{t("additionalMessage")}</label>
                <textarea rows={3} {...register("additionalMessage")} />
              </div>
            </div>
          )}

          <div className={styles.buttons}>
            {step > 1 && (
              <button type="button" onClick={prevStep} className={styles.secondary}>
                {t("previous")}
              </button>
            )}
            {step < 3 ? (
              <button type="button" onClick={nextStep} className={styles.primary}>
                {t("next")}
              </button>
            ) : (
              <button type="submit" disabled={loading} className={styles.primary}>
                {loading ? t("submitting") : t("submit")}
              </button>
            )}
          </div>
          {submitError && <p className={styles.errorMessage}>{submitError}</p>}
        </form>
      </div>
    </section>
  );
}