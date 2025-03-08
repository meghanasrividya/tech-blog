import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      'tech-blog-3yai.onrender.com',
      // You can add any other domains you want to allow here.
    ],
    port: 10000, // Ensure the correct port is being used (adjust as needed)
    host: '0.0.0.0', // This allows the app to be accessible externally (necessary for Render)
  },
});
