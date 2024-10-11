import React, { useState, useEffect } from "react";
import "../styles/AuctionManagement.css";

const AuctionManagement = () => {
  const [auctions, setAuctions] = useState([]);
  const [newAuction, setNewAuction] = useState({
    product: "",
    startTime: "",
    endTime: "",
    startingPrice: "",
  });
  const [selectedAuction, setSelectedAuction] = useState(null); // Auction selected for editing

  useEffect(() => {
    // Fetch the existing auctions from the backend
    fetch("/api/auctions")
      .then((response) => response.json())
      .then((data) => setAuctions(data))
      .catch((error) => console.error("Error fetching auctions:", error));
  }, []);

  // Handle input changes for the new auction form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAuction({ ...newAuction, [name]: value });
  };

  // Create a new auction
  const handleCreateAuction = () => {
    fetch("/api/auctions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAuction),
    })
      .then((response) => response.json())
      .then((createdAuction) => {
        setAuctions([...auctions, createdAuction]);
        setNewAuction({
          product: "",
          startTime: "",
          endTime: "",
          startingPrice: "",
        });
      })
      .catch((error) => console.error("Error creating auction:", error));
  };

  // Edit an auction
  const handleEditAuction = (id, updatedAuction) => {
    fetch(`/api/auctions/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedAuction),
    })
      .then((response) => response.json())
      .then((updatedAuction) => {
        setAuctions(
          auctions.map((auction) =>
            auction.id === id ? updatedAuction : auction
          )
        );
        setSelectedAuction(null);
      })
      .catch((error) => console.error("Error editing auction:", error));
  };

  // Delete or cancel an auction
  const handleDeleteAuction = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this auction?"
    );
    if (confirmDelete) {
      fetch(`/api/auctions/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            setAuctions(auctions.filter((auction) => auction.id !== id));
          }
        })
        .catch((error) => console.error("Error deleting auction:", error));
    }
  };

  // Monitor or intervene in an ongoing auction
  const handleMonitorAuction = (auction) => {
    alert(`Monitoring auction for product: ${auction.product}`);
    // You can add additional functionality here, like pausing or ending an auction
  };

  return (
    <div className="auction-management">
      <h2>Auction Management</h2>

      {/* Form to create a new auction */}
      <div className="create-auction">
        <h3>Create New Auction</h3>
        <label>
          Product:
          <input
            type="text"
            name="product"
            value={newAuction.product}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Start Time:
          <input
            type="datetime-local"
            name="startTime"
            value={newAuction.startTime}
            onChange={handleInputChange}
          />
        </label>
        <label>
          End Time:
          <input
            type="datetime-local"
            name="endTime"
            value={newAuction.endTime}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Starting Price:
          <input
            type="number"
            name="startingPrice"
            value={newAuction.startingPrice}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleCreateAuction}>Create Auction</button>
      </div>

      {/* List of existing auctions */}
      <div className="auction-list">
        <h3>Ongoing Auctions</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Starting Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {auctions.map((auction) => (
              <tr key={auction.id}>
                <td>{auction.product}</td>
                <td>{new Date(auction.startTime).toLocaleString()}</td>
                <td>{new Date(auction.endTime).toLocaleString()}</td>
                <td>{auction.startingPrice}</td>
                <td>{auction.status}</td>
                <td>
                  <button onClick={() => setSelectedAuction(auction)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteAuction(auction.id)}>
                    Cancel
                  </button>
                  <button onClick={() => handleMonitorAuction(auction)}>
                    Monitor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal to edit an existing auction */}
      {selectedAuction && (
        <div className="edit-auction-modal">
          <h3>Edit Auction</h3>
          <label>
            Product:
            <input
              type="text"
              value={selectedAuction.product}
              onChange={(e) =>
                setSelectedAuction({
                  ...selectedAuction,
                  product: e.target.value,
                })
              }
            />
          </label>
          <label>
            Start Time:
            <input
              type="datetime-local"
              value={selectedAuction.startTime}
              onChange={(e) =>
                setSelectedAuction({
                  ...selectedAuction,
                  startTime: e.target.value,
                })
              }
            />
          </label>
          <label>
            End Time:
            <input
              type="datetime-local"
              value={selectedAuction.endTime}
              onChange={(e) =>
                setSelectedAuction({
                  ...selectedAuction,
                  endTime: e.target.value,
                })
              }
            />
          </label>
          <label>
            Starting Price:
            <input
              type="number"
              value={selectedAuction.startingPrice}
              onChange={(e) =>
                setSelectedAuction({
                  ...selectedAuction,
                  startingPrice: e.target.value,
                })
              }
            />
          </label>
          <button
            onClick={() =>
              handleEditAuction(selectedAuction.id, selectedAuction)
            }
          >
            Save Changes
          </button>
          <button onClick={() => setSelectedAuction(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default AuctionManagement;
