import prettierPlugin from "eslint-plugin-prettier"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
  {
    plugins: {
      prettier: prettierPlugin,
    },
  },

  {
    files: ["**/*.ts", "**/*.vue", "**/*.js"],
    rules: {
      "prettier/prettier": [
        "error",
        {
          trailingComma: "es5",
          semi: false,
          singleQuote: false,
          printWidth: 100,
          singleAttributePerLine: true,
          overrides: [
            {
              files: ["**/*.svg"],
              options: {
                parser: "html",
              },
            },
          ],
        },
      ],

      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "off",

      "vue/multi-word-component-names": "off",
      "vue/html-self-closing": "off",

      "no-console": "warn",
      "no-debugger": "warn",
    },
  }
)
