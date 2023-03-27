import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import typescript from "@rollup/plugin-typescript";

export default defineConfig(async () => {
  const isExternal = (id: string) =>
    !id.startsWith(".") && !path.isAbsolute(id);

  return {
    plugins: [react()],
    build: {
      target: "esnext",
      lib: {
        entry: {},
        formats: ["cjs", "es"],
        fileName(format) {
          return `[name].${format === "es" ? "js" : format}`;
        },
      },
      rollupOptions: {
        input: [path.resolve(__dirname, "src/index.ts")],
        external: isExternal,
        output: {
          dir: "dist",
          preserveModules: true,
          preserveModulesRoot: "src",
          sourcemap: true,
        },
        plugins: [typescript()],
      },
    },
  };
});
