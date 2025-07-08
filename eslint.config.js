import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module"
    },
    rules: {
      semi: "error",
      "prefer-const": "error",
      indent: ["error", 2, { SwitchCase: 1 }],
      quotes: ["error", "double"]
    }
  }
]);

