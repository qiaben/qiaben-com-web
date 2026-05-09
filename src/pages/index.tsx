import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Reveal from '@site/src/components/Reveal';
import styles from './index.module.css';

const CALENDLY = 'https://calendly.com/qiaben/15-minutes-meeting';

const services = [
  {
    icon: '/img/uploads/2025/10/medical-expense.png',
    title: 'Medical & Dental Billing',
    desc: 'AI-powered revenue cycle management with real-time claim tracking and denial prevention.',
    href: '/medical-billing-service',
  },
  {
    icon: '/img/uploads/2025/10/medical-assistance.png',
    title: 'Credentialing & Enrollments',
    desc: 'Streamlined provider credentialing and insurance enrollment processes.',
    href: '/physician-credentialing',
  },
  {
    icon: '/img/uploads/2025/10/software.png',
    title: 'EHR/EMR Integration',
    desc: 'Seamless implementation and support for electronic health record systems.',
    href: '/ehr-emr',
  },
  {
    icon: '/img/uploads/2025/10/automation.png',
    title: 'Healthcare IT & Automation',
    desc: 'Advanced technology solutions and workflow automation for healthcare operations.',
    href: '/professional-practice-management-services',
  },
  {
    icon: '/img/uploads/2025/10/marketing.png',
    title: 'Digital Marketing',
    desc: 'Specialized marketing strategies to grow your healthcare practice online.',
    href: '/professional-practice-management-services',
  },
  {
    icon: '/img/uploads/2025/10/nurse.png',
    title: 'Telehealth Solutions',
    desc: 'Virtual practice platforms and remote patient care technologies.',
    href: '/professional-practice-management-services',
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
  { icon: '🩺', name: 'Internal Medicine' },
  { icon: '⚡', name: 'Neurology' },
  { icon: '🚹', name: 'Urology' },
  { icon: '👁️', name: 'Ophthalmology' },
];

const challenges = [
  ['Billing delays & denials', 'AI-assisted claim review & real-time tracking'],
  ['Revenue leakage', 'Analytics-driven RCM improvements'],
  ['Fragmented EHR/EMR systems', 'Seamless integration & staff training'],
  ['Lack of patient follow-up', 'Integrated CRM + patient engagement tools'],
  ['Compliance & documentation issues', 'HIPAA-ready, secure digital processes'],
];

const testimonials = [
  {
    body: 'I signed up with Qiaben a little over a month ago and all I have is to say good things about them. Communication via email and texts is efficient and prompt. Their team started full speed from day 1 — claims and payments handled by knowledgeable staff. They follow up on unpaid claims, gather info, resubmit, and do efficient insurance verifications. Very professional and knowledgeable.',
    author: 'Divya Arora',
    role: 'Dentist',
  },
  {
    body: 'I signed up with Qiaben about 4 to 5 months ago. They have been great to work with. Siva and his team communicate well via text or email and get all work and claims paid efficiently. With denials, they’re very good about gathering information and resubmitting. Much better than having someone physically in the office. Highly recommend.',
    author: 'Jay Doshi',
    role: 'Doctor',
  },
  {
    body: 'Siva was amazing! He resolved my problem in 30 minutes, on a Sunday. Since I met him, I sleep better because his IT support is out of this world.',
    author: 'Marko Zivkovic',
    role: 'General Practitioner',
  },
];

const results = [
  {
    value: '42%',
    label: 'Claim denial reduction',
    desc: 'Mid-size hospital, Texas — integrated billing + EHR system, reducing claim denials by 42%.',
  },
  {
    value: '30%',
    label: 'Cash flow improvement',
    desc: 'Dental chain, Florida — improved cash flow by 30% and automated record updates.',
  },
  {
    value: '3x',
    label: 'Patient growth',
    desc: 'Multi-specialty clinic, India — implemented EHR + SEO strategy, 3x patient growth.',
  },
];

const advantages = [
  { icon: '🔌', label: 'Seamless EHR/EMR Integration' },
  { icon: '🤖', label: 'AI-powered billing intelligence' },
  { icon: '🔐', label: 'HIPAA-compliant infrastructure' },
  { icon: '☎️', label: '24/7 dedicated support' },
];

function ServiceCard({ icon, title, desc, href }: { icon: string; title: string; desc: string; href: string }): ReactNode {
  return (
    <a href={href} className={styles.serviceCard}>
      <div className={styles.serviceIcon}>
        <img src={useBaseUrl(icon)} alt="" />
      </div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDesc}>{desc}</p>
    </a>
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
          <section className={styles.hero}>
            <div className={styles.heroInner}>
              <div>
                <span className={styles.heroEyebrow}>Healthcare RCM · Medical & Dental Billing</span>
                <h1 className={styles.heroTitle}>
                  Streamlined billing.{' '}
                  <span className={styles.heroAccent}>Stronger revenues.</span>{' '}
                  Happier practices.
                </h1>
                <p className={styles.heroSubtitle}>
                  Qiaben’s expert medical and dental billing solutions empower
                  clinics to simplify workflows, boost claim accuracy, and get
                  paid faster — while staying fully compliant.
                </p>
                <div className={styles.heroCtas}>
                  <a className={styles.ctaPrimary} href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Get free consultation
                  </a>
                  <a className={styles.ctaSecondary} href="/professional-practice-management-services">
                    Explore our solutions
                  </a>
                </div>
              </div>
              <div className={styles.heroVisual}>
                <img
                  src={useBaseUrl('/img/uploads/2025/10/download-62-768x768.webp')}
                  alt="Visual of billing cycle"
                  width={768}
                  height={768}
                  loading="eager"
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* STATS */}
        <Reveal>
          <section className={styles.stats}>
            <div className={styles.statsGrid}>
              <div>
                <p className={styles.statValue}>10+</p>
                <p className={styles.statLabel}>Years of healthcare industry experience</p>
              </div>
              <div>
                <p className={styles.statValue}>500+</p>
                <p className={styles.statLabel}>Healthcare providers served</p>
              </div>
              <div>
                <p className={styles.statValue}>24/7</p>
                <p className={styles.statLabel}>Dedicated support</p>
              </div>
              <div>
                <p className={styles.statValue}>50+</p>
                <p className={styles.statLabel}>Medical specialties covered</p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* CERTS */}
        <Reveal>
          <section className={styles.certs}>
            <p className={styles.certEyebrow}>Certified by</p>
            <div className={styles.certRow}>
              <img src={useBaseUrl('/img/uploads/2025/10/hipaa-compliance-1-300x120.jpg')} alt="HIPAA compliance" />
              <img src={useBaseUrl('/img/uploads/2025/10/openemr-logo-300x83-1.jpeg')} alt="OpenEMR certified" />
            </div>
          </section>
        </Reveal>

        {/* SERVICES */}
        <section className={styles.services}>
          <div className={styles.servicesInner}>
            <Reveal>
              <div className={styles.servicesHeader}>
                <p className={styles.sectionEyebrow}>What we offer</p>
                <h2 className={styles.sectionTitle}>Complete solutions for modern healthcare</h2>
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
              <a href="/professional-practice-management-services">See all services →</a>
            </div>
          </div>
        </section>

        {/* SPECIALTIES */}
        <section className={styles.specialties}>
          <div className={styles.specialtiesInner}>
            <Reveal>
              <p className={styles.sectionEyebrow}>Specialties</p>
              <h2 className={styles.sectionTitle}>
                Expertise across 50+ medical disciplines
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
                And many more — <a href="/specialties">find your specialty →</a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className={styles.challenges}>
          <div className={styles.challengesInner}>
            <Reveal>
              <div className={styles.challengesHead}>
                <p className={styles.sectionEyebrow}>Why Qiaben</p>
                <h2 className={styles.sectionTitle}>Your competitive edge in healthcare efficiency</h2>
              </div>
            </Reveal>
            {challenges.map(([problem, solution], i) => (
              <Reveal key={problem} delay={i * 40}>
                <div className={styles.challengeRow}>
                  <div className={styles.challengeProblem}>
                    <strong>Your challenge</strong>
                    {problem}
                  </div>
                  <div className={styles.challengeSolution}>
                    <strong>Qiaben solution</strong>
                    {solution}
                  </div>
                </div>
              </Reveal>
            ))}
            <div className={styles.challengeCta}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                Get your free process audit
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className={styles.testimonials}>
          <div className={styles.testimonialsInner}>
            <Reveal>
              <div className={styles.testimonialsHead}>
                <p className={styles.sectionEyebrow}>Testimonials</p>
                <h2 className={styles.sectionTitle}>What they say about us</h2>
              </div>
            </Reveal>
            <div className={styles.testimonialGrid}>
              {testimonials.map((t, i) => (
                <Reveal key={t.author} delay={i * 80}>
                  <article className={styles.testimonial}>
                    <div className={styles.stars}>★★★★★</div>
                    <p className={styles.testimonialBody}>{t.body}</p>
                    <p className={styles.testimonialAuthor}>{t.author}</p>
                    <p className={styles.testimonialRole}>{t.role}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className={styles.results}>
          <div className={styles.resultsInner}>
            <Reveal>
              <div className={styles.resultsHead}>
                <p className={styles.sectionEyebrow}>Results</p>
                <h2 className={styles.sectionTitle}>Proven results you can measure</h2>
              </div>
            </Reveal>
            <div className={styles.resultsGrid}>
              {results.map((r, i) => (
                <Reveal key={r.label} delay={i * 80}>
                  <div className={styles.resultCard}>
                    <p className={styles.resultValue}>{r.value}</p>
                    <p className={styles.resultLabel}>{r.label}</p>
                    <p className={styles.resultDesc}>{r.desc}</p>
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
              <p className={styles.sectionEyebrow}>The Qiaben advantage</p>
              <h2 className={styles.sectionTitle}>Built for the way modern practices run</h2>
            </Reveal>
            <Reveal delay={60}>
              <div className={styles.advantageGrid}>
                {advantages.map((a) => (
                  <div key={a.label} className={styles.advantageItem}>
                    <div className={styles.advantageIcon}>{a.icon}</div>
                    <p className={styles.advantageLabel}>{a.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CLOSING CTA */}
        <Reveal>
          <section className={styles.closing}>
            <h2 className={styles.closingTitle}>
              Let&apos;s build the future of healthcare together
            </h2>
            <p className={styles.closingDesc}>
              Ready to streamline and scale your healthcare operations? Let
              Qiaben handle your billing, technology, and EHR/EMR setup —
              while you focus on delivering better care.
            </p>
            <div className={styles.closingCtas}>
              <a className={styles.ctaPrimary} href={CALENDLY} target="_blank" rel="noopener noreferrer">
                Free consultation
              </a>
              <a className={styles.ctaSecondary} href="/contact">
                Contact us
              </a>
            </div>
          </section>
        </Reveal>
      </div>
    </Layout>
  );
}
