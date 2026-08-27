import type { ReactNode } from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Docusaurus's gtag plugin calls `window.gtag(...)` on every client-side route
// change with no existence check. If the external googletagmanager.com script
// is blocked (ad blocker, offline, slow network) or hasn't loaded yet,
// `window.gtag` is undefined and navigation throws. Defining a queueing
// no-op stub up front means calls are safely buffered instead of crashing -
// the real gtag.js script (when it loads) drains the same `dataLayer` queue.
if (typeof window !== 'undefined' && typeof window.gtag !== 'function') {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    (window.dataLayer ??= []).push(arguments);
  };
}

export default function Root({ children }: { children: ReactNode }): ReactNode {
  return children;
}
