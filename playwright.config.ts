import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',
  use: {
    baseURL: 'https://rutube.ru',

    trace: 'on-first-retry',
    proxy: process.env.CI
      ? {
          server: process.env.PROXY_IP!,
          username: process.env.PROXY_LOGIN!,
          password: process.env.PROXY_PASSWORD!,
        }
      : undefined,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
