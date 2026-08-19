import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Reveal from '@site/src/components/Reveal';
import BookingForm from '@site/src/components/BookingForm';
import FaqSchema from '@site/src/components/FaqSchema';
import styles from './patient-assessment.module.css';

const InsuranceIcon = () => (
  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="3" />
    <path d="M5 8h1M18 8h1M8.5 5.5 7 4M15.5 5.5 17 4M8.5 10.5 7 12M15.5 10.5 17 12" />
    <rect x="9" y="16" width="6" height="5" rx="1" />
  </svg>
);

const RevenueIcon = () => (
  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="7" r="4" />
    <rect x="6" y="14" width="12" height="7" rx="1.5" />
  </svg>
);

const IntegrationIcon = () => (
  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="9" r="4" />
    <path d="M9 3v1M9 14v1M3 9h1M14 9h1M5.5 5.5l.7.7M11.8 11.8l.7.7M5.5 12.5l.7-.7M11.8 6.2l.7-.7" />
    <path d="M17 15l1.5 1.5L22 13" />
  </svg>
);

const whyCards = [
  {
    icon: <InsuranceIcon />,
    tag: 'Qiaben Healthcares',
    title: 'Efficient Insurance-Billable Assessments',
    desc: 'Qiaben streamlines the mental health records, allowing them to be evaluated according to the insurance standards-billing is quicker and more precise.',
  },
  {
    icon: <RevenueIcon />,
    tag: 'Qiaben Healthcares',
    title: 'Maximize Practice Revenue',
    desc: 'Qiaben enables practices to unlock reimbursement potentials with optimized, compliant evaluations and transforms evaluations into revenues.',
  },
  {
    icon: <IntegrationIcon />,
    tag: 'Qiaben Healthcares',
    title: 'Seamless Clinical Integration',
    desc: 'The assessments offered by Qiaben integrate well into workflows, lowering the level of administration and improving the quality of care and the accuracy of billing.',
  },
];

const faqs = [
  {
    q: "What is Qiaben's Patient Assessment service?",
    a: "Qiaben's Patient Assessment service helps healthcare providers increase revenue by turning mental health evaluations into insurance-billable assessments, streamlining the documentation so it meets insurance billing standards.",
  },
  {
    q: 'How does this service make assessments insurance-billable?',
    a: 'Qiaben streamlines mental health records so they can be evaluated according to insurance standards, making billing for these assessments quicker and more precise.',
  },
  {
    q: 'How does Patient Assessment help maximize practice revenue?',
    a: "By optimizing evaluations for compliance and reimbursement, Qiaben helps practices unlock reimbursement potential that would otherwise go unclaimed, turning clinical evaluations into a reliable revenue stream.",
  },
  {
    q: "Will this disrupt my practice's existing clinical workflow?",
    a: "No — the assessments are designed to integrate seamlessly into your existing clinical workflow, lowering administrative burden while improving both the quality of care and billing accuracy.",
  },
  {
    q: 'What type of assessments does Qiaben support?',
    a: "Qiaben's Patient Assessment service focuses on assessments that are mental in nature, helping practices evaluate and document them in a way that's both clinically sound and compliant with insurance requirements.",
  },
];

const relatedPosts = [
  {
    title: 'Maximizing Revenue: The Impact of Professional Medical Coding Services on Healthcare Facilities',
    desc: 'How professional medical coding services directly improve revenue capture and reduce claim denials for healthcare facilities.',
    img: '/img/uploads/2024/12/medical-coding-service-image-2.jpg',
    to: '/blog/maximizing-revenue-the-impact-of-professional-medical-coding-services-on-healthcare-facilities',
  },
  {
    title: "Medicare's 2025 Coding Overhaul: Hidden Pitfalls & Big Changes",
    desc: 'A breakdown of the biggest changes in the Medicare 2025 coding overhaul and the pitfalls practices need to watch for.',
    img: '/img/uploads/2024/12/medical-coding-service-image-3.jpg',
    to: '/blog/medicares-2025-coding-overhaul-hidden-pitfalls-big-changes',
  },
  {
    title: 'Free EHR Software for Mental Health Providers – How to Choose the Right One for Your Practice',
    desc: 'A practical guide to evaluating free EHR software options built for mental health and behavioral health providers.',
    img: '/img/uploads/2024/08/a_electronic_health_record_data_in_a_medical_office_with_us_nurses_practitioners_reviewing_on_big_screen_with_qiaben_com_the_light_is_bright_and_the_mood_is_happy-1-1024x1024.jpeg',
    to: '/blog/free-ehr-software-for-mental-health-providers-how-to-choose-the-right-one-for-your-practice',
  },
  {
    title: 'Medical Billing Made Easy: Hassle-Free Claim Submission Explained',
    desc: 'A step-by-step walkthrough of the claim submission process, from encounter to reimbursement, with fewer denials.',
    img: '/img/uploads/2025/01/claim-5.webp',
    to: '/blog/medical-billing-made-easy-hassle-free-claim-submission-explained',
  },
  {
    title: 'Dental Coding Mistakes That Trigger Denials and How to Fix Them',
    desc: 'The most common dental coding mistakes practices make, why insurers deny them, and the fixes that hold up on appeal.',
    img: '/img/uploads/2026/02/ChatGPT-Image-Feb-23-2026-09_53_40-PM.png',
    to: '/blog/dental-coding-mistakes-that-trigger-denials-and-how-to-fix-them',
  },
  {
    title: 'Prosthodontic Coding Made Easy: Focus on D5000-D5899 Codes',
    desc: 'A clear breakdown of the D5000-D5899 prosthodontic code range and how to bill them accurately the first time.',
    img: '/img/uploads/2025/01/prosthodontics-1-768x432.png',
    to: '/blog/prosthodontic-coding-made-easy-focus-on-d5000-d5899-codes',
  },
];

export default function PatientAssessment(): ReactNode {
  return (
    <Layout
      title="Patient Assessment Solutions — Qiaben Health"
      description="The Patient Assessment service offered by Qiaben equips healthcare providers with the power to increase revenue streams by providing insurable assessments that are mental in nature.">
      <FaqSchema faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <div className={styles.page}>
        {/* TITLE BAR */}
        <section className={styles.titleBar}>
          <h1>Patient Assessment</h1>
        </section>

        {/* INTRO */}
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <Reveal>
              <div>
                <p className={styles.introLead}>
                  The Patient Assessment service offered by Qiaben equips healthcare providers with the power to
                  increase revenue streams by providing insurable assessments that are mental in nature. Their
                  professionally designed assessments assist practices to record and code interactions with
                  patients correctly- encouraging clinical excellence and financial accuracy. Under the
                  stewardship of Qiaben, you will be able to make these assessments flow into your workflow in a
                  way that maximizes reimbursement and quality care.
                </p>
                <div className={styles.introImage}>
                  <img
                    src={useBaseUrl('/img/uploads/2025/08/4-3-2.jpg')}
                    alt="Clinical staff reviewing a patient assessment"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal variant="left">
              <BookingForm title="Book an Appointment" />
            </Reveal>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className={styles.whySection}>
          <img
            className={styles.whyBg}
            src={useBaseUrl('/img/uploads/2025/03/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code-1024x641.jpg')}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div className={styles.whyGlowLeft} aria-hidden="true" />
          <div className={styles.whyGlowRight} aria-hidden="true" />
          <div className={styles.sectionInner}>
            <Reveal>
              <h2 className={styles.whyTitle}>&ldquo;Why Choose Qiaben&apos;s Patient Assessment Service&rdquo;</h2>
            </Reveal>
            <div className={styles.whyGrid}>
              {whyCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <div className={styles.whyCard}>
                    <div className={styles.whyIcon}>{c.icon}</div>
                    <p className={styles.whyTag}>{c.tag}</p>
                    <h3>{c.title}</h3>
                    <p className={styles.whyDesc}>{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.sectionInnerNarrow}>
            <Reveal>
              <h2 className={styles.sectionTitle}>FAQ&apos;S (Frequently Asked Questions)</h2>
            </Reveal>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 30}>
                  <div className={styles.faqItem}>
                    <p className={styles.faqQ}>{f.q}</p>
                    <p className={styles.faqA}>{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BLOGS & RESOURCES */}
        <section className={styles.blogSection}>
          <div className={styles.sectionInner}>
            <Reveal>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Blogs &amp; Resources
              </h2>
            </Reveal>
            <div className={styles.blogGrid}>
              {relatedPosts.map((p, i) => (
                <Reveal key={p.title} delay={i * 60}>
                  <Link to={p.to} className={styles.blogCard}>
                    <img src={useBaseUrl(p.img)} alt="" loading="lazy" />
                    <div className={styles.blogCardBody}>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                      <span>Read More »</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
