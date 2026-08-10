import { useEffect } from 'react';
import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import styles from './book-an-appointment.module.css';

const CALENDLY_URL = 'https://calendly.com/qiaben/15-minutes-meeting';

export default function BookAnAppointment(): ReactNode {
  useEffect(() => {
    if (document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Layout
      title="Book an Appointment — Qiaben Health"
      description="Book a 15-minute meeting with Qiaben's practice management specialists.">
      <div className={styles.page}>
        <section className={styles.titleBar}>
          <h1>
            Book An Appointment
            <br />
            for best Practice
          </h1>
        </section>
        <section className={styles.widgetSection}>
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: '320px', height: '700px' }}
          />
        </section>
      </div>
    </Layout>
  );
}
