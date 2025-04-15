import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
  base: "/Dandido/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // catch-all for React Router
        "404": resolve(__dirname, "index.html")
      }
    }
  }
})
