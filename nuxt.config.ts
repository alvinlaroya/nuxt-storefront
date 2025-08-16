// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  shopify: {
    name: 'journee-collection',
    clients: {
      storefront: {
        apiVersion: '2025-07',
        publicAccessToken: '0390f216afb6c9f013e15bdf2e24519d',
      },

      /* storefront: {
        mock: true,

        apiVersion: '2025-07',
      }, */

      /* admin: {
        apiVersion: '2025-07',
        accessToken: 'YOUR_ACCESS_TOKEN',
      }, */
    },
  },

  image: {
    image: {
      provider: 'netlify',
      domains: ['https://cdn.shopify.com/']
    }

    /* shopify: {
      baseURL: '',
    } */
  },

  modules: [
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@konkonam/nuxt-shopify'
  ],
})