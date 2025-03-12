import { defineConfig } from "vite";
import path from "path";
import pugPlugin from "vite-plugin-pug";
import { imagetools } from "vite-imagetools"; // Импортируем плагин для оптимизации изображений

export default defineConfig({
    root: ".",
    base: "./",
    plugins: [pugPlugin(pugPlugin({ pretty: true, locals: {} })), imagetools()],
    build: {
        outDir: path.resolve(__dirname, "dist"),
        emptyOutDir: true,
        assetsDir: "assets",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
            },
        },
    },
    resolve: {
        alias: {
            "@mixins": path.resolve(__dirname, "scss/_mixins.scss"),
            "@variables": path.resolve(__dirname, "scss/_variables.scss"),
        },
    },
    server: {
        port: 3000,
        open: true,
        watch: {
            usePolling: true,
            ignored: ["node_modules/**", "dist/**"],
        },
        fs: {
            strict: false,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {},
        },
    },
});
