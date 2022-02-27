module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // "eslint-plugin-prettier" - prettier와 규칙을 ESLint 규칙으로 추가함.
  plugins: ["react", "@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    quotes: [2, "double"],
    semi: [2, "always"],
    "comma-dangle": [2, "only-multiline"],
    "class-methods-use-this": 0,
    "lines-between-class-members": 0,
    "no-useless-constructor": 0,
    "no-use-before-define": 0,
    "no-shadow": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-props-no-spreading": 0,
    "react/function-component-definition": 0,
    "react-hooks/exhaustive-deps": 0,
  },
};
