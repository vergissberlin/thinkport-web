// @ts-check
import {defineConfig} from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://vergissberlin.github.io',
    base: process.env.NODE_ENV === 'production' ? 'thinkport-website' : '/',
    trailingSlash: "never",
    integrations: [mdx(), sitemap()],
    redirects: {
        '/winter': {
            status: 302,
            destination: '/summer',
        },
    }
})
