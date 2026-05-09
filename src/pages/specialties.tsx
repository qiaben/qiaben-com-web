import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import componentStyles from '@site/src/components/ServicePage/styles.module.css';
import styles from './specialties.module.css';

const CALENDLY = 'https://calendly.com/qiaben/15-minutes-meeting';

const specialties = [
  { name: 'Allergy & Immunology', icon: '🤧' },
  { name: 'Anesthesiology', icon: '💉' },
  { name: 'Behavioral Health', icon: '🧠' },
  { name: 'Cardiology', icon: '❤️' },
  { name: 'Chiropractic', icon: '🦴' },
  { name: 'Dental — General', icon: '🦷' },
  { name: 'Dental — Endodontics', icon: '🦷' },
  { name: 'Dental — Oral Surgery', icon: '🦷' },
  { name: 'Dental — Orthodontics', icon: '🦷' },
  { name: 'Dental — Periodontics', icon: '🦷' },
  { name: 'Dermatology', icon: '🧴' },
  { name: 'Emergency Medicine', icon: '🚑' },
  { name: 'Endocrinology', icon: '⚗️' },
  { name: 'ENT / Otolaryngology', icon: '👂' },
  { name: 'Family Medicine', icon: '🩺' },
  { name: 'Gastroenterology', icon: '🍽️' },
  { name: 'General Surgery', icon: '🔪' },
  { name: 'Geriatrics', icon: '👴' },
  { name: 'Hematology / Oncology', icon: '🧬' },
  { name: 'Home Health', icon: '🏠' },
  { name: 'Hospitalist', icon: '🏥' },
  { name: 'Infectious Disease', icon: '🦠' },
  { name: 'Internal Medicine', icon: '🩻' },
  { name: 'Nephrology', icon: '💧' },
  { name: 'Neurology', icon: '⚡' },
  { name: 'OB/GYN', icon: '🤰' },
  { name: 'Occupational Medicine', icon: '🦺' },
  { name: 'Ophthalmology', icon: '👁️' },
  { name: 'Optometry', icon: '👓' },
  { name: 'Orthopedics', icon: '🦿' },
  { name: 'Pain Management', icon: '💊' },
  { name: 'Pathology', icon: '🔬' },
  { name: 'Pediatrics', icon: '👶' },
  { name: 'Physical Therapy', icon: '🏃' },
  { name: 'Plastic Surgery', icon: '✂️' },
  { name: 'Podiatry', icon: '🦶' },
  { name: 'Primary Care', icon: '🩺' },
  { name: 'Psychiatry', icon: '🛋️' },
  { name: 'Psychology', icon: '💭' },
  { name: 'Pulmonology', icon: '🫁' },
  { name: 'Radiology', icon: '📡' },
  { name: 'Rheumatology', icon: '🦴' },
  { name: 'Sleep Medicine', icon: '😴' },
  { name: 'Sports Medicine', icon: '⚽' },
  { name: 'Telehealth', icon: '💻' },
  { name: 'Urgent Care', icon: '🏥' },
  { name: 'Urology', icon: '🚹' },
  { name: 'Vascular Surgery', icon: '🩸' },
  { name: 'Wound Care', icon: '🩹' },
  { name: 'Ambulance / EMS', icon: '🚨' },
];

export default function Specialties(): ReactNode {
  return (
    <Layout
      title="Specialties — Qiaben Health"
      description="Qiaben supports billing, coding, credentialing, and practice management across 50+ specialties — from primary care to emergency medicine to dental.">
      <div className={componentStyles.page}>
        <section className={componentStyles.hero}>
          <span className={componentStyles.eyebrow}>Specialties</span>
          <h1 className={componentStyles.title}>50+ specialties served.</h1>
          <p className={componentStyles.subtitle}>
            Qiaben works across medical, dental, surgical, behavioral health,
            and EMS. Each team is matched to the specialty so coding,
            documentation, and payer rules are run by people who know them.
          </p>
          <div className={componentStyles.ctaRow}>
            <a className={componentStyles.ctaPrimary} href={CALENDLY} target="_blank" rel="noopener noreferrer">
              Free consultation
            </a>
            <a className={componentStyles.ctaSecondary} href="/contact">
              Contact us
            </a>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.grid}>
            {specialties.map((s) => (
              <div key={s.name} className={styles.card}>
                <span className={styles.icon} aria-hidden="true">{s.icon}</span>
                <span className={styles.name}>{s.name}</span>
              </div>
            ))}
          </div>
          <p className={styles.note}>
            Don&apos;t see your specialty? Tell us — chances are we cover it.
          </p>
        </section>

        <section className={componentStyles.ctaBand}>
          <h2 className={componentStyles.ctaBandTitle}>Specialty-matched teams.</h2>
          <p className={componentStyles.ctaBandDesc}>
            Codes, documentation patterns, and payer quirks vary by specialty.
            We staff each engagement with people who know yours.
          </p>
          <div className={`${componentStyles.ctaRow} ${componentStyles.ctaBandRow}`}>
            <a className={componentStyles.ctaPrimary} href={CALENDLY} target="_blank" rel="noopener noreferrer">
              Free consultation
            </a>
            <a className={componentStyles.ctaSecondary} href="/contact">
              Contact us
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
