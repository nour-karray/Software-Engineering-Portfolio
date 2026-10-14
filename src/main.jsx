import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { LanguageProvider } from "./hooks/useLanguage.jsx";
import "./styles/index.css";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
createRoot(document.getElementById("root")).render(

  <StrictMode>
    <ErrorBoundary>
      <MotionConfig reducedMotion="user">
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </MotionConfig>
    </ErrorBoundary>
  </StrictMode>,
);
export default defineConfig({
  base: process.env.VERCEL ? "/" : "/Software-Engineering-Portfolio/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    css: true,
  },
});
