import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 10000, // Use the correct port for Render deployment
    host: '0.0.0.0', // Allow access from outside the container
  },
});
