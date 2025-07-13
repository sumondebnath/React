// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{js,jsx}'],
//     extends: [
//       js.configs.recommended,
//       reactHooks.configs['recommended-latest'],
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         ecmaFeatures: { jsx: true },
//         sourceType: 'module',
//       },
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//     },
//   },
// ])

/*-------------------------------------------------------------------------------- */

// Deepseek Updating ESLint Config for React Project

import js from "@eslint/js";
import globals from "globals";
import reactRecommended from "eslint-plugin-react/configs/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier";

export default [
  {
    // Global ignores
    ignores: ["dist/**", "node_modules/**"],
  },
  {
    // Apply to all JS/JSX files
    files: ["**/*.{js,jsx}"],
    // Extends configurations
    ...reactRecommended,
    plugins: {
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // React specific rules
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".js", ".jsx"] },
      ],
      "react/state-in-constructor": "off",
      "react/prop-types": "off",

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",

      // Accessibility rules
      "jsx-a11y/click-events-have-key-events": "off",

      // General rules
      "no-console": "off",

      // Formatting rules (handled by Prettier)
      indent: "off",
      "linebreak-style": "off",
    },
  },
  // Prettier config (must be last)
  prettier,
];
