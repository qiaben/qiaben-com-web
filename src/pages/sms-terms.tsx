import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import { SMS_PROGRAM } from '@site/src/data/sms';
import styles from './legal.module.css';

export default function SmsTerms(): ReactNode {
  return (
    <Layout
      title="SMS Terms - Qiaben Health"
      description="Terms and conditions for the Qiaben LLC text message program.">
      <main className={styles.container}>
        <article className={styles.legal}>
          <Heading as="h1">SMS Terms &amp; Conditions</Heading>
          <p className={styles.meta}>
            <strong>Last Updated:</strong> October 8, 2026
          </p>

          <Heading as="h2">1. Program</Heading>
          <p>
            <strong>{SMS_PROGRAM}</strong> is a text message program operated by Qiaben LLC for clients
            and prospective clients of our medical billing, coding, credentialing and practice
            management services. Messages cover consultation and appointment scheduling and reminders,
            replies to your inquiries, follow-ups to missed calls, billing and account notices, and
            customer support. We do not send marketing messages through this program.
          </p>

          <Heading as="h2">2. How you opt in</Heading>
          <p>
            You opt in by entering your mobile number and checking the unchecked consent box on our{' '}
            <Link to="/sms-consent">SMS consent page</Link> or on the consultation form on our site.
            Consent is not a condition of any purchase or service.
          </p>

          <Heading as="h2">3. Message frequency</Heading>
          <p>Message frequency varies, typically 1–8 messages per month.</p>

          <Heading as="h2">4. Cost</Heading>
          <p>Msg &amp; data rates may apply. Check your mobile plan for details.</p>

          <Heading as="h2">5. Opt out</Heading>
          <p>
            Reply <strong>STOP</strong> to any message to cancel. You will receive one confirmation
            message and no further messages unless you opt in again. You may also opt out by emailing{' '}
            <a href="mailto:info@qiaben.com">info@qiaben.com</a>.
          </p>

          <Heading as="h2">6. Help</Heading>
          <p>
            Reply <strong>HELP</strong> for help, call <a href="tel:+18448742236">(844) 874-2236</a>{' '}
            or email <a href="mailto:info@qiaben.com">info@qiaben.com</a>.
          </p>

          <Heading as="h2">7. Carriers</Heading>
          <p>Carriers are not liable for delayed or undelivered messages.</p>

          <Heading as="h2">8. Privacy</Heading>
          <p>
            Mobile numbers and SMS consent/opt-in data are never sold, rented or shared with third
            parties or affiliates for marketing or promotional purposes. See the{' '}
            <Link to="/privacy-policy#sms">Text Messaging section of our Privacy Policy</Link>.
          </p>

          <Heading as="h2">9. Sample messages</Heading>
          <ul>
            <li>&ldquo;Qiaben: Hi Dr. Patel, this is a reminder of your billing consultation tomorrow at 10:00 AM MT. Reply C to confirm or call (844) 874-2236 to reschedule. Reply STOP to opt out.&rdquo;</li>
            <li>&ldquo;Qiaben: Sorry we missed your call. How can we help with your billing or credentialing question? Reply here or call (844) 874-2236. Reply STOP to opt out.&rdquo;</li>
            <li>&ldquo;Qiaben: Your September billing statement is ready in your client portal. Questions? Reply or call (844) 874-2236. Reply HELP for help, STOP to opt out.&rdquo;</li>
          </ul>

          <Heading as="h2">10. Contact</Heading>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><strong>Qiaben LLC</strong></li>
            <li>1309 Coffeen Avenue, STE 1200</li>
            <li>Sheridan, WY 82801</li>
            <li>Email: <a href="mailto:info@qiaben.com">info@qiaben.com</a></li>
            <li>Phone: <a href="tel:+18448742236">(844) 874-2236</a></li>
          </ul>
        </article>
      </main>
    </Layout>
  );
}
