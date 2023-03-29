import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import glob from "tiny-glob";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

export default defineConfig(async () => {
  const paths = await glob("./src/**/!(*.spec|*.e2e).{js,svg,ts,tsx}");
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
        input: [
          path.resolve(__dirname, "src/index.ts"),
          ...paths.map((path) => `./${path}`),
        ],
        external: isExternal,
        output: {
          dir: "dist",
          preserveModules: true,
          sourcemap: true,
        },
        plugins: [
          typescript(),
          nodeResolve(),
          babel({
            babelHelpers: "bundled",
            presets: ["add-react-displayname"],
          }),
        ],
      },
    },
  };
});
