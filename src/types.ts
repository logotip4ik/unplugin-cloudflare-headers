interface Header extends Record<string, string | false> {
  [headerName: string]: string | false
  [headerName: `x-${string}`]: string | false
}

interface DynamicHeaders extends Record<string, Header[]> {
  [routePath: `/${string}`]: Header[]
}

interface SuggestionHeaders extends Record<string, Header[] | undefined> {
  /** @description will reference only index route */
  '/'?: Header[]
  /** @description catches all routes */
  '/*'?: Header[]
  '/admin'?: Header[]
  '/dashboard'?: Header[]
}

export type Options = DynamicHeaders & SuggestionHeaders
