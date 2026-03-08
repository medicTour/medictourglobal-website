"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import styles from "./uploadSection.module.scss";

export default function UploadSection() {
  const t = useTranslations("Upload");
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files;
    if (!selected) return;

    const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "application/zip"];
    const maxSize = 10 * 1024 * 1024; // 10MB

    const validFiles: File[] = [];
    for (let i = 0; i < selected.length; i++) {
      const file = selected[i];
      if (!allowedTypes.includes(file.type)) {
        setError(t("typeError"));
        return;
      }
      if (file.size > maxSize) {
        setError(t("sizeError"));
        return;
      }
      validFiles.push(file);
    }
    setFiles(validFiles);
    setError("");
  };

  return (
    <section className={styles.uploadSection}>
      <div className="container">
        <h3 className={styles.title}>{t("title")}</h3>
        <p className={styles.info}>{t("info")}</p>
        <div className={styles.uploadBox}>
          <input
            type="file"
            id="file-upload"
            multiple
            accept=".pdf,.jpg,.jpeg,.png,.zip"
            onChange={handleFileChange}
            className={styles.input}
          />
          <label htmlFor="file-upload" className={styles.label}>
            {t("chooseFiles")}
          </label>
          {files.length > 0 && (
            <ul className={styles.fileList}>
              {files.map((f, idx) => (
                <li key={idx}>{f.name}</li>
              ))}
            </ul>
          )}
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </div>
    </section>
  );
}