import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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
      title: 'Ajay T Shaju',
      
      items: [
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
        {
          to: '/blog',
          // label: 'Blogs',
          position: 'right',
          'aria-label': 'Blogs',
          html:`<span title="Blogs">
          <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-rss-icon lucide-rss">
          <path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>`
        },
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
          to: '/ajay-resume',
          // label: 'Resume',
          position: 'left',
          'aria-label': "Ajay's Resume",
          html:`<span title="Ajay's Resume">
          <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-file-user-icon lucide-file-user">
          <path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 18a3 3 0 1 0-6 0"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><circle cx="12" cy="13" r="2"/></svg>`
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
        {
          href: 'https://sites.google.com/view/004ajay',
          // label: 'Portfolio',
          position: 'left',
          'aria-label': 'Portfolio Website',
          html:`<span title="Portfolio Website">
          <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-globe-icon lucide-globe">
          <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
        },
        {
          href: 'https://www.github.com/004Ajay',
          // label: 'GitHub',
          position: 'left',
          'aria-label': 'GitHub',
          // className: 'navbar-github-link',
          html:`<span title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-github-icon lucide-github">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`
        },
        {
          href: 'https://medium.com/@ajaytshaju',
          // label: 'Medium',
          position: 'left',
          'aria-label': 'Medium',
          html:`<span title="Medium">
          <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-medium" viewBox="0 0 16 16">
          <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"/></svg>`,
        },
        {
          href: 'https://www.linkedin.com/in/ajay-t-shaju/',
          // label: 'LinkedIn',
          position: 'left',
          'aria-label': 'LinkedIn',
          html:`<span title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>`,
        },
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