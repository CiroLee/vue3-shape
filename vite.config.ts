import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@pkg': path.resolve(__dirname, './packages'),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    terserOptions: {
      compress: {
        //生产环境时移除console,debugger
        drop_console: true,
        drop_debugger: true,
      },
    },
    lib: {
      entry: path.resolve(__dirname, 'packages'),
      name: 'vue3-shape',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
