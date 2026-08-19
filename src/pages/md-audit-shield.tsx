import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Reveal from '@site/src/components/Reveal';
import BookingForm from '@site/src/components/BookingForm';
import FaqSchema from '@site/src/components/FaqSchema';
import styles from './md-audit-shield.module.css';

const whyCards = [
  {
    img: '/img/uploads/2024/07/Untitled-design-21.png',
    tag: 'Qiaben Healthcares',
    title: 'Proactive Audit Readiness',
    desc: 'Pre-empt audit risks and mitigate them. Qiaben maintains your practice up to date and ready to face any regulatory audit.',
  },
  {
    img: '/img/uploads/2024/07/Untitled-design-22.png',
    tag: 'Qiaben Healthcares',
    title: 'Robust Documentation Support',
    desc: 'Maintain thorough, accurate records with expert guidance. Qiaben boosts your audit trail and reinforces practice integrity.',
  },
  {
    img: '/img/uploads/2024/07/Untitled-design-23.png',
    tag: 'Qiaben Healthcares',
    title: 'Peace-of-Mind Compliance',
    desc: 'Minimize exposure to fines and disruptions. Qiaben enables practices to have the confidence to survive audits and provide care to patients.',
  },
];

const faqs = [
  {
    q: 'What is MD Audit Shield?',
    a: "MD Audit Shield is Qiaben's audit protection and readiness service. It helps your practice proactively detect audit risk areas, maintain well-documented records, and stay aligned with industry standards — so you can face a regulatory audit with confidence instead of scrambling to prepare for one.",
  },
  {
    q: 'How does MD Audit Shield help my practice prepare for an audit?',
    a: 'The service focuses on proactive audit readiness — identifying and mitigating risk areas before they become findings, so your practice stays continuously up to date rather than facing a last-minute scramble when an audit notice arrives.',
  },
  {
    q: 'What kind of documentation support does Qiaben provide?',
    a: "Qiaben provides robust documentation support, helping you maintain thorough, accurate records with expert guidance. This strengthens your audit trail and reinforces your practice's overall compliance integrity.",
  },
  {
    q: 'How does MD Audit Shield reduce compliance risk?',
    a: 'By combining proactive risk detection with strong documentation practices, MD Audit Shield minimizes exposure to fines and operational disruptions, giving your practice the confidence to withstand audits while staying focused on patient care.',
  },
  {
    q: 'Who should use MD Audit Shield?',
    a: "Any healthcare practice that wants to reduce audit exposure and strengthen compliance — rather than reacting to an audit after it's already underway — benefits from MD Audit Shield's proactive approach to documentation and risk detection.",
  },
];

const relatedPosts = [
  {
    title: 'D7140 , D4341 & More: Understanding the Most Used Dental Codes',
    desc: 'A breakdown of the most frequently billed dental codes, what they mean, and how they show up on your bill.',
    img: '/img/uploads/2024/12/medical-coding-service-image-2.jpg',
    to: '/blog/d7140-d4341-and-more-understanding-the-most-used-dental-codes',
  },
  {
    title: 'Root Tip Extraction Code & Other Oral Surgery Billing Codes',
    desc: 'A guide to the root tip extraction code and other key oral surgery billing codes to avoid denials and get fair reimbursement.',
    img: '/img/uploads/2024/12/medical-coding-service-image-3.jpg',
    to: '/blog/root-tip-extraction-code-other-oral-surgery-billing-codes',
  },
  {
    title: 'Free EHR Software for Mental Health Providers – How to Choose the Right One for Your Practice',
    desc: 'A practical guide to evaluating free EHR software options built for mental health and behavioral health providers.',
    img: '/img/uploads/2024/08/a_electronic_health_record_data_in_a_medical_office_with_us_nurses_practitioners_reviewing_on_big_screen_with_qiaben_com_the_light_is_bright_and_the_mood_is_happy-1-1024x1024.jpeg',
    to: '/blog/free-ehr-software-for-mental-health-providers-how-to-choose-the-right-one-for-your-practice',
  },
  {
    title: 'Dental Coding 101: Missing Tooth Clause, COB, and Non-Duplication of Benefits',
    desc: "You've been paying dental insurance premiums for years — here's what happens when the missing tooth clause kicks in.",
    img: '/img/uploads/2025/04/dental-insurance-form-toothache-oral-mouth-teeth-concept-768x699.jpg',
    to: '/blog/dental-coding-101-missing-tooth-clause-cob-and-non-duplication-of-benefits',
  },
  {
    title: 'Prosthodontic Coding Made Easy: Focus on D5000-D5899 Codes',
    desc: 'A clear breakdown of the D5000-D5899 prosthodontic code range and how to bill them accurately the first time.',
    img: '/img/uploads/2025/01/prosthodontics-1-768x432.png',
    to: '/blog/prosthodontic-coding-made-easy-focus-on-d5000-d5899-codes',
  },
  {
    title: 'Medical Billing Made Easy: Hassle-Free Claim Submission Explained',
    desc: 'A step-by-step walkthrough of the claim submission process, from encounter to reimbursement, with fewer denials.',
    img: '/img/uploads/2025/01/claim-5.webp',
    to: '/blog/medical-billing-made-easy-hassle-free-claim-submission-explained',
  },
];

export default function MdAuditShield(): ReactNode {
  return (
    <Layout
      title="MD Audit Shield | Revenue & Compliance — Qiaben Health"
      description="MD Audit Shield provides the benefit of full audit protection and readiness to your practice. This service assists you in detecting audit risk areas in advance.">
      <FaqSchema faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <div className={styles.page}>
        {/* TITLE BAR */}
        <section className={styles.titleBar}>
          <h1>MD Audit Shield</h1>
        </section>

        {/* INTRO */}
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <Reveal>
              <div>
                <p className={styles.introLead}>
                  MD Audit Shield provides the benefit of full audit protection and readiness to your practice.
                  This service assists you in taking an initiative of detecting audit risk areas in advance, in
                  keeping of a well-documented record and adhering to standards within the industry. Qiaben is
                  empowering practices with MD Audit Shield to plan their audits confidently, reduce exposure, and
                  protect operational integrity, and peace of mind and focused care delivery.
                </p>
                <div className={styles.introImage}>
                  <img
                    src={useBaseUrl('/img/uploads/2025/08/AA1KnGQd.jpeg')}
                    alt="Magnifying glass over accounting audit records"
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
            src={useBaseUrl(
              '/img/uploads/2025/03/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code-1024x641.jpg',
            )}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div className={styles.whyGlowLeft} aria-hidden="true" />
          <div className={styles.whyGlowRight} aria-hidden="true" />
          <div className={styles.sectionInner}>
            <Reveal>
              <h2 className={styles.whyTitle}>Qiaben&apos;s MD Audit Shield – Key Benefits at a Glance</h2>
            </Reveal>
            <div className={styles.whyGrid}>
              {whyCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <div className={styles.whyCard}>
                    <div className={styles.whyIcon}>
                      <img src={useBaseUrl(c.img)} alt="" loading="lazy" />
                    </div>
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
