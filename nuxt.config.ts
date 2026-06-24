export default defineNuxtConfig({
    devtools: {
        enabled: process.env.NODE_ENV === 'development'
    },
    ssr: true,
    nitro: {
        compressPublicAssets: true
    },
    modules: [
        '@pinia/nuxt',
    ],
    build: {
        transpile: ['@vuepic/vue-datepicker']
    },
    css: [
        '~/assets/css/main.css',
    ],
    runtimeConfig: {
        public: {
            apiUrl: process.env.NUXT_PUBLIC_API_URL
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            meta: [
                {
                    charset: 'utf-8',
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
            ],
        },
    },
    compatibilityDate: '2026-05-18',
})