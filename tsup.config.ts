import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  splitting: false,
  clean: false,
  sourcemap: true,
  shims: true,
  treeshake: true,
  minify: process.env.NODE_ENV === "production",
  dts: true,
});
