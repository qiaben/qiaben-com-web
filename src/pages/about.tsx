import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import componentStyles from '@site/src/components/ServicePage/styles.module.css';

const CALENDLY = 'https://calendly.com/qiaben/15-minutes-meeting';

export default function About(): ReactNode {
  return (
    <Layout
      title="About — Qiaben Health"
      description="Qiaben Health helps medical and dental practices run cleaner billing and stronger revenue cycles. Based in Sheridan, WY, working with practices across the US.">
      <div className={componentStyles.page}>
        <section className={componentStyles.hero}>
          <span className={componentStyles.eyebrow}>About</span>
          <h1 className={componentStyles.title}>
            We run revenue cycle as if it were our own practice.
          </h1>
          <p className={componentStyles.subtitle}>
            Qiaben Health is a healthcare RCM and practice-services company.
            We help medical and dental practices, EMS agencies, and
            specialists across the US get cleaner billing, faster
            collections, and the time back to focus on patients.
          </p>
        </section>

        <section className={componentStyles.overview}>
          <div className={componentStyles.overviewInner}>
            <p className={componentStyles.overviewLead}>
              We started Qiaben because the gap between what a healthcare
              practice could collect and what it actually collects has very
              little to do with patient demand. It has to do with details:
              eligibility verified before the visit, codes that match the
              chart, denials worked the same week they land, AR followed up
              on a schedule.
            </p>
            <p>
              We work as an extension of your practice — not a remote vendor
              you only hear from when something is on fire. Our teams are
              specialty-matched, our processes are documented, and our
              numbers are reported monthly so you can see the shape of the
              work.
            </p>
            <p>
              We&apos;re headquartered in Sheridan, Wyoming and serve
              practices across the United States, with deep specialization
              in medical billing, dental billing, ambulance/EMS billing,
              credentialing, and full practice management.
            </p>
          </div>
        </section>

        <section className={componentStyles.features}>
          <div className={componentStyles.featuresInner}>
            <p className={componentStyles.sectionEyebrow}>What we believe</p>
            <h2 className={componentStyles.sectionTitle}>
              Five things we won&apos;t compromise on.
            </h2>
            <div className={componentStyles.featureGrid}>
              <div className={componentStyles.featureCard}>
                <div className={componentStyles.featureIcon}>🎯</div>
                <h3 className={componentStyles.featureTitle}>Specialty match</h3>
                <p className={componentStyles.featureDesc}>
                  Coding and documentation knowledge varies by specialty. We
                  staff the team to match yours.
                </p>
              </div>
              <div className={componentStyles.featureCard}>
                <div className={componentStyles.featureIcon}>📊</div>
                <h3 className={componentStyles.featureTitle}>Numbers visible</h3>
                <p className={componentStyles.featureDesc}>
                  Monthly reports you can act on. Denials by reason, AR by
                  bucket, payer performance.
                </p>
              </div>
              <div className={componentStyles.featureCard}>
                <div className={componentStyles.featureIcon}>🔐</div>
                <h3 className={componentStyles.featureTitle}>HIPAA-grade</h3>
                <p className={componentStyles.featureDesc}>
                  Encrypted infrastructure, BAAs, audit logs. Compliance
                  built in, not bolted on.
                </p>
              </div>
              <div className={componentStyles.featureCard}>
                <div className={componentStyles.featureIcon}>📞</div>
                <h3 className={componentStyles.featureTitle}>Reachable team</h3>
                <p className={componentStyles.featureDesc}>
                  A real account lead, real phone numbers, real response times.
                  Not a ticket queue.
                </p>
              </div>
              <div className={componentStyles.featureCard}>
                <div className={componentStyles.featureIcon}>🤝</div>
                <h3 className={componentStyles.featureTitle}>Long relationships</h3>
                <p className={componentStyles.featureDesc}>
                  We&apos;re built to keep clients for years, not quarters.
                </p>
              </div>
              <div className={componentStyles.featureCard}>
                <div className={componentStyles.featureIcon}>📝</div>
                <h3 className={componentStyles.featureTitle}>Plain language</h3>
                <p className={componentStyles.featureDesc}>
                  No jargon for the sake of it. Our reports are written so
                  you can read them in five minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={componentStyles.ctaBand}>
          <h2 className={componentStyles.ctaBandTitle}>
            Want to see what cleaner billing looks like for your practice?
          </h2>
          <p className={componentStyles.ctaBandDesc}>
            Book a free 15-minute consultation. We&apos;ll look at your
            current numbers and tell you where the leaks are.
          </p>
          <div className={`${componentStyles.ctaRow} ${componentStyles.ctaBandRow}`}>
            <a className={componentStyles.ctaPrimary} href={CALENDLY} target="_blank" rel="noopener noreferrer">
              Free consultation
            </a>
            <a className={componentStyles.ctaSecondary} href="/contact">
              Contact us
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
