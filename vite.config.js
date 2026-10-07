import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        sinais: resolve(import.meta.dirname, 'sinais-do-carro.html'),
        motor: resolve(import.meta.dirname, 'servicos/motor.html'),
        freios: resolve(import.meta.dirname, 'servicos/freios.html'),
        suspensao: resolve(import.meta.dirname, 'servicos/suspensao.html'),
        amortecedores: resolve(import.meta.dirname, 'servicos/amortecedores.html'),
        revisao: resolve(import.meta.dirname, 'servicos/revisao.html')
      }
    }
  }
});
