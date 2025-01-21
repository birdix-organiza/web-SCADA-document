import { defineConfig } from 'dumi';

//github仓库名称
const defaultPath = '/web-SCADA-document'; 
//打包后gh-pages默认会拼接仓库名称在路径上
const baseUrl = process.env.NODE_ENV === 'production' ? defaultPath : '';

export default defineConfig({
  base: defaultPath,
  publicPath: `${baseUrl}/`,
  resolve: {
    docDirs: ['my-docs'],
  },
  outputPath: 'docs',
  locales: [
    { id: 'en-US', name: 'EN' },
    { id: 'zh-CN', name: '中文' },
  ],
  themeConfig: {
    name: 'Web SCADA',
    basePath: `${baseUrl}/`, // 将 base 变量注入到主题配置中
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
