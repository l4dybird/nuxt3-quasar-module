import langJa from 'quasar/lang/ja';

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
        quasar: {
          lang: langJa,
        },
        quasarPlugin: {
          sassVariables: 'assets/styles/quasar.variables.scss',
        },
      },
    ],
  ],
  vite: {
    build: {
      chunkSizeWarningLimit: 1024,
      rollupOptions: {
        manualChunks(id) {
          if (id.includes('/node_modules/')) {
            const modules = ['quasar', '@quasar', 'vue', '@vue'];
            const chunk = modules.find((module) =>
              id.includes(`/node_modules/${module}`)
            );
            return chunk ? `vendor-${chunk}` : 'vendor';
          }
        },
      },
    },
  },
});
