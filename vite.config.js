import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import eslintPlugin from 'vite-plugin-eslint2';

export default defineConfig({
 plugins: [
  vue(),
  vueJsx(),
  vueDevTools(),
  eslintPlugin({
   cache: false,
   include: ['src/**/*.vue', 'src/**/*.js'],
   emitErrorAsWarning: false,
  }),
 ],
 resolve: {
  alias: {
   '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
 },
});
