import { useState } from 'react';
import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Reveal from '@site/src/components/Reveal';
import styles from './styles.module.css';

export interface PricingPlan {
  name: string;
  range: string;
  rate: string;
  features: string[];
  popular?: boolean;
  /** Plain descriptor lines shown above the price (e.g. verification/collection caps). */
  bullets?: string[];
  /** Pre-discount price, shown struck through above the rate. */
  originalRate?: string;
  /** Savings callout shown under the rate, e.g. "You save $400/month (25% off)". */
  savingsNote?: string;
  /** Unit label next to the rate. Defaults to "of monthly collections". */
  rateUnit?: string;
  /** Corner ribbon text, e.g. "Promotional Offer". Ignored when `popular` is set. */
  badge?: string;
}

export interface PricingCategory {
  /** Short label shown on the tab button. */
  label: string;
  eyebrow: string;
  title: string;
  lead: string;
  /**
   * Real tiered pricing for this category. Omit (leave undefined) for a
   * service that doesn't have published rates yet — the category then
   * renders a "contact us for custom pricing" panel instead of inventing
   * numbers.
   */
  plans?: PricingPlan[];
  /** Where "get a custom quote" links to when this category has no plans. */
  customPricingHref?: string;
  /** Render `plans` as a comparison table (banner + rows) instead of cards. */
  layout?: 'cards' | 'table';
  /** Show the "Monthly Pricing" / "Practice Monthly Collections" label column in the table layout. Defaults to true. */
  showTableLabels?: boolean;
  /** Show the plan-name header row in the table layout. Defaults to true. */
  showTableHeader?: boolean;
}

export interface PricingPlansProps {
  categories: PricingCategory[];
  ctaHref?: string;
  ctaLabel?: string;
}

const CheckMarkIcon = () => (
  <svg viewBox="0 0 512 512" width="12" height="12" fill="currentColor" aria-hidden="true">
    <path d="M173.9 439.4L7.5 273c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.9 432.1 72.8c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2L210.1 439.4c-10 10-26.2 10-36.2 0z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6-5.9-3.3-5.9 3.3 1.3-6.6-4.9-4.5 6.6-.8z" />
  </svg>
);

const TabIcons: Record<string, ReactNode> = {
  bundle: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7" />
      <path d="M3 7h18v5H3z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  ),
  billing: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 15h4" />
    </svg>
  ),
  verification: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  credentialing: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 21v-2a4 4 0 0 1 4-4h1" />
      <path d="m17 14 1.5 1.5L22 12" />
      <circle cx="18" cy="16" r="4.5" />
    </svg>
  ),
};

function getTabIcon(label: string): ReactNode {
  const key = label.toLowerCase();
  if (key.includes('bundle')) return TabIcons.bundle;
  if (key.includes('verification') || key.includes('eligibility')) return TabIcons.verification;
  if (key.includes('credential')) return TabIcons.credentialing;
  return TabIcons.billing;
}

function PlanGrid({ plans, ctaHref, ctaLabel }: { plans: PricingPlan[]; ctaHref: string; ctaLabel: string }): ReactNode {
  return (
    <div className={styles.pricingGrid}>
      {plans.map((plan, i) => (
        <Reveal key={plan.name} delay={i * 70}>
          <div className={`${styles.planCard} ${plan.popular ? styles.planCardPopular : ''}`}>
            {plan.popular && (
              <span className={styles.planBadge}>
                <StarIcon /> Most Popular
              </span>
            )}
            {!plan.popular && plan.badge && <span className={styles.planPromoBadge}>{plan.badge}</span>}

            <div className={styles.planNameBar}>
              <h3 className={styles.planName}>{plan.name}</h3>
            </div>

            {plan.bullets && (
              <ul className={styles.planBullets}>
                {plan.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}

            {plan.range && <p className={styles.planRange}>{plan.range}</p>}

            {plan.originalRate && <p className={styles.planOriginalRate}>{plan.originalRate}</p>}

            <div className={styles.planRateRow}>
              <span className={styles.planRate}>{plan.rate}</span>
              <span className={styles.planRateUnit}>{plan.rateUnit ?? 'of monthly collections'}</span>
            </div>

            {plan.savingsNote && <p className={styles.planSavings}>{plan.savingsNote}</p>}

            <Link to={ctaHref} className={styles.planCta}>
              {ctaLabel}
            </Link>

            <ul className={styles.planFeatures}>
              {plan.features.map((f) => (
                <li key={f}>
                  <span className={styles.planFeatureCheck}>
                    <CheckMarkIcon />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function PlanTable({
  plans,
  ctaHref,
  ctaLabel,
  showLabels = true,
  showHeader = true,
}: {
  plans: PricingPlan[];
  ctaHref: string;
  ctaLabel: string;
  showLabels?: boolean;
  showHeader?: boolean;
}): ReactNode {
  const columns = showLabels ? `minmax(150px, 1fr) repeat(${plans.length}, minmax(140px, 1fr))` : `repeat(${plans.length}, minmax(140px, 1fr))`;
  const minWidth = (showLabels ? 1 : 0) + plans.length * 150;

  return (
    <div className={styles.tableScroll}>
      <div className={styles.tableCard} style={{ gridTemplateColumns: columns, minWidth }}>
        {showHeader && (
          <>
            {showLabels && <div />}
            {plans.map((plan) => (
              <div key={`${plan.name}-h`} className={`${styles.tableHeaderCell} ${plan.popular ? styles.tableHeaderPopular : ''}`}>
                {plan.name}
              </div>
            ))}
          </>
        )}

        {showLabels && <div className={styles.tableRowLabel}>Monthly Pricing</div>}
        {plans.map((plan) => (
          <div key={`${plan.name}-rate`} className={`${styles.tableRateCell} ${plan.popular ? styles.tableColumnPopular : ''}`}>
            <span className={styles.tableRate}>{plan.rate}</span>
            {plan.rateUnit && <span className={styles.tableRateUnit}>{plan.rateUnit}</span>}
          </div>
        ))}

        {showLabels && <div className={styles.tableRowLabel}>Practice Monthly Collections</div>}
        {plans.map((plan) => (
          <div key={`${plan.name}-range`} className={`${styles.tableRangeCell} ${plan.popular ? styles.tableColumnPopular : ''}`}>
            {plan.range}
          </div>
        ))}

        {showLabels && <div />}
        {plans.map((plan) => (
          <div key={`${plan.name}-cta`} className={`${styles.tableCtaCell} ${plan.popular ? styles.tableColumnPopular : ''}`}>
            <Link to={ctaHref} className={styles.tableCta}>
              {ctaLabel}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomPricingPanel({ href }: { href: string }): ReactNode {
  return (
    <div className={styles.customPanel}>
      <p className={styles.customPanelText}>
        Pricing for this service is tailored to your practice's size and needs. Reach out for a personalized quote.
      </p>
      <Link to={href} className={styles.customPanelCta}>
        Get a Custom Quote
      </Link>
    </div>
  );
}

export default function PricingPlans({
  categories,
  ctaHref = '/book-an-appointment',
  ctaLabel = 'Choose Plan',
}: PricingPlansProps): ReactNode {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = categories[activeIndex];

  return (
    <div className={styles.pricingHead}>
      {categories.length > 1 && (
        <Reveal>
          <div className={styles.tabRow} role="tablist" aria-label="Pricing categories">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                className={`${styles.tabButton} ${i === activeIndex ? styles.tabButtonActive : ''}`}
                onClick={() => setActiveIndex(i)}>
                {getTabIcon(cat.label)}
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>
      )}

      {active.layout === 'table' && active.plans ? (
        <>
          <Reveal key={`${active.label}-banner`}>
            <div className={styles.tableBanner}>
              <h2 className={styles.tableBannerTitle}>{active.title}</h2>
              <p className={styles.tableBannerLead}>{active.lead}</p>
            </div>
          </Reveal>
          <PlanTable
            plans={active.plans}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            showLabels={active.showTableLabels ?? true}
            showHeader={active.showTableHeader ?? true}
          />
        </>
      ) : (
        <>
          <Reveal key={`${active.label}-head`}>
            <div>
              <p className={styles.eyebrow}>{active.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{active.title}</h2>
            </div>
          </Reveal>
          <Reveal key={`${active.label}-lead`} delay={40}>
            <p className={styles.pricingLead}>{active.lead}</p>
          </Reveal>

          {active.plans ? (
            <PlanGrid plans={active.plans} ctaHref={ctaHref} ctaLabel={ctaLabel} />
          ) : (
            <CustomPricingPanel href={active.customPricingHref ?? '/contact'} />
          )}
        </>
      )}
    </div>
  );
}
