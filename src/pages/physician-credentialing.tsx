import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Reveal from '@site/src/components/Reveal';
import BookingForm from '@site/src/components/BookingForm';
import FaqSchema from '@site/src/components/FaqSchema';
import styles from './physician-credentialing.module.css';

const checklist = [
  'Our staff of professionals handles every detail for you.',
  'We contact you weekly to update you on progress until the process is over.',
  'We provide you with written reports with our updates.',
  'We track all applications submitted and maintain accurate records.',
  'We guarantee complete security, confidentiality and accuracy.',
];

const CARD_HOVER_IMG = '/img/uploads/2024/08/Untitled-design-9-300x300.png';

const whyCards = [
  {
    color: '#e94b4b',
    title: 'Documentation Management',
    desc: 'Qiaben Health offers a thorough documentation management system, ensuring that all necessary credentials, licenses.',
    hoverImg: CARD_HOVER_IMG,
  },
  {
    color: '#3b82f6',
    title: 'Application Process',
    desc: "Qiaben Health's credentialing process is designed for efficiency, with an easy-to-follow application system that minimizes delays.",
    hoverImg: CARD_HOVER_IMG,
  },
  {
    color: '#10b981',
    title: 'Monitoring and Support',
    desc: 'Qiaben Health provides ongoing monitoring of credentialing status, keeping track of expiration dates and required renewals.',
    hoverImg: CARD_HOVER_IMG,
  },
];

const aboutStats = [
  { value: '250+', label: 'Credentials Processed Annually' },
  { value: 'Days 10', label: 'Average Turnaround Time' },
  { value: '99%', label: 'Credentialing Success Rate' },
];

const faqs = [
  {
    q: 'What is physician credentialing?',
    a: "Physician credentialing is a process that verifies a physician's qualifications, including education, training, experience, and licensure, to ensure they meet the necessary standards to provide medical care. This process is essential for gaining hospital privileges, joining insurance networks, and maintaining compliance with regulatory requirements.",
  },
  {
    q: 'Why is physician credentialing important?',
    a: "Credentialing is crucial for ensuring patient safety and maintaining high standards of care. It also allows physicians to participate in insurance networks, which is necessary for billing and reimbursement. Proper credentialing protects both healthcare providers and patients by verifying the physician's qualifications and competence.",
  },
  {
    q: 'How long does the credentialing process take?',
    a: "The duration of the credentialing process can vary depending on the complexity of the physician's background and the specific requirements of the hospitals or insurance companies. On average, the process can take between 60 to 90 days. However, delays can occur due to incomplete applications or additional verification needs.",
  },
  {
    q: 'What documents are required for physician credentialing?',
    a: 'The required documents typically include a completed application form, copies of medical licenses, board certifications, proof of education and training, work history, malpractice insurance, and references. Additional documents may be requested based on specific organizational requirements.',
  },
  {
    q: 'Can Qiaben Health assist with recredentialing?',
    a: 'Yes, Qiaben Health offers recredentialing services to ensure that physicians maintain their credentials and comply with ongoing requirements. Our team monitors renewal deadlines and manages the recredentialing process to help you stay compliant and avoid any interruptions in your practice.',
  },
  {
    q: 'What are the common challenges in the credentialing process?',
    a: "Common challenges include incomplete or inaccurate application information, delays in verification from educational institutions or previous employers, and meeting specific state or organizational requirements. Qiaben Health's experienced team helps navigate these challenges to ensure a smooth credentialing process.",
  },
  {
    q: 'How does Qiaben Health streamline the credentialing process?',
    a: 'Qiaben Health uses a comprehensive and systematic approach to streamline the credentialing process. Our team handles the application preparation, document collection, and verification, ensuring accuracy and completeness. We also provide ongoing communication and follow-up to expedite the process and address any issues promptly.',
  },
  {
    q: 'What happens if my credentialing application is denied?',
    a: 'If your credentialing application is denied, Qiaben Health will work with you to understand the reasons for the denial and help you address any deficiencies. We will assist in gathering additional documentation or information required to reapply and improve your chances of a successful credentialing outcome.',
  },
];

const relatedPosts = [
  {
    title: 'A Guide to Insurance Credentialing for Emerging Medical Practices',
    desc: 'Understand the essentials of insurance verification and credentialing to help your new practice accept insurance seamlessly from day one.',
    img: '/img/uploads/2025/01/qtq80-nLABTv-1024x683.jpeg',
    to: '/blog/a-guide-to-insurance-credentialing-for-emerging-medical-practices',
  },
  {
    title: 'Empower Growth with Trusted Physician Credentialing Service',
    desc: 'Why physician credentialing is a cornerstone of streamlining healthcare operations and ensuring regulatory compliance.',
    img: '/img/uploads/2025/04/medical-questionnaire-1024x683.jpg',
    to: '/blog/empower-growth-with-trusted-physician-credentialing-service',
  },
  {
    title: 'Quick Credentialing Mistakes That Cost Practices Thousands',
    desc: 'The most common credentialing mistakes, why they happen, and the practical fixes that actually work in today’s market.',
    img: '/img/uploads/2026/02/ChatGPT-Image-Feb-19-2026-11_18_34-PM.png',
    to: '/blog/quick-credentialing-mistakes-that-cost-practices-thousands',
  },
];

export default function PhysicianCredentialing(): ReactNode {
  return (
    <Layout
      title="Physician Credentialing Service - Qiaben Health"
      description="Physician Credentialing Service - Qiaben Health handles documentation, applications, and monitoring so your practice gets credentialed accurately and on time.">
      <FaqSchema faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <div className={styles.page}>
        {/* TITLE BAR */}
        <section className={styles.titleBar}>
          <h1>Physician Credentialing Service</h1>
        </section>

        {/* INTRO */}
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <Reveal>
              <div>
                <p className={styles.introLead}>
                  Are you feeling overwhelmed by the <strong>physician credentialing</strong> process or simply
                  too busy to manage it by your side, yourself? Let us take the burden off your shoulders and
                  ensure that your office obtains its credentials or accurately and on time. With our extensive
                  experience and deep knowledge, we streamline the entire process, making it smooth and
                  hassle-free for you. You can rely on us to handle everything with better precision and
                  efficiency, giving you peace of mind. And the best part? Our services are well affordably
                  priced, ensuring you get top-quality assistance without breaking the bank. Let us help you get
                  this important process done right, so you can focus on what truly matters.
                </p>
                <div className={styles.introImage}>
                  <img
                    src={useBaseUrl('/img/uploads/2025/04/medical-questionnaire-1024x683.jpg')}
                    alt="Physician completing credentialing paperwork"
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

        {/* CHECKLIST */}
        <section className={styles.checklistSection}>
          <div className={styles.checklistInner}>
            <Reveal>
              <p className={styles.checklistLead}>
                We take care of everything for you. Your office simply needs to fill out one application – and
                then leave the work to us!
              </p>
              <ul className={styles.checklist}>
                {checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className={styles.whySection}>
          <div className={styles.sectionInner}>
            <Reveal>
              <p className={styles.eyebrow}>Service</p>
              <h2 className={styles.sectionTitle}>Why Choose Us</h2>
              <p className={styles.sectionLead}>
                Streamline Your Practice with Efficient Physician Credentialing: Ensure Compliance, Enhance
                Reputation, and Accelerate Revenue
              </p>
            </Reveal>
            <div className={styles.whyGrid}>
              {whyCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <div className={styles.whyCard}>
                    <div className={styles.whyIcon} style={{ background: c.color }} />
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <img src={useBaseUrl(c.hoverImg)} alt="" className={styles.whyHoverImg} aria-hidden="true" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutInner}>
            <Reveal variant="left">
              <div className={styles.aboutImage}>
                <img
                  src={useBaseUrl(CARD_HOVER_IMG)}
                  alt="Illustration of a physician in scrubs with a stethoscope"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <p className={styles.eyebrow}>About</p>
                <h2 className={styles.sectionTitle}>
                  Let us handle your credentialing, making it simpler for you.
                </h2>
                <p className={styles.aboutLead}>
                  Streamline your credentialing process with ease. Our team is dedicated to simplifying every
                  step, removing the hassle, and letting you focus on what matters most.
                </p>
                <p className={styles.aboutLead}>
                  Our dedicated team takes care of every detail, ensuring that you encounter fewer obstacles and
                  spend less time on paperwork. Focus on your practice while we handle the complexities of
                  credentialing, delivering a smoother, more efficient process tailored to your specific needs.
                  Let us transform the way you approach credentialing, turning it into a seamless experience that
                  works for you.
                </p>
                <div className={styles.aboutStats}>
                  {aboutStats.map((s) => (
                    <div key={s.label}>
                      <p className={styles.aboutStatValue}>{s.value}</p>
                      <p className={styles.aboutStatLabel}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* GET IN TOUCH BANNER */}
        <section
          className={styles.touchBanner}
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(0,135,99,0.75), rgba(0,135,99,0.55)), url(${useBaseUrl(
              '/img/uploads/2024/04/financial-advisor-couple-wearing-face-masks-while-talking-office-1024x683.jpg',
            )})`,
          }}>
          <Reveal>
            <div className={styles.touchInner}>
              <h2>Get in Touch with Us</h2>
              <Link to="/book-an-appointment">Talk to us</Link>
            </div>
          </Reveal>
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
