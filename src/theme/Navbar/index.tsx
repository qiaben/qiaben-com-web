import { useState } from 'react';
import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type IconLink = {
  label: string;
  to: string;
  path: string;
  viewBox?: string;
};

const utilityLinks: IconLink[] = [
  {
    label: 'Medical Billing',
    to: '/medical-billing-service',
    viewBox: '0 0 512 512',
    path: 'M464 128h-80V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM192 96h128v32H192V96zm160 248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48z',
  },
  {
    label: 'Dental Billing',
    to: '/dental-billing-services',
    viewBox: '0 0 448 512',
    path: 'M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z',
  },
  {
    label: 'Professional Practice Management Services',
    to: '/professional-practice-management-services',
    viewBox: '0 0 512 512',
    path: 'M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm112 376c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-88h-96v88c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V136c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v88h96v-88c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v240z',
  },
];

const serviceLinks = [
  { label: 'Medical Billing Services', to: '/medical-billing-service' },
  { label: 'Dental Billing Service', to: '/dental-billing-services' },
  { label: 'Medical Scribe Services by Qiaben', to: '/medical-scribe-services-by-qiaben' },
  { label: 'Ambulance Billing Services', to: '/ambulance-billing' },
  { label: 'Physician Credentialing Service', to: '/physician-credentialing' },
  { label: 'Patient Assessment Solutions', to: '/patient-assessment' },
  { label: 'Medical Coding Service', to: '/medical-coding' },
  { label: 'Well Care Services & Billing Solutions', to: '/well-care-services' },
  { label: 'MD Audit Shield | Revenue & Compliance', to: '/md-audit-shield' },
];

const navLinks = [
  { label: 'Specialties', to: '/specialties' },
  { label: 'EHR and EMR', to: '/ehr-emr' },
  { label: 'Resources', to: '/blog' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function Icon({ path, viewBox = '0 0 512 512' }: { path: string; viewBox?: string }): ReactNode {
  return (
    <svg viewBox={viewBox} width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

export default function Navbar(): ReactNode {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className={`navbar ${styles.header}`}>
      <div className={styles.mainRow}>
        <Link to="/" className={styles.logoCol}>
          <img src={useBaseUrl('img/logo-navbar.png')} alt="Qiaben Health" className={styles.logo} />
        </Link>

        <div className={styles.middleCol}>
          <div className={styles.topRow}>
            {utilityLinks.map((item) => (
              <Link key={item.label} to={item.to} className={styles.utilityItem}>
                <Icon path={item.path} viewBox={item.viewBox} />
                {item.label}
              </Link>
            ))}
            <a href="mailto:info@qiaben.com" className={styles.utilityItem}>
              <Icon
                viewBox="0 0 512 512"
                path="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
              />
              info@qiaben.com
            </a>
            <Link to="/contact" className={styles.utilityItem}>
              <svg viewBox="0 0 30 30.000001" width="15" height="15" aria-hidden="true">
                <path
                  fill="#008763"
                  d="M 15 14.871094 C 18.835938 14.871094 21.960938 10.796875 21.960938 6.960938 C 21.960938 3.121094 18.835938 0 15 0 C 11.164062 0 8.039062 3.121094 8.039062 6.960938 C 8.039062 10.796875 11.164062 14.871094 15 14.871094 Z M 15 14.871094 "
                />
                <path
                  fill="#008763"
                  d="M 20.226562 14.941406 C 18.875 15.972656 17.191406 16.582031 15.367188 16.582031 L 14.632812 16.582031 C 12.808594 16.582031 11.125 15.972656 9.773438 14.941406 C 5.367188 15.65625 2 19.476562 2 24.085938 C 2 26.617188 7.820312 28.667969 15 28.667969 C 22.179688 28.667969 28 26.617188 28 24.085938 C 28 19.476562 24.632812 15.65625 20.226562 14.941406 Z M 20.226562 14.941406 "
                />
              </svg>
              Log in
            </Link>
          </div>

          <nav className={`${styles.navCol} ${mobileOpen ? styles.navColOpen : ''}`}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
            <div
              className={styles.dropdown}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              <Link
                to="/professional-practice-management-services"
                className={styles.navLink}
                aria-expanded={servicesOpen}>
                Services
                <svg
                  viewBox="0 0 320 512"
                  width="10"
                  height="10"
                  fill="currentColor"
                  aria-hidden="true"
                  className={styles.caret}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setServicesOpen((v) => !v);
                  }}>
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                </svg>
              </Link>
              <div className={`${styles.dropdownMenu} ${servicesOpen ? styles.dropdownMenuOpen : ''}`}>
                {serviceLinks.map((s) => (
                  <Link key={s.label} to={s.to} className={styles.dropdownLink}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
            {navLinks.map((l) => (
              <Link key={l.label} to={l.to} className={styles.navLink}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <button
          type="button"
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>

        <Link to="/book-an-appointment" className={styles.ctaCol}>
          Free Consultation
        </Link>
      </div>
    </header>
  );
}
