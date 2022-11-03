import { describe, expect, it } from 'vitest'

import { stringify } from '../src/utils'
import type { Options } from '../src/types'

describe('index', () => {
  it('stringify headers correctly', () => {
    const headers: Options = {
      '/*': [{ 'x-vitest': 'hello' }],
      '/admin': [{ 'x-vitest': false }],
    }

    const headersStringified = '/*\n\tx-vitest: hello\n/admin\n\t! x-vitest'

    const result = stringify(headers)

    expect(result).toBe(headersStringified)
  })
})
