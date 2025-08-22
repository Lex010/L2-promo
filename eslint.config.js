import js from "@eslint/js";

export default [
  js.configs.recommended, // стандартные правила ESLint
  {
    rules: {
      "no-unused-vars": "warn", 
      "no-console": "off"
    }
  }
];
