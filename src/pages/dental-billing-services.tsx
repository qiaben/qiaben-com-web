import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Reveal from '@site/src/components/Reveal';
import BookingForm from '@site/src/components/BookingForm';
import styles from './dental-billing-services.module.css';

const TrendUpIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="3 17 9 11 13 15 21 7" />
    <polyline points="14 7 21 7 21 14" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="8 12 11 15 16 9" />
  </svg>
);

const SmileIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const CheckMarkIcon = () => (
  <svg viewBox="0 0 512 512" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M173.9 439.4L7.5 273c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.9 432.1 72.8c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2L210.1 439.4c-10 10-26.2 10-36.2 0z" />
  </svg>
);

const introHighlights = [
  {
    icon: <TrendUpIcon />,
    title: 'Increased Revenue',
    desc: "Qiaben's meticulous billing processes & expert management of claims ensure that practices capture the maximum possible revenue and reduces the incidence of denied claims & improves the rate of successful reimbursements.",
  },
  {
    icon: <CheckCircleIcon />,
    title: 'Reduced Billing Errors',
    desc: 'With a dedicated team specializing in dental billing, Qiaben significantly lowers the chances of errors that can lead to claim rejections or delays and expertise ensures compliance with the latest billing regulations and standards.',
  },
  {
    icon: <SmileIcon />,
    title: 'Peace of Mind',
    desc: 'Knowing that billing processes are managed by experts provides peace of mind to dental providers. This confidence allows providers to concentrate on dental responsibilities without the stress of financial administration.',
  },
];

const whyCards = [
  {
    title: 'Unmatched Expertise',
    desc: 'Qiaben boasts a team of highly skilled professionals with extensive experience in dental billing and coding.',
  },
  {
    title: 'Full Spectrum of Services',
    desc: 'From initial claim submission to appeals and payment processing, Qiaben provides a complete suite of billing services.',
  },
  {
    title: 'Personalized Billing Solutions',
    desc: 'Recognizing the unique challenges and needs of each practice, Qiaben delivers customized billing strategies.',
  },
];

const planFeatures = [
  'Insurance Verification',
  'Claim Submission',
  'Payment Posting:',
  'Denial Management',
  'Patient Billing',
  'Accounts Receivable Follow-up',
  'Reporting and Analysis',
];

const plans = [
  { name: 'QBN Enterprise', range: 'Monthly collections > $1 million+/month', rate: '1.99%', features: [...planFeatures, 'Free EHR Cloud'] },
  { name: 'QBN Performance', range: 'Monthly collections >$100K /month', rate: '2.49%', features: [...planFeatures, 'Free EHR Cloud'] },
  { name: 'QBN Pro', range: 'Monthly collections >$50K /month', rate: '2.99%', features: planFeatures, popular: true },
  { name: 'QBN Start', range: 'Monthly collections <$50k/monthly', rate: '3.99%', features: planFeatures },
];

export default function DentalBillingServices(): ReactNode {
  return (
    <Layout
      title="Dental Billing Service — Qiaben Health"
      description="Qiaben is a Dental Billing Service Firm delivering unparalleled dental billing consulting services. Our expert billing advisors collaborate closely with dental professionals.">
      <div className={styles.page}>
        {/* TITLE BAR */}
        <section className={styles.titleBar}>
          <h1>Dental Billing Service</h1>
        </section>

        {/* INTRO */}
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <Reveal>
              <div>
                <p className={styles.introLead}>
                  Qiaben is a Dental Billing Service Firm delivering unparalleled dental billing consulting
                  services. Our expert billing advisors collaborate closely with dental professionals to guide
                  them towards billing excellence. We integrate deeply with your practice to identify strategies
                  for minimizing denials and accelerating reimbursements.
                </p>
                <p className={styles.introLead}>
                  We streamline your dental office with comprehensive management and billing services, designed
                  to ensure the financial health and operational efficiency of your practice. Our approach is
                  systematic and detailed, encompassing a wide range of services
                </p>
                <div className={styles.highlightGrid}>
                  {introHighlights.map((h) => (
                    <div key={h.title} className={styles.highlightCard}>
                      <div className={styles.highlightIcon}>{h.icon}</div>
                      <h3>{h.title}</h3>
                      <p>{h.desc}</p>
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

        {/* WHY CHOOSE US */}
        <section className={styles.whySection}>
          <div className={styles.sectionInner}>
            <Reveal>
              <p className={styles.eyebrow}>Why choose us</p>
              <h2 className={styles.sectionTitle}>Billing Brilliance, Unmatched Care</h2>
              <p className={styles.sectionLead}>
                Selecting the right dental billing partner is crucial for the seamless operation and financial
                vitality of your healthcare practice. Qiaben stands out as the premier choice for medical billing
                services, offering unparalleled expertise and comprehensive solutions tailored to meet the
                diverse needs of healthcare providers. Here&apos;s why Qiaben should be your top choice
              </p>
            </Reveal>
            <div className={styles.whyGrid}>
              {whyCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <div className={styles.whyCard}>
                    <div className={styles.whyIcon}>
                      <CheckMarkIcon />
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={styles.howSection}>
          <div className={styles.sectionInner}>
            <Reveal>
              <p className={styles.eyebrow} style={{ textAlign: 'center' }}>How we do it?</p>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                How Our Billing Process Works?
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <div className={styles.processImage}>
                <img
                  src={useBaseUrl('/img/uploads/2024/04/Gray-Blue-Illustration-Digital-Marketing-Strategy-Diagram-Graph.png')}
                  alt="How our billing process works diagram"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* PRICING */}
        <section className={styles.pricingSection}>
          <div className={styles.sectionInner}>
            <Reveal>
              <div className={styles.pricingHead}>
                <div>
                  <p className={styles.eyebrow}>Qiaben&apos;s pricing plan</p>
                  <h2 className={styles.sectionTitle}>Comprehensive RCM Solutions at Competitive Rates</h2>
                </div>
                <p className={styles.pricingLead}>
                  Our medical billing services provide comprehensive RCM solutions for a reasonable percentage of
                  your monthly revenue collections.
                </p>
              </div>
            </Reveal>
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
                          <CheckMarkIcon />
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
          </div>
        </section>

        {/* TRANSFORM YOUR PRACTICE */}
        <section className={styles.closing}>
          <div className={styles.closingInner}>
            <Reveal variant="left">
              <div className={styles.closingImage}>
                <img src={useBaseUrl('/img/uploads/2024/04/1.jpg')} alt="Qiaben dental billing specialist" loading="lazy" />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className={styles.closingTitle}>Transform Your Practice</h2>
                <BookingForm title="Book an Appointment" />
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
}
