import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';
import { quasar } from '@quasar/vite-plugin';
import type { QuasarPluginOpts } from '@quasar/vite-plugin';
import type { QuasarOptions } from './types';

export class ViteQuasar implements QuasarPluginOpts {
  public autoImportComponentCase?: 'kebab' | 'pascal' | 'combined';

  public sassVariables?: string | boolean;

  public runMode?: 'web-client' | 'ssr-client' | 'ssr-server';

  public devTreeshaking?: boolean;

  constructor(args?: QuasarPluginOpts) {
    args = args ?? {};

    this.autoImportComponentCase = args.autoImportComponentCase;
    this.sassVariables = args.sassVariables;
    this.runMode = args.runMode;
    this.devTreeshaking = args.devTreeshaking;
  }
}

export default defineNuxtModule<QuasarOptions>({
  meta: {
    name: 'quasar',
    configKey: 'quasar',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {},
  setup(option, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.options.css.push('@quasar/extras/material-icons/material-icons.css');

    nuxt.options.appConfig = {
      ...nuxt.options.appConfig,
      $quasar: option,
    };

    const quasarPluginOpts = new ViteQuasar(option.quasarViteConfig);
    const pluginQuasar = quasar(quasarPluginOpts);

    addPlugin(resolver.resolve('./runtime/quasar'));

    nuxt.options.vite.plugins?.push(pluginQuasar);
  },
});
