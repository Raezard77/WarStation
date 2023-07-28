import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/WarStation/",
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@site-content": path.resolve(__dirname, "./src/data/site-content.js"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@scripts": path.resolve(__dirname, "./src/scripts"),
            "@hooks": path.resolve(__dirname, "./src/hooks")
        },
    },
});
