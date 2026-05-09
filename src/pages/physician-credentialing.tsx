import type { ReactNode } from 'react';
import ServicePage from '@site/src/components/ServicePage';

export default function PhysicianCredentialing(): ReactNode {
  return (
    <ServicePage
      eyebrow="Physician credentialing"
      title="Credentialing without the back-and-forth."
      subtitle="Initial enrollment, recredentialing, CAQH maintenance, and payer follow-up — Qiaben handles the paperwork so your providers can start billing sooner."
      lead="Credentialing is repetitive, deadline-sensitive, and unforgiving. A single missed item can delay a provider from billing for months."
      body={[
        'Qiaben runs credentialing as a managed service. We collect documents once, keep CAQH current, file initial applications, follow up with payers on a schedule, and track expirables so nothing lapses.',
        'For new providers, we work to shorten time-to-billable. For established providers, we keep the recredentialing cycle quiet — without the urgent emails the week before a renewal.',
      ]}
      featuresTitle="What credentialing covers"
      features={[
        { icon: '📝', title: 'Initial enrollment', desc: 'Medicare, Medicaid, and commercial payers — applications filed and followed.' },
        { icon: '🔄', title: 'Recredentialing', desc: 'Cycle managed so renewals don’t become a fire drill.' },
        { icon: '🪪', title: 'CAQH maintenance', desc: 'Profile attested every 90 days. Documents kept current.' },
        { icon: '🏥', title: 'Hospital privileges', desc: 'Application packets prepared and submitted; follow-up on outstanding items.' },
        { icon: '📅', title: 'Expirables tracking', desc: 'Licenses, DEAs, malpractice, and certifications tracked with advance reminders.' },
        { icon: '📞', title: 'Payer follow-up', desc: 'Weekly calls until enrollment closes. Status reports to your office.' },
      ]}
      stubBanner
    />
  );
}
