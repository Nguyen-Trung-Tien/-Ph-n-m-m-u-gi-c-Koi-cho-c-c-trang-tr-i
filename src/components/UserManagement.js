import React, { useState } from "react";
import "../styles/UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    role: "User",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddUser = () => {
    if (formData.name && formData.email && formData.role) {
      setUsers([...users, { ...formData, id: users.length + 1 }]);
      setFormData({ id: null, name: "", email: "", role: "User" });
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleEditUser = (user) => {
    setFormData(user);
    setIsEditing(true);
  };

  const handleUpdateUser = () => {
    setUsers(users.map((user) => (user.id === formData.id ? formData : user)));
    setFormData({ id: null, name: "", email: "", role: "User" });
    setIsEditing(false);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>

      <div className="user-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        {isEditing ? (
          <button onClick={handleUpdateUser}>Update User</button>
        ) : (
          <button onClick={handleAddUser}>Add User</button>
        )}
      </div>

      <div className="user-list">
        <h3>User List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleEditUser(user)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>
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

export default UserManagement;
