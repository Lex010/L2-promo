import js from '@eslint/js';

export default [
  {
    ignores: ['old-version/**'], // теперь игнорируется (раньше файлом .eslintignore)

    languageOptions: {
      globals: {
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        alert: 'readonly',
        prompt: 'readonly',
        confirm: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
        history: 'readonly',
        location: 'readonly',
      },
    },

    rules: {
      ...js.configs.recommended.rules, // объединяем правила
      'no-unused-vars': 'warn',
      'no-console': 'off',
      semi: ['error', 'always'],
    },
  },
];
