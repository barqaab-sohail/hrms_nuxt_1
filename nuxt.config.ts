// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app:{
    head: {
      title: 'BARQAAB MIS',
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
  hooks: {
    'pages:extend' (pages) {
      // add a route
      pages.push({
        name: 'login',
        path: '/',
        file: '~/pages/login2.vue'
      })
    }
  },
  // routeRules: {
  //   // Login Page SSR false
  //   '/login2': { ssr: false },
  // },
  runtimeConfig: {
    // Private keys are only available on the server
    

    // Public keys that are exposed to the client
    public: {
      baseURL: process.env.BASE_URL,
      //apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },
  experimental: {
    payloadExtraction: true
  },
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/tailwindcss',
    'nuxt-mdi',
    'nuxt-icon',
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
