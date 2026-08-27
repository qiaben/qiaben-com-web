import type { ReactNode } from 'react';
import OriginalLayout from '@theme-original/Layout';
import { TitleFormatterProvider } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/Layout';
import Seo from '@site/src/components/Seo';

// Every page's title prop already ends in "- Qiaben Health" (or similar), so
// Docusaurus's default " | Qiaben Health" site-title suffix would double up
// (e.g. "...Happier Practices. | Qiaben Health" tacked onto a title that
// already says Qiaben Health). Skip the suffix whenever the page title
// already names the brand; fall back to the default formatter otherwise.
function titleFormatter({
  title,
  siteTitle,
  titleDelimiter,
  defaultFormatter,
}: {
  title?: string;
  siteTitle: string;
  titleDelimiter: string;
  defaultFormatter: (params: { title?: string; siteTitle: string; titleDelimiter: string }) => string;
}): string {
  const trimmed = title?.trim();
  if (trimmed && trimmed.toLowerCase().includes('qiaben')) {
    return trimmed;
  }
  return defaultFormatter({ title, siteTitle, titleDelimiter });
}

/**
 * Thin wrap around the stock Layout: every page (MDX, TSX, and anything
 * else that passes title/description straight to <Layout>) picks up
 * canonical link + og:type + twitter:title/description + WebPage JSON-LD
 * for free. Blog list/post pages set their own metadata separately (see
 * their swizzled components), so they carry their own <Seo> call instead.
 */
export default function LayoutWrapper(props: Props): ReactNode {
  // Blog list/post pages call <Layout> without title/description (they set
  // PageMetadata + their own <Seo> separately) - skip here to avoid emitting
  // a second, conflicting canonical/JSON-LD block for those routes.
  return (
    <TitleFormatterProvider formatter={titleFormatter}>
      {props.title ? <Seo title={props.title} description={props.description} /> : null}
      <OriginalLayout {...props} />
    </TitleFormatterProvider>
  );
}
