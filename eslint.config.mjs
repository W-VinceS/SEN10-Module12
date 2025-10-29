export default [
  {
    files: ["*.js"],

    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly"
      }
    },

    rules: {
      semi: ["error", "always"]
    }
  }
];
