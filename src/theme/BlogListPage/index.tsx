import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation, useHistory } from '@docusaurus/router';
import { PageMetadata, HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common';
import type { Props } from '@theme/BlogListPage';
import styles from './styles.module.css';

const DocIcon = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
  </svg>
);

function formatDate(date: string): string {
  const d = new Date(date);
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  const yyyy = d.getUTCFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

function BlogCard({ content: Content }: { content: Props['items'][number]['content'] }): ReactNode {
  const { metadata, assets } = Content;
  const frontMatterImage = typeof metadata.frontMatter.image === 'string' ? metadata.frontMatter.image : undefined;
  // assets.image is only populated for webpack-resolved `./relative` paths; absolute
  // `/img/...` frontmatter paths stay as raw strings and need the baseUrl prefix applied.
  const resolvedFrontMatterImage = useBaseUrl(frontMatterImage ?? '/__none__');
  const image = assets.image ?? (frontMatterImage ? resolvedFrontMatterImage : undefined);

  return (
    <Link to={metadata.permalink} className={styles.card}>
      {image ? (
        <img src={image} alt="" className={styles.cardImage} loading="lazy" />
      ) : (
        <div className={styles.cardImageFallback}>
          <DocIcon />
        </div>
      )}
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{metadata.title}</h2>
        <p className={styles.cardExcerpt}>{metadata.description}</p>
        <p className={styles.cardMeta}>
          {formatDate(metadata.date)} <span aria-hidden="true">&bull;</span> No Comments
        </p>
      </div>
    </Link>
  );
}

function Paginator({ metadata }: { metadata: Props['metadata'] }): ReactNode {
  const totalPages = Math.max(1, Math.ceil(metadata.totalCount / metadata.postsPerPage));
  if (totalPages <= 1) {
    return null;
  }
  const basePermalink = metadata.permalink.replace(/\/page\/\d+\/?$/, '') || '/blog';
  const pageLink = (page: number) => (page <= 1 ? basePermalink : `${basePermalink}/page/${page}`);

  return (
    <nav className={styles.paginator} aria-label="Blog list page navigation">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          to={pageLink(page)}
          className={clsx(styles.pageLink, page === metadata.page && styles.pageLinkActive)}
          aria-current={page === metadata.page ? 'page' : undefined}>
          {page}
        </Link>
      ))}
    </nav>
  );
}

function SearchBar(): ReactNode {
  const location = useLocation();
  const history = useHistory();
  const blogUrl = useBaseUrl('/blog');
  const initialQuery = new URLSearchParams(location.search).get('q') ?? '';
  const [query, setQuery] = useState(initialQuery);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    history.push(trimmed ? `${blogUrl}?q=${encodeURIComponent(trimmed)}` : blogUrl);
  };

  return (
    <form className={styles.searchBox} onSubmit={onSubmit} role="search">
      <input
        type="search"
        placeholder="Search..."
        aria-label="Search blog posts"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" aria-label="Search">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </form>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  const { metadata, items } = props;
  const { blogDescription, blogTitle } = metadata;
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q')?.trim().toLowerCase() ?? '';
  const visibleItems = query
    ? items.filter(({ content }) => content.metadata.title.toLowerCase().includes(query))
    : items;

  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}>
      <PageMetadata title={blogTitle} description={blogDescription} />
      <Layout>
        <div className={styles.page}>
          <section className={styles.titleBar}>
            <h1>News &amp; Blogs</h1>
          </section>
          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <SearchBar />
              {query && (
                <p className={styles.searchStatus}>
                  {visibleItems.length > 0
                    ? `Showing results for "${query}" on this page`
                    : `No results for "${query}" on this page — try browsing another page`}
                </p>
              )}
              <div className={styles.grid}>
                {visibleItems.map(({ content }) => (
                  <BlogCard key={content.metadata.permalink} content={content} />
                ))}
              </div>
              {!query && <Paginator metadata={metadata} />}
            </div>
          </section>
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
}
