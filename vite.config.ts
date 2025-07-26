import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
   base: '/Meghamsh-Portfolio.github.io/', // needed for GitHub Pages
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/Meghamsh-Portfolio.github.io/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
