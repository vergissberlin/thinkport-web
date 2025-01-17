// @ts-check
import {defineConfig} from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://vergissberlin.github.io',
    // base to root if it is in dev mode and to thinkport-web if it is in prod mode
    base: process.env.GITHUB_ACTIONS ? 'thinkport-web' : '/',
    integrations: [mdx(), sitemap()],
})
