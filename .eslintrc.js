const fs = require("fs");

const folders = fs
  .readdirSync("src", { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

module.exports = {
  root: true,
  extends: [
    "plugin:import/recommended",
    "plugin:import/typescript",
    "@react-native-community",
  ],
  plugins: ["simple-import-sort", "import"],
  globals: {
    NodeJS: true,
  },
  env: {
    browser: true,
  },
  rules: {
    "react/no-unstable-nested-components": [
      "off",
      {
        allowAsProps: true,
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "import/no-named-as-default": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "import/no-cycle": [
      "warn",
      {
        ignoreExternal: true,
      },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^\\u0000"],
          ["^@?\\w"],
          [`^(${folders.join("|")})(/.*|$)`, "^\\."],
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
