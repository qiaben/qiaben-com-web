import type { ReactNode } from 'react';
import ServicePage from '@site/src/components/ServicePage';

export default function MedicalScribe(): ReactNode {
  return (
    <ServicePage
      eyebrow="Medical scribe"
      title="Medical scribes that get the note done before you leave the room."
      subtitle="Real-time virtual scribes that document encounters in your EHR while you focus on the patient — accurate, structured notes ready for review and sign-off."
      lead="Documentation is one of the largest non-clinical drains on physician time. A scribe who knows your specialty and your EHR fixes that — without the cost or HR overhead of a full-time hire."
      body={[
        'Qiaben scribes work in real time during the encounter. They listen, capture history, exam findings, plan, and orders directly into your EHR template — and have the note structured and ready for your sign-off when the visit ends.',
        'We match scribes to specialty, train on your EHR and templates, and rotate carefully so the people on your panel know your patterns. HIPAA-compliant infrastructure throughout.',
      ]}
      featuresTitle="What scribe coverage looks like"
      features={[
        { icon: '🎧', title: 'Real-time documentation', desc: 'Scribes listen during the visit and capture the encounter as it happens.' },
        { icon: '🩺', title: 'Specialty-trained', desc: 'Scribes assigned by specialty and matched to your EHR and templates.' },
        { icon: '⏱️', title: 'Faster sign-off', desc: 'Most notes ready for review within minutes of the encounter ending.' },
        { icon: '🔐', title: 'HIPAA-compliant', desc: 'Encrypted infrastructure, BAAs in place, audited access.' },
        { icon: '💵', title: 'Lower overhead', desc: 'No hiring, training, or coverage gaps. Scale up or down by request.' },
        { icon: '📋', title: 'Coding-aware notes', desc: 'Documentation written with E/M and CPT requirements in mind, so the chart actually supports the bill.' },
      ]}
      stubBanner
    />
  );
}
