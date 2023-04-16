# `@l4dybird/nuxt3-quasar-module`

## Installation

```shell
npm i @l4dybird/nuxt3-quasar-module
```

## Usage

### Default

Add to `modules` (Nuxt 3) in `nuxt.config.ts`:

```js
// Nuxt 3
export default defineNuxtConfig({
  ssr: false,
  modules: ['@l4dybird/nuxt3-quasar-module'],
});
```

### Options

Add to `modules` (Nuxt 3) in `nuxt.config.ts`:

```typescript
// Nuxt 3
import langDe from 'quasar/lang/de';

export default defineNuxtConfig({
  ssr: false,
  modules: ['@l4dybird/nuxt3-quasar-module'],
  quasar: {
    // NOTE: https://github.com/quasarframework/quasar/blob/dev/ui/types/plugin.d.ts#L10
    quasarConfig: {
      lang: langDe,
    }
    // NOTE: https://github.com/quasarframework/quasar/blob/a76708e5d438f1f08cffc1b48384cef79c9c6544/vite-plugin/index.d.ts#L6
    quasarViteConfig: {
      sassVariables: 'assets/styles/quasar.variables.scss',
    },
  },
});
```

ssr is not supported  
https://quasar.dev/start/vite-plugin

## License

[MIT](http://opensource.org/licenses/MIT)
