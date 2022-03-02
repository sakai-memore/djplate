import dotenv from 'dotenv';
import { defineConfig } from 'vite';

dotenv.config();

export default defineConfig({
  root: './',
  build: {
    outDir:'./dist',
    lib: {
      entry: './src/app.js',
      name: 'bpmn-properties',
      format: ['es'],
      filename: 'bpmn-properties.bundle.js'
    }
  },
  publicDir: './assets/',
  server: {
    open: 'index.html'
  }
})
