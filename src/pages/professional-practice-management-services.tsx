import type { ReactNode } from 'react';
import ServicePage from '@site/src/components/ServicePage';

export default function PracticeManagement(): ReactNode {
  return (
    <ServicePage
      eyebrow="Practice management"
      title="Practice management that runs the back office for you."
      subtitle="Beyond billing — Qiaben helps you run a tighter front desk, smarter scheduling, faster collections, and reporting you can actually use to make decisions."
      lead="Most practices don’t have a back-office problem in any single area. They have small inefficiencies in many places — and they add up to real money."
      body={[
        'Qiaben acts as your outsourced back office. We watch the schedule fill, verify insurance before visits, capture charges as they happen, work claims clean, follow up on AR, post payments, and report the numbers monthly.',
        'For practices that want more — we also help with credentialing, patient communications, and operational dashboards. Pick what you need.',
      ]}
      featuresTitle="What practice management covers"
      features={[
        { icon: '📅', title: 'Scheduling support', desc: 'Recall, reactivation, and chair-fill workflows so the schedule stays full.' },
        { icon: '🪪', title: 'Insurance verification', desc: 'Eligibility and benefits checked before the patient arrives.' },
        { icon: '💸', title: 'Billing & claims', desc: 'End-to-end medical and dental billing, denials, and AR follow-up.' },
        { icon: '💳', title: 'Patient billing & collections', desc: 'Statements, payment plans, and friendly collections that protect the relationship.' },
        { icon: '📞', title: 'Patient communications', desc: 'Reminders, recalls, and follow-up — coordinated with your team.' },
        { icon: '📊', title: 'Operational reporting', desc: 'Monthly numbers and quarterly reviews focused on what actually moves your practice.' },
      ]}
      stubBanner
    />
  );
}
