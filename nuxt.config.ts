import type { NuxtConfigApp } from '@/types'

// import fs from 'fs'
// import path from 'path'

const devServer = {
  https: true,
  // https: {
  //   key: fs.readFileSync(path.resolve(__dirname, '.https/localhost-key.pem')).toString(),
  //   cert: fs.readFileSync(path.resolve(__dirname, '.https/localhost.pem')).toString(),
  // },
}

const app: Partial<NuxtConfigApp> = {
  head: {
    htmlAttrs: { lang: 'en' },
    link: [
      /* PWA & SEO*/
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/pwa/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/pwa/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/pwa/favicon-16x16.png' },
      { rel: 'manifest', href: '/pwa/site.webmanifest' },
      { rel: 'mask-icon', href: '/pwa/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'shortcut icon', href: '/pwa/favicon.ico' },
    ],
    meta: [
      /* PWA */
      { name: 'apple-mobile-web-app-title', content: 'Gen for me' },
      { name: 'application-name', content: 'Gen for me' },
      { name: 'msapplication-TileColor', content: '#603cba' },
      { name: 'msapplication-config', content: '/pwa/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' },
      /* SEO */
      { name: 'description', content: 'Meow' },
      { property: 'og:title', content: 'Gen for me' },
      { property: 'og:description', content: 'Meow' },
      { property: 'og:url', content: 'https://genforme.milley.uno' },
      { property: 'og:image', content: '/pwa/ios/128.png' },
      { property: 'og:site_name', content: 'Gen for me' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image:alt', content: 'Gen for me' },
    ],
  },
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/i18n',
  ],
  tailwindcss: {
    configPath: '@/tailwind.config.ts',
    cssPath: ['@/assets/css/tailwind.css', { injectPosition: 'first' }],
    viewer: false,
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
    dataValue: 'theme',
    storageKey: 'theme',
  },
  i18n: { vueI18n: '@/i18n.config.ts' },
  imports: {
    dirs: ['stores'],
    presets: [{ from: '@/src/constants/routing', imports: ['NUXT_LINKS'] }],
  },
  app,
  extensions: ['.ts', '.vue', '.js'],
  devServer: import.meta.env.NODE_ENV === 'development' ? { ...devServer } : {},
  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'NUXT_'],
  },
})
