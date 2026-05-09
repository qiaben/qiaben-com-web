import type { ReactNode } from 'react';
import ServicePage from '@site/src/components/ServicePage';

export default function MDAuditShield(): ReactNode {
  return (
    <ServicePage
      eyebrow="MD Audit Shield"
      title="Audit-ready, before the audit letter arrives."
      subtitle="Pre-bill chart reviews, RAC/UPIC defense, documentation training, and audit response — designed to keep payer audits from turning into clawbacks."
      lead="A payer audit is rarely an emergency at the moment it lands. It’s a slow-motion problem that started months earlier in documentation."
      body={[
        'MD Audit Shield is Qiaben’s audit-defense and risk-mitigation program. We run pre-bill reviews on high-risk codes, train providers on documentation patterns, and stand alongside you when an audit letter arrives.',
        'Most engagements start with a documentation baseline — a chart sample, scored against payer expectations, with concrete fixes to close the gap before any letter is in the mail.',
      ]}
      featuresTitle="What MD Audit Shield covers"
      features={[
        { icon: '🔍', title: 'Pre-bill chart review', desc: 'High-risk codes (E/M, surgery, modifier 25) reviewed before submission.' },
        { icon: '🎓', title: 'Documentation training', desc: 'Provider training on what payers actually look for in a record.' },
        { icon: '🛡️', title: 'Audit defense', desc: 'RAC, UPIC, MAC, and commercial audit response — record packaging and rebuttal.' },
        { icon: '📑', title: 'Appeals support', desc: 'Levels 1–5 Medicare appeals with documented rationale and references.' },
        { icon: '📊', title: 'Risk reporting', desc: 'Quarterly risk dashboards: utilization patterns, outlier codes, peer comparisons.' },
        { icon: '📝', title: 'Compliance binder', desc: 'A maintained binder of policies, training, and audit history — the thing every auditor asks for.' },
      ]}
      stubBanner
    />
  );
}
