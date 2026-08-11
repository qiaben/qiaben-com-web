import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const quickLinks = [
  { label: 'About us', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Services', to: '/professional-practice-management-services' },
  { label: 'Blogs', to: '/blog' },
  { label: 'News & Article', to: '/blog' },
  { label: 'Privacy policy', to: '/privacy-policy' },
];

const serviceLinks = [
  { label: 'Medical Billing', to: '/medical-billing-service' },
  { label: 'Dental Billing', to: '/dental-billing-services' },
  { label: 'Medical Coding', to: '/medical-coding' },
  { label: 'Physician Credentialing', to: '/physician-credentialing' },
  { label: 'Qiaben Health EHR', to: '/qiaben-health-ehr' },
  { label: 'Patient Billing', to: '/patient-billing' },
  { label: 'Insurance Verification', to: '/insurance-verification' },
];

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/qiaben.usa',
    path: 'M13.5 9H15V6.5h-1.6c-2 0-3.4 1.2-3.4 3.4V11H8v2.5h2v6.5h2.6V13.5H15l.4-2.5h-2.8V10c0-.6.4-1 1-1z',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/Qiaben_usa',
    path: 'M20 6.4c-.6.3-1.2.5-1.9.6.7-.4 1.2-1.1 1.4-1.8-.6.4-1.4.7-2.1.8-.6-.7-1.5-1.1-2.4-1.1-1.8 0-3.3 1.5-3.3 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4v.1c0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.3-1.1.9-2.5 1.4-4 1.4-.3 0-.5 0-.8 0 1.4.9 3.1 1.5 4.9 1.5 5.9 0 9.1-4.9 9.1-9.1v-.4c.6-.4 1.2-1 1.6-1.7z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@Qiaben',
    path: 'M21 12c0-1.9-.2-3.1-.2-3.1s-.2-.9-.7-1.3c-.6-.6-1.3-.6-1.6-.7C16.3 6.7 12 6.7 12 6.7s-4.3 0-6.5.2c-.3 0-1 .1-1.6.7-.5.4-.7 1.3-.7 1.3S3 10.1 3 12s.2 3.1.2 3.1.2.9.7 1.3c.6.6 1.4.6 1.8.6 1.3.1 5.5.2 6.3.2s5-.1 6.5-.2c.3 0 1-.1 1.6-.7.5-.4.7-1.3.7-1.3s.2-1.2.2-3.1zM10 14.7V9.3l5 2.7-5 2.7z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/qiaben/',
    path: 'M6.9 8.6H4V19h2.9V8.6zM5.5 4.5c-1 0-1.7.7-1.7 1.6 0 .9.7 1.6 1.6 1.6 1 0 1.7-.7 1.7-1.6 0-.9-.7-1.6-1.6-1.6zM20 12.7c0-2.5-1.3-3.7-3.1-3.7-1.4 0-2.1.8-2.4 1.4V8.6H11.6c0 .8 0 10.4 0 10.4h2.9v-5.8c0-.3 0-.6.1-.9.2-.6.8-1.2 1.7-1.2 1.2 0 1.7.9 1.7 2.3V19H20v-6.3z',
  },
];

export default function Footer(): ReactNode {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src={useBaseUrl('img/logo-navbar.png')} alt="Qiaben Health" className={styles.logo} />
        </div>

        <div className={styles.grid}>
          <div className={styles.col}>
            <h3 className={styles.title}>Business Location</h3>
            <p className={styles.address}>
              1309 Coffeen Avenue, STE 1200
              <br />
              Sheridan, WY 82801
            </p>
            <p className={styles.contactLine}>
              <a href="mailto:info@qiaben.com">info@qiaben.com</a>
            </p>
            <p className={styles.contactLine}>
              <a href="tel:+18448742236">(844) 874-2236</a>
            </p>
            <h3 className={styles.title} style={{ marginTop: 22 }}>
              Working Hours
            </h3>
            <p className={styles.hours}>Mon–Sat 8:00 AM – 5:00 PM</p>
            <p className={styles.hours}>Sun Closed</p>
            <div className={styles.socials}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.title}>Quick Links</h3>
            <ul className={styles.list}>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.title}>Services</h3>
            <ul className={styles.list}>
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.title}>Newsletter</h3>
            <p className={styles.newsletterDesc}>
              Sign up our newsletter to get updates information, news, insights or promotions.
            </p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email" required aria-label="Email address" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          Copyright © {new Date().getFullYear()} Qiaben LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
