import React, { useEffect, useState } from "react";
import "../../css/styles/ProductManagement.css";
import axios from "axios";

let keyWord = "";
let productNow;
let ISPRODUCTVALID = 0;

const setIsValid = (value) => {
  ISPRODUCTVALID = value;
};
const setKeyWord = (key) => {
  keyWord = key;
};
const getProductNow = () => {
  return productNow;
};
const setProductNow = (product) => {
  productNow = product;
};

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    age: "",
    size: "",
    gender: "",
    priceStart: "",
  });
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const ListKoi = async () => {
      try {
        console.log("get list user in data base");
        const response = await axios.get(
          `http://localhost:8080/auction/koi/productManage`
        );
        console.log("data has been completed", response);
        convertEntityToProduct(response.data);
      } catch (error) {
        console.error("Lỗi lấy danh sách cá koi:", error);
      }
    };
    ListKoi();
  }, []);
  useEffect(() => {
    setFilter(searchNameKoi(keyWord));
  }, [keyWord]);

  const handleEditProduct = (product) => {
    setFormData(product);
    setProductNow(product);
    ISPRODUCTVALID = 1;
    console.log("lel", productNow);
  };
  const getProduct = () => {
    return formData;
  };

  const convertEntityToProduct = (koi) => {
    // lap ban do `koi` tao ra nhieu san pham
    const newProducts = koi.map((product) => ({
      id: product[0],
      name: product[4],
      age: product[1],
      size: product[5],
      startTime: product[8],
      gender: product[6],
      priceStart: product[7],
    }));

    // cap nhat trang thai san pham
    setProducts([]);
    setProducts((prevTest) => [...prevTest, ...newProducts]);
  };

  const searchNameKoi = (name) => {
    const searchTerm = String(name).toLowerCase();
    if (!Array.isArray(products)) {
      console.error("Products is not an array:", products);
      return [];
    }
    const results = products.filter((product) => {
      const isMatch = product.name.toLowerCase().includes(searchTerm);
      console.log(product.name); // In ra tên của sản phẩm để kiểm tra
      return isMatch; // Trả về điều kiện lọc
    });
    console.log(results);
    return results;
  };

  const renderProductRows = (productList) => {
    return productList.map((product, index) => (
      <tr key={index}>
        <td>{product.name}</td>
        <td>{product.age}</td>
        <td>{product.size}</td>
        <td>{product.gender}</td>
        <td>{product.priceStart.toLocaleString()} VNĐ</td>
        <td>
          <button onClick={() => handleEditProduct(product)}>Chọn</button>
        </td>
      </tr>
    ));
  };
  return (
    <div className="product-management_aution">
      <div className="product-list_aution">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Size (cm)</th>
              <th>Gender</th>
              <th style={{ width: "100vw", maxWidth: "250px" }}>
                Starting price
              </th>
              <th style={{ width: "13vw", maxWidth: "150px" }}></th>
              {/*<th style={{width: "100vw", maxWidth: "250px"}}></th>*/}
            </tr>
          </thead>
          <tbody>
            {(keyWord === "" ? products : filter).map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.age}</td>
                <td>{product.size}</td>
                <td>{product.gender}</td>
                <td>{product.priceStart.toLocaleString()} VNĐ</td>
                <td>
                  <button onClick={() => handleEditProduct(product)}>
                    Chọn
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

export { ListProduct, setKeyWord, getProductNow, ISPRODUCTVALID, setIsValid };
