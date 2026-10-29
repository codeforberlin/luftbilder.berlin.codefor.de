import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // silence the deprecation warnings of bootstrap
        quietDeps: true,
        silenceDeprecations: ['import', 'legacy-js-api', 'global-builtin', 'color-functions'],
      },
    },
  },
})
