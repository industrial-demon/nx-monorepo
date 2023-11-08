import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';

const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id);

export default defineConfig({
  plugins: [dts(), svgr(), react(), tsConfigPaths()],

  css: {
    postcss: {
      plugins: [tailwindcss],
    },
    devSourcemap: true,
  },
  build: {
    lib: {
      formats: ['es', 'cjs'],
      entry: {
        ui: path.resolve(__dirname, './src/components', 'index.ts'),
        form: path.resolve(__dirname, './src/form', 'index.ts'),
        'form-hooks': path.resolve(__dirname, './src/form/hooks', 'index.ts'),
      },
      fileName(format, entryName) {
        return `${entryName}.${format}.js`;
      },
    },
    rollupOptions: {
      external: isExternal,
      output: {
        // Since we publish our ./src folder, there's no point
        // in bloating sourcemaps with another copy of it.
        sourcemapExcludeSources: true,
        preserveModules: true,
      },
    },
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
  },
});
