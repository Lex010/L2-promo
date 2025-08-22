import js from "@eslint/js";

export default [
  {
    ignores: ["old-version/**"], // теперь игнорируется (раньше файлом .eslintignore)

    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        navigator: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly"
      }
    },

    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    },

    // включаем правила recommended через spread. для игнора old-version/ записано снизу
    ...js.configs.recommended
  }
];
