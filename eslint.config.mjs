export default [
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        // Jest globals for test files
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly"
      }
    },
    rules: {
      semi: ["error", "always"]
    }
  }
];
