import React, {useEffect, useState} from "react";
import "../../css/styles/UserManagement.css";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const ListUser = async () =>{
      try{
        console.log("get list user in data base");
        const response = await axios.get(`http://localhost:8080/auction/users/listUser`);
        console.log("data has been completed", response);
        setUsers(response.data);

      }
      catch (error) {
        console.error('Lỗi lấy danh sách người dùng:', error);
      }
    }
    ListUser();
  }, []);

  const [formData, setFormData] = useState({
    id: null,
    userName:"",
    name: "",
    email: "",
    phone:"",
    wallet:"",
    role: "User",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const nameSplit = formData.name.split(" ");
    const firstName = nameSplit.slice(0, -1).join(" ");
    const lastName = nameSplit[nameSplit.length - 1];

    try {
      const response = await fetch(`http://localhost:8080/auction/users/update/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: formData.id,
          email: formData.email,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: formData.phone,
          wallet: formData.wallet,
          role: formData.role === "User" ? false : true
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        // Store the updated user data
        localStorage.setItem('formData', JSON.stringify(data));
        setFormData(data); // Update the state with the new data
        alert('Cập nhật thành công');
        window.location.reload();
      } else {
        throw new Error(data.message || 'Failed to update');
      }
    } catch (error) {
      console.error('Lỗi:', error);
      alert('Đã xảy ra lỗi, vui lòng thử lại sau!');
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddUser = () => {
    if (formData.name && formData.email && formData.role) {
      setUsers([...users, { ...formData, id: users.length + 1 }]);
      setFormData({ id: null,
        userName:"",
        name: "",
        email: "",
        phone:"",
        wallet:"",
        role: "User", });
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleEditUser = (user) => {
    setFormData({
      id: user.id,
      userName: user.username,
      name: user.firstName +" " + user.lastName,
      email: user.email,
      phone: user.phoneNumber,
      wallet: user.wallet,
      role: user.role == false ? "User" : " Admin"
    });
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

  const changeImage = () => {

  }

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
          <label>User name</label>
          <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              placeholder="Enter name"
              disabled
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
          <label>Phone</label>
          <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter phone"
          />
        </div>
        <div className="form-group">
          <label>Wallet</label>
          <input
              type="wallet"
              name="wallet"
              value={formData.wallet}
              onChange={handleInputChange}
              placeholder="Enter wallet"
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        {isEditing ? (
            <button onClick={handleUpdateProfile}>Update User</button>
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
            <th style={{width: "130px", minWidth: "60px"}}>Actions</th>
          </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName +" " + user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role === false ? "user": "admin"}</td>
                <td>
                  <button onClick={() => handleEditUser(user)}>Edit</button>
                  {/*<button onClick={() => handleDeleteUser(user.id)}>*/}
                  {/*  Delete*/}
                  {/*</button>*/}
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
