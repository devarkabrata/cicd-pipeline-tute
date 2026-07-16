import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Apply standard JavaScript rules
  pluginJs.configs.recommended,

  {
    // Apply Node.js globals to all files
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    // Apply Jest globals only to files in your test folder
    files: ["test/**/*.js", "**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
