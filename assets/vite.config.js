import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],

  build: {
    // output to ../priv/static so that phoenix serves assets in production
    outDir: '../priv/static/dist',
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: 'src/main.js',

      // don't include hash in file name
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }

    }
  }
})
