"use strict";

// The following is copied from `react-scripts/config/paths.js`.
const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const projectRootPath = resolveApp(".");
const tsConfigPath = resolveApp("tsconfig.json");

module.exports = {
  extends: [
    "airbnb",
    "eslint-config-react-app",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:jest/recommended"
  ],
  overrides: {
    files: ["**/*.ts", "**/*.tsx"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      },

      // typescript-eslint specific options
      project: tsConfigPath,
      tsconfigRootDir: projectRootPath,
      warnOnUnsupportedTypeScriptVersion: true
    },
    plugins: ["@typescript-eslint"],
    rules: {
      // These ESLint rules are known to cause issues with typescript-eslint
      // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
      camelcase: "off",
      indent: "off",
      "no-array-constructor": "off",
      "no-unused-vars": "off",

      "@typescript-eslint/no-angle-bracket-type-assertion": "warn",
      "@typescript-eslint/no-array-constructor": "warn",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "none",
          ignoreRestSiblings: true
        }
      ],
      "import/no-duplicates": 0,
      "no-duplicate-imports": "off",
      "react/prop-types": 0
    }
  },

  // NOTE: When adding rules here, you need to make sure they are compatible with
  // `typescript-eslint`, as some rules such as `no-array-constructor` aren't compatible.
  settings: { react: { version: "999.999.999" } },
  plugins: ["prettier", "react-hooks", "jest"],
  env: {
    "jest/globals": true
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/label-has-for": 0,
    "react/no-multi-comp": 0,
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/destructuring-assignment": 0,
    "react/no-access-state-in-setstate": 1,
    "react/no-did-update-set-state": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": [
      "warn",
      {
        forbid: ["any"]
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "import/order": 1,
    "import/first": 1,
    "import/newline-after-import": 1,
    "no-debugger": 1,
    "no-console": [
      "warn",
      {
        allow: ["warn", "error", "info"]
      }
    ],
    "no-use-before-define": ["error", "nofunc"],
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true
      }
    ],
    "no-mixed-operators": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "no-param-reassign": 0,
    "no-increment-decrement": 0,
    "prefer-destructuring": 0,
    camelcase: 0,
    "prettier/prettier": [
      1,
      {
        singleQuote: true,
        trailingComma: "all",
        semi: false,
        printWidth: 90
      }
    ]
  }
};
