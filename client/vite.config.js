<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
=======
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
>>>>>>> aa803ed531eb362acca419c50fffe60512a7c117

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },

  plugins: [react()],
});