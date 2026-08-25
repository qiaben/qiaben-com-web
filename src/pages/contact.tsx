import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import BookingForm from '@site/src/components/BookingForm';
import styles from './contact.module.css';

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.9.6a2 2 0 0 1 1.8 2.1z" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/qiaben.usa',
    path: 'M13.5 9H15V6.5h-1.6c-2 0-3.4 1.2-3.4 3.4V11H8v2.5h2v6.5h2.6V13.5H15l.4-2.5h-2.8V10c0-.6.4-1 1-1z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/qiaben/',
    path: 'M6.9 8.6H4V19h2.9V8.6zM5.5 4.5c-1 0-1.7.7-1.7 1.6 0 .9.7 1.6 1.6 1.6 1 0 1.7-.7 1.7-1.6 0-.9-.7-1.6-1.6-1.6zM20 12.7c0-2.5-1.3-3.7-3.1-3.7-1.4 0-2.1.8-2.4 1.4V8.6H11.6c0 .8 0 10.4 0 10.4h2.9v-5.8c0-.3 0-.6.1-.9.2-.6.8-1.2 1.7-1.2 1.2 0 1.7.9 1.7 2.3V19H20v-6.3z',
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
];

export default function Contact(): ReactNode {
  return (
    <Layout
      title="Contact — Qiaben Health"
      description="Contact Qiaben Health. Free consultation, email, phone, and address.">
      <div className={styles.page}>
        {/* TITLE BAR */}
        <section className={styles.titleBar}>
          <h1>Contact</h1>
          <p>Meet our Experts</p>
        </section>

        {/* GET IN TOUCH */}
        <section className={styles.section}>
          <div className={styles.grid}>
            <div>
              <p className={styles.eyebrow}>Get in touch</p>
              <h2 className={styles.sectionTitle}>Have a question?</h2>
              <p className={styles.lead}>
                We would like to hear from you. Feel free to reach out using the below details.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIconSoft}>
                    <EmailIcon />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Email us</p>
                    <a href="mailto:info@qiaben.com">info@qiaben.com</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIconSoft}>
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Call us</p>
                    <a href="tel:+18448742236">(844) 874-2236</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIconSolid}>
                    <PinIcon />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Location</p>
                    <p className={styles.infoValue}>1309 Coffeen Avenue STE 1200 Sheridan, WY 82801</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIconSolid}>
                    <PinIcon />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>India Head Office</p>
                    <p className={styles.infoValue}>1/39, Veerappanur, Coimbatore, Tamil Nadu - 641105</p>
                  </div>
                </div>
              </div>

              <div className={styles.socialRow}>
                <span>Follow our social media :</span>
                <div className={styles.socialIcons}>
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.formPanel}>
              <BookingForm title="Book an Appointment" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
