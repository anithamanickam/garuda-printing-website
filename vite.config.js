import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/garuda-printing-website/',
  server: {
    allowedHosts: [
      "b525-2401-4900-1ce0-64a9-7f38-2691-87a1-f819.ngrok-free.app",
    ],
  },
});