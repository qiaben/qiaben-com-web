import type { ReactNode } from 'react';
import ServicePage from '@site/src/components/ServicePage';

export default function AmbulanceBilling(): ReactNode {
  return (
    <ServicePage
      eyebrow="Ambulance billing"
      title="Ambulance billing built for EMS agencies."
      subtitle="Trip-by-trip billing for ground and air EMS — Medicare, Medicaid, commercial, and patient — with the documentation, modifiers, and origin/destination logic that ambulance claims require."
      lead="Ambulance billing is unforgiving. Origin and destination modifiers, medical necessity documentation, condition codes, level-of-service distinctions, and Medicare’s ABN rules — getting any of it wrong means a denied trip."
      body={[
        'Qiaben runs end-to-end ambulance RCM. We work from your ePCR data, validate documentation against payer rules, code accurately, submit clean, work denials hard, and collect from patients with reminders that don’t cross the line.',
        'We work with private EMS, hospital-based services, and municipal agencies. Our team is built around ambulance billing specifically — not general medical billing trying to learn EMS.',
      ]}
      featuresTitle="What ambulance billing covers"
      features={[
        { icon: '🚑', title: 'Trip coding', desc: 'BLS, ALS-1, ALS-2, SCT, and air codes with the right origin/destination modifiers.' },
        { icon: '📑', title: 'Documentation review', desc: 'ePCRs reviewed for medical necessity language before submission.' },
        { icon: '📨', title: 'Multi-payer claims', desc: 'Medicare, Medicaid, commercial, workers’ comp, no-fault, and patient.' },
        { icon: '⚠️', title: 'Denials & appeals', desc: 'Every denial worked. Medicare appeal levels managed within timely-filing windows.' },
        { icon: '💵', title: 'Patient billing', desc: 'Statements, payment plans, hardship programs, and respectful collections.' },
        { icon: '📊', title: 'Compliance reporting', desc: 'PCR completeness, documentation gaps, and audit-readiness reports for leadership.' },
      ]}
      stubBanner
    />
  );
}
