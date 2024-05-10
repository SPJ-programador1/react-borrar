import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/reactvite/', // Ruta base de la aplicación
  build: {
    outDir: 'dist', // Carpeta de salida para los archivos generados
    assetsDir: 'assets', // Carpeta de activos (CSS, JS, imágenes, etc.)
  },
  plugins: [react()],
});
