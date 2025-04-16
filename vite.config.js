import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { sync } from 'glob'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
const publicDir = resolve(__dirname, 'public')

export default defineConfig({
  base: '/100DaysCSS/',
  plugins: [
    tailwindcss(),
  ],
  root,
  publicDir,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: sync("./src/**/*.html".replace(/\\/g, "/")),
    }
  },
})