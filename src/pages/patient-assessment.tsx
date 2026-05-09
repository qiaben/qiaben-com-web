import type { ReactNode } from 'react';
import ServicePage from '@site/src/components/ServicePage';

export default function PatientAssessment(): ReactNode {
  return (
    <ServicePage
      eyebrow="Patient assessment"
      title="Structured patient assessments your team can act on."
      subtitle="Standardized assessments — risk stratification, social determinants, behavioral health screening — captured cleanly so they support care plans and reimbursement."
      lead="Good assessments don’t just live in the chart. They drive care plans, flag risk, and (when documented properly) support the codes you bill."
      body={[
        'Qiaben helps you operationalize patient assessments — designing the workflow, training the team, and (where it makes sense) running the assessments through trained staff.',
        'We focus on assessments that have both clinical and revenue impact: AWVs, HCC documentation, transitional care management, chronic care management, and behavioral health screening.',
      ]}
      featuresTitle="Assessment workflows we support"
      features={[
        { icon: '🩺', title: 'Annual Wellness Visits', desc: 'AWV templates, scheduling support, and documentation that meets Medicare requirements.' },
        { icon: '🧠', title: 'Behavioral health screening', desc: 'PHQ-9, GAD-7, AUDIT, and others — captured, scored, and flagged for follow-up.' },
        { icon: '🏠', title: 'Social determinants (SDOH)', desc: 'Standardized SDOH screening tied to ICD-10 Z codes.' },
        { icon: '📊', title: 'Risk stratification', desc: 'HCC and risk-adjustment workflows that get the codes captured the first time.' },
        { icon: '🔁', title: 'Care management', desc: 'CCM, TCM, RPM enrollment, monthly check-ins, and documentation.' },
        { icon: '✓', title: 'Quality measures', desc: 'HEDIS and MIPS measure capture as part of the assessment, not as an afterthought.' },
      ]}
      stubBanner
    />
  );
}
