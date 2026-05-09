import type { ReactNode } from 'react';
import ServicePage from '@site/src/components/ServicePage';

export default function PatientBilling(): ReactNode {
  return (
    <ServicePage
      eyebrow="Patient billing"
      title="Patient billing that doesn't burn bridges."
      subtitle="Statements, online payments, payment plans, and friendly collections — designed to recover what you’re owed without losing the patient relationship."
      lead="The patient portion of revenue has grown every year, and it’s the hardest part to collect. The wrong tone or the wrong cadence costs you the patient before you ever see the money."
      body={[
        'Qiaben handles patient billing as a relationship, not a transaction. Clear statements, accessible online payment, payment plans for legitimate hardship, and a respectful collections cadence with clear escalation rules.',
        'We coordinate with your front desk on disputes, work with patients on legitimate hardship, and only escalate when it’s actually warranted.',
      ]}
      featuresTitle="What patient billing covers"
      features={[
        { icon: '📨', title: 'Clear statements', desc: 'Statements people can read, with what they owe and why — not a bill code dump.' },
        { icon: '💳', title: 'Online payment', desc: 'Branded payment portal, card-on-file, ACH, and automated receipts.' },
        { icon: '📆', title: 'Payment plans', desc: 'Plans for legitimate hardship, automated and tracked — no awkward staff conversations.' },
        { icon: '📞', title: 'Friendly collections', desc: 'Reminders by email, SMS, and phone. Escalation only when warranted.' },
        { icon: '🛟', title: 'Hardship handling', desc: 'Sliding-scale, charity-care, and write-off workflows — coordinated with your team.' },
        { icon: '📊', title: 'Patient AR reporting', desc: 'Aging by patient, by plan, by service — so you see where the money actually sits.' },
      ]}
      stubBanner
    />
  );
}
