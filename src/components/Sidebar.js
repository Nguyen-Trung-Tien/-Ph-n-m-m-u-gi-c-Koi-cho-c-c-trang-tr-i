import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Quản Lý Đấu Giá</h2>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/users">Quản Lý Người Dùng</Link>
        </li>
        <li>
          <Link to="/auction-history">Lịch Sử Đấu Giá</Link>
        </li>
        <li>
          <Link to="/products">Quản Lý Sản Phẩm</Link>
        </li>
        <li>
          <Link to="/add-order">Thêm Đơn Hàng</Link>
        </li>
        <li>
          <Link to="/auction-management">Quản Lý Phiên Đấu Giá</Link>
        </li>
        <li>
          <Link to="/payment-management">Quản Lí Thanh Toán</Link>
        </li>
        <li>
          <Link to="/admin/content">Quản Lý Nội Dung</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
