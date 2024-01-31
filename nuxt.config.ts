import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  extends: [
          '@crearis/theme-main',
          '@crearis/data-main',
        ],
        i18n: {
          langDir: './lang',
          locales: [
            { code: 'en', file: 'en.json' },
            { code: 'de', file: 'de.json' },
        ],
        },
  modules: ['pruvious'],
  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false
      }
    }    
  },        
  nitro: {
    prerender: {
      routes: ['/'],
      ignore: [
      '/product/',
      '/category',
      '/cart',
      '/checkout',
      '/search',
      '/my-account',
      '/order/success',
      '/order/failed',
      '/my-account/personal-data',
      '/my-account/billing-details',
      '/my-account/shipping-details',
      '/my-account/my-orders',
      '/my-account/returns',
      '/reset-password',
      '/reset-password-success',
      '/set-new-password',
      '/login',
      '/signup']
    }
    }, // #TODO _05 enable-full-nitro-prerender
  // #TODO _05 html-validation modules: ['nuxt-hydration', '@nuxtjs/html-validator'],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
})