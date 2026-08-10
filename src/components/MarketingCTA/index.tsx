import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

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
        <Link className={styles.ctaPrimary} to="/book-an-appointment">
          Free consultation
        </Link>
        <Link className={styles.ctaSecondary} to="/contact">
          Contact us
        </Link>
      </div>
    </section>
  );
}
