import { useState } from 'react';
import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CountryCodeSelect from '@site/src/components/CountryCodeSelect';
import { countries } from '@site/src/components/CountryCodeSelect/countries';
import { SMS_CONSENT_TEXT } from '@site/src/data/sms';
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
        <span>
          {SMS_CONSENT_TEXT} (Optional)
        </span>
      </label>
      <p className={styles.bookingFinePrint}>
        See our <Link to="/privacy-policy#sms">Privacy Policy</Link> and <Link to="/sms-terms">SMS Terms</Link>.
      </p>
      <button type="submit" className={styles.bookingSubmit}>
        Select Appointment Date &amp; Time
      </button>
    </form>
  );
}
