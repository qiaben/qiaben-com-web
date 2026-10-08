import { useState, type FormEvent, type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import { SMS_CONSENT_TEXT, SMS_PROGRAM } from '@site/src/data/sms';
import legal from './legal.module.css';
import styles from './sms-consent.module.css';

export default function SmsConsent(): ReactNode {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const digits = phone.replace(/\D/g, '');
  const validPhone = digits.length === 10 || (digits.length === 11 && digits.startsWith('1'));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (validPhone && agreed) {
      setSubmitted(true);
    }
  }

  return (
    <Layout
      title="SMS Consent - Qiaben Health"
      description="Opt in to receive consultation reminders, inquiry replies, billing and account notices and support messages from Qiaben LLC by text message.">
      <main className={legal.container}>
        <article className={legal.legal}>
          <Heading as="h1">Qiaben Text Message Opt-In</Heading>
          <p>
            Qiaben LLC sends text messages to clients and prospective clients who opt in: consultation
            and appointment scheduling and reminders, replies to inquiries, follow-ups to missed calls,
            billing and account notices, and customer support. Messages are sent only to people who opt
            in on this form, on the consultation form on our site, or by texting or telling us
            directly that they agree to the consent wording below.
          </p>

          <div className={styles.card}>
            <Heading as="h2" className={styles.cardTitle}>Opt in to text messages</Heading>
            {submitted ? (
              <p className={styles.success} role="status">
                Thank you. You have agreed to receive text messages from Qiaben LLC. You can reply STOP
                at any time to opt out, or HELP for help.
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="sms-name" className={styles.label}>Name</label>
                <input
                  id="sms-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.input}
                />

                <label htmlFor="sms-phone" className={styles.label}>Mobile phone number</label>
                <input
                  id="sms-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(555) 555-5555"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={styles.input}
                  required
                />

                <label className={styles.checkboxRow}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className={styles.checkbox}
                  />
                  <span>
                    {SMS_CONSENT_TEXT}{' '}
                    <Link to="/privacy-policy#sms">Privacy Policy</Link> |{' '}
                    <Link to="/sms-terms">SMS Terms</Link>
                  </span>
                </label>

                <button type="submit" className={styles.submit} disabled={!validPhone || !agreed}>
                  Submit
                </button>
              </form>
            )}
          </div>

          <Heading as="h2">What to expect</Heading>
          <ul>
            <li><strong>Program:</strong> {SMS_PROGRAM}.</li>
            <li><strong>Messages:</strong> consultation and appointment scheduling and reminders, replies to your inquiry, missed-call follow-ups, billing and account notices, and customer support.</li>
            <li><strong>Frequency:</strong> message frequency varies, typically 1–8 messages per month.</li>
            <li><strong>Cost:</strong> Msg &amp; data rates may apply.</li>
            <li><strong>Help:</strong> reply HELP, call <a href="tel:+18448742236">(844) 874-2236</a> or email <a href="mailto:info@qiaben.com">info@qiaben.com</a>.</li>
            <li><strong>Opt out:</strong> reply STOP at any time. You will get one confirmation message and no further texts.</li>
          </ul>
          <p>
            Your mobile number and consent are never sold, rented or shared with third parties or
            affiliates for marketing or promotional purposes. See our{' '}
            <Link to="/privacy-policy#sms">Privacy Policy</Link> and <Link to="/sms-terms">SMS Terms</Link>.
          </p>
        </article>
      </main>
    </Layout>
  );
}
