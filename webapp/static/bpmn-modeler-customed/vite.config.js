import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'

dotenv.config();

export default defineConfig({
  root: './',
  build: {
    outDir:'./dist',
    lib: {
      entry: './src/app.js',
      name: 'bpmn-modeler-customed',
      format: ['es']
    }
  },
  publicDir: './assets/',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/properties.js',
          dest: ''
        },
        {
          src: 'src/properties.css',
          dest: ''
        }
      ]
    })
  ],
  server: {
    open: 'index.html'
  }
})
