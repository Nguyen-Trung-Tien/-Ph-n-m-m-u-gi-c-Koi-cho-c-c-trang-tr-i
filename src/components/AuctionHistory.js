import React, { useState, useEffect } from "react";
import "../styles/AuctionHistory.css";

const AuctionHistory = () => {
  const [auctionHistory, setAuctionHistory] = useState([]);
  const [filter, setFilter] = useState("");

  // useEffect để lấy dữ liệu đấu giá từ API khi component render
  useEffect(() => {
    // Giả sử bạn có một API endpoint để lấy lịch sử đấu giá
    fetch("/api/auction-history")
      .then((response) => response.json())
      .then((data) => setAuctionHistory(data))
      .catch((error) =>
        console.error("Error fetching auction history:", error)
      );
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

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

  const filteredAuctions = auctionHistory.filter((auction) =>
    auction.product.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="auction-history">
      <h2>Auction History</h2>

      <div className="filter">
        <label>Filter by product: </label>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Enter product name"
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Winner</th>
            <th>Final Price</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAuctions.length > 0 ? (
            filteredAuctions.map((auction) => (
              <tr key={auction.id}>
                <td>{auction.product}</td>
                <td>{auction.winner}</td>
                <td>{auction.finalPrice}</td>
                <td>{auction.endDate}</td>
                <td>
                  <button onClick={() => handleDeleteAuction(auction.id)}>
                    Delete
                  </button>
                </td>
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
