export default defineNuxtConfig({
    devtools: {
        enabled: true,
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
            // apiUrl: process.env.API_URL,
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