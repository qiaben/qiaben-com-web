import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export interface SeoProps {
  title?: string;
  description?: string;
  /** 'article' for blog posts, 'website' (default) for everything else. */
  type?: 'website' | 'article';
}

/**
 * Per-page SEO additions that Docusaurus's own <PageMetadata> doesn't cover:
 * canonical link, og:type, twitter:title/description, and a WebPage JSON-LD
 * block. Mounted once in the swizzled Layout wrapper so every page - MDX,
 * TSX, and blog posts - gets these automatically from its title/description.
 */
export default function Seo({ title, description, type = 'website' }: SeoProps): ReactNode {
  const { pathname } = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const canonicalUrl = `${siteConfig.url}${pathname}`;
  const websiteId = `${siteConfig.url}${siteConfig.baseUrl}#website`;

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
    isPartOf: { '@id': websiteId },
  };

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={type} />
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
      {title || description ? (
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      ) : null}
    </Head>
  );
}
