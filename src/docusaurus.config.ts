import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AJAY',
  tagline: '',
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
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  // onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // === START: Plugin Configuration for docusaurus-plugin-search-local ===
  plugins: [
    // This is the only plugin entry you should have here if you're just adding search.
    // Make sure NO OTHER lines (like './src/plugins/no-minify-plugin.js') are present or uncommented here.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true, // Whether to use hash in the index file name
        // language: ['en'], // Languages to support. 'en' for English.
        indexBlog: true, // Index blog posts
        indexDocs: true, // Index documentation pages
        indexPages: true, // Index static pages (like your /resume or /index, i.e. 'src/pages')
        docsDir: 'docs', // Docs folder path relative to the site root (usually 'docs')
        blogDir: 'blog', // Blog folder path relative to the site root (usually 'blog')
        highlightSearchTermsOnTargetPage: true,
        // hideSearchBarWithNoSearchContext: true,
        // searchBarShortcut: true,
        // searchBarShortcutKeymap: "/", // Set '/' as the shortcut key to focus on the search bar
      },
    ],
  ],
  // === END: Plugin Configuration ===

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css', // the version and integrity of KaTeX should match
      type: 'text/css',
      integrity:'sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    // image: 'img/Ajay.jpg',
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: '',
      
      items: [
        {
          // show name explicitly on left
          to: '/',
          html: `<span class="navbar-name">AJAY T SHAJU</span>`,
          position: 'left',
        },
        {
          to: '/',
          position: 'right',
          // label: 'Docs',
          'aria-label': 'Home',
          html:`<span title="Home">
          <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-house-icon lucide-house">
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          // label: 'Docs',
          'aria-label': 'Docs',
          html:`<span title="Docs">
          <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-files-icon lucide-files">
          <path d="M20 7h-3a2 2 0 0 1-2-2V2"/><path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"/><path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"/></svg>`
        },
        // {
        //   to: '/blog',
        //   // label: 'Blogs',
        //   position: 'right',
        //   'aria-label': 'Blogs',
        //   html:`<span title="Blogs">
        //   <svg xmlns="http://www.w3.org/2000/svg"
        //   width="20"
        //   height="20"
        //   viewBox="0 0 24 24"
        //   fill="none"
        //   stroke="currentColor"
        //   stroke-width="2"
        //   stroke-linecap="round"
        //   stroke-linejoin="round"
        //   class="lucide lucide-rss-icon lucide-rss">
        //   <path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>`
        // },
        {
          to: '/docs/category/commands',
          // label: 'Commands',
          position: 'right',
          'aria-label': 'Commands',
          html: `<span title="Commands">
          <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-square-terminal-icon lucide-square-terminal">
          <path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>`
        },
        {
          to: '/docs/category/programming',
          // label: 'Programming',
          position: 'right',
          'aria-label': 'Programming',
          html: `<span title="Programming">
          <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-code-xml-icon lucide-code-xml">
          <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`
        },
        {
          to: '/docs/category/gists',
          // label: 'Gists',
          position: 'right',
          'aria-label': "Gists",
          html:`<span title="Gists">
          <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-scroll-text-icon lucide-scroll-text"><path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`
        },
        {
          to: '/docs/category/maths',
          // label: 'Maths',
          position: 'right',
          'aria-label': "Maths",
          html:`<span title="Maths">
          <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-diff-icon lucide-diff"><path d="M12 3v14"/><path d="M5 10h14"/><path d="M5 21h14"/></svg>`
        },
        // moved social/resume links out of navbar and into footer (Info)
        // === ADD THIS SEARCH ITEM ===
        {
          type: 'search', // This tells Docusaurus to render the search bar provided by the plugin
          position: 'right', // You can change this to 'left' if you prefer
        },
        // === END OF SEARCH ITEM ===
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Info',
          items: [
            {
              label: "Resume",
              to: '/ajay-resume',
            },
            {
              label: 'Portfolio Website',
              href: 'https://sites.google.com/view/004ajay',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/004Ajay',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@ajaytshaju',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/ajay-t-shaju/',
            },
          ],
        },
        {
          title: 'Contents',
          items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              // {
              //   label: 'Blogs',
              //   to: '/blog',
              // },
              {
                label: 'Commands',
                to: '/docs/category/commands',
              },
              {
                label: 'About',
                to: '/about',
              }
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
                href: 'https://www.youtube.com/@004Ajay',
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
      additionalLanguages: ['bash', 'python', 'json', 'yaml', 'docker', 'git', 'powershell', 'typescript', 'javascript', 'java', 'ini', 'toml', 'markdown']

    },
  } satisfies Preset.ThemeConfig,
};

export default config;
