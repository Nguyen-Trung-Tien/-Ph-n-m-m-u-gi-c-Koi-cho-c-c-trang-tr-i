// src/components/Main.js
import React, {useEffect, useState} from 'react';

import { Link } from "react-router-dom";
import "../../css/styles/Home.css";
import Chart from "./Chart";
import axios from "axios";

const Main = () => {
  const [weeklyReport, setWeeklyReport] = useState([]);
  const [infoWeek, setInfoWeek] = useState([]);

  useEffect(() => {
    const getInfoWeek = async () => {
      console.log('Fetching information for week');

      try {
        const newInfo = await axios.get(`http://localhost:8080/auction/manage/new`);
        const futureInfo = await axios.get(`http://localhost:8080/auction/manage/future`);
        const transactionInfo = await axios.get(`http://localhost:8080/auction/manage/transaction`);
        const selledInfo = await axios.get(`http://localhost:8080/auction/bids/selled`);
        console.log('as',selledInfo.data );
        const counts = [
          newInfo.data.length || 0, // Thay đổi tùy theo cấu trúc thực tế
          futureInfo.data.length || 0,
          transactionInfo.data.length || 0,
          selledInfo.data.length || 0
        ];

        // Cập nhật state với số lượng
        setInfoWeek(counts);

      } catch (error) {
        console.error('Error fetching week information', error);
      }
    };

    getInfoWeek();
  }, []);


  return (
    <main>
      <div className="main_container">
        <div className="main_title">
          <div className="main__greeting">
            <h1>Báo cáo tuần</h1>
          </div>
        </div>

        <div className="main__cards">
          {/* Card for list of participants */}
          <Link to="/users" className="card">
            <div className="card_inner">
              <i className="fa fa-user fa-2x text-lightblue"></i>
              <div>
                <p className="text-primary-p">NGƯỜI DÙNG MỚI</p>
                <span className="font-bold text-title">{infoWeek[0]}</span>
              </div>
            </div>
          </Link>

          <Link to="/auction-management" className="card">
            <div className="card_inner">
              <i className="fa fa-calendar fa-2x text-red"></i>
              <div>
                <p className="text-primary-p">ĐANG/SẮP DIỄN RA</p>
                <span className="font-bold text-title">{infoWeek[1]}</span>
              </div>
            </div>
          </Link>

          {/* Card for Auction History */}
          <Link to="/auction-history" className="card">
            <div className="card_inner">
              <i className="fa fa-video-camera fa-2x text-yellow"></i>
              <div>
                <p className="text-primary-p">LỊCH SỬ ĐẤU GIÁ</p>
                <span className="font-bold text-title">{infoWeek[2]}</span>
              </div>
            </div>
          </Link>

          {/* Card for Auction Management */}
          <Link to="/products" className="card">
            <div className="card_inner">
              <i className="fa fa-thumbs-up fa-2x text-green"></i>
              <div>
                <p className="text-primary-p">ĐÃ BÁN</p>
                <span className="font-bold text-title">{infoWeek[3]}</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Thống kê</h1>
              </div>
              <i className="fa-solid fa-money-bill"></i>
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
            </div>
            {/* Chi tiết các thẻ thống kê */}
            <div className="chart__right__cards">
              {/* Card cho thu nhập */}
              <div className="card1">
                <h1>Chi tiết</h1>
                <p className="price">$75,300</p>
                <sup style={{ top: "-15px" }}>+15%</sup>
              </div>

              {/* Card cho số lượng người dùng */}
              <div className="card3">
                <h1>Người dùng</h1>
                <p>3100</p>
                <small>Đang hoạt động: 2900</small>
                <br></br>
                <small>Không hoạt động: 200</small>
              </div>

              {/* Card cho số lượng đấu giá thành công */}
              <div className="card4">
                <h1>Sản phẩm đã đấu giá</h1>
                <p>1500</p>
                <small>Thành công: 1400</small>
                <br></br>
                <small>Hủy : 100</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
