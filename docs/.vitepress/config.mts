import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vite-press/',
  title: "Mr.Luo-blob",
  description: "Ljj_vite_press",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '内容', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '导航',
        items: [
          { text: 'Vue3', link: '/sidebar/Vue3/index.md' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    outline: {
      level: [2, 6],
      label: '目录'
    },
    logo: '../public/avatar_Luo.jpg'
  },
})
