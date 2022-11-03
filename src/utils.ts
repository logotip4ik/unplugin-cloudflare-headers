import type { Options } from './types'

export function stringify(obj: Options) {
  let result = ''

  if (!obj || Object.keys(obj).length === 0)
    return ''

  for (const [host, headers] of Object.entries(obj)) {
    if (!result)
      result += host
    else result += `\n${host}`

    result += headers.reduce((acc, header) => {
      const [headerName, headerValue] = Object.entries(header)[0]

      if (headerValue === false)
        return `${acc}\n\t! ${headerName}`

      return `${acc}\n\t${headerName}: ${headerValue}`
    }, '')
  }

  return result
}
