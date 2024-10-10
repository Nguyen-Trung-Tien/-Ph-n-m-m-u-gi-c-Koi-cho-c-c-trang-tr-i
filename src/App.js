// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./admin/AdminLayout";
import UserManagement from "./admin/UserManagement";
import ProductManagement from "./admin/ProductManagement";
import TransactionManagement from "./admin/TransactionManagement";
import ReportingAnalytics from "./admin/ReportingAnalytics";
import ContentManagement from "./admin/ContentManagement";
import CustomerSupport from "./admin/CustomerSupport";
import Security from "./admin/Security";
import TechnologyManagement from "./admin/TechnologyManagement";
import Home from "./components/Home"; // Đảm bảo file Home.js tồn tại

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Trang chủ */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<UserManagement />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="transactions" element={<TransactionManagement />} />
          <Route path="reports" element={<ReportingAnalytics />} />
          <Route path="content" element={<ContentManagement />} />
          <Route path="support" element={<CustomerSupport />} />
          <Route path="security" element={<Security />} />
          <Route path="technology" element={<TechnologyManagement />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
