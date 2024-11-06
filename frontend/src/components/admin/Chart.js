import React, {useEffect, useState} from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

// Register các thành phần cần thiết của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const [soldDetails,setsoldDetails] = useState(null)

// useEffect(() => {
//   const fetchSoldDetails = async () => {
//     try {
//       console.log(`Fetching Koi Details for sold this week: `);
//       const response = await axios.get(`http://localhost:8080/auction/bids/selled`);
//       console.log("sold this week Details fetched successfully:", response.data);
//       setsoldDetails(response.data);
//     } catch (error) {
//       console.error('Lỗi khi lấy hàng đã bán', error);
//       setErrorMessage('Không thể lấy ấy hàng đã bán.');
//     }
//   };
//
//   fetchSoldDetails();
// }, []);

const Chart = () => {
  // Dữ liệu cho biểu đồ
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Successful Auctions",
        data: [50, 60, 70, 65, 80, 90, 100], // Giả lập số lượng đấu giá thành công
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  // Cấu hình biểu đồ
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Successful Auctions Over the Week",
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
