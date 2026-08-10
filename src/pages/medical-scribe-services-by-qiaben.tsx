import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Reveal from '@site/src/components/Reveal';
import BookingForm from '@site/src/components/BookingForm';
import styles from './medical-scribe-services-by-qiaben.module.css';

const features = [
  {
    icon: '📄',
    title: 'Accurate & Efficient Documentation',
    desc: 'Our scribes seamlessly capture every detail in your EMR/EHR, reducing charting time and improving provider productivity.',
  },
  {
    icon: '🤝',
    title: 'Enhanced Patient Experience',
    desc: 'By handling documentation, scribes free providers to focus fully on patient interaction, improving satisfaction and care quality.',
  },
  {
    icon: '💵',
    title: 'Cost-Effective & Specialty-Trained',
    desc: 'Reduce administrative costs and provider burnout with scribes trained across multiple specialties, from primary care to urgent care and behavioral health.',
  },
];

const howItWorks = [
  { lead: 'Seamless Integration', text: 'Qiaben scribes work with your existing EMR system.' },
  {
    lead: 'Real-Time Documentation',
    text: 'Notes, histories, test results, and procedures are entered as the encounter unfolds.',
  },
  { lead: 'HIPAA-Compliant & Secure', text: 'Every scribe is trained in compliance and patient data security.' },
  { lead: 'Flexible Options', text: 'Onsite or Virtual Medical Scribes to fit your practice’s needs.' },
];

const beneficiaries = [
  'Physician Practices (Primary Care & Specialists)',
  'Hospitals & Health Systems',
  'Urgent Care & Telemedicine Clinics',
  'Behavioral & Mental Health Providers',
];

const planFeatures = [
  'Insurance Verification',
  'Claim Submission',
  'Payment Posting',
  'Denial Management',
  'Patient Billing',
  'Accounts Receivable Follow-up',
  'Reporting and Analysis',
];

const plans = [
  { name: 'QBN Enterprise', range: 'Monthly collections $5 million+', rate: '2.49%', features: [...planFeatures, 'Free EHR Cloud'] },
  { name: 'QBN Performance', range: 'Monthly collections $100K - $5 million', rate: '2.99%', features: [...planFeatures, 'Free EHR Cloud'] },
  { name: 'QBN Pro', range: 'Monthly collections $50K - $100K', rate: '3.99%', features: planFeatures, popular: true },
  { name: 'QBN Start', range: 'Monthly collections $10K - $50K', rate: '4.99%', features: planFeatures },
];

export default function MedicalScribeServices(): ReactNode {
  return (
    <Layout
      title="Medical Scribe Services by Qiaben — Qiaben Health"
      description="Healthcare providers today spend nearly half their day on documentation rather than patient care. At Qiaben, our Medical Scribe services are designed to eliminate this burden by providing accurate, real-time documentation support.">
      <div className={styles.page}>
        {/* INTRO + BOOKING */}
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <Reveal>
              <div>
                <h1 className={styles.introTitle}>Medical Scribe Services</h1>
                <p className={styles.introLead}>
                  Healthcare providers today spend nearly <strong>half their day on documentation</strong> rather
                  than patient care. At Qiaben, our <strong>Medical Scribe services</strong> are designed to
                  eliminate this burden by providing accurate, real-time documentation support—so you can give
                  your full attention to your patients.
                </p>

                <h2 className={styles.sectionSubtitle}>Why Choose Qiaben Medical Scribes?</h2>
                <div className={styles.featureGrid}>
                  {features.map((f) => (
                    <div key={f.title} className={styles.featureCard}>
                      <div className={styles.featureIcon} aria-hidden="true">{f.icon}</div>
                      <h3>{f.title}</h3>
                      <p>{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal variant="left">
              <BookingForm title="Book an Appointment" />
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={styles.howItWorks}>
          <div className={styles.howItWorksInner}>
            <Reveal>
              <p className={styles.eyebrow}>Why choose us</p>
              <h2 className={styles.howItWorksTitle}>How It Works</h2>
              <ul className={styles.howItWorksList}>
                {howItWorks.map((item) => (
                  <li key={item.lead}>
                    <strong>{item.lead}</strong> – {item.text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* WHO CAN BENEFIT */}
        <section className={styles.benefit}>
          <div className={styles.benefitInner}>
            <Reveal variant="left">
              <ul className={styles.benefitList}>
                {beneficiaries.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <h2 className={styles.benefitTitle}>Who Can Benefit?</h2>
            </Reveal>
          </div>

          <div className={styles.whyInner}>
            <Reveal>
              <p className={styles.eyebrowDark}>Why Choose Us</p>
              <p className={styles.whyLead}>
                At Qiaben, we combine <strong>technology-driven solutions</strong> with <strong>human
                expertise</strong>. Our medical scribes are not just note-takers—they are trained to support
                clinical accuracy, ensure compliance, and streamline your operations. With Qiaben, you gain a
                partner committed to helping you <strong>reduce burnout, improve efficiency, and enhance patient
                satisfaction.</strong>
              </p>
            </Reveal>
          </div>

          {/* PRICING */}
          <div className={styles.pricingGrid}>
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 60}>
                <div className={`${styles.planCard} ${plan.popular ? styles.planCardPopular : ''}`}>
                  {plan.popular && <span className={styles.planBadge}>Most Popular</span>}
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planRange}>{plan.range}</p>
                  <p className={styles.planRate}>
                    {plan.rate}
                    <span>/month</span>
                  </p>
                  <ul className={styles.planFeatures}>
                    {plan.features.map((f) => (
                      <li key={f}>
                        <svg viewBox="0 0 512 512" width="14" height="14" fill="currentColor" aria-hidden="true">
                          <path d="M173.9 439.4L7.5 273c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.9 432.1 72.8c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2L210.1 439.4c-10 10-26.2 10-36.2 0z" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/book-an-appointment" className={styles.planCta}>
                    Get started
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CLOSING */}
        <section className={styles.closing}>
          <div className={styles.closingInner}>
            <Reveal variant="left">
              <div className={styles.closingImage}>
                <img src={useBaseUrl('/img/uploads/2024/04/1.jpg')} alt="Qiaben medical scribe" loading="lazy" />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className={styles.closingTitle}>
                  Let Qiaben handle your documentation, so you can get back to what matters most—caring for your
                  patients.
                </h2>
                <BookingForm title="Book an Appointment" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* BRAND BAND */}
        <div className={styles.brandBand}>
          <img src={useBaseUrl('img/logo-navbar.png')} alt="Qiaben Health" className={styles.brandBandLogo} />
        </div>
      </div>
    </Layout>
  );
}
