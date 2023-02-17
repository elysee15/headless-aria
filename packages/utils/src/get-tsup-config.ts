import { defineConfig, Options } from "tsup";

type GetTsupConfig = Omit<Parameters<typeof defineConfig>[0], "entry">;

export function getTsupConfig(
  entry: Options["entry"],
  options?: GetTsupConfig
) {
  return defineConfig({
    entry: entry,
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: false,
    dts: true,
    ...options,
  });
}
