import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Valid FAQPage JSON-LD, built from the same Q&A content already rendered
 * on the page - never fabricated. Only mount this where a page actually has
 * a real FAQ section; Google's Rich Results validator rejects (and Search
 * Console flags) an FAQPage block with no mainEntity.
 */
export default function FaqSchema({ faqs }: { faqs: FaqItem[] }): ReactNode {
  if (!faqs.length) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
}
