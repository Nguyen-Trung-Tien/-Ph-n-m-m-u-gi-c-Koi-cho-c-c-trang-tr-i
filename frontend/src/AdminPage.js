import UserManagement from "./components/admin/UserManagement";
import AuctionHistory from "./components/admin/AuctionHistory";
import ProductManagement from "./components/admin/ProductManagement";
import AuctionManagement from "./components/admin/AuctionManagement";
import Header from "./components/admin/Header";
import Sidebar from "./components/admin/Sidebar";
import Home from "./components/admin/Home";
import "./css/styles/App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentManagement from "./components/admin/PaymentManagement";
import Logout from "./components/admin/Logout";
import Login from "./components/admin/Login";

import "./AdminPage.css";

const AdminPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      <div className= {sidebarOpen ? "slider_open" : "slider_close"}>

      
        <Routes>
          {/* Các Route điều hướng đến các component tương ứng */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/auction-history" element={<AuctionHistory />} />
          <Route path="/auction-management" element={<AuctionManagement />} />
          <Route path="/payment-management" element={<PaymentManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AdminPage;
