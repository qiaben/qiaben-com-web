import type { ReactNode } from 'react';
import styles from './styles.module.css';

const CALENDLY = 'https://calendly.com/qiaben/15-minutes-meeting';

export type MarketingCTAProps = {
  title?: string;
  desc?: string;
};

export default function MarketingCTA({
  title = 'Ready to clean up your revenue cycle?',
  desc = 'Book a free 15-minute consultation. We’ll look at your current numbers and tell you, plainly, where the leaks are.',
}: MarketingCTAProps): ReactNode {
  return (
    <section className={styles.band}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.row}>
        <a className={styles.ctaPrimary} href={CALENDLY} target="_blank" rel="noopener noreferrer">
          Free consultation
        </a>
        <a className={styles.ctaSecondary} href="/contact">
          Contact us
        </a>
      </div>
    </section>
  );
}
