import type { ReactNode } from 'react';
import styles from './styles.module.css';

export type RevealProps = {
  children: ReactNode;
  variant?: 'up' | 'fade' | 'left' | 'right';
  /** Delay in ms before the animation runs. */
  delay?: number;
  /** Kept for API compatibility; CSS-only animation does not use this. */
  threshold?: number;
};

/**
 * Reveal is a simple CSS animation wrapper. The animation runs once when the
 * element is first painted. No IntersectionObserver — that approach was unreliable
 * for SSR snapshots, Playwright fullpage screenshots, and prefers-reduced-motion.
 *
 * Content is always rendered (and SSR-visible). The animation is cosmetic.
 */
export default function Reveal({ children, variant = 'up', delay = 0 }: RevealProps): ReactNode {
  return (
    <div
      className={`${styles.reveal} ${styles[`v_${variant}`]}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
