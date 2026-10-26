import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './legal.module.css';

export default function TermsOfService(): ReactNode {
  return (
    <Layout
      title="Terms of Service - Qiaben Health"
      description="Qiaben Health Terms of Service. The terms that govern your use of our website and billing and revenue-cycle services.">
      <main className={styles.container}>
        <article className={styles.legal}>
          <Heading as="h1">Terms of Service</Heading>

          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of{' '}
            <a href="https://qiaben.com">qiaben.com</a> (the &ldquo;Site&rdquo;) and the medical billing, dental
            billing, practice management, credentialing, EHR/EMR, and related revenue-cycle services provided by
            Qiaben Inc. (&ldquo;Qiaben,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using the
            Site or engaging our services, you agree to these Terms. If you do not agree, please do not use the Site
            or our services.
          </p>

          <Heading as="h2">1. Our Services</Heading>
          <p>Qiaben provides the following services to healthcare practices (collectively, the &ldquo;Services&rdquo;):</p>
          <ul>
            <li>Medical billing</li>
            <li>Dental billing</li>
            <li>Professional practice management</li>
            <li>Medical scribe services</li>
            <li>Ambulance billing</li>
            <li>Physician credentialing</li>
            <li>Patient assessment</li>
            <li>Medical coding</li>
            <li>Insurance verification</li>
            <li>Patient billing</li>
            <li>Well care services</li>
            <li>MD Audit Shield</li>
            <li>
              EHR and EMR customizations, including implementation, configuration, and ongoing support for electronic
              health record and electronic medical record systems
            </li>
          </ul>
          <p>
            The specific scope of Services, deliverables, and fees for a given client are set out in a separate
            service agreement, order form, or statement of work (the &ldquo;Service Agreement&rdquo;). Where these
            Terms and a Service Agreement conflict, the Service Agreement controls for that engagement.
          </p>

          <Heading as="h2">2. Eligibility and Business Use</Heading>
          <p>
            Our services are intended for licensed healthcare practices, providers, and authorized administrative
            staff acting on their behalf. By engaging Qiaben, you represent that you have the authority to do so on
            behalf of your practice or organization.
          </p>

          <Heading as="h2">3. Fees and Payment</Heading>
          <ul>
            <li>Fees for services are set out in your Service Agreement, invoice, or order form.</li>
            <li>Invoices are due according to the payment terms stated on the invoice or Service Agreement.</li>
            <li>
              <strong>
                Payments made for services rendered are non-refundable.
              </strong>{' '}
              Once a payment has been processed for work performed, Qiaben does not issue refunds for that payment,
              except where required by applicable law or expressly agreed to in writing by Qiaben.
            </li>
            <li>
              Late payments may be subject to a service suspension or additional fees as described in your Service
              Agreement.
            </li>
          </ul>

          <Heading as="h2">4. Client Responsibilities</Heading>
          <p>
            To provide accurate and timely billing services, we rely on the information your practice provides.
            You agree to:
          </p>
          <ul>
            <li>Provide accurate, complete, and timely patient, insurance, coding, and documentation information.</li>
            <li>Promptly respond to requests for clarification, missing documentation, or payer follow-up.</li>
            <li>Maintain any licenses, credentials, and authorizations required to provide the underlying care.</li>
            <li>Review claims, statements, and reports we provide and notify us promptly of any discrepancies.</li>
          </ul>

          <Heading as="h2">5. No Guarantee of Reimbursement</Heading>
          <p>
            Qiaben works to submit accurate, well-documented claims and to follow up on denials and outstanding
            balances. However, claim acceptance, reimbursement amounts, and payment timing are ultimately determined
            by insurance payers, government programs, and applicable coverage rules, which are outside our control.
            Qiaben does not guarantee a specific reimbursement amount, approval rate, or payment timeline.
          </p>

          <Heading as="h2">6. Confidentiality and Protected Health Information</Heading>
          <p>
            Qiaben treats client and patient information as confidential. Protected Health Information (PHI)
            processed on behalf of a covered-entity client is handled under the applicable Business Associate
            Agreement (BAA) and HIPAA, and in accordance with our{' '}
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>

          <Heading as="h2">7. Intellectual Property</Heading>
          <p>
            The Site, including its text, graphics, logos, and software, is owned by Qiaben or its licensors and is
            protected by applicable intellectual property laws. You may not copy, modify, or distribute any part of
            the Site except as permitted for your own reference in evaluating our services.
          </p>

          <Heading as="h2">8. Service Availability</Heading>
          <p>
            We aim to keep the Site and our service systems available and operating properly, but we do not
            guarantee uninterrupted or error-free access. We may update, suspend, or modify the Site or our services
            from time to time, including for maintenance, security, or improvement purposes.
          </p>

          <Heading as="h2">9. Limitation of Liability</Heading>
          <p>
            To the maximum extent permitted by law, Qiaben will not be liable for indirect, incidental, special,
            consequential, or punitive damages, or for lost revenue or profits, arising from your use of the Site or
            our services. Our total liability for any claim relating to the services is limited to the fees paid by
            you to Qiaben for the specific service giving rise to the claim during the preceding three (3) months,
            unless otherwise stated in a Service Agreement.
          </p>

          <Heading as="h2">10. Termination</Heading>
          <p>
            Either party may terminate a Service Agreement in accordance with its terms. Fees for services already
            performed remain due and are non-refundable as described in Section 3. Sections of these Terms that by
            their nature should survive termination (including fees already incurred, confidentiality, intellectual
            property, and limitation of liability) will continue to apply after termination.
          </p>

          <Heading as="h2">11. Indemnification</Heading>
          <p>
            You agree to indemnify and hold Qiaben harmless from claims, damages, or expenses arising from your
            breach of these Terms, your violation of applicable law, or inaccurate information you provide to us for
            billing or coding purposes.
          </p>

          <Heading as="h2">12. Governing Law</Heading>
          <p>
            These Terms are governed by the laws of the State of Wyoming, without regard to its conflict-of-law
            principles, unless otherwise specified in a Service Agreement.
          </p>

          <Heading as="h2">13. Changes to These Terms</Heading>
          <p>
            We may update these Terms from time to time. The &ldquo;Last Updated&rdquo; date at the top reflects the
            most recent revision. Continued use of the Site or our services after an update constitutes acceptance
            of the revised Terms.
          </p>

          <Heading as="h2">14. Contact</Heading>
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
