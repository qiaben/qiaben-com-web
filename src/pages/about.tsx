import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Reveal from '@site/src/components/Reveal';
import BookingForm from '@site/src/components/BookingForm';
import styles from './about.module.css';

const CheckMarkIcon = () => (
  <svg viewBox="0 0 512 512" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M173.9 439.4L7.5 273c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.9 432.1 72.8c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2L210.1 439.4c-10 10-26.2 10-36.2 0z" />
  </svg>
);

const whyCards = [
  {
    title: 'Unmatched Expertise',
    desc: 'Qiaben boasts a team of highly skilled professionals with extensive experience in medical billing and coding.',
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

const priorityCards = [
  {
    img: '/img/uploads/2024/07/Untitled-design-27.png',
    title: 'Connect with Us Today!',
    desc: "We're eager to understand your unique needs and explore how we can assist you. Contact us now to start the conversation!",
  },
  {
    img: '/img/uploads/2024/07/Untitled-design-28.png',
    title: 'Share Your Thoughts',
    desc: 'Your feedback drives our continuous improvement. Share your insights with us so we can better serve you!',
  },
  {
    img: '/img/uploads/2024/07/Untitled-design-29.png',
    title: 'Customized Solutions',
    desc: 'At Qiaben, we prioritize the unique needs of our clients. Our flexible approach ensures your requirements are always at the forefront.',
  },
  {
    img: '/img/uploads/2024/07/Untitled-design-30.png',
    title: 'Personalized Care',
    desc: 'At Qiaben, we believe in providing personalized care to each of our clients. Our dedicated team is here to ensure that your specific needs.',
  },
];

const securityCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.5 1 1.3 1 2.1V16h6v-.4c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
      </svg>
    ),
    title: 'Innovation & Development',
    desc: 'Our development team adheres to industry-leading standards like OWASP, well conducting frequent security audits to the uphold top-tier excel security protocols.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M17 8l2 2 3-4" />
      </svg>
    ),
    title: 'Robust Access Control',
    desc: 'We prioritize your privacy. Our strict access control systems ensure that only authorized personnel can access specific data, safeguarding your information.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Security Measures',
    desc: 'Security is a continuous journey. Our systems are subject to regular audits and constant monitoring, allowing us to promptly identify and resolve potential vulnerabilities.',
  },
];

export default function About(): ReactNode {
  return (
    <Layout
      title="The Qiaben Story: Healthcare Evolved - Qiaben Health"
      description="Qiaben is more than just a medical/dental billing service. We are your partner in mastering the complexities of healthcare.">
      <div className={styles.page}>
        {/* TITLE BAR */}
        <section className={styles.titleBar}>
          <h1>The Qiaben Story: Healthcare Evolved</h1>
          <p>Professional Practice Management Services</p>
        </section>

        {/* WHO WE ARE */}
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <Reveal variant="left">
              <div className={styles.introImageWrap}>
                <div className={styles.introDots} aria-hidden="true" />
                <img
                  src={useBaseUrl('/img/uploads/2024/04/european-young-woman-smiling-while-looking-at-mirror-in-dental-clinic.jpg')}
                  alt="Smiling patient at a dental clinic"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <p className={styles.eyebrow}>Who we are</p>
                <h2 className={styles.sectionTitle}>Your Practice Partner to Your Success!</h2>
                <p className={styles.introLead}>
                  Qiaben is more than just a medical/dental billing service. We are your partner in mastering
                  the complexities of healthcare. Our skilled team meticulously crafts every aspect of your
                  billing process, including coding, denial management, quick reimbursements, and diligent
                  follow-ups.
                </p>
                <p className={styles.introLead}>
                  We utilize advanced tools and methods to handle any billing challenges, tailored to the size and
                  specialty of your practice. With Qiaben, you can leave the billing struggles behind and
                  focus on excelling in patient care.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TEAM + STATS */}
        <section className={styles.statsSection}>
          <div className={styles.statsGlow} aria-hidden="true" />
          <Reveal>
            <div className={styles.statsInner}>
              <div className={styles.statBlock}>
                <p className={styles.statValue}>97%</p>
                <p className={styles.statTitle}>Claim Approval Rates</p>
                <p className={styles.statDesc}>
                  Experience unparalleled efficiency with our industry-leading 97% claim approval rate
                </p>
              </div>
              <img
                className={styles.statsImage}
                src={useBaseUrl('/img/uploads/2024/04/img_3.png')}
                alt="Qiaben Health medical and dental billing team"
                loading="lazy"
              />
              <div className={styles.statBlock}>
                <p className={styles.statValue}>20+</p>
                <p className={styles.statTitle}>Practice Mgmt. Services</p>
                <p className={styles.statDesc}>
                  We offer a variety of personalized services that can meet the needs of medical &amp; dental
                  practices
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* WHY CHOOSE US */}
        <section className={styles.whySection}>
          <div className={styles.sectionInner}>
            <Reveal>
              <p className={styles.eyebrow} style={{ textAlign: 'center' }}>Why choose us</p>
              <h2 className={styles.whyTitle}>Billing Brilliance, Unmatched Care</h2>
              <p className={styles.whyLead}>
                Selecting the right medical billing partner is crucial for the seamless operation and financial
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

        {/* YOUR HEALTH, OUR PRIORITY */}
        <section className={styles.prioritySection}>
          <div className={styles.sectionInner}>
            <Reveal>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Your Health, Our Priority</h2>
              <div className={styles.priorityImageWrap}>
                <img
                  src={useBaseUrl('/img/uploads/2024/07/Untitled-design-31-300x300.png')}
                  alt="Illustration of two Qiaben healthcare professionals"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <div className={styles.priorityGrid}>
              {priorityCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 50}>
                  <div className={styles.priorityCard}>
                    <img src={useBaseUrl(c.img)} alt="" loading="lazy" />
                    <div>
                      <h3>{c.title}</h3>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className={styles.ctaBand}>
          <Reveal>
            <h2>
              Experience the Future of Billing and Coding with <span>Qiaben Health</span>, Today.
            </h2>
            <Link to="/contact" className={styles.ctaButton}>
              Contact Us
            </Link>
          </Reveal>
        </section>

        {/* SECURITY */}
        <section className={styles.securitySection}>
          <div className={styles.securityDots} aria-hidden="true" />
          <div className={styles.sectionInner}>
            <Reveal>
              <h2 className={styles.securityTitle}>Our Commitment to Security</h2>
            </Reveal>
            <div className={styles.securityGrid}>
              {securityCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <div className={styles.securityCard}>
                    <div className={styles.securityIcon}>{c.icon}</div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BOOK AN APPOINTMENT */}
        <section className={styles.closing}>
          <div className={styles.closingInner}>
            <Reveal variant="left">
              <div className={styles.closingImage}>
                <img
                  src={useBaseUrl('/img/uploads/2024/04/1.jpg')}
                  alt="Qiaben Health practice management specialist"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal>
              <BookingForm title="Book an Appointment" />
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
}
