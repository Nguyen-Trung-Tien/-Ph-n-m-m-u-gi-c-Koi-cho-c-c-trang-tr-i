import React from "react";
import UserManagement from "./UserManagement";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      {/* Thêm phần quản lý người dùng */}
      <UserManagement />
    </div>
  );
};

export default Dashboard;
