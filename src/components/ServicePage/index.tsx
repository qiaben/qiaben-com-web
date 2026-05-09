import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

const CALENDLY = 'https://calendly.com/qiaben/15-minutes-meeting';

export type Feature = {
  icon?: string;
  title: string;
  desc: string;
};

export type ServicePageProps = {
  /** Slug-style eyebrow above the title (e.g. "Medical billing"). */
  eyebrow: string;
  /** Hero title. */
  title: string;
  /** One-paragraph subtitle below the title. */
  subtitle: string;
  /** Lead paragraph at the top of the overview. */
  lead?: string;
  /** Body paragraphs in the overview section. */
  body?: string[];
  /** Section title above the feature grid. */
  featuresTitle?: string;
  /** Feature grid items. */
  features: Feature[];
  /** Title for the bottom dark CTA band. */
  ctaTitle?: string;
  /** Description for the bottom CTA band. */
  ctaDesc?: string;
  /** Page <title> meta. Defaults to `${title} — Qiaben Health`. */
  metaTitle?: string;
  /** Meta description. Defaults to subtitle. */
  metaDescription?: string;
  /** Optional banner above the hero (e.g. "Stub — content migration in progress"). */
  stubBanner?: boolean;
};

export default function ServicePage(props: ServicePageProps): ReactNode {
  const {
    eyebrow,
    title,
    subtitle,
    lead,
    body,
    featuresTitle = 'What you get',
    features,
    ctaTitle = 'Ready to clean up your revenue cycle?',
    ctaDesc = 'Book a free 15-minute consultation. We’ll look at your current numbers and tell you, plainly, where the leaks are.',
    metaTitle,
    metaDescription,
    stubBanner,
  } = props;

  return (
    <Layout
      title={metaTitle ?? `${title} — Qiaben Health`}
      description={metaDescription ?? subtitle}>
      <div className={styles.page}>
        <section className={styles.hero}>
          {stubBanner ? (
            <span className={styles.stubBadge}>Stub · content migration in progress</span>
          ) : null}
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.ctaRow}>
            <a className={styles.ctaPrimary} href={CALENDLY} target="_blank" rel="noopener noreferrer">
              Free consultation
            </a>
            <a className={styles.ctaSecondary} href="/contact">
              Contact us
            </a>
          </div>
        </section>

        {(lead || (body && body.length > 0)) && (
          <section className={styles.overview}>
            <div className={styles.overviewInner}>
              {lead ? <p className={styles.overviewLead}>{lead}</p> : null}
              {body?.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
        )}

        <section className={styles.features}>
          <div className={styles.featuresInner}>
            <p className={styles.sectionEyebrow}>{eyebrow}</p>
            <h2 className={styles.sectionTitle}>{featuresTitle}</h2>
            <div className={styles.featureGrid}>
              {features.map((f) => (
                <div key={f.title} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{f.icon ?? '✓'}</div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaBand}>
          <h2 className={styles.ctaBandTitle}>{ctaTitle}</h2>
          <p className={styles.ctaBandDesc}>{ctaDesc}</p>
          <div className={`${styles.ctaRow} ${styles.ctaBandRow}`}>
            <a className={styles.ctaPrimary} href={CALENDLY} target="_blank" rel="noopener noreferrer">
              Free consultation
            </a>
            <a className={styles.ctaSecondary} href="/contact">
              Contact us
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
