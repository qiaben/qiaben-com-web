import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Staging mode: when DEPLOY_ENV !== 'production', publish at qiaben.github.io/qiaben-com-web/
const isProd = process.env.DEPLOY_ENV === 'production';

const config: Config = {
  title: 'Qiaben Health',
  tagline: 'Streamlined billing. Stronger revenues. Happier practices.',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: isProd ? 'https://qiaben.com' : 'https://qiaben.github.io',
  baseUrl: isProd ? '/' : '/qiaben-com-web/',

  organizationName: 'qiaben',
  projectName: 'qiaben-com-web',

  onBrokenLinks: 'warn',

  markdown: {
    format: 'detect',
  },

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
          blogSidebarCount: 'ALL',
          postsPerPage: 10,
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
