// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/carlos.neto/Documents/Desenvolvimento/projetos/frontEnd/portal_age/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/carlos.neto/Documents/Desenvolvimento/projetos/frontEnd/portal_age/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueDevTools from "file:///C:/Users/carlos.neto/Documents/Desenvolvimento/projetos/frontEnd/portal_age/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/carlos.neto/Documents/Desenvolvimento/projetos/frontEnd/portal_age/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    VueDevTools({ launchEditor: "phpstorm" })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@api/AXIOS": fileURLToPath(new URL("./services/api.ts", __vite_injected_original_import_meta_url)),
      "@config/echo": fileURLToPath(new URL("./services/config/echo.ts", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/global.scss";`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjYXJsb3MubmV0b1xcXFxEb2N1bWVudHNcXFxcRGVzZW52b2x2aW1lbnRvXFxcXHByb2pldG9zXFxcXGZyb250RW5kXFxcXHBvcnRhbF9hZ2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGNhcmxvcy5uZXRvXFxcXERvY3VtZW50c1xcXFxEZXNlbnZvbHZpbWVudG9cXFxccHJvamV0b3NcXFxcZnJvbnRFbmRcXFxccG9ydGFsX2FnZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvY2FybG9zLm5ldG8vRG9jdW1lbnRzL0Rlc2Vudm9sdmltZW50by9wcm9qZXRvcy9mcm9udEVuZC9wb3J0YWxfYWdlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgVnVlRGV2VG9vbHMoe2xhdW5jaEVkaXRvcjogJ3BocHN0b3JtJ30pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ0BhcGkvQVhJT1MnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc2VydmljZXMvYXBpLnRzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnQGNvbmZpZy9lY2hvJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NlcnZpY2VzL2NvbmZpZy9lY2hvLnRzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfVxuICB9LFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcIkAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuc2Nzc1wiO2BcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1hLFNBQVMsZUFBZSxXQUFXO0FBRXRjLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUpxUCxJQUFNLDJDQUEyQztBQU85VCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixZQUFZLEVBQUMsY0FBYyxXQUFVLENBQUM7QUFBQSxFQUN4QztBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUNwRCxjQUFjLGNBQWMsSUFBSSxJQUFJLHFCQUFxQix3Q0FBZSxDQUFDO0FBQUEsTUFDekUsZ0JBQWdCLGNBQWMsSUFBSSxJQUFJLDZCQUE2Qix3Q0FBZSxDQUFDO0FBQUEsSUFDckY7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
