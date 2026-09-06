import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://127.0.0.1:4173/Portifolio-kaio-/',
    channel: 'chrome',
    reducedMotion: 'reduce',
  },
  webServer: [{
    command: 'node node_modules/vite/bin/vite.js preview --host 127.0.0.1',
    url: 'http://127.0.0.1:4173/Portifolio-kaio-/',
    reuseExistingServer: true,
  }, {
    command: 'node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 4174 --strictPort',
    url: 'http://127.0.0.1:4174/Portifolio-kaio-/',
    env: { VITE_EMAILJS_SERVICE_ID: 'service_test', VITE_EMAILJS_TEMPLATE_ID: 'template_test', VITE_EMAILJS_PUBLIC_KEY: 'public_test' },
  }],
});
