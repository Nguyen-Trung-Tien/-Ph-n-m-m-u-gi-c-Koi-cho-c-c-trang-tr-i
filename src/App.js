import UserManagement from "./components/UserManagement";
import AuctionHistory from "./components/AuctionHistory";
import ProductManagement from "./components/ProductManagement";
import AuctionManagement from "./components/AuctionManagement";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import "./styles/App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentManagement from "./components/PaymentManagement";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Trạng thái sidebar

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev); // Đảo ngược trạng thái của sidebar
  };

  return (
    <Router>
      {/* Header cố định với chức năng toggle sidebar */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Sidebar được hiển thị hoặc ẩn dựa trên trạng thái */}
      {sidebarOpen && <Sidebar />}

      {/* Phần nội dung chính sẽ được đẩy sang phải khi sidebar mở */}
      <div
        style={{
          marginLeft: sidebarOpen ? "250px" : "0", // Sidebar chiếm 250px
          transition: "margin-left 0.3s", // Hiệu ứng chuyển động
          paddingTop: "60px", // Để phần nội dung không bị header che khuất
        }}
      >
        <Routes>
          {/* Các Route điều hướng đến các component tương ứng */}
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/auction-history" element={<AuctionHistory />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/auction-management" element={<AuctionManagement />} />
          <Route path="/payment-management" element={<PaymentManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
