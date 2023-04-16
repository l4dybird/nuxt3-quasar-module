import type { QuasarPluginOpts } from '@quasar/vite-plugin';
import type { QuasarPluginOptions } from 'quasar/dist/types/plugin';

export interface QuasarOptions {
  quasarConfig?: Partial<QuasarPluginOptions>;
  quasarViteConfig?: QuasarPluginOpts;
}
