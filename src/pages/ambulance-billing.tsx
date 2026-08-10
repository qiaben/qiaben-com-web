import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Reveal from '@site/src/components/Reveal';
import BookingForm from '@site/src/components/BookingForm';
import styles from './ambulance-billing.module.css';

const CheckIcon = () => (
  <svg viewBox="0 0 512 512" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M173.9 439.4L7.5 273c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.9 432.1 72.8c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2L210.1 439.4c-10 10-26.2 10-36.2 0z" />
  </svg>
);

function StatRow({ stats }: { stats: { value: string; label: string }[] }): ReactNode {
  return (
    <div className={styles.statRow}>
      {stats.map((s) => (
        <div key={s.label}>
          <p className={styles.statValue}>{s.value}</p>
          <p className={styles.statLabel}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function ChipList({ items }: { items: string[] }): ReactNode {
  return (
    <div className={styles.chipList}>
      {items.map((item) => (
        <div key={item} className={styles.chip}>
          <span aria-hidden="true" />
          {item}
        </div>
      ))}
    </div>
  );
}

function WaveDivider({ flip }: { flip?: boolean }): ReactNode {
  return (
    <svg
      className={styles.wave}
      viewBox="0 0 1440 56"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}>
      <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,20 1440,28 L1440,56 L0,56 Z" fill="currentColor" />
    </svg>
  );
}

function CtaBanner({ title, desc, ctaLabel }: { title: string; desc: string; ctaLabel: string }): ReactNode {
  return (
    <div className={styles.ctaBannerWrap}>
      <WaveDivider />
      <section className={styles.ctaBanner}>
        <Reveal>
          <h2>{title}</h2>
          <p>{desc}</p>
          <Link to="/book-an-appointment">{ctaLabel}</Link>
        </Reveal>
      </section>
      <WaveDivider flip />
    </div>
  );
}

const introFeatures = [
  {
    icon: '🚑',
    title: 'EMS-Only Expertise',
    desc: 'Unlike general medical billers, Qiaben focuses exclusively on EMS and ambulance transport billing — meaning our team knows every nuance of HCPCS transport codes, ALS/BLS documentation, and EMS-specific payer rules.',
  },
  {
    icon: '📋',
    title: 'PCR-to-Claim Accuracy',
    desc: 'Every Patient Care Report is cross-validated against billing data before submission. PCR errors are the #1 cause of EMS claim denials — we eliminate them before they cost you revenue.',
  },
  {
    icon: '🏥',
    title: 'Medicare & Medicaid EMS Rules',
    desc: 'EMS Medicare billing follows CMS-1500 and UB-04 formats with strict medical necessity requirements. Our team is trained on the latest ambulance fee schedule updates and Local Coverage Determinations (LCDs).',
  },
];

const specialistCards = [
  {
    title: 'HCPCS Ambulance Transport Codes',
    desc: 'Each EMS transport is billed using specific HCPCS A-codes (A0425–A0999). Selecting the wrong code — e.g., A0427 (ALS Emergency) vs. A0429 (BLS Emergency) — directly impacts reimbursement and triggers denials.',
  },
  {
    title: 'ALS1 vs ALS2 vs BLS Distinction',
    desc: 'ALS1 requires at least one ALS intervention; ALS2 requires three or more. BLS must show that no ALS services were medically necessary. Incorrect level-of-care billing is the most common EMS audit trigger.',
  },
  {
    title: 'Medical Necessity & Ambulance Necessity Form',
    desc: 'Medicare requires documented proof that transport by ambulance was medically necessary and that the patient could not be safely moved by other means. Missing or incomplete ANFs result in automatic claim denial.',
  },
  {
    title: 'Loaded Mileage Billing',
    desc: 'Only mileage from the point of patient pickup to the receiving facility is billable. Mileage must be reported using HCPCS code A0425 per loaded mile with exact odometer or GPS documentation.',
  },
  {
    title: 'Origin & Destination Modifiers',
    desc: 'Two-character modifiers (e.g., H-H for home to hospital, N-E for nursing home to ER) must be appended to every claim. Incorrect modifiers are a leading cause of EMS claim rejections by Medicare and Medicaid.',
  },
  {
    title: 'PCR Documentation Matching',
    desc: 'Patient Care Reports must align exactly with billed codes — crew signatures, vitals, interventions, and transport times all must match. Discrepancies trigger post-payment audits and recoupment demands.',
  },
];

const revenueCycleServices = [
  {
    tag: 'EMS Coding',
    icon: '🔬',
    title: 'Ambulance-Specific Coding',
    desc: 'Certified coders assign HCPCS transport codes (A0425–A0999), ICD-10 diagnosis codes, ALS/BLS level of care, origin/destination modifiers, and loaded mileage for every single transport.',
  },
  {
    tag: 'Claims',
    icon: '📋',
    title: 'EMS Claim Submission',
    desc: 'Claims are scrubbed against EMS-specific edits — modifier validation, medical necessity documentation checks, and payer-specific rules — before electronic submission to Medicare, Medicaid, or commercial insurers.',
  },
  {
    tag: 'Mileage',
    icon: '📍',
    title: 'Loaded Mileage Billing',
    desc: 'We validate loaded patient miles from pickup to destination using GPS or odometer records and apply correct per-mile HCPCS A0425 billing to maximize reimbursement without overpayment risk.',
  },
  {
    tag: 'AR Recovery',
    icon: '⚡',
    title: 'EMS Denial Management & Appeals',
    desc: 'Our AR specialists analyze root causes of EMS denials — medical necessity, incorrect transport level, PCR mismatch — and build appeal packages with supporting clinical documentation for maximum recovery.',
  },
  {
    tag: 'Payments',
    icon: '💳',
    title: 'Payment Posting & Reconciliation',
    desc: 'ERA/EOB payment posting matched to each transport claim with secondary billing triggered automatically, ensuring no secondary payer revenue is missed.',
  },
  {
    tag: 'Accounts Receivable',
    icon: '📊',
    title: 'EMS Accounts Receivable Management',
    desc: 'Systematic follow-up on all unpaid EMS claims with payer-specific escalation paths, aging report monitoring, and timely filing deadline tracking to prevent revenue loss.',
  },
];

const complianceCards = [
  {
    icon: '📜',
    title: 'Medicare Ambulance Fee Schedule',
    desc: 'Ambulance services are reimbursed under the Medicare Ambulance Fee Schedule (AFS) using a base rate plus per-loaded-mile rate. Rates vary by urban, rural, or super-rural designation. Qiaben monitors annual CMS rate updates and ensures correct geographic rate application for every claim.',
  },
  {
    icon: '🔍',
    title: 'Local Coverage Determinations (LCDs)',
    desc: 'MACs (Medicare Administrative Contractors) issue LCDs that specify exactly what qualifies as medical necessity for ambulance transport in each region. Our team applies the correct LCD criteria to every EMS claim to prevent medical necessity denials.',
  },
  {
    icon: '⚖️',
    title: 'False Claims Act & OIG Compliance',
    desc: "EMS billing fraud — including upcoding ALS/BLS levels or billing for non-covered transports — carries liability under the False Claims Act. Qiaben's compliance workflow includes pre-submission audits, coder training, and documentation standards to keep you fully protected.",
  },
  {
    icon: '🏥',
    title: 'HIPAA & PHI Security',
    desc: 'All EMS patient data and PCRs are handled under strict HIPAA-compliant protocols with encrypted data transmission, access controls, and Business Associate Agreements (BAAs) with every client organization.',
  },
  {
    icon: '📋',
    title: 'Ambulance Necessity Form (ANF)',
    desc: 'Non-emergency transports billed to Medicare require a completed Ambulance Necessity Form signed by the ordering physician or authorized provider. We manage ANF procurement and attachment for every applicable claim.',
  },
  {
    icon: '🔄',
    title: 'Continuous Compliance Auditing',
    desc: 'Monthly internal audits, claim-level review, and coder QA ensure your EMS billing stays compliant as regulations evolve. We provide detailed compliance reports so you always know where you stand.',
  },
];

const transportTypes = [
  'Basic Life Support — BLS Emergency & Non-Emergency',
  'Advanced Life Support ALS1 (Single Intervention)',
  'Advanced Life Support ALS2 (3+ Interventions)',
  'Specialty Care Transport (SCT) — Critical Care',
  'Emergency Ground Ambulance Transport',
  'Non-Emergency Medical Transport (NEMT)',
  'Dialysis Transport',
  'Interfacility Transfer Billing',
  'Fixed Wing Air Ambulance',
  'Rotary Wing (Helicopter) Air Ambulance',
];

const workflowSteps = [
  { title: 'PCR Intake & Verification', desc: 'Patient Care Report received, completeness checked, crew signatures and vitals validated.' },
  { title: 'Transport Level Assessment', desc: 'ALS1, ALS2, BLS, or SCT determined based on documented interventions and patient condition.' },
  { title: 'HCPCS & ICD-10 Coding', desc: 'Correct ambulance transport codes, modifiers, mileage, and diagnosis codes assigned by certified EMS coders.' },
  { title: 'Medical Necessity Review', desc: 'ANF and supporting documentation verified against payer-specific LCD criteria before submission.' },
  { title: 'Claim Scrubbing & QA', desc: 'EMS-specific claim edits applied — modifier validation, payer rules, timely filing checks — before submission.' },
  { title: 'Electronic Submission & Follow-up', desc: 'Claims submitted electronically with real-time status tracking and proactive payer follow-up.' },
  { title: 'Denial Management & Reporting', desc: 'Denied claims appealed with full documentation. Monthly EMS revenue reports delivered to leadership.' },
];

const servedOrgs = [
  'Municipal EMS Agencies',
  'Hospital-Based Ambulance Units',
  'Private Ambulance Companies',
  'Non-Emergency Medical Transport (NEMT) Providers',
  'Fire Department EMS Divisions',
  'Air Ambulance Services',
  'Critical Care Transport Teams',
  'Interfacility Transport Programs',
];

const problemsSolved = [
  {
    title: 'High EMS Claim Denial Rates',
    desc: 'Industry EMS denial rates average 15–25%. We identify root causes — coding errors, missing docs, wrong modifiers — and systematically eliminate them.',
  },
  {
    title: 'ALS/BLS Level-of-Care Errors',
    desc: 'Upcoding or downcoding ALS vs. BLS is the #1 EMS compliance risk. Our coders validate every intervention documented in the PCR before assigning transport level.',
  },
  {
    title: 'Missing Medical Necessity Documentation',
    desc: 'We ensure every non-emergency transport has a completed ANF and ICD-10 codes that support ambulance medical necessity per applicable LCD guidelines.',
  },
  {
    title: 'PCR & Billing Data Mismatches',
    desc: 'PCR data is cross-checked against billed codes at the claim level. Any discrepancy is flagged and resolved before submission — not discovered in a post-payment audit.',
  },
  {
    title: 'Medicare & Medicaid Compliance Risk',
    desc: 'Full compliance with CMS ambulance fee schedule, LCD requirements, and ZPIC/RAC audit standards is built into our workflow — protecting you from recoupment and penalties.',
  },
  {
    title: 'Slow EMS Reimbursement Cycles',
    desc: 'Electronic submission, real-time claim status tracking, and proactive payer follow-up reduce your average EMS payment cycle by up to 20%.',
  },
];

const documentationServices = [
  {
    icon: '📝',
    title: 'EMS SOAP Notes',
    desc: 'Structured Subjective, Objective, Assessment, and Plan notes prepared for every patient encounter — aligned with transport level documentation requirements for ALS, BLS, and SCT billing.',
  },
  {
    icon: '🎙️',
    title: 'EMS Medical Transcription',
    desc: 'Crew audio dictations and voice notes converted into precise clinical text with 99%+ accuracy and fast turnaround — ready for PCR completion and claim submission.',
  },
  {
    icon: '🩺',
    title: 'Real-Time EMS Scribing',
    desc: 'Remote EMS scribes document patient encounters within your EHR/ePCR system in real time — reducing paramedic documentation time and improving PCR completeness for billing.',
  },
  {
    icon: '🏥',
    title: 'ePCR & EHR Documentation',
    desc: 'Full ePCR data entry and chart management compatible with major EMS platforms including ESO, ImageTrend, Zoll, and others — ensuring billing-ready documentation every time.',
  },
  {
    icon: '✅',
    title: 'Audit-Ready EMS Records',
    desc: 'All EMS documentation reviewed for CMS, Medicare LCD, and payer-specific compliance before billing — reducing audit risk from PCR-to-claim discrepancies.',
  },
  {
    icon: '⏱️',
    title: 'Rapid Turnaround',
    desc: 'Urgent EMS transcription in under 4 hours. Standard PCR documentation and SOAP notes completed within 24 hours to keep your billing cycle on track.',
  },
];

const faqs = [
  {
    q: 'What is the difference between ALS1, ALS2, and BLS billing?',
    a: 'BLS (Basic Life Support) covers transport where no advanced interventions were performed. ALS1 requires at least one ALS assessment or intervention by a qualified ALS crew. ALS2 requires administration of at least three medications or one of the specified ALS procedures. Correct level-of-care determination directly determines your Medicare reimbursement rate and is the most common EMS audit trigger.',
  },
  {
    q: 'What HCPCS codes are used for ambulance billing?',
    a: 'EMS transport is billed using HCPCS A-codes: A0425 (Ground Mileage, per mile), A0426 (ALS, Non-Emergency), A0427 (ALS, Emergency — Level 1), A0428 (BLS, Non-Emergency), A0429 (BLS, Emergency), A0430 (Air Transport, Fixed Wing), A0431 (Air Transport, Rotary Wing), A0433 (ALS2), A0434 (Specialty Care Transport). Each code must be combined with correct origin/destination modifiers.',
  },
  {
    q: 'What are origin and destination modifiers in ambulance billing?',
    a: 'Two-character modifiers are required on every EMS claim to identify the point of pickup and dropoff. Examples: "HH" (home to home), "HE" (home to ER), "NH" (nursing facility to hospital), "EH" (ER to hospital). Incorrect or missing modifiers are one of the top reasons Medicare and Medicaid reject EMS claims outright.',
  },
  {
    q: 'How does Medicare determine medical necessity for ambulance transport?',
    a: "Medicare requires that the patient's condition at the time of transport be such that transport by any other means would endanger their health. For non-emergency transports, an Ambulance Necessity Form (ANF) signed by the ordering physician is required. Local Coverage Determinations (LCDs) issued by MACs further define specific qualifying conditions in each region.",
  },
  {
    q: 'Why do EMS claims get denied more often than other medical claims?',
    a: "EMS billing involves more variables than standard medical billing — transport level, mileage, modifiers, PCR documentation, medical necessity forms, and payer-specific rules must all align perfectly. Industry denial rates for EMS run 15–25%, significantly higher than the 5–10% average for other specialties. Qiaben's EMS-specific process reduces client denial rates to under 5%.",
  },
  {
    q: 'Does Qiaben handle Medicare, Medicaid, and commercial EMS billing?',
    a: 'Yes. Qiaben manages complete payer mix billing for EMS providers — Medicare (Part B ambulance), Medicaid (state-specific ambulance programs), and all commercial insurers. We stay current with CMS ambulance fee schedule updates, state Medicaid rate changes, and commercial payer policy revisions.',
  },
];

export default function AmbulanceBilling(): ReactNode {
  return (
    <Layout
      title="Ambulance Billing Services — Qiaben Health"
      description="EMS Ambulance Billing Services – Qiaben Health specializes in ALS/BLS coding, PCR verification, medical necessity documentation, Medicare compliance, and denial management for EMS providers.">
      <div className={styles.page}>
        {/* INTRO */}
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <Reveal>
              <div>
                <span className={styles.badge}>🚑 #1 Specialized EMS Medical Billing Partner</span>
                <h1 className={styles.introTitle}>
                  EMS <span className={styles.accent}>Ambulance Billing</span> Services
                </h1>
                <p className={styles.introLead}>
                  Our <strong>EMS Ambulance Billing Services</strong> at Qiaben are built exclusively for EMS
                  providers and ambulance organizations. We manage every step of your revenue cycle — ALS/BLS
                  coding, PCR verification, medical necessity documentation, Medicare compliance, and denial
                  management — so your team can focus entirely on patient care.
                </p>
                <p className={styles.introLead}>
                  This specialized approach enables EMS agencies to reduce claim denials, accelerate
                  reimbursements, and maintain full compliance with CMS ambulance fee schedule requirements and
                  payer-specific rules.
                </p>
                <div className={styles.callout}>
                  <span aria-hidden="true">🚨</span>
                  <span>
                    <strong>EMS-Exclusive:</strong> We only bill ambulance &amp; EMS transport — no generalist
                    billing here.
                  </span>
                </div>
                <div className={styles.introCtas}>
                  <Link className={styles.ctaPrimary} to="/book-an-appointment">
                    Get Free EMS Billing Audit →
                  </Link>
                  <a className={styles.ctaSecondary} href="#services">
                    Explore EMS Solutions
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal variant="left">
              <BookingForm title="Book an Appointment" />
            </Reveal>
          </div>
          <StatRow
            stats={[
              { value: '98%', label: 'Clean Claim Rate' },
              { value: '40%', label: 'Fewer EMS Denials' },
              { value: '20%', label: 'Faster Payments' },
              { value: '99%', label: 'HIPAA Compliant' },
            ]}
          />
        </section>

        {/* 3-COL FEATURE BAND */}
        <section className={styles.featureBand}>
          <div className={styles.featureBandInner}>
            {introFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className={styles.featureBandItem}>
                  <div className={styles.featureBandIcon} aria-hidden="true">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <div className={styles.waveGreen}>
          <WaveDivider flip />
        </div>

        {/* WHY SPECIALIST */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionInner}>
            <Reveal>
              <p className={styles.eyebrow}>Why EMS billing is different</p>
              <h2 className={styles.sectionTitle}>
                Why <span className={styles.accent}>EMS Ambulance Billing</span> Demands a Specialist
              </h2>
              <p className={styles.sectionLead}>
                EMS claims have far more variables than standard medical billing. Incorrect transport level,
                missing medical necessity documentation, or mismatched PCR data can result in full claim denial
                or federal audit risk.
              </p>
            </Reveal>
            <div className={styles.cardGrid4}>
              {specialistCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 50}>
                  <div className={styles.borderCard}>
                    <h3>
                      {c.title} <span className={styles.tagBadge}>EMS</span>
                    </h3>
                    <p>{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="Is Your EMS Revenue Cycle Underperforming?"
          desc="EMS claim denials average 15–25% industry-wide. Qiaben clients see denial rates drop to under 5% within 90 days. Let us audit your billing at no cost."
          ctaLabel="Book Free EMS Billing Consultation →"
        />

        {/* REVENUE CYCLE SERVICES */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <Reveal>
              <p className={styles.eyebrow}>EMS billing services</p>
              <h2 className={styles.sectionTitle}>Complete EMS Revenue Cycle Management Services</h2>
              <p className={styles.sectionLead}>
                Every service is purpose-built for EMS and ambulance providers — not adapted from general medical
                billing workflows.
              </p>
            </Reveal>
            <div className={styles.cardGrid4}>
              {revenueCycleServices.map((s, i) => (
                <Reveal key={s.title} delay={i * 50}>
                  <div className={styles.tagCard}>
                    <span className={styles.tagChip}>{s.tag}</span>
                    <div className={styles.tagCardIcon} aria-hidden="true">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <Reveal>
              <h2 className={styles.sectionTitle}>EMS Billing Compliance &amp; Regulatory Requirements</h2>
              <p className={styles.sectionLead}>
                EMS providers face unique compliance obligations under Medicare, Medicaid, and federal anti-fraud
                statutes. Non-compliance carries severe financial and legal consequences.
              </p>
            </Reveal>
            <div className={styles.cardGrid3}>
              {complianceCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 50}>
                  <div className={styles.borderCard}>
                    <div className={styles.borderCardIcon} aria-hidden="true">{c.icon}</div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSPORT TYPES */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <Reveal>
              <p className={styles.eyebrow}>EMS transport coverage</p>
              <h2 className={styles.sectionTitle}>Every EMS Transport Type We Bill</h2>
              <p className={styles.sectionLead}>
                From emergency BLS ground transport to critical care air ambulance — Qiaben bills every EMS
                service level with code-level accuracy.
              </p>
            </Reveal>
            <Reveal delay={60}>
              <ChipList items={transportTypes} />
            </Reveal>
          </div>
        </section>

        <CtaBanner
          title="Ready to Reduce Your EMS Claim Denials by 40%?"
          desc="Talk to a certified EMS billing specialist today. No commitment — just an honest review of your current revenue cycle."
          ctaLabel="Schedule My Free EMS Audit →"
        />

        {/* WORKFLOW */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <Reveal>
              <p className={styles.eyebrow}>Our EMS billing workflow</p>
              <h2 className={styles.sectionTitle}>7-Step EMS Billing Process Built for Zero Leakage</h2>
              <p className={styles.sectionLead}>
                Every transport goes through a structured, audit-proof workflow — from PCR intake to final
                reimbursement — with quality checkpoints at each stage.
              </p>
            </Reveal>
            <div className={styles.cardGrid5}>
              {workflowSteps.map((s, i) => (
                <Reveal key={s.title} delay={i * 40}>
                  <div className={styles.stepCard}>
                    <span className={styles.stepNumber}>{i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <Reveal>
              <p className={styles.eyebrow}>Who we serve</p>
              <h2 className={styles.sectionTitle}>EMS Billing Partner for Every Ambulance Organization</h2>
              <p className={styles.sectionLead}>
                Qiaben supports all types and sizes of EMS organizations with scalable, EMS-specific billing
                solutions.
              </p>
            </Reveal>
            <Reveal delay={60}>
              <ChipList items={servedOrgs} />
            </Reveal>
          </div>
        </section>

        {/* PROBLEMS SOLVED */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <Reveal>
              <p className={styles.eyebrow}>EMS problems we solve</p>
              <h2 className={styles.sectionTitle}>Common EMS Billing Challenges We Eliminate</h2>
            </Reveal>
            <div className={styles.cardGrid2}>
              {problemsSolved.map((p, i) => (
                <Reveal key={p.title} delay={i * 50}>
                  <div className={styles.checkCard}>
                    <div className={styles.checkIcon}>
                      <CheckIcon />
                    </div>
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="Stop Leaving EMS Revenue Behind"
          desc="Our EMS billing specialists will audit your current process, identify revenue leaks, and show you a clear path to higher collections — at no cost."
          ctaLabel="Start Free EMS Consultation →"
        />

        {/* DOCUMENTATION SERVICES */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <Reveal>
              <p className={styles.eyebrow}>EMS documentation services</p>
              <h2 className={styles.sectionTitle}>SOAP Notes, Transcription &amp; EMS Medical Scribing</h2>
              <p className={styles.sectionLead}>
                Accurate EMS documentation is the foundation of compliant billing. Qiaben&apos;s scribing team
                ensures your PCRs, SOAP notes, and clinical records are precise, complete, and billing-ready.
              </p>
            </Reveal>
            <div className={styles.cardGrid4}>
              {documentationServices.map((d, i) => (
                <Reveal key={d.title} delay={i * 50}>
                  <div className={styles.borderCard}>
                    <div className={styles.borderCardIcon} aria-hidden="true">{d.icon}</div>
                    <h3>{d.title}</h3>
                    <p>{d.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <div className={styles.sectionInnerNarrow}>
            <Reveal>
              <p className={styles.eyebrow}>EMS billing FAQ</p>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions About EMS Ambulance Billing</h2>
            </Reveal>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 40}>
                  <div className={styles.faqItem}>
                    <span className={styles.faqQ} aria-hidden="true">Q</span>
                    <div>
                      <h3>{f.q}</h3>
                      <p>{f.a}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.statBand}>
          <StatRow
            stats={[
              { value: '98%', label: 'EMS Clean Claim Rate' },
              { value: '30–40%', label: 'Reduction in EMS Denials' },
              { value: '20%', label: 'Faster EMS Reimbursements' },
              { value: '99%', label: 'HIPAA Compliance' },
            ]}
          />
        </section>

        {/* GET STARTED */}
        <section className={styles.getStarted}>
          <div className={styles.getStartedInner}>
            <Reveal>
              <p className={styles.eyebrow}>Get started</p>
              <h2 className={styles.sectionTitle}>Get Your Free EMS Billing Audit Today</h2>
              <p className={styles.sectionLead} style={{ margin: '0 auto' }}>
                If your EMS organization is experiencing claim denials, delayed reimbursements, or compliance
                concerns — Qiaben&apos;s EMS specialists will analyze your billing process and show you exactly
                where to improve.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <BookingForm title="Book an Appointment" />
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <Reveal>
            <h2>Ready to Maximize Your EMS Revenue?</h2>
            <p>
              Let Qiaben&apos;s certified EMS billing specialists audit your revenue cycle and uncover every
              dollar your organization is leaving behind — completely free.
            </p>
            <div className={styles.finalCtaButtons}>
              <Link className={styles.ctaPrimary} to="/book-an-appointment">
                Book Your Free EMS Audit →
              </Link>
              <Link className={styles.ctaSecondary} to="/book-an-appointment">
                Request a Consultation
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </Layout>
  );
}
