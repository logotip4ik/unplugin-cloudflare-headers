import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Unplugin from '../src/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    Unplugin({
      '/*': [{ hello: 'world' }],
      '/': [{ 'x-header-test': 'yes' }],
      '/admin': [{ 'x-header-test': false }],
      '/some-route': [{ test: 'me' }],
    }),
  ],
})
