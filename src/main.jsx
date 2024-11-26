import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App";
// import 'antd/dist/antd.css'; // Import Ant Design styles

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create a root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);