import { defineConfig } from "tsup";
import defaultTsupConfig from "../../tsup.config";

export default defineConfig({
  ...defaultTsupConfig,
  entry: ["src/index.tsx"],
  banner: {
    js: "'use client'",
  },
});
