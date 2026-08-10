import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import componentStyles from '@site/src/components/ServicePage/styles.module.css';
import styles from './contact.module.css';

export default function Contact(): ReactNode {
  return (
    <Layout
      title="Contact — Qiaben Health"
      description="Contact Qiaben Health. Free consultation, email, phone, and address.">
      <div className={componentStyles.page}>
        <section className={componentStyles.hero}>
          <span className={componentStyles.eyebrow}>Contact</span>
          <h1 className={componentStyles.title}>Let&apos;s talk about your practice.</h1>
          <p className={componentStyles.subtitle}>
            The fastest way is a 15-minute call. Pick a slot that works for
            you, or reach us by email or phone.
          </p>
          <div className={componentStyles.ctaRow}>
            <Link className={componentStyles.ctaPrimary} to="/book-an-appointment">
              Book a free consultation
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <div style={{ maxWidth: 720, margin: '0 auto 48px' }}>
            <p style={{ textAlign: 'center', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--qb-primary-dark)', margin: '0 0 8px' }}>
              Send us a message
            </p>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
              Tell us about your practice
            </h2>
            <div className="klaviyo-form-RWF3QX"></div>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardLabel}>Email</div>
              <a className={styles.cardValue} href="mailto:info@qiaben.com">
                info@qiaben.com
              </a>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>Phone</div>
              <a className={styles.cardValue} href="tel:+18448742236">
                (844) 874-2236
              </a>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>Hours</div>
              <div className={styles.cardValue}>
                Mon–Sat · 8:00 AM – 5:00 PM
                <br />
                Sunday closed
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>Headquarters</div>
              <div className={styles.cardValue}>
                Qiaben Inc.
                <br />
                1309 Coffeen Avenue, STE 1200
                <br />
                Sheridan, WY 82801
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
