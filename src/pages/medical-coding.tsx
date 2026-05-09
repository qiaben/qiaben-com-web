import type { ReactNode } from 'react';
import ServicePage from '@site/src/components/ServicePage';

export default function MedicalCoding(): ReactNode {
  return (
    <ServicePage
      eyebrow="Medical coding"
      title="Coding that pays attention to documentation."
      subtitle="Certified coders working ICD-10, CPT, HCPCS, and modifiers — with the documentation review that turns good notes into clean claims."
      lead="Coding looks like a translation problem. It’s really a documentation problem. The right code is the one the chart can support — and not all charts can."
      body={[
        'Qiaben coders review documentation against the codes the provider selected, query when something is unclear, and flag patterns back to the team so the chart and the bill stay aligned.',
        'We code across specialties — primary care, surgery, dental, behavioral health, EMS — and we maintain audit trails for every coded encounter.',
      ]}
      featuresTitle="What coding covers"
      features={[
        { icon: '📚', title: 'ICD-10 / CPT / HCPCS', desc: 'Diagnosis, procedure, and supply coding with modifiers applied correctly.' },
        { icon: '🔍', title: 'Documentation review', desc: 'Codes checked against the note. Queries sent to providers when documentation does not support the code.' },
        { icon: '📊', title: 'HCC / risk adjustment', desc: 'Hierarchical Condition Category coding for value-based contracts.' },
        { icon: '✓', title: 'E/M leveling', desc: 'Time-based and MDM-based E/M coding under the 2021/2023 guidelines.' },
        { icon: '🔄', title: 'Audit prep', desc: 'Audit logs, code rationale, and pre-bill review on flagged encounters.' },
        { icon: '🎓', title: 'Coder credentials', desc: 'AHIMA / AAPC credentialed coders, ongoing CEU compliance.' },
      ]}
      stubBanner
    />
  );
}
