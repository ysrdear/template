module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-parsing-error": "off",
    "no-console": 0,
    "no-debugger": 0,
    "no-use-before-define": "off",
    "prettier/prettier": "off",
    "no-unused-vars": [
      "warn",
      {
        // 允许声明未使用变量
        vars: "local",
        // 参数不检查
        args: "none",
      },
    ],
    "vue/no-unused-vars": "warn",
    "no-prototype-builtins": "off",
    "no-irregular-whitespace": "off",
    "space-before-function-paren": "off",
    "vue/custom-event-name-casing": "off",
    "vue/attributes-order": "off",
    "vue/one-component-per-file": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/attribute-hyphenation": "off",
    "vue/require-default-prop": "off",
    "vue/no-unused-components": "warn",
    "vue/no-setup-props-destructure": "off",
    "vue/script-setup-uses-vars": "off",
  },
};
