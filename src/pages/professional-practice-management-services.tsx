import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Reveal from '@site/src/components/Reveal';
import BookingForm from '@site/src/components/BookingForm';
import styles from './professional-practice-management-services.module.css';

const services = [
  {
    img: '/img/uploads/2024/04/e93f03af-97f6-497f-a018-21ff6ab6a2c3-300x300.webp',
    title: 'Medical Billing',
    desc: 'Streamline your medical billing and practice management with our comprehensive solutions.',
    to: '/medical-billing-service',
  },
  {
    img: '/img/uploads/2024/04/c6e8202d-671a-4289-b8a1-8d546aaf0af5-300x300.webp',
    title: 'Dental Billing',
    desc: 'Optimize your dental billing processes with our all-encompassing solutions.',
    to: '/dental-billing-services',
  },
  {
    img: '/img/uploads/2024/04/23e7052e-7fe1-404b-a7b8-da467534b660.webp',
    title: 'Medical Coding',
    desc: 'Ensure accurate and efficient Practices with our expert Medical Coding Code MAXX.',
    to: '/medical-coding',
  },
  {
    img: '/img/uploads/2024/04/d5319c40-f53f-4a79-a4b0-54bf65525fe8.webp',
    title: 'Transcription',
    desc: 'Effortlessly transform spoken words into documentation with our reliable Transcription.',
    to: '/contact',
  },
  {
    img: '/img/uploads/2024/04/a3e3d6e3-425a-4368-940b-856c70a97669.webp',
    title: 'Well-Care Services',
    desc: 'Promote patient loyalty and well-being with our comprehensive Patient Well-Care Services.',
    to: '/well-care-services',
  },
  {
    img: '/img/uploads/2024/04/d7eddafb-3fc6-4956-add2-02cfc23b4de0.webp',
    title: 'Patient Assessment',
    desc: 'Increase Your Revenue with Insurance – Billable Mental Health Assessments.',
    to: '/patient-assessment',
  },
  {
    img: '/img/uploads/2024/04/d5319c40-f53f-4a79-a4b0-54bf65525fe8.webp',
    title: 'PhysicianCredentialing',
    desc: 'Are you frustrated with credentialing or just too busy to do it yourself? Click Below.',
    to: '/physician-credentialing',
  },
  {
    img: '/img/uploads/2024/04/62d804ef-02dd-4b4d-ba8a-5583604cd327.webp',
    title: 'MD Audit Shield',
    desc: 'Prepare and protect your practice with MD Audit Shield. Click Below.',
    to: '/md-audit-shield',
  },
  {
    img: '/img/uploads/2025/08/4-3-2.jpg',
    title: 'Qiaben Health EHR',
    desc: 'Intuitive EHR system designed to streamline healthcare workflows effectively.',
    to: '/qiaben-free-emr-support',
  },
  {
    img: '/img/uploads/2024/08/Untitled-design-22.png',
    title: 'Insurance Verification',
    desc: 'Effortlessly verify patient insurance details for accurate and effective medical billing.',
    to: '/contact',
  },
  {
    img: '/img/uploads/2024/08/Untitled-design-21.png',
    title: 'Patient Billing',
    desc: 'Simplify billing processes for patients with clear and timely statements.',
    to: '/contact',
  },
  {
    img: '/img/uploads/2024/08/Untitled-design-19.png',
    title: 'SOAP Notes',
    desc: 'Structured medical documentation enhancing patient care and communication.',
    to: '/contact',
  },
];

export default function ProfessionalPracticeManagementServices(): ReactNode {
  return (
    <Layout
      title="Professional Practice Management Services — Qiaben Health"
      description="Qiaben offering end to end professional practice management services for health providers. Our professional team will solve your all problems on fastest way.">
      <div className={styles.page}>
        {/* TITLE BAR */}
        <section className={styles.titleBar}>
          <h1>Professional Practice Management Services</h1>
          <p>Managing Practice &amp; Billing Has Never Been Easier</p>
        </section>

        {/* SERVICES GRID */}
        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <Reveal>
              <p className={styles.eyebrow}>End-to-End Services</p>
              <h2 className={styles.sectionTitle}>We&apos;ll Handle Your Practice Management And Billing Needs</h2>
            </Reveal>
            <div className={styles.serviceGrid}>
              {services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 4) * 50}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceImage}>
                      <img src={useBaseUrl(s.img)} alt="" loading="lazy" />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <Link to={s.to} className={styles.serviceCta}>
                      Learn More
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSFORM YOUR PRACTICE */}
        <section className={styles.closing}>
          <div className={styles.closingInner}>
            <Reveal variant="left">
              <div className={styles.closingImage}>
                <img
                  src={useBaseUrl('/img/uploads/2024/04/1.jpg')}
                  alt="Qiaben practice management specialist"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className={styles.closingTitle}>Transform Your Practice</h2>
                <BookingForm title="Book an Appointment" />
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
}
