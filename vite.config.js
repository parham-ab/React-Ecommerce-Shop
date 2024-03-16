import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const fileNames = [
  "src",
  "components",
  "common",
  "pages",
  "services",
  "utils",
  "styles",
  "features",
  "routes",
  "assets",
  "constants",
  "hooks",
];

const pathes = fileNames.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
  }),
  ""
);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...pathes,
    },
  },
});
