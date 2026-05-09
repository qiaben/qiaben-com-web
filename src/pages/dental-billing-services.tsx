import type { ReactNode } from 'react';
import ServicePage from '@site/src/components/ServicePage';

export default function DentalBillingServices(): ReactNode {
  return (
    <ServicePage
      eyebrow="Dental billing"
      title="Dental billing that respects how dentistry actually runs."
      subtitle="Insurance verification, claims, predeterminations, narratives, attachments, and patient billing — Qiaben handles the dental revenue cycle end to end."
      lead="Dental billing is its own animal. CDT codes, narratives, attachments, frequency limitations, downgrades, and a maze of plan rules — the difference between a clean claim and a denied one usually comes down to detail."
      body={[
        'Qiaben works dental claims the way an experienced front office would, but with the attention only a dedicated team can give. Verification before every visit, narratives that match documentation, attachments included on the first submission.',
        'We work with general practices, specialists, and DSOs — and we adjust our process to match what each chair runs.',
      ]}
      featuresTitle="What we cover"
      features={[
        { icon: '🦷', title: 'Insurance verification', desc: 'Eligibility, benefits, frequencies, and downgrades verified before the appointment.' },
        { icon: '📑', title: 'Predeterminations', desc: 'Submitted, tracked, and converted to claims when work is completed.' },
        { icon: '📨', title: 'Claim submission', desc: 'Daily submission with narratives, x-rays, perio charts, and intra-oral images attached as needed.' },
        { icon: '⚠️', title: 'Denials & appeals', desc: 'Every denial worked. Frequency, downgrade, and missing-tooth appeals filed promptly.' },
        { icon: '💵', title: 'Patient billing', desc: 'Patient statements, payment plans, and collections support — without alienating the relationship.' },
        { icon: '📊', title: 'Production reports', desc: 'Production, collections, AR aging, and payer performance reported monthly.' },
      ]}
      stubBanner
    />
  );
}
