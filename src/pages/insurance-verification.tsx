import type { ReactNode } from 'react';
import ServicePage from '@site/src/components/ServicePage';

export default function InsuranceVerification(): ReactNode {
  return (
    <ServicePage
      eyebrow="Insurance verification"
      title="Eligibility and benefits, before the patient walks in."
      subtitle="Real-time and batch verification, frequency limits, downgrades, prior authorizations — done before the appointment so the front desk isn’t scrambling at check-in."
      lead="The number-one cause of denied claims is bad eligibility data. Verifying every patient before the visit is unsexy work — and it pays for itself many times over."
      body={[
        'Qiaben runs verifications 24-72 hours before the appointment. We pull eligibility, benefits, deductibles, frequencies, and downgrade rules. We push prior auth requests early so they’re not blocking on visit day.',
        'For practices with high volume, we batch verify against tomorrow’s schedule overnight. For specialty practices, we do detailed benefit deep-dives so the front desk can quote with confidence.',
      ]}
      featuresTitle="What verification covers"
      features={[
        { icon: '✅', title: 'Eligibility check', desc: 'Active coverage confirmed before the visit, every time.' },
        { icon: '💰', title: 'Benefits breakdown', desc: 'Deductibles, copays, coinsurance, out-of-pocket max — surfaced to the front desk.' },
        { icon: '🔁', title: 'Frequency & downgrades', desc: 'Limits, last-paid dates, and downgrade rules captured (especially for dental).' },
        { icon: '📑', title: 'Prior authorizations', desc: 'Auth required? Filed before the visit — not after.' },
        { icon: '📅', title: 'Batch processing', desc: 'Tomorrow’s schedule verified overnight; exceptions flagged before opening.' },
        { icon: '📞', title: 'Same-day patients', desc: 'Real-time verification for walk-ins and add-ons during the day.' },
      ]}
      stubBanner
    />
  );
}
