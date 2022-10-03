// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  meta: {
    title: 'Nuxt App',
  },
  css: ['~/assets/styles/quasar.scss'],
  buildModules: [
    [
      '@l4dybird/nuxt3-quasar-module',
      {
        viteConfig: {
          sassVariables: '~/assets/styles/quasar.variables.scss',
        },
      },
    ],
  ],
});
