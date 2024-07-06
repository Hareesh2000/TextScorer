import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses, including container's IP
    port: 3000, // Optional: to keep the same port as you exposed in Docker
  },
});
