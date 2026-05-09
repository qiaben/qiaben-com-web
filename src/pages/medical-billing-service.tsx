import type { ReactNode } from 'react';
import ServicePage from '@site/src/components/ServicePage';

export default function MedicalBillingService(): ReactNode {
  return (
    <ServicePage
      eyebrow="Medical billing"
      title="End-to-end medical billing that gets you paid faster."
      subtitle="From coding and charge entry through claim submission, denials work, and payment posting — Qiaben handles the entire revenue cycle so your practice can focus on patients."
      lead="A clean medical billing operation pays for itself many times over. Sloppy billing burns staff hours, drags AR days, and quietly hands money to insurance companies."
      body={[
        'Qiaben runs your billing as an extension of your practice. We learn your specialty, your payer mix, and the patterns that actually drive your reimbursement — then we work them every day until the numbers move.',
        'Most clients see denial rates fall and AR days drop within the first 90 days. The work is boring on purpose. Submitted clean, followed up early, posted accurately.',
      ]}
      featuresTitle="What we cover"
      features={[
        { icon: '📋', title: 'Charge capture', desc: 'Codes reviewed against documentation before submission. Missing items flagged back to the provider.' },
        { icon: '💸', title: 'Claim submission', desc: 'Daily filing across all your payers — primary, secondary, and tertiary.' },
        { icon: '⚠️', title: 'Denials management', desc: 'Every denial worked. Appeals filed within payer windows. Patterns reported back to your team.' },
        { icon: '📥', title: 'Payment posting', desc: 'ERAs and EOBs posted accurately, with adjustments coded so your reports actually reflect reality.' },
        { icon: '📊', title: 'AR follow-up', desc: 'Aged claims chased on a schedule, not when someone gets to it. Documented, escalated, and resolved.' },
        { icon: '📈', title: 'Practice reporting', desc: 'Monthly numbers you can act on — production, collections, denial rate, AR days, payer performance.' },
      ]}
      stubBanner
    />
  );
}
