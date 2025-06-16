import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AJAY',
  tagline: 'Personal Website',
  favicon: 'img/AJ.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://004ajay.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'github', // Usually your GitHub org/user name.
  projectName: '004Ajay', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/Ajay.jpg',
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'Ajay T Shaju',
      logo: {
        alt: 'My Site Logo',
        src: 'img/AJ.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Docs',
        },
        {to: '/docs/category/commands', label: 'Commands', position: 'right'},
        {to: '/blog', label: 'Blogs', position: 'right'},
        {
          href: 'https://sites.google.com/view/004ajay',
          label: 'Portfolio',
          position: 'right',
        },
        {
          href: 'https://www.github.com/004Ajay',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contents',
          items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Blogs',
                to: '/blog',
              },
              {
                label: 'Commands',
                to: '/docs/category/commands',
              },
          ],
        },
        {
          title: 'Connect',
          items: [
              {
                label: 'Portfolio Website',
                href: 'https://sites.google.com/view/004ajay',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ajay-t-shaju/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/004Ajay',
              },
            ],
          },
        {
            title: 'Other',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/19319231/ajay',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@Ajaytshaju',
              },
              {
                label: 'X',
                href: 'https://x.com/004ajayt',
              },
            ],
          },
        ],
        copyright: `© AJAY ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
