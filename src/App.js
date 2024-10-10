import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import AuctionHistory from "./components/AuctionHistory";
import ProductManagement from "./components/ProductManagement";
import AddOrder from "./components/AddOrder";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/auction-history" element={<AuctionHistory />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/add-order" element={<AddOrder />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
