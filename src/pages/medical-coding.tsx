import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Reveal from '@site/src/components/Reveal';
import BookingForm from '@site/src/components/BookingForm';
import styles from './medical-coding.module.css';

const whyCards = [
  {
    img: '/img/uploads/2024/07/Untitled-design-21.png',
    tag: 'Qiaben Healthcares',
    title: 'Advanced Automation',
    desc: 'Our team can unlock new levels of automation and efficiency. Our automation software leverages cutting-edge Natural Language Processing (NLP) and data forecasting techniques to predict codes based on physician notes.',
  },
  {
    img: '/img/uploads/2024/07/Untitled-design-22.png',
    tag: 'Qiaben Healthcares',
    title: 'Expert Team of Coders',
    desc: 'Our team of certified medical coders has extensive experience and deep knowledge of the latest coding standards and practices. Compliant and up-to-date with current regulations, including ICD-10, CPT, and HCPCS code.',
  },
  {
    img: '/img/uploads/2024/07/Untitled-design-23.png',
    tag: 'Qiaben Healthcares',
    title: 'Coding Solutions',
    desc: 'Qiaben Healthcares offers a full suite of medical coding services tailored to meet the unique needs of your practice, hospital, or healthcare facility. Accurate coding for both inpatient and outpatient services.',
  },
];

const faqs = [
  {
    q: 'What is medical coding, and why is it important?',
    a: 'Medical coding is the process of translating healthcare diagnoses, procedures, and services into standardized codes. These codes are essential for accurately documenting patient care, processing insurance claims, and ensuring proper reimbursement for healthcare providers. Accurate coding helps streamline billing, reduces errors, and improves the overall efficiency of healthcare operations.',
  },
  {
    q: 'How does Qiaben Health ensure accuracy in medical coding?',
    a: 'At Qiaben Health, we prioritize precision and compliance in our medical coding practices. Our team of certified medical coders uses the latest coding guidelines and updates to ensure that every code reflects the most current standards. We also implement rigorous quality control measures and regular audits to maintain the highest level of accuracy.',
  },
  {
    q: 'What coding systems do Qiaben Health professionals use?',
    a: 'Our medical coding professionals are skilled in using several coding systems, including ICD-10 (International Classification of Diseases), CPT (Current Procedural Terminology), and HCPCS (Healthcare Common Procedure Coding System). These systems cover a wide range of diagnoses, procedures, and services to ensure comprehensive and precise coding.',
  },
  {
    q: 'How does medical coding impact patient care and billing?',
    a: 'Accurate medical coding directly impacts both patient care and billing. Properly coded information ensures that patients receive appropriate care and that healthcare providers are reimbursed correctly. Coding errors can lead to claim denials, delays in payment, and potential issues with patient care documentation.',
  },
  {
    q: "What training and qualifications do Qiaben Health's medical coders have?",
    a: 'Our medical coders at Qiaben Health are highly trained and hold certifications from reputable organizations such as the American Academy of Professional Coders (AAPC) or the American Health Information Management Association (AHIMA). Their expertise ensures that coding practices meet industry standards and regulatory requirements.',
  },
  {
    q: 'How does Qiaben Health handle coding for different specialties?',
    a: 'Our team is experienced in coding for a wide range of medical specialties, including primary care, surgical specialties, and behavioral health. We tailor our coding practices to the specific requirements and nuances of each specialty to ensure accurate and relevant coding for all types of medical services.',
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

export default function MedicalCoding(): ReactNode {
  return (
    <Layout
      title="Medical Coding Service — Qiaben Health"
      description="Medical coding is an incredibly important but painstaking task that involves large teams and laborious tasks. Accurate medical coding is essential for the efficient processing of claims.">
      <div className={styles.page}>
        {/* TITLE BAR */}
        <section className={styles.titleBar}>
          <h1>Medical Coding</h1>
        </section>

        {/* INTRO */}
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <Reveal>
              <div>
                <p className={styles.introLead}>
                  Medical coding is an incredibly important but painstaking task that involves large teams and
                  laborious tasks. Accurate medical coding is essential for the efficient processing of claims,
                  ensuring compliance with rules, and maintaining the financial health of healthcare providers. At
                  Qiaben Health, we acknowledge the critical nature of the intricacies and challenges associated
                  with medical coding. That&apos;s why we offer comprehensive{' '}
                  <strong>medical coding services</strong> that not only streamline your processes but also
                  enhance accuracy and efficiency.
                </p>
                <div className={styles.introImage}>
                  <img
                    src={useBaseUrl('/img/uploads/2024/07/Untitled-design-19-1024x553.png')}
                    alt="Medical coder giving a thumbs up in front of dual monitors"
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
              <h2 className={styles.whyTitle}>Why Choose Qiaben Healthcares for Medical Coding?</h2>
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

        {/* BOOST YOUR PRACTICE */}
        <section className={styles.boostSection}>
          <div className={styles.boostInner}>
            <Reveal variant="left">
              <div className={styles.boostImage}>
                <img
                  src={useBaseUrl('/img/uploads/2024/08/Untitled-design-18-1024x1024.png')}
                  alt="Illustration of two coders reviewing medical billing data on screen"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className={styles.boostTitle}>Boost Your Practice with Our Skilled Medical Coding Team</h2>
                <p className={styles.boostLead}>
                  We understand that accurate medical coding is essential for efficient billing and seamless
                  claims processing. Our expert medical coding services are designed to transform your
                  practice&apos;s revenue cycle with precision and reliability.
                </p>
                <p className={styles.boostLead}>
                  Our skilled team of certified coders stays up-to-date with the latest industry standards and
                  coding guidelines to ensure that every claim is processed correctly the first time. We
                  meticulously review and code each patient encounter, minimizing the risk of errors and
                  rejections.
                </p>
                <p className={styles.boostLead}>
                  We take pride in our commitment to accuracy and efficiency, providing you with detailed reports
                  and transparent communication throughout the process. By partnering with us, you gain a trusted
                  ally who is dedicated to optimizing your billing practices, reducing administrative burdens, and
                  allowing you to focus on delivering exceptional patient care.
                </p>
                <Link to="/contact" className={styles.contactCta}>
                  Contact Us
                </Link>
              </div>
            </Reveal>
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