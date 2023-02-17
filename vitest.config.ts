import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vitest-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {},
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.js",
  },
});
