import cloudflareHeaders from 'virtual:cloudflare-headers'

document.getElementById('app')!.innerHTML = '__UNPLUGIN__'

// eslint-disable-next-line no-console
console.log(cloudflareHeaders)
