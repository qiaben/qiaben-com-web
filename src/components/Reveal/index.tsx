import { useEffect, useRef, useState, type ReactNode } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

export type RevealProps = {
  children: ReactNode;
  /** Animation variant. Defaults to 'up' (slide up + fade). */
  variant?: 'up' | 'fade' | 'left' | 'right';
  /** Delay in ms before the animation runs once visible. */
  delay?: number;
  /** Don't fire until N% of the element is visible (0–1). */
  threshold?: number;
};

function RevealClient({ children, variant = 'up', delay = 0, threshold = 0.15 }: RevealProps): ReactNode {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[`v_${variant}`]} ${visible ? styles.visible : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

export default function Reveal(props: RevealProps): ReactNode {
  // Server-render the children unwrapped so they appear without JS.
  // Client-side hydration adds the reveal animation.
  return (
    <BrowserOnly fallback={<div>{props.children}</div>}>
      {() => <RevealClient {...props} />}
    </BrowserOnly>
  );
}
