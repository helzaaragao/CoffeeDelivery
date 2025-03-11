import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/CoffeeDelivery/', // Adicione o nome do repositório do GitHub Pages aqui
  build: {
    outDir: 'dist', // Certifique-se de que o diretório de saída seja 'dist'
    rollupOptions: {
      input: {
        main: './index.html', // Especifique o arquivo de entrada
      },
    },
  },
});