module.exports = {
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true,
    jest: true,
    "jest/globals": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "@react-native",
    "plugin:react-native/all",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:i18next/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  plugins: [
    "react",
    "react-native",
    "import",
    "unused-imports",
    "promise",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "jest",
    "i18next"
  ],
  rules: {
    "prettier/prettier": "warn",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "no-console": "warn",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "react/no-unstable-nested-components": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-shadow": "off",
    "i18next/no-literal-string": ["error", { markupOnly: true }],
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: {
          attributes: false,
          properties: false
        }
      }
    ],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"]
      }
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["modules/*/*"],
            message: "Please import only from the index file of the module."
          }
        ]
      }
    ],
    "unused-imports/no-unused-imports": "error",
    "sort-imports": [
      "error",
      { ignoreCase: true, ignoreDeclarationSort: true }
    ],
    "import/order": [
      "error",
      {
        groups: [
          ["external", "builtin"],
          "internal",
          ["parent", "sibling"],
          "index",
          "type"
        ],
        pathGroups: [
          {
            pattern: "@/(shared|modules)/**",
            group: "internal"
          }
        ],
        pathGroupsExcludedImportTypes: [],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        }
      }
    ],
    "react-native/sort-styles": "off",
    "react-native/no-unused-styles": "warn"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
