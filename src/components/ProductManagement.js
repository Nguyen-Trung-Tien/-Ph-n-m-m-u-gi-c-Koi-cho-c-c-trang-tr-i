import React, { useState } from "react";
import "../styles/ProductManagement.css";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    size: "",
    species: "",
    startTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
    if (
      formData.name &&
      formData.age &&
      formData.size &&
      formData.species &&
      formData.startTime
    ) {
      setProducts([...products, formData]);
      setFormData({ name: "", age: "", size: "", species: "", startTime: "" });
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="product-management">
      <h2>Manage Koi Fish Auction</h2>

      <div className="product-form">
        <div className="form-group">
          <label>Koi Fish Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter fish name"
          />
        </div>

        <div className="form-group">
          <label>Age (years)</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter fish age"
          />
        </div>

        <div className="form-group">
          <label>Size (cm)</label>
          <input
            type="number"
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            placeholder="Enter fish size"
          />
        </div>

        <div className="form-group">
          <label>Species</label>
          <input
            type="text"
            name="species"
            value={formData.species}
            onChange={handleInputChange}
            placeholder="Enter fish species"
          />
        </div>

        <div className="form-group">
          <label>Auction Start Time</label>
          <input
            type="datetime-local"
            name="startTime"
            value={formData.startTime}
            onChange={handleInputChange}
          />
        </div>

        <button onClick={handleAddProduct}>Add Koi Fish</button>
      </div>

      <div className="product-list">
        <h3>Upcoming Auctions</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Size (cm)</th>
              <th>Species</th>
              <th>Start Time</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.age}</td>
                <td>{product.size}</td>
                <td>{product.species}</td>
                <td>{new Date(product.startTime).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
