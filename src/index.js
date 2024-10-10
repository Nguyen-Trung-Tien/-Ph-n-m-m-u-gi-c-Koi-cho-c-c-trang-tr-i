// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Kiểm tra xem file này có nội dung hay không
import "bootstrap/dist/css/bootstrap.min.css"; // Đảm bảo Bootstrap đã được cài đặt
import "./styles/App.css"; // Kiểm tra file CSS của bạn

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
