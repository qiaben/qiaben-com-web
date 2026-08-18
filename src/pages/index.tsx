import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Reveal from '@site/src/components/Reveal';
import BookingForm from '@site/src/components/BookingForm';
import styles from './index.module.css';

const services = [
  {
    icon: '/img/uploads/2025/10/medical-expense.png',
    title: 'Medical & Dental Billing',
    desc: 'AI-powered revenue cycle management with real-time claim tracking and denial prevention.',
    to: '/medical-billing-service',
  },
  {
    icon: '/img/uploads/2025/10/medical-assistance.png',
    title: 'Credentialing & Enrollments',
    desc: 'Streamlined provider credentialing and insurance enrollment processes.',
    to: '/physician-credentialing',
  },
  {
    icon: '/img/uploads/2025/10/software.png',
    title: 'EHR/EMR Integration',
    desc: 'Seamless implementation and support for electronic health record systems.',
    to: '/ehr-emr',
  },
  {
    icon: '/img/uploads/2025/10/automation.png',
    title: 'Healthcare IT & Automation',
    desc: 'Advanced technology solutions and workflow automation for healthcare operations.',
    to: '/professional-practice-management-services',
  },
  {
    icon: '/img/uploads/2025/10/marketing.png',
    title: 'Digital Marketing',
    desc: 'Specialized marketing strategies to grow your healthcare practice online.',
    to: '/professional-practice-management-services',
  },
  {
    icon: '/img/uploads/2025/10/nurse.png',
    title: 'Telehealth Solutions',
    desc: 'Virtual practice platforms and remote patient care technologies.',
    to: '/professional-practice-management-services',
  },
];

const specialties = [
  { icon: '❤️', name: 'Cardiology' },
  { icon: '🦷', name: 'Dentistry' },
  { icon: '🧴', name: 'Dermatology' },
  { icon: '🫁', name: 'Gastroenterology' },
  { icon: '🦴', name: 'Orthopedics' },
  { icon: '👶', name: 'Pediatrics' },
  { icon: '🧠', name: 'Psychiatry' },
  { icon: '🩻', name: 'Radiology' },
];

const challenges = [
  {
    icon: '🔑',
    problem: 'Billing delays & denials',
    solution: 'AI-assisted claim review & real-time tracking',
  },
  {
    icon: '💰',
    problem: 'Revenue leakage',
    solution: 'Analytics-driven RCM improvements',
  },
  {
    icon: '💡',
    problem: 'Fragmented EHR/EMR systems',
    solution: 'Seamless integration & staff training',
  },
  {
    icon: '🤝',
    problem: 'Lack of patient follow-up',
    solution: 'Integrated CRM + patient engagement tools',
  },
  {
    icon: '📋',
    problem: 'Compliance & documentation issues',
    solution: 'HIPAA-ready, secure digital processes',
  },
];

const testimonial = {
  body: 'I signed up with Qiaben about 4 to 5 months ago. They have been great to work with! Siva and his team are very good about communication via text or email. They get all work done and claims paid in a very efficient manner. With denials, they are very good about gathering information and resubmitting it. If we have any questions or concerns, they are very prompt to respond via a call or zoom. This has been a much better option than having someone physically in the office. I highly recommend them.',
  author: 'Jay Doshi',
  role: 'Doctor',
};

const results = [
  {
    value: '42%',
    label: 'Claim Denial Reduction',
    desc: 'Mid-size Hospital, Texas – Integrated billing + EHR system, reducing claim denials by 42%.',
    cta: 'Healthcare System Integration',
  },
  {
    value: '30%',
    label: 'Cash Flow Improvement',
    desc: 'Dental Chain, Florida – Improved cash flow by 30% and automated record updates.',
    cta: 'Multi-Location Practice',
  },
  {
    value: '3x',
    label: 'Patient Growth',
    desc: 'Multi-specialty Clinic, India – Implemented EHR + SEO strategy, achieving 3x patient growth.',
    cta: 'Digital Transformation',
  },
];

const advantages = [
  { icon: '⚡', label: 'Seamless EHR/EMR Integration' },
  { icon: '💡', label: 'AI-powered billing intelligence' },
  { icon: '🔒', label: 'HIPAA-compliant infrastructure' },
  { icon: '🕐', label: '24/7 dedicated support' },
];

function ServiceCard({ icon, title, desc, to }: { icon: string; title: string; desc: string; to: string }): ReactNode {
  return (
    <Link to={to} className={styles.serviceCard}>
      <div className={styles.serviceIcon}>
        <img src={useBaseUrl(icon)} alt="" />
      </div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDesc}>{desc}</p>
    </Link>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Qiaben Health — Streamlined billing. Stronger revenues. Happier practices."
      description="Qiaben Health: medical and dental billing, RCM, EHR/EMR integration, credentialing, and practice management for healthcare providers across the US.">
      <div className={styles.page}>

        {/* HERO */}
        <Reveal variant="fade">
          <section
            className={styles.hero}
            style={{
              backgroundImage: `linear-gradient(120deg, rgba(2,20,16,0.82), rgba(0,135,99,0.55)), url(${useBaseUrl(
                '/img/uploads/2025/03/people-office-analyzing-checking-finance-graphs-1024x684.jpg',
              )})`,
            }}>
            <div className={styles.heroInner}>
              <div>
                <h1 className={styles.heroTitle}>
                  Streamlined Billing.
                  <br />
                  Stronger Revenues.
                  <br />
                  Happier Practices.
                </h1>
                <p className={styles.heroSubtitle}>
                  Qiaben’s expert medical and dental billing solutions empower
                  clinics to simplify workflows, boost claim accuracy, and get
                  paid faster — while staying fully compliant.
                </p>
                <div className={styles.heroCtas}>
                  <Link className={styles.ctaPrimary} to="/book-an-appointment">
                    Get Free Consultation
                  </Link>
                  <Link className={styles.ctaSecondary} to="/professional-practice-management-services">
                    Explore Our Solutions
                  </Link>
                </div>
              </div>
              <BookingForm title="Book an Appointment" />
            </div>
          </section>
        </Reveal>

        {/* STATS */}
        <Reveal>
          <section className={styles.stats}>
            <div className={styles.statsGrid}>
              <div>
                <p className={styles.statValue}>5+</p>
                <p className={styles.statLabel}>Years of healthcare industry experience</p>
              </div>
              <div>
                <p className={styles.statValue}>70+</p>
                <p className={styles.statLabel}>Healthcare providers served</p>
              </div>
              <div>
                <p className={styles.statValue}>24/7</p>
                <p className={styles.statLabel}>Dedicated support</p>
              </div>
              <div>
                <p className={styles.statValue}>50</p>
                <p className={styles.statLabel}>Medical specialties covered</p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* WHO WE ARE */}
        <Reveal>
          <section className={styles.whoWeAre}>
            <div className={styles.whoWeAreInner}>
              <div className={styles.whoWeAreImage}>
                <img
                  src={useBaseUrl(
                    '/img/uploads/2024/08/a_electronic_health_record_data_in_a_medical_office_with_us_nurses_practitioners_reviewing_on_big_screen_with_qiaben_com_the_light_is_bright_and_the_mood_is_happy-1-1024x1024.jpeg',
                  )}
                  alt="Healthcare provider reviewing digital records"
                  loading="lazy"
                />
              </div>
              <div>
                <p className={styles.sectionEyebrow}>Who we are</p>
                <h2 className={styles.sectionTitle}>
                  Transforming Healthcare with Smart Billing &amp; IT Solutions
                </h2>
                <p className={styles.sectionLead}>
                  Qiaben empowers medical and dental practices with end-to-end{' '}
                  <strong>billing, RCM, and EHR/EMR integration</strong> —
                  simplifying workflows and driving revenue growth.
                </p>
                <div className={styles.whoWeAreStats}>
                  <div>
                    <p className={styles.statValue}>5+</p>
                    <p className={styles.statLabel}>Years of healthcare industry experience</p>
                  </div>
                  <div>
                    <p className={styles.statValue}>70+</p>
                    <p className={styles.statLabel}>Healthcare providers served</p>
                  </div>
                  <div>
                    <p className={styles.statValue}>24/7</p>
                    <p className={styles.statLabel}>Dedicated support</p>
                  </div>
                  <div>
                    <p className={styles.statValue}>50</p>
                    <p className={styles.statLabel}>Medical specialties covered</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* CERTS */}
        <Reveal>
          <section className={styles.certs}>
            <p className={styles.certTitle}>Certified by</p>
            <div className={styles.certViewport}>
              <div className={styles.certTrack}>
                {[0, 1].map((i) => (
                  <div className={styles.certRow} key={i} aria-hidden={i === 1}>
                    <img
                      src={useBaseUrl('/img/uploads/2025/10/hipaa-compliance-1-300x120.jpg')}
                      alt={i === 0 ? 'HIPAA compliant' : ''}
                    />
                    <img
                      src={useBaseUrl('/img/uploads/2025/10/openemr-logo-300x83-1.jpeg')}
                      alt={i === 0 ? 'OpenEMR certified' : ''}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* SERVICES */}
        <section className={styles.services}>
          <div className={styles.servicesInner}>
            <Reveal>
              <div className={styles.servicesHeader}>
                <p className={styles.sectionEyebrow}>What we offer</p>
                <h2 className={styles.sectionTitle}>Complete Solutions for Modern Healthcare</h2>
                <p className={styles.sectionLead}>
                  Comprehensive. Compliant. Connected. Qiaben provides end-to-end
                  healthcare and technology services that optimize operations,
                  reduce costs, and enhance patient experiences.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className={styles.serviceGrid}>
                {services.map((s) => (
                  <ServiceCard key={s.title} {...s} />
                ))}
              </div>
            </Reveal>
            <div className={styles.servicesAll}>
              <Link to="/professional-practice-management-services">See All Services →</Link>
            </div>
          </div>
        </section>

        {/* SPECIALTIES */}
        <section className={styles.specialties}>
          <div className={styles.specialtiesInner}>
            <Reveal>
              <p className={styles.sectionEyebrow}>Specialties</p>
              <h2 className={styles.sectionTitle}>
                Expertise Across 50+ Medical Disciplines
              </h2>
              <p className={styles.sectionLead} style={{ margin: '0 auto' }}>
                Qiaben adapts technology and billing workflows to your clinical
                specialty.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className={styles.specialtyGrid}>
                {specialties.map((s) => (
                  <div key={s.name} className={styles.specialty}>
                    <span className={styles.specialtyIcon} aria-hidden="true">{s.icon}</span>
                    <span className={styles.specialtyName}>{s.name}</span>
                  </div>
                ))}
              </div>
              <p className={styles.specialtiesMore}>
                And many more: Internal Medicine, Neurology, Urology, Ophthalmology,
                Gynecology, Oncology, ENT, Physiotherapy, Pulmonology…
              </p>
              <p className={styles.specialtiesMore}>
                <Link to="/specialties">Find Your Specialty →</Link>
              </p>
            </Reveal>
          </div>
        </section>

        {/* COMPETITIVE EDGE */}
        <section className={styles.challenges}>
          <div className={styles.challengesInner}>
            <Reveal>
              <h2 className={styles.sectionTitle} style={{ maxWidth: '18ch' }}>
                Your Competitive Edge in Healthcare Efficiency
              </h2>
            </Reveal>
            <div className={styles.challengesGrid}>
              <Reveal variant="left">
                <div className={styles.challengesImage}>
                  <img
                    src={useBaseUrl(
                      '/img/uploads/2025/03/freepik__a-splitscreen-of-a-computer-showing-various-openem__79345-300x300.jpeg',
                    )}
                    alt="Before and after digital transformation"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <div className={styles.challengesList}>
                {challenges.map((c, i) => (
                  <Reveal key={c.problem} delay={i * 60}>
                    <div className={styles.challengeCard}>
                      <div className={styles.challengeIcon} aria-hidden="true">{c.icon}</div>
                      <div>
                        <p className={styles.challengeProblem}>Your Challenge: {c.problem}</p>
                        <p className={styles.challengeSolution}>Qiaben Solution: {c.solution}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal>
              <div className={styles.challengeCta}>
                <h3>Ready to solve these challenges?</h3>
                <p>Get your free process audit and see how we can help</p>
                <Link to="/book-an-appointment">Get Your Free Process Audit</Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TESTIMONIAL SPOTLIGHT */}
        <section className={styles.testimonials}>
          <div className={styles.testimonialsInner}>
            <Reveal variant="left">
              <div className={styles.testimonialPhoto}>
                <img
                  src={useBaseUrl('/img/uploads/2026/03/Team-Onboarding-Clinic-Photo.webp')}
                  alt="Qiaben client testimonial"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className={styles.testimonialsTitle}>What They Say About Us</h2>
                <p className={styles.testimonialBody}>&ldquo;{testimonial.body}&rdquo;</p>
                <p className={styles.testimonialAuthor}>{testimonial.author}</p>
                <p className={styles.testimonialRole}>{testimonial.role}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* RESULTS */}
        <section className={styles.results}>
          <div className={styles.resultsInner}>
            <Reveal>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Proven Results You Can Measure
              </h2>
            </Reveal>
            <div className={styles.resultsGrid}>
              {results.map((r, i) => (
                <Reveal key={r.label} delay={i * 80}>
                  <div className={styles.resultCard}>
                    <p className={styles.resultValue}>{r.value}</p>
                    <p className={styles.resultLabel}>{r.label}</p>
                    <p className={styles.resultDesc}>{r.desc}</p>
                    <Link to="/book-an-appointment" className={styles.resultCta}>
                      {r.cta} <span aria-hidden="true">›</span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ADVANTAGE */}
        <section className={styles.advantage}>
          <div className={styles.advantageInner}>
            <Reveal>
              <h2 className={styles.sectionTitle}>The Qiaben Advantage</h2>
            </Reveal>
            <Reveal delay={60}>
              <div className={styles.advantageGrid}>
                {advantages.map((a) => (
                  <div key={a.label} className={styles.advantageItem}>
                    <div className={styles.advantageIcon} aria-hidden="true">{a.icon}</div>
                    <p className={styles.advantageLabel}>{a.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CLOSING CTA + BOOKING FORM */}
        <Reveal>
          <section className={styles.closing}>
            <h2 className={styles.closingTitle}>
              Let&apos;s Build the Future of Healthcare Together
            </h2>
            <p className={styles.closingDesc}>
              Ready to Streamline and Scale Your Healthcare Operations? Let
              Qiaben handle your billing, technology, and EHR/EMR setup —
              while you focus on delivering better care.
            </p>
            <BookingForm title="Book an Appointment" />
          </section>
        </Reveal>
      </div>
    </Layout>
  );
}
