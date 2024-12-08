// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
/*   vite: {
    server: {
      host: process.env.HOST || 'localhost',
      port: Number(process.env.PORT) || 3000
    }
  } */
})
