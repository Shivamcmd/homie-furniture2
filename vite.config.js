import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ["homie-furniture2-1.onrender.com"],
  },
});