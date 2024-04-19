// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app:{
    head: {
      title: 'hrms_nuxt_1',
      htmlAttrs: {
        lang: 'en'
      },
      
    },
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src: 'https://unpkg.com/@popperjs/core@2',
        // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ]
  },
  // routeRules: {
  //   // Login Page SSR false
  //   '/login2': { ssr: false },
  // },
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/tailwindcss',
    'nuxt-mdi',
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
