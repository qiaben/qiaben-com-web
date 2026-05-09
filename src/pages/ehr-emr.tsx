import type { ReactNode } from 'react';
import ServicePage from '@site/src/components/ServicePage';

export default function EHREMR(): ReactNode {
  return (
    <ServicePage
      eyebrow="EHR / EMR"
      title="EHR and EMR support — implementation, integration, and operations."
      subtitle="Qiaben works with the EHR you already have, integrates the modules you need, and (for practices ready to switch) implements Ciyex EHR end-to-end."
      lead="An EHR is supposed to make a practice run better. Most don’t. We help you get the value back — by configuring what you have, integrating what you need, or moving you to a system that actually fits."
      body={[
        'Qiaben works with the major EHR/EMR platforms and integrates billing, scheduling, patient communications, imaging, and analytics on top. Where the existing system is the problem, we can implement Ciyex EHR — open source, modern, and built for community and specialty practices.',
        'Either way, we focus on the workflow: how the schedule fills, how charges get captured, how documentation reaches billing, and how reporting tells you what to do next.',
      ]}
      featuresTitle="Where we help"
      features={[
        { icon: '⚙️', title: 'EHR optimization', desc: 'Templates, macros, order sets, and workflow tuning on your existing system.' },
        { icon: '🔌', title: 'Integrations', desc: 'Billing, scheduling, comms, imaging, labs — connected to the chart, not duct-taped beside it.' },
        { icon: '🚀', title: 'Ciyex EHR implementation', desc: 'For practices switching: open-source, modern EHR with multi-tenant FHIR backbone.' },
        { icon: '📑', title: 'Templates & forms', desc: 'Specialty-specific note templates and intake forms built to support the codes you bill.' },
        { icon: '📊', title: 'Reporting layer', desc: 'Dashboards that pull production, denials, AR, and quality measures into one view.' },
        { icon: '🎓', title: 'Training & support', desc: 'Provider, front-desk, and back-office training — with documentation that survives staff turnover.' },
      ]}
      stubBanner
    />
  );
}
