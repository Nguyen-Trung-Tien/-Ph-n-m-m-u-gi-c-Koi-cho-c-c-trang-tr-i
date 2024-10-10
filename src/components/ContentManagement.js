import React, { useEffect, useState } from "react";
import axios from "axios";

const ContentManagement = () => {
  const [contents, setContents] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    const response = await axios.get("http://localhost:5000/api/content");
    setContents(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/content", formData);
    fetchContents();
    setFormData({ title: "", body: "", imageUrl: "" }); // Reset form
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/content/${id}`);
    fetchContents();
  };

  return (
    <div>
      <h2>Quản Lý Nội Dung</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Tiêu đề"
          required
        />
        <textarea
          name="body"
          value={formData.body}
          onChange={handleInputChange}
          placeholder="Nội dung"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
          placeholder="URL hình ảnh"
        />
        <button type="submit">Thêm Nội Dung</button>
      </form>

      <h3>Danh Sách Nội Dung</h3>
      <ul>
        {contents.map((content) => (
          <li key={content._id}>
            <h4>{content.title}</h4>
            <p>{content.body}</p>
            <img src={content.imageUrl} alt={content.title} width="100" />
            <button onClick={() => handleDelete(content._id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentManagement;
