import React, { useState, useEffect } from "react";
import "../../css/styles/AuctionHistory.css";
import axios from "axios";

const AuctionHistory = () => {
  const [auctionHistory, setAuctionHistory] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchBy ,setSearchBy] = useState("koiName");


  // useEffect để lấy dữ liệu đấu giá từ API khi component render
  useEffect(() => {
    // Giả sử bạn có một API endpoint để lấy lịch sử đấu giá
    const listAuctionHistory = async () => {
      try{
        console.log("get list user in data base");
        const response = await axios.get(`http://localhost:8080/auction/transaction/auctionHistory`);
        console.log("this list history", response)
        setAuctionHistory(response.data)
      }
      catch (error) {
        console.error('Lỗi lấy danh sách cá koi:', error);
      }
    }
    listAuctionHistory();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const findHistoryBy = (e) => {
    const value = e.target.value;
    setSearchBy(value);
  }
  const handleDeleteAuction = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this auction?"
    );
    if (confirmDelete) {
      // Gọi API để xóa phiên đấu giá
      fetch(`/api/auction-history/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            setAuctionHistory(
              auctionHistory.filter((auction) => auction.id !== id)
            );
          } else {
            console.error("Failed to delete auction");
          }
        })
        .catch((error) => console.error("Error deleting auction:", error));
    }
  };


  const filteredAuctions = auctionHistory.filter((auction) => {
    const fields = {
      bidId: auction.bid.bidId,
      koiName: auction.bid.koi.koiName,
      koiId: auction.bid.koi.koiId,
      userName: auction.user.username,
      userId: auction.user.id,
    };

    const valueToCheck = fields[searchBy]; // Get the field based on searchBy
    return valueToCheck?.toString().toLowerCase().includes(filter.toLowerCase());
  });


  return (
    <div className="auction-history">
      <h2>Auction History</h2>

      <div className="filter">
        <label>Filter by <select id="choose" onChange={findHistoryBy}>
          <option value="koiName">koi name</option>
          <option value="bidId">Bid Id</option>
          <option value="koiId">koi id</option>
          <option value="userName">user name</option>
          <option value="userId">user id</option>
        </select>
        </label>
        <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder={`Enter ${searchBy}`}
        />
      </div>

      <table>
        <thead>
        <tr>
          <th>Bid ID</th>
          <th>koi ID</th>
          <th>koi name</th>
          <th>User id</th>
          <th>User name</th>
          <th>Pay</th>
          <th style={{ width: "15%" }}>Date</th>
        </tr>
        </thead>
        <tbody>
          {filteredAuctions.length > 0 ? (
            filteredAuctions.sort((a, b) => new Date(b.transactionTime) - new Date(a.transactionTime)).map((auction) => (
                <tr key={auction.id}>
                  <td>{auction.bid.bidId}</td>
                  <td>{auction.bid.koi.koiId}</td>
                  <td>{auction.bid.koi.koiName}</td>
                  <td>{auction.user ? auction.user.id : 'Không '}</td>
                  <td>{auction.user ? auction.user.username : 'Không '}</td>
                  <td>{auction.price}</td>
                  <td>
                    {new Date(auction.transactionTime).toLocaleString('en-GB', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit'
                    })}
                  </td>
                  {/*<td>*/}
                  {/*  <button onClick={() => handleDeleteAuction(auction.id)}>*/}
                  {/*    Delete*/}
                  {/*  </button>*/}
                  {/*</td>*/}
                </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No auctions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AuctionHistory;
