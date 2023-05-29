/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsConfigPath from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), svgr(), tsConfigPath()],
  server: { port: 3000 },
  test: {
    environment: 'happy-dom',
    setupFiles: './vitest.setup.ts',
    include: ['src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    useAtomics: true,
    reporters: ['default'],
    coverage: {
      reporter: ['text', 'lcov'],
      include: ['src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      exclude: ['src/**/*.test.{js,ts,jsx,tsx}', 'src/**/*.config.{js,ts,jsx,tsx}'],
      all: true,
      lines: 55,
      functions: 47,
      branches: 70,
      statements: 55,
      provider: 'c8'
    }
  }
});
