import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return ({
        plugins: [react(), svgr()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src")
            }
        },
        server: {
            host: true,
            strictPort: true,
            port: 3001 // The host port the app will be accessed from
        }
    });
});