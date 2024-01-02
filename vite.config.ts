import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    // github pages
    base: process.env.GITHUB_PAGES ? "munsell-colors" : "./",
    plugins: [react()],
});
