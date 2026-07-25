import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./hooks/useTheme";
import ErrorBoundary from "./components/ErrorBoundary";
import "./i18n";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);
