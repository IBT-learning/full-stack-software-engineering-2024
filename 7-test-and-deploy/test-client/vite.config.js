import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // adding this config makes these test utilities available in the app
  test: {
    globals: true,
    environment: "jsdom",
  },
})
