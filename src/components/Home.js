// src/components/Main.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Chart from "./Chart";

const Main = () => {
  return (
    <main>
      <div className="main_container">
        <div className="main_title">
          <div className="main__greeting">
            <h1>Welcome to your admin Dashboard</h1>
          </div>
        </div>

        <div className="main__cards">
          {/* Card for list of participants */}
          <Link to="/users" className="card">
            <div className="card_inner">
              <i className="fa fa-user-o fa-2x text-lightblue"></i>
              <div>
                <p className="text-primary-p">List of participants</p>
                <span className="font-bold text-title">578</span>
              </div>
            </div>
          </Link>

          <Link to="/auction-management" className="card">
            <div className="card_inner">
              <i className="fa fa-calendar fa-2x text-red"></i>
              <div>
                <p className="text-primary-p">Auction Management</p>
                <span className="font-bold text-title">2456</span>
              </div>
            </div>
          </Link>

          {/* Card for Auction History */}
          <Link to="/auction-history" className="card">
            <div className="card_inner">
              <i className="fa fa-video-camera fa-2x text-yellow"></i>
              <div>
                <p className="text-primary-p">Auction History</p>
                <span className="font-bold text-title">340</span>
              </div>
            </div>
          </Link>

          {/* Card for Auction Management */}
          <Link to="/products" className="card">
            <div className="card_inner">
              <i className="fa fa-thumbs-up fa-2x text-green"></i>
              <div>
                <p className="text-primary-p">Product Management</p>
                <span className="font-bold text-title">623</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            {/* Hiển thị biểu đồ đấu giá thành công */}
            <Chart />
          </div>

          {/* Phần báo cáo chi tiết */}
          <div className="chart__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
              </div>
              <i className="fa fa-use"></i>
            </div>

            {/* Chi tiết các thẻ thống kê */}
            <div className="chart__right__cards">
              {/* Card cho thu nhập */}
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
                <small>Change from last week: +15%</small>
              </div>

              {/* Card cho số lượng đơn hàng */}
              <div className="card2">
                <h1>Orders</h1>
                <p>2671</p>
                <small>Completed Orders: 2300</small>
                <small>Pending Orders: 371</small>
              </div>

              {/* Card cho số lượng người dùng */}
              <div className="card3">
                <h1>Users</h1>
                <p>3100</p>
                <small>Active Users: 2900</small>
                <small>Inactive Users: 200</small>
              </div>

              {/* Card cho số lượng đấu giá thành công */}
              <div className="card4">
                <h1>Auctions</h1>
                <p>1500</p>
                <small>Successful Auctions: 1400</small>
                <small>Failed Auctions: 100</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
