import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Xóa token hoặc thông tin xác thực người dùng
    localStorage.removeItem("token"); // Nếu bạn lưu token ở localStorage
    sessionStorage.removeItem("token"); // Hoặc xóa ở sessionStorage nếu cần

    // Sau khi xóa token, chuyển hướng người dùng về trang đăng nhập
    navigate("/login");
  }, [navigate]);

  return (
    <div>
      <h2>You have been logged out.</h2>
      <p>Redirecting to login...</p>
    </div>
  );
};

export default Logout;
