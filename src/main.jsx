import { createRoot } from "react-dom/client";

// CSS
import "./index.css";
import "./checkbox.css";
import "./chart.css";

// React router
import { BrowserRouter } from "react-router";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/To-do-app">
    <App />
  </BrowserRouter>,
);
