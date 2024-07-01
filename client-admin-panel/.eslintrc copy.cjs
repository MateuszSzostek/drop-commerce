module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:sonarjs/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "src/poc"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "sonarjs", "unicorn"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "@typescript-eslint/no-namespace": 0,
    "react-hooks/exhaustive-deps": 0,
  },
}
