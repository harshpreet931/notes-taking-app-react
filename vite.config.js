import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://harshpreet931.github.io/notes-taking-app-react/0',
  plugins: [react()],
})
