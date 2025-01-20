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
      'zh-CN': [{ title: '指南', link: '/guide' }],
      'en-US': [{ title: 'Guide', link: '/en/guide' }],
    },
    primaryColor: '#875A7B',
  },
  favicons: ['/favicon.ico'],
});
