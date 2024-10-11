import React, { useState } from "react";
import avatar from "../assets/avt.png";
import "../styles/Header.css"; // Nhập tệp CSS nếu có

const Header = ({ toggleSidebar }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Xử lý tìm kiếm
  const handleSearch = () => {
    if (searchQuery) {
      console.log("Tìm kiếm từ khóa:", searchQuery);
      // Thực hiện hành động tìm kiếm, có thể sử dụng API hoặc lọc danh sách
    }
  };

  // Hiển thị/ẩn input tìm kiếm
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNotificationsOpen(false); // Đóng thông báo khi mở tìm kiếm
  };

  // Hiển thị/ẩn danh sách thông báo
  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsSearchOpen(false); // Đóng tìm kiếm khi mở thông báo
  };

  return (
    <header className="header">
      {/* Biểu tượng mở sidebar */}
      <div className="header__icon" onClick={toggleSidebar}>
        <i className="fa fa-bars"></i>
      </div>

      {/* Tiêu đề trang */}
      <div className="header__title">Admin Dashboard</div>

      {/* Các hành động tìm kiếm, thông báo, tài khoản */}
      <div className="header__actions">
        {/* Tìm kiếm */}
        <div className="header__search">
          <button title="Search" onClick={toggleSearch}>
            <i className="fa fa-search"></i>
          </button>
          {isSearchOpen && (
            <div className="search__input">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
              <button onClick={handleSearch}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          )}
        </div>

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
        <button title="Profile">
          <img width="30" src={avatar} alt="User Avatar" />
        </button>
      </div>
    </header>
  );
};

export default Header;
