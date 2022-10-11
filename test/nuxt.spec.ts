import { setup, createPage } from '@nuxt/test-utils';
import { fileURLToPath } from 'node:url';
import { QuasarModuleOptions } from '../src/module';
import langJa from 'quasar/lang/ja';

describe('works with module option setting', async () => {
  const sassVariablesPath = `${fileURLToPath(
    new URL('../playground', import.meta.url)
  )}/assets/styles/quasar.variables.scss`;
  const quasarModuleOptions: QuasarModuleOptions = {
    quasar: {
      lang: langJa,
    },
    quasarPlugin: {
      sassVariables: sassVariablesPath,
    },
  };

  await setup({
    browser: true,
    rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
    server: true,
    nuxtConfig: {
      ssr: false,
      buildModules: [['@l4dybird/nuxt3-quasar-module', quasarModuleOptions]],
      hooks: {
        'vite:extendConfig'(config, { isClient }) {
          config.define!.__BROWSER__ = isClient;
        },
      },
      vite: {
        define: {
          __DEV__: false,
          __TEST__: true,
          __FEATURE_PROD_DEVTOOLS__: false,
        },
      },
    },
  });

  it('render', async () => {
    const page = await createPage('/');
    const body = await page.innerHTML('body');
    expect(body).toContain('Render Quasar');
  });
});
