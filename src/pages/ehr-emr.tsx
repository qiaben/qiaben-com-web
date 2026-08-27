import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Reveal from '@site/src/components/Reveal';
import styles from './ehr-emr.module.css';

const differenceCards = [
  {
    title: 'EHR (Electronic Health Record)',
    desc: 'A comprehensive, connected platform that stores and shares patient information across multiple facilities and departments. Ideal for hospitals and large practices that need interoperability, analytics, and team collaboration.',
  },
  {
    title: 'EMR (Electronic Medical Record)',
    desc: "A digital version of a patient's chart within a single clinic or practice. Perfect for small to mid-sized providers focused on internal record management and efficiency.",
  },
];

const ciyexHighlights = [
  'Completely free - no per-patient fees, no vendor lock-in',
  'Purpose-built for community health centers, free clinics & rural providers',
  'Multi-language, culturally responsive - designed for underserved communities',
  'FHIR R4 native - connects with labs, pharmacies & specialists',
  'HIPAA-compliant with enterprise-grade encryption',
  'Patient-owned data with secure portal access',
  'Self-hostable - communities can own their healthcare infrastructure',
];

const openEmrHighlights = [
  '100% customizable open-source system',
  'Integrated scheduling, billing, and patient portal',
  'Cloud-ready, secure, and HIPAA-compliant',
  'Cost-effective for clinics, startups, and private practitioners',
  'Easy integration with labs, pharmacies, and third-party tools',
];

const whyCards = [
  {
    icon: '🛠️',
    title: 'End-to-End Implementation',
    desc: 'From system setup and data migration to staff onboarding and ongoing support.',
  },
  {
    icon: '🔐',
    title: 'HIPAA-Ready Security',
    desc: 'We ensure complete data protection, compliance, and peace of mind.',
  },
  {
    icon: '🧠',
    title: 'Expertise Across Platforms',
    desc: 'Certified specialists in both proprietary and open-source healthcare systems.',
  },
  {
    icon: '💬',
    title: 'Tailored Solutions',
    desc: 'We adapt technology to your workflow - not the other way around.',
  },
  {
    icon: '📊',
    title: 'Performance-Driven',
    desc: 'Built-in analytics to optimize billing, documentation, and patient experience.',
  },
  {
    icon: '🤝',
    title: 'Continuous Partnership',
    desc: 'Dedicated support and upgrades as your practice grows.',
  },
];

export default function EhrEmr(): ReactNode {
  return (
    <Layout
      title="EHR and EMR Systems for Modern Practices - Qiaben Health"
      description="EHR or EMR - Which One Fits You Best?">
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
              <h1>Find the Right Digital Health Solution for Your Practice</h1>
              <p className={styles.heroSubtitle}>EHR or EMR - Which One Fits You Best?</p>
              <p className={styles.heroLead}>
                At Qiaben Healthcare Solutions, we empower healthcare providers with intelligent, secure, and
                efficient digital systems. Whether you need a complete Electronic Health Record (EHR) platform or
                a flexible Electronic Medical Record (EMR) system, we offer the right solution to match your
                goals.
              </p>
            </Reveal>
          </div>
        </section>

        {/* UNDERSTANDING THE DIFFERENCE */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <Reveal>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>
                <span aria-hidden="true">💡</span> Understanding the Difference
              </h2>
            </Reveal>
            <div className={styles.differenceGrid}>
              {differenceCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <div className={styles.differenceCard}>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CHOOSE YOUR PLATFORM */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <Reveal>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Choose Your Platform
              </h2>
            </Reveal>
            <div className={styles.platformGrid}>
              <Reveal>
                <div className={styles.platformCard}>
                  <h3>
                    <span aria-hidden="true">🌐</span> Ciyex EHR
                  </h3>
                  <div className={styles.badgeRow}>
                    <span className={styles.badge}>✅ 501(c)(3) Nonprofit</span>
                    <span className={styles.badge}>🆓 Free &amp; Open Source</span>
                    <span className={styles.badge}>📄 AGPL-3.0 Licensed</span>
                  </div>
                  <p className={styles.platformTagline}>
                    Open Source · Technology That Serves Patients, Not Profits
                  </p>
                  <p className={styles.platformDesc}>
                    <strong>Ciyex</strong> is a <strong>501(c)(3) nonprofit organization</strong> (EIN: 41-3609665)
                    building free, open source EHR software for every community. Over 30 million Americans lack
                    access to modern health records software - Ciyex ensures clinics don&apos;t have to choose
                    between paper charts and software they can&apos;t afford.
                  </p>
                  <p className={styles.highlightsLabel}>Key Highlights:</p>
                  <ul className={styles.highlightsList}>
                    {ciyexHighlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className={styles.platformCtas}>
                    <a
                      className={styles.ctaPrimary}
                      href="https://ciyex.org/signup"
                      target="_blank"
                      rel="noopener noreferrer">
                      👉 Sign Up Free
                    </a>
                    <a
                      className={styles.ctaSecondary}
                      href="https://github.com/ciyex-org/ciyex"
                      target="_blank"
                      rel="noopener noreferrer">
                      ⭐ View on GitHub
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={60}>
                <div className={styles.platformCard}>
                  <h3>
                    <span aria-hidden="true">💻</span> OpenEMR
                  </h3>
                  <p className={styles.platformTagline}>Flexible, Customizable, and Affordable</p>
                  <p className={styles.platformDesc}>
                    For healthcare providers who value flexibility and control, OpenEMR is a globally trusted
                    open-source platform - fully customized and supported by Qiaben.
                  </p>
                  <p className={styles.highlightsLabel}>Key Highlights:</p>
                  <ul className={styles.highlightsList}>
                    {openEmrHighlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className={styles.platformCtas}>
                    <Link className={styles.ctaPrimary} to="/open-emr">
                      👉 Discover OpenEMR
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE QIABEN */}
        <section className={styles.whySection}>
          <div className={styles.sectionInner}>
            <Reveal>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>
                Why Choose Qiaben
              </h2>
            </Reveal>
            <div className={styles.whyGrid}>
              {whyCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 50}>
                  <div className={styles.whyCard}>
                    <h3>
                      <span aria-hidden="true">{c.icon}</span> {c.title}
                    </h3>
                    <p>{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* START YOUR DIGITAL JOURNEY */}
        <section className={styles.journeySection}>
          <Reveal>
            <h2 className={styles.journeyTitle}>
              <span aria-hidden="true">🚀</span> Start Your Digital Journey Today
            </h2>
            <p className={styles.journeyLead}>
              Not sure which platform fits your practice best?
              <br />
              Our experts can help you choose between Ciyex EHR and OpenEMR based on your goals, size, and budget.
            </p>
            <Link to="/book-an-appointment" className={styles.journeyCta}>
              Talk to Our Team
            </Link>
          </Reveal>
        </section>
      </div>
    </Layout>
  );
}
