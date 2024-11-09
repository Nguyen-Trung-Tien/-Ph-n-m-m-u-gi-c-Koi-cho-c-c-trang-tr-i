import React, { useState, useEffect } from "react";
import "../../css/styles/AuctionManagement.css";
import {ListProduct,setKeyWord,getProductNow,ISPRODUCTVALID,setIsValid} from "./ListProduct";
import axios from "axios";

const AuctionManagement = () => {
  const [auctions, setAuctions] = useState([]);
  const [newAuction, setNewAuction] = useState({
    id:"",
    name:"",
    priceStart:"",
    startTime:'',
    endTime:""
  });
  const [priceStarter,setPriceStarter] = useState();
  const [selectedAuction, setSelectedAuction] = useState(null); // Auction selected for editing

  useEffect(() => {

    const listBids = async () => {
      try{
        console.log("get list user in data base");
        const response = await axios.get(`http://localhost:8080/auction/bids/listBids`);
        console.log("data has been completed list bids", response);
        convertEntityToBids(response.data);

      }
      catch (error) {
        console.error('Lỗi lấy danh sách cá koi:', error);
      }
    }
    listBids();
  }, []);

  const convertEntityToBids = (data) =>{

      const timeNow = new Date().toISOString();
      const convert = data.map((bid) => ({
      id: bid[0],
      koi:bid[1],
      name: bid[4],
      startTime: bid[2],
      endTime: bid[3],
      startingPrice:bid[5],
      status: (timeNow >= bid[2] && timeNow<= bid[3] ? "Đang diễn ra" :
          timeNow < bid[2] ? "Sắp diễn ra" : "Đã kết thúc"),
        edit: timeNow < bid[2] ? 1 :0
    }))
    setAuctions([]);
    setAuctions((prevTest) => [...prevTest, ...convert]);
  }

  // Handle input changes for the new auction form
  const handleInputChangeProduct = (e) => {
    const { name, value } = e.target;
    setNewAuction({ ...newAuction, [name]: value , });
    setIsValid(0);
    setKeyWord(value);
  };
  const handleInputChange= (e) => {
    const { name, value } = e.target;
    setNewAuction({ ...newAuction, [name]: value });
  };

  const handleInputChangePriceStart= (e) => {
    const { name, value } = e.target;

    if(value<priceStarter){
      alert("Giá khởi điểm không được thấp hơn :" + priceStarter.toLocaleString() + " VND")
    }
    else
    setNewAuction({ ...newAuction, [name]: value });
  };

  // Create a new auction
  const handleCreateAuction = () => {
    if(!newAuction.name ||!newAuction.startTime ||!newAuction.endTime || !newAuction.priceStart ){
      alert("fill all fied");
    }
    else if(!ISPRODUCTVALID){
      alert("cá koi không hợp lệ");
    }
    else if(newAuction.startTime >= newAuction.endTime){
      alert("thời gian không hợp lệ")
    }
    console.log("send post new bid",newAuction)
    fetch("http://localhost:8080/auction/bids/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAuction),
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to create auction");
          }
          return response.json();
        })
        .then((createdAuction) => {
          console.log("Auction created successfully:", createdAuction);
          setAuctions((prevAuctions) => [...prevAuctions, createdAuction]);
          setNewAuction({
            id: "",
            name: "",
            priceStart: "",
            startTime: "",
            endTime: ""
          });
        })
        .catch((error) => console.error("Error creating auction:", error));

    window.location.reload();
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

  // // Delete or cancel an auction
  // const handleDeleteAuction = (id) => {
  //   const confirmDelete = window.confirm(
  //     "Are you sure you want to cancel this auction?"
  //   );
  //   if (confirmDelete) {
  //     fetch(`/api/auctions/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((response) => {
  //         if (response.ok) {
  //           setAuctions(auctions.filter((auction) => auction.id !== id));
  //         }
  //       })
  //       .catch((error) => console.error("Error deleting auction:", error));
  //   }
  // };
  //
  // // Monitor or intervene in an ongoing auction
  // const handleMonitorAuction = (auction) => {
  //   alert(`Monitoring auction for product: ${auction.product}`);
  //   // You can add additional functionality here, like pausing or ending an auction
  // };

  const hideDropDown = () => {
    let stateDropDown = document.getElementById("dropdown-product")
    stateDropDown.style.visibility ="visible";
  }
  const hiddenDropDown = async (e) => {
    const { name, value } = e.target;

    // Get the dropdown element at the start of the function
    const stateDropDown = document.getElementById("dropdown-product");

    // Use a delay to hide the dropdown, then set productNow afterward
    setTimeout(() => {
      stateDropDown.style.visibility = "hidden";
      // Set productNow after the dropdown is hidden
      let flag =getProductNow();
      setNewAuction({ ...newAuction, ...flag });
      setPriceStarter(flag.priceStart);
    }, 150); // 500 ms delay

  }

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
              name="name"
              value={newAuction.name}
              onChange={handleInputChangeProduct}
              onFocus={hideDropDown}
              onBlur={hiddenDropDown}
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
              name="priceStart"
              value={newAuction.priceStart}
              onChange={handleInputChangePriceStart}
          />
        </label>
        <div className="dropdown-product" id="dropdown-product">
          <div className="dropdown-product_container">
            <div className="dropdown-product_container-overflow">
              <ListProduct/>
            </div>
          </div>
        </div>
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
              {/*<th>Actions</th>*/}
            </tr>
          </thead>
          <tbody>
            {auctions.map((auction) => (
              <tr key={auction.id}>
                <td>{auction.name}</td>
                <td>{new Date(auction.startTime).toLocaleString()}</td>
                <td>{new Date(auction.endTime).toLocaleString()}</td>
                <td>{auction.startingPrice.toLocaleString()}$</td>
                <td>{auction.status}</td>
                {/*<td>*/}
                {/*  /!*{auction.edit ? (*!/*/}
                {/*  /!*    <button onClick={() => setSelectedAuction(auction)}>*!/*/}
                {/*  /!*      Edit*!/*/}
                {/*  /!*    </button>*!/*/}
                {/*  /!*) : " "}*!/*/}
                {/*</td>*/}
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
