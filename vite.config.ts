import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import KumaUI from "@kuma-ui/vite";
// import KumaUI from "../kuma-ui/packages/vite/src";

export default defineConfig({
  plugins: [react(), KumaUI()],
});
