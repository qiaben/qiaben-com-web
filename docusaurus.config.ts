import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Staging mode: when DEPLOY_ENV !== 'production', publish at qiaben.github.io/qiaben-com-web/
const isProd = process.env.DEPLOY_ENV === 'production';
// Klaviyo onsite script company_id. Set via env var or repo variable at deploy time.
// Leave empty until provided — embed divs render but stay empty without the loader.
const KLAVIYO_COMPANY_ID = process.env.KLAVIYO_COMPANY_ID || '';
// Tidio public key (the part before ".js" in //code.tidio.co/<key>.js).
// Same key used by the live qiaben.com chat widget. Override via
// TIDIO_PUBLIC_KEY env var if this ever needs to point elsewhere.
const TIDIO_PUBLIC_KEY = process.env.TIDIO_PUBLIC_KEY || 'c4xmkajfbp230qqhrln4spkryvrh92pp';

// Site origin + base path, reused below for both Docusaurus's own url/baseUrl
// fields and the absolute URLs baked into the sitewide JSON-LD.
const SITE_ORIGIN = isProd ? 'https://qiaben.com' : 'https://qiaben.github.io';
const BASE_PATH = isProd ? '/' : '/qiaben-com-web/';
const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

const config: Config = {
  title: 'Qiaben Health',
  tagline: 'Streamlined billing. Stronger revenues. Happier practices.',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: SITE_ORIGIN,
  baseUrl: BASE_PATH,

  organizationName: 'qiaben',
  projectName: 'qiaben-com-web',

  onBrokenLinks: 'warn',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownImages: 'warn',
    },
  },

  // Mirror analytics from live qiaben.com (WP).
  headTags: [
    // ---------- SEO: sitewide static tags ----------
    // Same value on every page, so these live here once instead of being
    // repeated per-page. Per-page tags (canonical, og:type, twitter:title,
    // WebPage JSON-LD) come from <Seo> — see src/components/Seo and the
    // swizzled Layout/BlogListPage/BlogPostPage that mount it.
    {
      tagName: 'meta',
      attributes: { name: 'robots', content: 'max-image-preview:large' },
    },
    {
      tagName: 'meta',
      attributes: { property: 'og:site_name', content: 'Qiaben Health' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'apple-touch-icon', href: `${BASE_PATH}img/favicon.png` },
    },
    // Organization + WebSite JSON-LD — identical on every page (unlike the
    // per-page WebPage/Article block from <Seo>), so it belongs here rather
    // than being re-emitted by every route.
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': `${SITE_URL}#organization`,
          name: 'Qiaben Healthcare Solutions',
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}img/logo-navbar.png`,
            width: 240,
            height: 80,
          },
          sameAs: [
            'https://www.facebook.com/qiaben.usa',
            'https://twitter.com/Qiaben_usa',
            'https://www.youtube.com/@Qiaben',
            'https://www.linkedin.com/company/qiaben/',
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${SITE_URL}#website`,
          name: 'Qiaben Health',
          url: SITE_URL,
          description: 'Professional practice management services',
          publisher: { '@id': `${SITE_URL}#organization` },
        },
      ]),
    },
    // Premium heading/body typeface pairing (Plus Jakarta Sans + Inter).
    // Falls back to the system font stack in custom.css until this loads,
    // so there's never an invisible-text flash.
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap',
      },
    },
    // Facebook Pixel
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '829763808937153');
        fbq('track', 'PageView');
      `,
    },
    // Second GTM container (the primary one is wired via the googleTagManager preset option).
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P59P9PBR');
      `,
    },
    // Klaviyo onsite script — loads only if KLAVIYO_COMPANY_ID is set at build time.
    // Without it, klaviyo-form-* divs stay empty (the loader isn't present to populate them).
    ...(KLAVIYO_COMPANY_ID
      ? [
          {
            tagName: 'script',
            attributes: {
              async: 'true',
              src: `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_COMPANY_ID}`,
            } as Record<string, string>,
          },
        ]
      : []),
    // Tidio live-chat widget — same bottom-right bubble as qiaben.com.
    // Renders nothing until TIDIO_PUBLIC_KEY is set at build time.
    ...(TIDIO_PUBLIC_KEY
      ? [
          {
            tagName: 'script',
            attributes: {
              async: 'true',
              src: `//code.tidio.co/${TIDIO_PUBLIC_KEY}.js`,
            } as Record<string, string>,
          },
        ]
      : []),
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          showReadingTime: true,
          blogTitle: 'Qiaben Resources',
          blogDescription:
            'Articles on medical billing, RCM, dental billing, EHR, and practice management.',
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 5,
          postsPerPage: 9,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'Qiaben Resources',
            description: 'Articles from Qiaben Health.',
          },
          onInlineTags: 'ignore',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        // Analytics only run in production — staging/dev builds skip GTM/gtag
        // entirely so local work never depends on googletagmanager.com being
        // reachable (avoids "window.gtag is not a function" crashes when the
        // external script is blocked, offline, or simply not yet loaded).
        ...(isProd
          ? {
              // Primary GTM container (mirrors what's on qiaben.com).
              googleTagManager: {
                containerId: 'GTM-PJJZ78Q3',
              },
              // GA4 + Google Ads + GA4 server-side — multiple gtag IDs in one config.
              gtag: {
                trackingID: [
                  'G-M2TQG7MBXB',
                  'G-DEQLSJEEPP',
                  'GT-KTRJXSJ4',
                  'AW-11217555008',
                ],
                anonymizeIP: false,
              },
            }
          : {}),
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/qiaben-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Qiaben Health',
      logo: {
        alt: 'Qiaben Health',
        src: 'img/logo-navbar.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Services',
          position: 'left',
          items: [
            { label: 'Medical billing', to: '/medical-billing-service' },
            { label: 'Dental billing', to: '/dental-billing-services' },
            { label: 'Practice management', to: '/professional-practice-management-services' },
            { label: 'Medical scribe', to: '/medical-scribe-services-by-qiaben' },
            { label: 'Ambulance billing', to: '/ambulance-billing' },
            { label: 'Physician credentialing', to: '/physician-credentialing' },
            { label: 'Patient assessment', to: '/patient-assessment' },
            { label: 'Medical coding', to: '/medical-coding' },
            { label: 'Insurance verification', to: '/insurance-verification' },
            { label: 'Patient billing', to: '/patient-billing' },
            { label: 'Well care services', to: '/well-care-services' },
            { label: 'MD Audit Shield', to: '/md-audit-shield' },
          ],
        },
        { to: '/specialties', label: 'Specialties', position: 'left' },
        { to: '/ehr-emr', label: 'EHR / EMR', position: 'left' },
        { to: '/blog', label: 'Resources', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
        { to: '/contact', label: 'Contact', position: 'right' },
        {
          href: 'https://calendly.com/qiaben/15-minutes-meeting',
          label: 'Free consultation',
          position: 'right',
          className: 'navbar-cta',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Services',
          items: [
            { label: 'Medical billing', to: '/medical-billing-service' },
            { label: 'Dental billing', to: '/dental-billing-services' },
            { label: 'Practice management', to: '/professional-practice-management-services' },
            { label: 'Medical scribe', to: '/medical-scribe-services-by-qiaben' },
            { label: 'Ambulance billing', to: '/ambulance-billing' },
          ],
        },
        {
          title: 'Solutions',
          items: [
            { label: 'EHR / EMR', to: '/ehr-emr' },
            { label: 'Insurance verification', to: '/insurance-verification' },
            { label: 'Patient billing', to: '/patient-billing' },
            { label: 'Physician credentialing', to: '/physician-credentialing' },
            { label: 'Specialties', to: '/specialties' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'About', to: '/about' },
            { label: 'Resources', to: '/blog' },
            { label: 'Contact', to: '/contact' },
            {
              label: 'Free consultation',
              href: 'https://calendly.com/qiaben/15-minutes-meeting',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy Policy', to: '/privacy-policy' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Qiaben Inc. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
