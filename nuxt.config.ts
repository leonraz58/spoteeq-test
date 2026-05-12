export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  webpack: {
    extractCSS: false,
  },

  modules: ["@nuxt/eslint", "nuxt-svgo"],

  app: {
    rootId: "app",
    rootAttrs: {
      class: "app",
    },

    head: {
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
    },

    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "slide", mode: "out-in" },
  },

  css: ["./src/assets/styles/global.css"],
})
