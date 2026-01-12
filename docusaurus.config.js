// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
// docusaurus.config.js

const config = {
  title: 'OpenSourceFleet', // 网站标题
  tagline: 'The Global Resource Hub for Open Source Fleet Technologies', // Slogan
  url: 'https://opensourcefleet.com', // 你的域名
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', // 后面记得换个简单的 Logo 图标

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'opensourcefleet', // Usually your GitHub org/user name.
  projectName: 'opensourcefleet', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // 禁用 blog 功能
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 🌟 顶部导航栏 (Navbar)
      navbar: {
        title: 'OpenSourceFleet',
        logo: {
          alt: 'OpenSourceFleet Logo',
          src: 'img/logo.svg',
        },
        items: [
          // 把默认的 "Tutorial" 改成 "Software List"
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Software List', // 核心栏目：软件清单
          },

          // 🔗 关键一步：在导航栏放 OpenFMS 的外链
          {
            href: 'https://openfms.io',
            label: 'Get OpenFMS', 
            position: 'right',
            className: 'button button--primary button--sm', // 把它变成高亮按钮样式
          },
        ],
      },
      
      // 🌟 底部版权 (Footer)
      footer: {
        style: 'dark',
        links: [
          // ... 自定义底部链接
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenSourceFleet. Sponsored by OpenFMS.`, // 明确标注赞助商
      },
      
      // 🌟 顶部公告栏 (用来强力导流)
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'Looking for a modern alternative to Traccar? Check out <a target="_blank" rel="noopener noreferrer" href="https://openfms.io">OpenFMS</a> (Golang + React).',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
    }),
};

module.exports = config;


