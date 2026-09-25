import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Reveal from '@site/src/components/Reveal';
import styles from './styles.module.css';

interface PricingCtaProps {
  service: string;
}

const highlights = [
  'Plans shaped around your practice size and specialty',
  'Free consultation, no obligation',
  'Straightforward proposal built for your workflow',
];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function PricingCta({ service }: PricingCtaProps): ReactNode {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.banner}>
            <div className={styles.copy}>
              <p className={styles.eyebrow}>Pricing</p>
              <h2 className={styles.title}>Pricing Built Around Your Practice</h2>
              <p className={styles.lead}>
                Every practice bills differently. Tell us about your volume, specialty, and goals, and our team will put
                together a {service} proposal that fits, with no one-size-fits-all packages.
              </p>
              <ul className={styles.highlights}>
                {highlights.map((h) => (
                  <li key={h}>
                    <span className={styles.check}>
                      <CheckIcon />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.actions}>
              <p className={styles.actionsLabel}>Get your custom quote</p>
              <Link to="/book-an-appointment" className={styles.primaryCta}>
                Contact Us for Pricing
              </Link>
              <a href="tel:+18448742236" className={styles.secondaryCta}>
                <PhoneIcon />
                Call (844) 874-2236
              </a>
              <a href="mailto:info@qiaben.com" className={styles.emailLink}>
                info@qiaben.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
