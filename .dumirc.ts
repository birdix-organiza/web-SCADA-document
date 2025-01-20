import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [
    { id: 'en-US', name: 'EN' },
    { id: 'zh-CN', name: '中文' },
  ],
  themeConfig: {
    name: 'Web SCADA',
    logo: false,
    nav: {
      'en-US': [
        { title: 'Install', link: '/install' },
        { title: 'Usage', link: '/usage' },
      ],
      'zh-CN': [
        { title: '安装', link: '/zh-CN/install' },
        { title: '使用指南', link: '/zh-CN/usage' },
      ],
    },
    primaryColor: '#875A7B',
  },
  favicons: ['/favicon.ico'],
});
