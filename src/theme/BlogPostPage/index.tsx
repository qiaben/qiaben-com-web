import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useHistory } from '@docusaurus/router';
import {
  HtmlClassNameProvider,
  ThemeClassNames,
  PageMetadata,
} from '@docusaurus/theme-common';
import { BlogPostProvider, useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BookingForm from '@site/src/components/BookingForm';
import Seo from '@site/src/components/Seo';
import blogThumbnails from '@site/src/data/blogThumbnails.json';
import type { Props } from '@theme/BlogPostPage';
import styles from './styles.module.css';

function slugFromPermalink(permalink: string): string {
  return permalink.replace(/\/$/, '').split('/').pop() ?? '';
}

function thumbnailFor(permalink: string): string | undefined {
  const slug = slugFromPermalink(permalink);
  return (blogThumbnails as Record<string, string>)[slug];
}

function formatDate(date: string | Date): string {
  const d = new Date(date);
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  const yyyy = d.getUTCFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

function SearchBox(): ReactNode {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const blogUrl = useBaseUrl('/blog');

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

function LastPostItem({ item }: { item: Props['sidebar']['items'][number] }): ReactNode {
  const image = thumbnailFor(item.permalink);
  const resolvedImage = useBaseUrl(image ?? '/__none__');

  return (
    <Link to={item.permalink} className={styles.lastPostItem}>
      {image ? (
        <img src={resolvedImage} alt="" loading="lazy" />
      ) : (
        <span className={styles.lastPostFallback} aria-hidden="true">
          📄
        </span>
      )}
      <span className={styles.lastPostBody}>
        <span className={styles.lastPostTitle}>{item.title}</span>
        <span className={styles.lastPostMeta}>
          {formatDate(item.date)} <span aria-hidden="true">&bull;</span> No Comments
        </span>
      </span>
    </Link>
  );
}

function LastPosts({ items }: { items: Props['sidebar']['items'] }): ReactNode {
  if (items.length === 0) {
    return null;
  }
  return (
    <div className={styles.lastPost}>
      <h3>Last Post</h3>
      <ul>
        {items.map((item) => (
          <li key={item.permalink}>
            <LastPostItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const ShareIcon = ({ path }: { path: string }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d={path} />
  </svg>
);

const SHARE_ICONS = {
  facebook: 'M13.5 9H15V6.5h-1.6c-2 0-3.4 1.2-3.4 3.4V11H8v2.5h2v6.5h2.6V13.5H15l.4-2.5h-2.8V10c0-.6.4-1 1-1z',
  twitter:
    'M20 6.4c-.6.3-1.2.5-1.9.6.7-.4 1.2-1.1 1.4-1.8-.6.4-1.4.7-2.1.8-.6-.7-1.5-1.1-2.4-1.1-1.8 0-3.3 1.5-3.3 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4v.1c0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.3-1.1.9-2.5 1.4-4 1.4-.3 0-.5 0-.8 0 1.4.9 3.1 1.5 4.9 1.5 5.9 0 9.1-4.9 9.1-9.1v-.4c.6-.4 1.2-1 1.6-1.7z',
  linkedin:
    'M6.9 8.6H4V19h2.9V8.6zM5.5 4.5c-1 0-1.7.7-1.7 1.6 0 .9.7 1.6 1.6 1.6 1 0 1.7-.7 1.7-1.6 0-.9-.7-1.6-1.6-1.6zM20 12.7c0-2.5-1.3-3.7-3.1-3.7-1.4 0-2.1.8-2.4 1.4V8.6H11.6c0 .8 0 10.4 0 10.4h2.9v-5.8c0-.3 0-.6.1-.9.2-.6.8-1.2 1.7-1.2 1.2 0 1.7.9 1.7 2.3V19H20v-6.3z',
  link: 'M3.9 12a4 4 0 0 1 4-4h3v1.6H8a2.5 2.5 0 0 0 0 5h3V16H8a4 4 0 0 1-4.1-4zm7-1h5v2h-5zm3-3h3a4 4 0 1 1 0 8h-3v-1.6h3a2.5 2.5 0 0 0 0-5h-3z',
};

function ShareRow({ title, permalink }: { title: string; permalink: string }): ReactNode {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}${permalink}` : permalink;

  const links = [
    { label: 'Share on Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, icon: 'facebook' as const },
    { label: 'Share on Twitter', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, icon: 'twitter' as const },
    { label: 'Share on LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, icon: 'linkedin' as const },
  ];

  return (
    <div className={styles.shareRow}>
      <span>Share it :</span>
      <div className={styles.shareIcons}>
        {links.map((l) => (
          <a key={l.icon} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label}>
            <ShareIcon path={SHARE_ICONS[l.icon]} />
          </a>
        ))}
        <button
          type="button"
          aria-label="Copy link"
          onClick={() => {
            if (typeof navigator !== 'undefined' && navigator.clipboard) {
              navigator.clipboard.writeText(shareUrl).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              });
            }
          }}>
          <ShareIcon path={SHARE_ICONS.link} />
        </button>
        {copied && <span className={styles.copiedTag}>Copied!</span>}
      </div>
    </div>
  );
}

function AuthorCard(): ReactNode {
  const { metadata } = useBlogPost();
  const author = metadata.authors[0];
  if (!author) {
    return null;
  }
  const initial = author.name?.charAt(0).toUpperCase() ?? 'Q';

  return (
    <div className={styles.authorCard}>
      {author.imageURL ? (
        <img src={author.imageURL} alt={author.name} />
      ) : (
        <span className={styles.authorAvatarFallback} aria-hidden="true">
          {initial}
        </span>
      )}
      <span className={styles.authorName}>{author.name}</span>
    </div>
  );
}

function BlogPostPageContent({ children, sidebarItems }: { children: ReactNode; sidebarItems: Props['sidebar']['items'] }): ReactNode {
  const { metadata } = useBlogPost();
  const { title, permalink, date, readingTime } = metadata;

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.container}>
          <article className={clsx('qb-mdxBody', styles.article)}>
            <h1 className={styles.postTitle}>{title}</h1>
            <p className={styles.postMeta}>
              {formatDate(date)}
              {typeof readingTime !== 'undefined' && (
                <>
                  {' '}
                  <span aria-hidden="true">&bull;</span> {Math.ceil(readingTime)} min read
                </>
              )}
            </p>
            {children}
            <ShareRow title={title} permalink={permalink} />
            <AuthorCard />
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.revenueBox}>
              <h3>Boost Your Practice Revenue</h3>
              <ul>
                <li>Affordable RCM</li>
                <li>Expert consultation - free</li>
              </ul>
              <BookingForm title="Book an Appointment" />
            </div>
            <SearchBox />
            <LastPosts items={sidebarItems} />
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default function BlogPostPage(props: Props): ReactNode {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogPostPage)}>
        <PageMetadata title={BlogPostContent.metadata.title} description={BlogPostContent.metadata.description} />
        <Seo
          title={BlogPostContent.metadata.title}
          description={BlogPostContent.metadata.description}
          type="article"
        />
        <BlogPostPageContent sidebarItems={props.sidebar.items}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
