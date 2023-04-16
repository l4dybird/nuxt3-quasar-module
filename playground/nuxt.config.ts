import langJa from 'quasar/lang/ja';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/styles/quasar.scss'],
  modules: ['@l4dybird/nuxt3-quasar-module'],
  quasar: {
    quasarConfig: {
      lang: langJa,
    },
    quasarViteConfig: {
      sassVariables: 'assets/styles/quasar.variables.scss',
    },
  },
});
