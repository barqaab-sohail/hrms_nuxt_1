// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  head: {
    title: 'hrms_nuxt_1',
    htmlAttrs: {
      lang: 'en'
    },
  },
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/tailwindcss'
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  }
 
})
