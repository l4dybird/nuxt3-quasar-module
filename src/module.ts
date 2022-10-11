import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';
import { ModuleOptions } from '@nuxt/schema/dist';
import { QuasarPluginOptions } from 'quasar';
import { quasar, QuasarPluginOpts } from '@quasar/vite-plugin';

export interface QuasarModuleOptions extends ModuleOptions {
  quasar?: Partial<QuasarPluginOptions>;
  quasarPlugin?: QuasarPluginOpts;
}

class ViteQuasarConfig implements Partial<QuasarPluginOpts> {
  public autoImportComponentCase?: 'kebab' | 'pascal' | 'combined';

  public sassVariables?: string | boolean;

  public runMode?: 'web-client' | 'ssr-client' | 'ssr-server';

  public devTreeshaking?: boolean;

  constructor(args: QuasarPluginOpts) {
    args = args ?? {};

    this.autoImportComponentCase = args.autoImportComponentCase ?? 'kebab';
    this.sassVariables = args.sassVariables ?? false;
    this.runMode = args.runMode ?? 'web-client';
    this.devTreeshaking = args.devTreeshaking ?? false;
  }
}

export default defineNuxtModule({
  setup(option, nuxt) {
    const resolver = createResolver(import.meta.url);

    const { quasar: quasarConfig, quasarPlugin } =
      option as QuasarModuleOptions;
    nuxt.options.appConfig['$quasar'] = quasarConfig;

    nuxt.options.css.push(
      'quasar/src/css/index.sass',
      '@quasar/extras/material-icons/material-icons.css'
    );

    const quasarPluginOpts: QuasarPluginOpts = new ViteQuasarConfig(
      quasarPlugin
    );
    const pluginQuasar = quasar(quasarPluginOpts);

    const viteConfig = nuxt.options.vite;

    viteConfig['plugins']
      ? viteConfig.plugins.push(pluginQuasar)
      : (viteConfig['plugins'] = [pluginQuasar]);

    addPlugin(resolver.resolve('./runtime/quasar'));
  },
});
