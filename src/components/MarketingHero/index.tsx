import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

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
          <Link className={styles.ctaPrimary} to="/book-an-appointment">
            Free consultation
          </Link>
          <Link className={styles.ctaSecondary} to="/contact">
            Contact us
          </Link>
        </div>
      )}
    </section>
  );
}
