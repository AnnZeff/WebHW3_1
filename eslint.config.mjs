import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.node } },
  pluginReact.configs.flat.recommended,
]);