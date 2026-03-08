'use client';

import Link from 'next/link';
import styles from './TreatmentCTA.module.scss';

export default function TreatmentCTA() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <h2>Speak With Our Medical Coordination Team</h2>
        <p>Share your medical reports and receive guidance from experienced specialists.</p>
        <Link href="/contact" className={styles.button}>
          Start Medical Inquiry
        </Link>
      </div>
    </section>
  );
}