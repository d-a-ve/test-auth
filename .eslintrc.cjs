module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    "no-undef": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": ["warn"],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/ban-ts-comment": ["warn"],
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-empty-function": ["warn"],
        "@typescript-eslint/no-explicit-any": ["warn"],
      },
    },
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "**/*.png",
    "**/*.jpg",
    "**/*.svg",
    "styles/globals.css",
  ],
};
