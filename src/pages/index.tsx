import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const CALENDLY = 'https://calendly.com/qiaben/15-minutes-meeting';

const status: Array<{ label: string; desc: string; state: 'done' | 'next' | 'pending' }> = [
  { label: 'Repo + theme', desc: 'Docusaurus 3.10.1, qiaben palette, GH Pages workflow.', state: 'done' },
  { label: 'Homepage placeholder', desc: 'You are looking at it.', state: 'done' },
  { label: 'Service pages', desc: '12 services stubbed: medical / dental billing, RCM, scribe, ambulance, credentialing, coding, IV, patient billing, well care, audit shield.', state: 'done' },
  { label: 'Specialties + EHR/EMR', desc: '50-specialty grid + EHR/EMR overview live.', state: 'done' },
  { label: 'About / Contact / Privacy', desc: 'Corporate pages stubbed; contact form via Calendly + email.', state: 'done' },
  { label: 'Blog import', desc: '178 posts auto-converted from WP export to /blog/<slug>; slugs match WP exactly.', state: 'done' },
  { label: 'Cloudflare redirect map', desc: '178-row CSV ready (cloudflare-redirects.csv) — WP root URLs → /blog/<slug>.', state: 'done' },
  { label: 'Media migration', desc: '236 + 35 referenced images extracted from 1.7 GB GoDaddy uploads (27 MB on disk); paths rewritten in posts and pages.', state: 'done' },
  { label: 'WP page content into service pages', desc: '15 WP pages converted to MDX (hero + body + CTA): medical/dental billing, RCM, scribe, ambulance, credentialing, coding, IV, patient billing, well care, audit shield, specialties, EHR/EMR, about.', state: 'done' },
  { label: 'Tracking', desc: 'GTM × 2, GA4 × 3 (incl. server-side), Google Ads, FB Pixel — mirroring live qiaben.com stack.', state: 'done' },
  { label: 'Cutover', desc: 'CNAME flip + apply Cloudflare bulk redirects (cloudflare-redirects.csv) + retire WP.', state: 'next' },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Qiaben Health — Streamlined billing. Stronger revenues. Happier practices."
      description="Qiaben Health: medical and dental billing, RCM, EHR/EMR integration, credentialing, and practice management for healthcare providers across the US.">
      <div className={styles.page}>
        <div className={styles.banner}>
          <strong>Staging preview.</strong> The production site lives at{' '}
          <a href="https://qiaben.com" target="_blank" rel="noopener noreferrer">
            qiaben.com
          </a>
          . Migration is in progress.
        </div>

        <section className={styles.hero}>
          <span className={styles.heroEyebrow}>Healthcare RCM · Medical & Dental Billing</span>
          <h1 className={styles.heroTitle}>
            Streamlined billing.{' '}
            <span className={styles.heroAccent}>Stronger revenues.</span>{' '}
            Happier practices.
          </h1>
          <p className={styles.heroSubtitle}>
            Qiaben Health helps medical and dental practices across the US
            run cleaner billing, get paid faster, and spend more time with
            patients — through a team that handles your end-to-end revenue
            cycle.
          </p>
          <div className={styles.ctaRow}>
            <a
              className={styles.ctaPrimary}
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer">
              Free consultation
            </a>
            <a className={styles.ctaSecondary} href="#services">
              Explore solutions
            </a>
          </div>
        </section>

        <section className={styles.statusSection} id="services">
          <div className={styles.statusInner}>
            <p className={styles.statusEyebrow}>Migration status</p>
            <h2 className={styles.statusTitle}>What's on this staging site</h2>
            <div className={styles.statusGrid}>
              {status.map((s) => (
                <div key={s.label} className={styles.statusItem}>
                  <span
                    className={`${styles.statusDot} ${
                      s.state === 'done'
                        ? styles.dotDone
                        : s.state === 'next'
                        ? styles.dotNext
                        : styles.dotPending
                    }`}
                  />
                  <div>
                    <span className={styles.statusLabel}>{s.label}</span>
                    <p className={styles.statusDesc}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
