import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Garantir que o elemento existe para evitar erro de null
const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Elemento com id 'root' não encontrado.");
}

