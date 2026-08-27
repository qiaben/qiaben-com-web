import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Reveal from '@site/src/components/Reveal';
import styles from './specialties.module.css';

const medicalSpecialties = [
  { icon: '❤️', title: 'Cardiology' },
  { icon: '🩺', title: 'Internal Medicine' },
  { icon: '👨‍👩‍👧‍👦', title: 'Family Practice' },
  { icon: '👶', title: 'Pediatrics' },
  { icon: '🤰', title: 'OB/GYN' },
  { icon: '🦴', title: 'Orthopedics' },
  { icon: '🌞', title: 'Dermatology' },
  { icon: '🧠', title: 'Neurology' },
  { icon: '🧘‍♀️', title: 'Psychiatry & Behavioral Health' },
  { icon: '🩻', title: 'Radiology & Imaging' },
  { icon: '🫁', title: 'Pulmonology' },
  { icon: '🩸', title: 'Nephrology' },
  { icon: '💧', title: 'Urology' },
  { icon: '🎗️', title: 'Oncology' },
  { icon: '🩹', title: 'Endocrinology' },
  { icon: '⚕️', title: 'Pain Management' },
  { icon: '🦵', title: 'Rheumatology' },
  { icon: '🤧', title: 'Allergy & Immunology' },
  { icon: '🚨', title: 'Emergency Medicine' },
  { icon: '🔪', title: 'General Surgery' },
  { icon: '💉', title: 'Anesthesiology' },
  { icon: '🫀', title: 'Vascular Surgery' },
  { icon: '✨', title: 'Plastic Surgery' },
  { icon: '🏃‍♂️', title: 'PM&R' },
  { icon: '💆‍♂️', title: 'Chiropractic' },
  { icon: '🦶', title: 'Podiatry' },
  { icon: '🧬', title: 'Infectious Disease' },
  { icon: '🏥', title: 'Occupational Medicine' },
  { icon: '😴', title: 'Sleep Medicine' },
  { icon: '🩸', title: 'Hematology' },
];

const dentalSpecialties = [
  { icon: '🦷', title: 'General Dentistry' },
  { icon: '🔧', title: 'Orthodontics' },
  { icon: '🔪', title: 'Oral & Maxillofacial Surgery' },
  { icon: '🦴', title: 'Periodontics' },
  { icon: '🩹', title: 'Endodontics' },
  { icon: '👶', title: 'Pediatric Dentistry' },
  { icon: '👑', title: 'Prosthodontics' },
  { icon: '✨', title: 'Cosmetic Dentistry' },
  { icon: '🦷', title: 'Implant Dentistry' },
  { icon: '😴', title: 'Dental Sleep Medicine' },
  { icon: '🏥', title: 'Public Health Dentistry' },
];

const whyCards = [
  {
    icon: '✅',
    title: '99% Clean Claim Rate',
    desc: 'Faster approvals, fewer resubmissions for all dental procedures',
  },
  {
    icon: '🦷',
    title: 'Dental Specialty Expertise',
    desc: 'CDT coding specialists for all dental and oral surgery procedures',
  },
  {
    icon: '💻',
    title: 'Dental Software Integration',
    desc: 'Works with Dentrix, Eaglesoft, Open Dental, and all major platforms',
  },
  {
    icon: '📋',
    title: 'Insurance Verification',
    desc: 'Real-time eligibility checks and pre-authorization management',
  },
  {
    icon: '👥',
    title: 'Dedicated Dental Team',
    desc: 'Certified dental billing specialists who understand your practice',
  },
  {
    icon: '📊',
    title: 'Transparent Reporting',
    desc: 'Detailed analytics on collections, aging reports, and practice performance',
  },
];

export default function Specialties(): ReactNode {
  return (
    <Layout
      title="Specialities - Qiaben Health"
      description="Revenue Cycle Excellence - Tailored for Every Specialty">
      <div className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <img
            className={styles.heroBg}
            src={useBaseUrl('/img/uploads/2025/03/people-office-analyzing-checking-finance-graphs-1024x684.jpg')}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroInner}>
            <Reveal>
              <h1>Qiaben Healthcare Specialties</h1>
              <p className={styles.heroSubtitle}>Revenue Cycle Excellence - Tailored for Every Specialty</p>
              <h2 className={styles.heroHeadline}>
                Smarter Billing. Stronger Revenue. Specialty-Focused Solutions.
              </h2>
              <p className={styles.heroLead}>
                Every specialty has its own billing challenges - from complex coding rules to payer-specific
                documentation requirements.
              </p>
              <p className={styles.heroLead}>
                At Qiaben, we bring deep domain expertise, AI-enabled workflows, and EHR-integrated billing
                systems to ensure accuracy, compliance, and faster reimbursements for 50+ medical and dental
                specialties. Our team of certified coders and billing professionals understand the nuances of
                each field - so your focus stays on patient care, while we handle your revenue cycle end-to-end.
              </p>
            </Reveal>
          </div>
        </section>

        {/* MEDICAL SPECIALTIES */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <Reveal>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>
                Medical Specialties We Support
              </h2>
              <p className={styles.sectionLead} style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Qiaben provides complete RCM solutions - including charge entry, coding, claim submission, denial
                management, and payment posting - for the following medical practices:
              </p>
            </Reveal>
            <div className={styles.specialtyGrid}>
              {medicalSpecialties.map((s, i) => (
                <Reveal key={s.title} delay={(i % 6) * 30}>
                  <div className={styles.specialtyCard}>
                    <span className={styles.specialtyIcon} aria-hidden="true">{s.icon}</span>
                    <h3>{s.title}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DENTAL SPECIALTIES */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <Reveal>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>
                <span aria-hidden="true">😁</span> Dental Specialties We Serve
              </h2>
              <p className={styles.sectionLead} style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Our dental billing experts manage everything from insurance verification to CDT coding and claim
                follow-ups - delivering transparent reporting and improved cash flow for dental professionals.
              </p>
            </Reveal>
            <div className={styles.specialtyGrid}>
              {dentalSpecialties.map((s, i) => (
                <Reveal key={s.title} delay={i * 30}>
                  <Link to="/dental-billing-services" className={styles.specialtyCard}>
                    <span className={styles.specialtyIcon} aria-hidden="true">{s.icon}</span>
                    <h3>{s.title}</h3>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal delay={60}>
              <div className={styles.dentalBanner}>
                <span aria-hidden="true">🦷</span>
                <p>
                  We ensure faster reimbursements, fewer rejections, and complete transparency throughout your
                  dental billing process.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHY DENTAL PRACTICES CHOOSE QIABEN */}
        <section className={styles.whySection}>
          <div className={styles.sectionInner}>
            <Reveal>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>
                <span aria-hidden="true">💡</span> Why Dental Practices Choose Qiaben
              </h2>
            </Reveal>
            <div className={styles.whyGrid}>
              {whyCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 50}>
                  <div className={styles.whyCard}>
                    <span className={styles.whyIcon} aria-hidden="true">{c.icon}</span>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
