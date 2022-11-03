import { writeFile } from 'fs/promises'
import { join } from 'path'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'

import { stringify } from './utils'

const cloudflareHeadersFileName = '_headers'
const virtualHeadersFile = 'virtual:cloudflare-headers'
const resolvedVirtualHeadersFile = `\0${virtualHeadersFile}`

export default createUnplugin<Options | undefined>(options => ({
  name: 'unplugin-cloudflare-headers',

  async writeBundle() {
    if (!options)
      return

    const headersStringified = stringify(options)

    const headersFilePath = join(process.cwd(), 'dist', cloudflareHeadersFileName)

    await writeFile(headersFilePath, headersStringified)
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
