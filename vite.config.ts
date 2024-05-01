import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import packageJson from './package.json';
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig({
  build: {
    sourcemap: true,
  },
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    process.env.VITE_ENVIRONMENT === 'production' &&
      sentryVitePlugin({
        org: 'c65c951f0bd4',
        project: 'rm-catalog',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      }),
  ],
});
