// src/admin/AdminLayout.js
import React from "react";
import { Outlet, Link } from "react-router-dom"; // Thêm Link để tạo liên kết
import "./styles/admin.css"; // Nhúng file CSS

const AdminLayout = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="users">User Management</Link>
          </li>
          <li>
            <Link to="products">Product Management</Link>
          </li>
          <li>
            <Link to="transactions">Transaction Management</Link>
          </li>
          <li>
            <Link to="reports">Reporting & Analytics</Link>
          </li>
          <li>
            <Link to="content">Content Management</Link>
          </li>
          <li>
            <Link to="support">Customer Support</Link>
          </li>
          <li>
            <Link to="security">Security</Link>
          </li>
          <li>
            <Link to="technology">Technology Management</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Nơi hiển thị các thành phần con */}
    </div>
  );
};

export default AdminLayout;
