// @ts-check
import {defineConfig} from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://thinkport.kubernaut.de',
    integrations: [mdx(), sitemap()],
    redirects: {
        '/winter': {
            status: 302,
            destination: '/welcome',
        },
    }
})
