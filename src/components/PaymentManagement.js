import React, { useState, useEffect } from "react";
import "../styles/PaymentManagement.css";

const PaymentManagement = () => {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({
    user: "",
    auction: "",
    amount: "",
    date: "",
    status: "Pending",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/payments")
      .then((response) => response.json())
      .then((data) => setPayments(data))
      .catch((error) => console.error("Error fetching payments:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPayment({ ...newPayment, [name]: value });
  };

  const handleCreatePayment = () => {
    if (!newPayment.user || !newPayment.auction || newPayment.amount <= 0) {
      setError("Please fill in all fields with valid data.");
      return;
    }
    setError("");

    fetch("/api/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPayment),
    })
      .then((response) => response.json())
      .then((createdPayment) => {
        setPayments([...payments, createdPayment]);
        setNewPayment({
          user: "",
          auction: "",
          amount: "",
          date: "",
          status: "Pending",
        });
      })
      .catch((error) => {
        setError("Error creating payment: " + error.message);
        console.error("Error creating payment:", error);
      });
  };

  const handleUpdatePayment = (id, status) => {
    fetch(`/api/payments/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((response) => response.json())
      .then((updatedPayment) => {
        setPayments(
          payments.map((payment) =>
            payment.id === id ? updatedPayment : payment
          )
        );
      })
      .catch((error) => console.error("Error updating payment:", error));
  };

  const handleDeletePayment = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this payment?"
    );
    if (confirmDelete) {
      fetch(`/api/payments/${id}`, { method: "DELETE" })
        .then((response) => {
          if (response.ok) {
            setPayments(payments.filter((payment) => payment.id !== id));
          }
        })
        .catch((error) => console.error("Error deleting payment:", error));
    }
  };

  return (
    <div className="payment-management">
      <h2>Payment Management</h2>
      {error && <div className="error-message">{error}</div>}

      <div className="create-payment">
        <h3>Create New Payment</h3>
        <label>
          User:
          <input
            type="text"
            name="user"
            value={newPayment.user}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Auction:
          <input
            type="text"
            name="auction"
            value={newPayment.auction}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={newPayment.amount}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={newPayment.date}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleCreatePayment}>Create Payment</button>
      </div>

      <div className="payment-list">
        <h3>Payment List</h3>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Auction</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.user}</td>
                <td>{payment.auction}</td>
                <td>${payment.amount}</td>
                <td>{new Date(payment.date).toLocaleDateString()}</td>
                <td>{payment.status}</td>
                <td>
                  <button
                    onClick={() => handleUpdatePayment(payment.id, "Completed")}
                  >
                    Mark as Completed
                  </button>
                  <button onClick={() => handleDeletePayment(payment.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentManagement;
