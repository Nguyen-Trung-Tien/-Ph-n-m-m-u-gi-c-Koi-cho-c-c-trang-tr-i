import { Link } from "react-router-dom";
import React, { useState } from "react";
import avatar from "../assets/avt.png";
import "../styles/Header.css"; // Nhập tệp CSS nếu có

const Header = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Xử lý tìm kiếm
  const handleSearch = () => {
    if (searchQuery) {
      console.log("Tìm kiếm từ khóa:", searchQuery);
      // Thực hiện hành động tìm kiếm, có thể sử dụng API hoặc lọc danh sách
    }
  };

  // Xử lý xóa thanh tìm kiếm
  const clearSearch = () => {
    setSearchQuery("");
  };

  // Hiển thị/ẩn danh sách thông báo
  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <header className="header">
      {/* Biểu tượng mở sidebar */}
      <div className="header__icon" onClick={toggleSidebar}>
        <i className="fa fa-bars"></i>
      </div>

      {/* Tiêu đề trang */}
      <div className="header__title">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Admin Dashboard
        </Link>
      </div>

      {/* Thanh tìm kiếm */}
      <div className="header__search">
        <input
          type="text"
          placeholder="Look up to you want!"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search__input"
        />
        {searchQuery && (
          <button onClick={clearSearch} className="clear__button">
            <i className="fa fa-times"></i>
          </button>
        )}
        <button onClick={handleSearch} className="search__button">
          <i className="fa fa-search"></i>
        </button>
      </div>

      {/* Các hành động thông báo, tài khoản */}
      <div className="header__actions">
        {/* Thông báo */}
        <div className="header__notifications">
          <button title="Notifications" onClick={toggleNotifications}>
            <i className="fa fa-bell"></i>
          </button>
          {isNotificationsOpen && (
            <div className="notifications__list">
              <p>Thông báo 1: Auction đã bắt đầu</p>
              <p>Thông báo 2: Người dùng mới đăng ký</p>
              <p>Thông báo 3: Phiên đấu giá kết thúc</p>
            </div>
          )}
        </div>

        {/* Tài khoản */}
        <button title="Profile" className="header__profile">
          <img width="30" src={avatar} alt="User Avatar" />
        </button>
      </div>
    </header>
  );
};

export default Header;
