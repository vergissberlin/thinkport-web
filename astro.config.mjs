// @ts-check
import {defineConfig} from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import webmanifest from 'astro-webmanifest'

// https://astro.build/config
export default defineConfig({
    site: 'https://thinkport.kubernaut.de',
    integrations: [
        mdx(),
        sitemap(),
        webmanifest({
            name: 'Thinkport',
            icon: 'src/images/thinkport.svg',
            short_name: 'TP',
            description: 'Thinkport, cloud and beyond',
            start_url: '/',
            theme_color: '#0B2649',
            background_color: '#0B2649',
            display: 'standalone',
        }),
    ],
    redirects: {
        '/winter': {
            status: 302,
            destination: '/welcome',
        },
    }
})
