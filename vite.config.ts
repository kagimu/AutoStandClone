import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default async () => {
  const plugins = [
    react(),
    runtimeErrorOverlay(),
  ];

  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    const { devBanner } = await import("@replit/vite-plugin-dev-banner");

    plugins.push(cartographer(), devBanner());
  }

  return defineConfig({
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),       // ✅ fixed alias
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: path.resolve(__dirname, "client"),                  // ✅ client folder as root
    build: {
      outDir: "dist",                                         // ✅ relative to client folder
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: {
            reactVendor: ['react', 'react-dom'],
            chartVendor: ['chart.js', 'react-chartjs-2'],
            uiVendor: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
            motionVendor: ['framer-motion']
          }
        }
      },
      // Enable compression and minification for better mobile performance
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      // Optimize chunk size for mobile
      chunkSizeWarningLimit: 500
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  });
};
