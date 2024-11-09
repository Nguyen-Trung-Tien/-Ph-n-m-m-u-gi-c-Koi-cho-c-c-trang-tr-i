import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/styles/Sidebar.css";
import {setRole} from "./RoleUser";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active_menu_link" : "";
  };

  const outPage = () => {
    setRole(false)
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    window.location.reload();
  }
  return (
    <div
      className={`sidebar ${sidebarOpen ? "sidebar-responsive" : ""}`}
      id="sidebar"
    >
      <div className="sidebar__title">
        <i className="fa fa-times" id="sidebarIcon" onClick={closeSidebar}></i>
      </div>

      <div className="sidebar__menu">
        <div className={`sidebar__link ${isActive("/")}`}>
          <i className="fa fa-home"></i>
          <Link to="/">HOME</Link>
        </div>
        <h2>USERS</h2>

        <div className={`sidebar__link ${isActive("/users")}`}>
          <i className="fa fa-user-secret"></i>
          <Link to="/users">Quản Lý Người Dùng</Link>
        </div>
        <div className={`sidebar__link ${isActive("/products")}`}>
          <i className="fa fa-wrench"></i>
          <Link to="/products">Quản Lý Sản Phẩm</Link>
        </div>

        <h2>ĐẤU GIÁ</h2>
        <div className={`sidebar__link ${isActive("/auction-management")}`}>
          <i className="fa fa-archive"></i>
          <Link to="/auction-management">Quản Lý Phiên Đấu Giá</Link>
        </div>

        <div className={`sidebar__link ${isActive("/auction-history")}`}>
          <i className="fa fa-building-o"></i>
          <Link to="/auction-history">Lịch Sử Đấu Giá</Link>
        </div>

        {/*<h2>THANH TOÁN</h2>*/}
        {/*<div className={`sidebar__link ${isActive("/payment-management")}`}>*/}
        {/*  <i className="fa fa-handshake-o"></i>*/}
        {/*  <Link to="/payment-management">Quản Lí Thanh Toán</Link>*/}
        {/*</div>*/}

        <div className="sidebar__link">
          <i className="fa fa-power-off"></i>
          <Link to="/" onClick={outPage}>Log out</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
