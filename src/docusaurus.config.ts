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
          // label: 'Docs',
          className: 'navbar-docs-link',
          'aria-label': 'Commands'
        },
        {
          to: '/docs/category/commands',
          // label: 'Commands',
          className: 'navbar-commands-link',
          position: 'right'
        },
        {
          to: '/blog',
          // label: 'Blogs',
          // className: 'navbar-blog-link',
          html: `
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z"/>
</svg>

  `,
          position: 'right'},
        {
          href: 'https://sites.google.com/view/004ajay',
          // label: 'Portfolio',
          'aria-label': 'Portfolio Website',
          position: 'right',
          className: 'navbar-portfolio-link',
        },
        {
          href: 'https://www.github.com/004Ajay',
          // label: 'GitHub',
          'aria-label': 'GitHub repository',
          position: 'right',
          className: 'navbar-github-link',
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
