import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './legal.module.css';

export default function PrivacyPolicy(): ReactNode {
  return (
    <Layout
      title="Privacy Policy — Qiaben Health"
      description="Qiaben Health Privacy Policy. How we collect, use, and protect personal and health information.">
      <main className={styles.container}>
        <article className={styles.legal}>
          <Heading as="h1">Privacy Policy</Heading>
          <p className={styles.meta}>
            <strong>Effective Date:</strong> May 9, 2026 &nbsp;|&nbsp;{' '}
            <strong>Last Updated:</strong> May 9, 2026
          </p>

          <p>
            Qiaben Inc. (&ldquo;Qiaben,&rdquo; &ldquo;Qiaben Health,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            respects the privacy of visitors to{' '}
            <a href="https://qiaben.com">qiaben.com</a> and of our
            customers. This policy explains how we collect, use, disclose,
            and safeguard information when you visit our site or engage our
            services.
          </p>

          <Heading as="h2">1. Scope</Heading>
          <p>
            This policy covers our marketing website and the services Qiaben
            provides directly. PHI processed on behalf of a covered-entity
            customer is governed by the applicable Business Associate
            Agreement (BAA) and HIPAA, in addition to this policy.
          </p>

          <Heading as="h2">2. Information We Collect</Heading>
          <ul>
            <li>
              <strong>Contact information you provide:</strong> name, email,
              phone, practice name, role, and any details you share when you
              request a consultation, contact us, or sign up for services.
            </li>
            <li>
              <strong>Service data:</strong> claims, charges, ePCRs,
              payments, and related operational data submitted to us in the
              course of providing services.
            </li>
            <li>
              <strong>Website usage data:</strong> standard server logs (IP
              address, browser, pages visited, timestamps). We use cookies
              for site functionality and analytics; we do not sell your data
              for advertising.
            </li>
          </ul>

          <Heading as="h2">3. Protected Health Information (PHI)</Heading>
          <p>
            Qiaben acts as a business associate to its covered-entity
            customers. PHI is processed under the BAA between us and the
            customer, in accordance with HIPAA. PHI is not used for our
            own marketing.
          </p>

          <Heading as="h2">4. How We Use Information</Heading>
          <ul>
            <li>To provide, operate, secure, and improve our services.</li>
            <li>To respond to inquiries and provide customer support.</li>
            <li>To send service updates, billing notices, and security alerts.</li>
            <li>To produce aggregated, de-identified analytics.</li>
            <li>To comply with legal and regulatory obligations.</li>
          </ul>
          <p>
            We do <strong>not</strong> sell personal information.
          </p>

          <Heading as="h2">5. Sharing and Disclosure</Heading>
          <p>We share information only as necessary to operate the services:</p>
          <ul>
            <li>
              <strong>Subprocessors:</strong> cloud hosting, email and SMS
              providers, clearinghouses, payment processors, and analytics
              tools that operate under contractual data-protection
              obligations and BAAs where applicable.
            </li>
            <li>
              <strong>At your direction:</strong> integrations, exports,
              and disclosures you instruct.
            </li>
            <li>
              <strong>Legal requirements:</strong> when required by law,
              subpoena, or valid legal process.
            </li>
            <li>
              <strong>Business transfers:</strong> in connection with a
              merger, acquisition, or sale of assets, subject to
              confidentiality protections.
            </li>
          </ul>

          <Heading as="h2">6. Data Retention</Heading>
          <p>
            We retain personal information for as long as needed to provide
            services and comply with legal obligations. PHI retention
            follows the applicable BAA and the customer&apos;s record-
            retention requirements.
          </p>

          <Heading as="h2">7. Security</Heading>
          <p>
            We use industry-standard administrative, physical, and technical
            safeguards including TLS encryption in transit, encryption at
            rest, role-based access control, MFA for administrative access,
            audit logging, and regular access reviews.
          </p>

          <Heading as="h2">8. Your Rights</Heading>
          <p>
            Depending on where you live, you may have rights to access,
            correct, delete, or port your personal information. To make a
            request, contact{' '}
            <a href="mailto:info@qiaben.com">info@qiaben.com</a>. PHI rights
            are exercised through your practice; we act on PHI only at the
            direction of the covered entity.
          </p>

          <Heading as="h2">9. Changes to This Policy</Heading>
          <p>
            We may update this policy from time to time. The
            &ldquo;Last Updated&rdquo; date at the top reflects the most
            recent revision.
          </p>

          <Heading as="h2">10. Contact</Heading>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><strong>Qiaben Inc.</strong></li>
            <li>1309 Coffeen Avenue, STE 1200</li>
            <li>Sheridan, WY 82801</li>
            <li>
              Email: <a href="mailto:info@qiaben.com">info@qiaben.com</a>
            </li>
            <li>
              Phone: <a href="tel:+18448742236">(844) 874-2236</a>
            </li>
          </ul>
        </article>
      </main>
    </Layout>
  );
}
