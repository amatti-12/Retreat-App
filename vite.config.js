import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Retreat-App/', // ✅ This must match the GitHub repo name exactly
  plugins: [react()],
});
