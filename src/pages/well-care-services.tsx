import type { ReactNode } from 'react';
import ServicePage from '@site/src/components/ServicePage';

export default function WellCareServices(): ReactNode {
  return (
    <ServicePage
      eyebrow="Well care services"
      title="Preventive care workflows that actually run."
      subtitle="Annual Wellness Visits, chronic care management, transitional care, remote patient monitoring — the well-care programs Medicare pays for, run as a service."
      lead="Well-care programs sit on the table at most practices. They’re hard to staff, hard to bill correctly, and easy to abandon when the workflow gets messy."
      body={[
        'Qiaben operates well-care programs end to end. Patient eligibility, enrollment, monthly contact, documentation, time tracking, and clean billing — so the program runs predictably and produces the revenue it’s supposed to.',
        'Most practices see meaningful per-patient PMPM revenue from CCM and AWV alone, after we straighten out the workflow.',
      ]}
      featuresTitle="Programs we run"
      features={[
        { icon: '🩺', title: 'Annual Wellness Visits (AWV)', desc: 'Eligibility flagged, scheduled, documented to Medicare requirements, billed correctly.' },
        { icon: '🔁', title: 'Chronic Care Management (CCM)', desc: 'Enrollment, monthly contacts, time tracking, and documentation for 99490 / 99439 / 99487.' },
        { icon: '🚪', title: 'Transitional Care Management (TCM)', desc: 'Post-discharge follow-up workflow tied to TCM billing windows.' },
        { icon: '📡', title: 'Remote Patient Monitoring (RPM)', desc: 'Device enrollment, data review, and monthly billing under 99453 / 99454 / 99457.' },
        { icon: '🧠', title: 'Behavioral Health Integration', desc: 'BHI workflows for primary care practices integrating behavioral support.' },
        { icon: '📊', title: 'Program reporting', desc: 'Enrollment, retention, billing, and per-patient revenue reported monthly.' },
      ]}
      stubBanner
    />
  );
}
