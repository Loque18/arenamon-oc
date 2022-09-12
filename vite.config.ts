import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Pages()],
  publicDir: "public",
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
