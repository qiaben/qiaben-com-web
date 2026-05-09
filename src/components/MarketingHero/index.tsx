import type { ReactNode } from 'react';
import styles from './styles.module.css';

const CALENDLY = 'https://calendly.com/qiaben/15-minutes-meeting';

export type MarketingHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Hide the dual CTA buttons in the hero (rare). */
  noCta?: boolean;
};

export default function MarketingHero({
  eyebrow,
  title,
  subtitle,
  noCta,
}: MarketingHeroProps): ReactNode {
  return (
    <section className={styles.hero}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h1 className={styles.title}>{title}</h1>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      {!noCta && (
        <div className={styles.ctaRow}>
          <a className={styles.ctaPrimary} href={CALENDLY} target="_blank" rel="noopener noreferrer">
            Free consultation
          </a>
          <a className={styles.ctaSecondary} href="/contact">
            Contact us
          </a>
        </div>
      )}
    </section>
  );
}
