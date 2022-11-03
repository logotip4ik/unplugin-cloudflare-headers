# unplugin-cloudflare-headers

[![NPM version](https://img.shields.io/npm/v/unplugin-cloudflare-headers?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-cloudflare-headers)

## Install

```bash
npm i unplugin-cloudflare-headers
```


## Usage

Vite

```ts
// vite.config.ts
import CloudflareHeaders from 'unplugin-cloudflare-headers/vite'

export default defineConfig({
  plugins: [
    CloudflareHeaders({ /* options */ }),
  ],
})
```

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import CloudflareHeaders from 'unplugin-cloudflare-headers/rollup'

export default {
  plugins: [
    CloudflareHeaders({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-cloudflare-headers/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import CloudflareHeaders from 'unplugin-cloudflare-headers/esbuild'

build({
  plugins: [CloudflareHeaders()],
})
```

<br></details>


## Options

Top level keys of the options are route definitions. Each route should have an array of headers. Headers are simple object, where key is header name and value (`string` or `false`) is header value. Let's see example.

This options:
```js
const options = {
  '/*': [{ 'x-testing': 'hello 🌐' }],
  '/admin': [{ 'x-testing': false }]
  // use `false` as header value to detach header from specific route
}
```

will result into this `_headers` file:

```text
/*
	x-testing: hello 🌐
/admin
	! x-testing
```

More on `_headers` file in [cloudflare docs](https://developers.cloudflare.com/pages/platform/headers)

License [MIT](./LICENSE)
