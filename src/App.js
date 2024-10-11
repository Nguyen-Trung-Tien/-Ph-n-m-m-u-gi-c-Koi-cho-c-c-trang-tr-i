import UserManagement from "./components/UserManagement";
import AuctionHistory from "./components/AuctionHistory";
import ProductManagement from "./components/ProductManagement";
import AddOrder from "./components/AddOrder";
import "./styles/App.css";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main"; // Thay thế bằng component tương ứng
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuctionManagement from "./components/AuctionManagement";
import Header from "./components/Header";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Trạng thái sidebar

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev); // Đảo ngược trạng thái của sidebar
  };

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Sidebar />}
      <div
        style={{
          marginLeft: sidebarOpen ? "250px" : "0",
          transition: "margin-left 0.3s",
          paddingTop: "60px",
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/auction-history" element={<AuctionHistory />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/add-order" element={<AddOrder />} />
          <Route path="/auction-management" component={AuctionManagement} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
