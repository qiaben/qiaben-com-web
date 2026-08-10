import { useState } from 'react';
import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CountryCodeSelect from '@site/src/components/CountryCodeSelect';
import { countries } from '@site/src/components/CountryCodeSelect/countries';
import styles from './styles.module.css';

export default function BookingForm({ title = 'Book an Appointment' }: { title?: string }): ReactNode {
  const [country, setCountry] = useState(countries[0]);
  const history = useHistory();
  const appointmentUrl = useBaseUrl('/book-an-appointment');

  return (
    <form
      className={styles.bookingCard}
      onSubmit={(e) => {
        e.preventDefault();
        history.push(appointmentUrl);
      }}>
      <h2 className={styles.bookingTitle}>{title}</h2>
      <div className={styles.bookingRow}>
        <input type="text" placeholder="First Name" aria-label="First Name" />
        <input type="text" placeholder="Last Name" aria-label="Last Name" />
      </div>
      <input type="email" placeholder="Enter your email address" aria-label="Email address" />
      <CountryCodeSelect value={country} onChange={setCountry}>
        <input type="tel" placeholder="Phone Number" aria-label="Phone Number" />
      </CountryCodeSelect>
      <label className={styles.bookingConsent}>
        <input type="checkbox" />
        I agree to get SMS from Qiaben for reminders and offers. Msg &amp; data rates may apply. Reply STOP to unsubscribe.
      </label>
      <p className={styles.bookingFinePrint}>
        By submitting, you agree to get marketing texts &amp; calls from Qiaben HCS. May use autodialer.
        Consent isn&apos;t required to buy. Msg &amp; data rates may apply. Frequency varies. Reply STOP to opt
        out. See <Link to="/privacy-policy">Privacy Policy</Link> &amp; Terms.
      </p>
      <button type="submit" className={styles.bookingSubmit}>
        Select Appointment Date &amp; Time
      </button>
    </form>
  );
}
