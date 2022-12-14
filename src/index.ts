import { createUnplugin } from 'unplugin'
import type { Options } from './types'

import { stringify } from './utils'

const cloudflareHeadersFileName = '_headers'
const virtualHeadersFile = 'virtual:cloudflare-headers'
const resolvedVirtualHeadersFile = `\0${virtualHeadersFile}`

export default createUnplugin<Options | undefined>(options => ({
  name: 'unplugin-cloudflare-headers',

  buildStart() {
    if (!options)
      return

    const headersStringified = stringify(options)

    this.emitFile({ type: 'asset', fileName: cloudflareHeadersFileName, source: headersStringified })
  },

  resolveId(id) {
    if (id.trim() === virtualHeadersFile)
      return { id: resolvedVirtualHeadersFile }

    return null
  },

  load(id) {
    if (id === resolvedVirtualHeadersFile) {
      const headers = typeof options === 'object' ? JSON.stringify(options) : '{}'

      return `export default ${headers}`
    }
  },
}))
