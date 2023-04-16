import { defineNuxtPlugin, useAppConfig } from '#imports';
import {
  Quasar,
  QuasarComponents,
  QuasarIconSet,
  QuasarLanguage,
  QuasarPluginOptions,
  QuasarPlugins,
  QuasarDirectives,
} from 'quasar';
import * as quasarComponents from 'quasar';
import * as quasarDirectives from 'quasar';

export class QuasarConfig implements Partial<QuasarPluginOptions> {
  public lang?: QuasarLanguage;

  public config?: any;

  public iconSet?: QuasarIconSet;

  public components?: QuasarComponents;

  public directives?: QuasarDirectives;

  public plugins?: QuasarPlugins;

  constructor(args?: QuasarConfig) {
    args = args ?? {};

    this.lang = args.lang;
    this.config = args.config;
    this.iconSet = args.iconSet;
    this.components = args.components ?? quasarComponents;
    this.directives = args.directives ?? quasarDirectives;
    this.plugins = args.plugins;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  // HACK: Refactor how QuasarConfig is referenced.
  const config = useAppConfig().$quasar.quasarConfig as QuasarConfig;
  const quasarConfig = new QuasarConfig(config);

  nuxtApp.vueApp.use(Quasar, quasarConfig);
});
