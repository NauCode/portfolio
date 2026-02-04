import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Nathan Jaouen',
  tagline: 'Développeur full stack .NET',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

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
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/illustrations/coding.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Nathan Jaouen',
      logo: {
        alt: 'Logo Nathan Jaouen',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Accueil', position: 'left'},
        {to: '/competences', label: 'Compétences', position: 'left'},
        {to: '/experiences', label: 'Expériences', position: 'left'},
        {to: '/diplomes', label: 'Diplômes', position: 'left'},
        {
          type: 'html',
          position: 'right',
          value:
            '<a class="navbar__iconLink" href="https://www.linkedin.com/in/nathan-jaouen-878bb3222/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src="/img/icons/linkedin.svg" alt="LinkedIn" /></a>',
        },
        {
          type: 'html',
          position: 'right',
          value:
            '<a class="navbar__iconLink" href="https://github.com/NauCode" target="_blank" rel="noreferrer" aria-label="GitHub"><img src="/img/icons/github.svg" alt="GitHub" /></a>',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Nathan Jaouen.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
