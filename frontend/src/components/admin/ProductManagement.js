import React, {useEffect, useState} from "react";
import "../../css/styles/ProductManagement.css";
import axios from "axios";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    age: "",
    size: "",
    gender:"Male",
    priceStart:"",
    breederId:""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [image,setImage]= useState(null);
  const [file, setFile] = useState();
  const [breeder,setBreeder] = useState([]);

  useEffect(() => {
    const ListKoi = async () => {
      try {
        console.log("Fetching koi list");
        const koiResponse = await axios.get(`http://localhost:8080/auction/koi/productManage`);
        console.log("Koi data has been received", koiResponse);
        convertEntityToProduct(koiResponse.data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách cá koi:', error);
      }
    };

    const ListBreeder = async () => {
      try {
        console.log("Fetching breeder list");
        const breederResponse = await axios.get(`http://localhost:8080/auction/breeder/list`);
        console.log("Breeder data has been received", breederResponse);
        setBreeder(breederResponse.data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách nhà lai tạo:', error);
      }
    };

    // Gọi lần lượt từng API
    ListKoi().then(() => ListBreeder());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddProduct = async (e) => {
    alert(formData.breederId)
    if (
      formData.name &&
      formData.age &&
      formData.size &&
      formData.priceStart &&
      formData.gender&&
        image&&
        formData.breederId
    ) {
      e.preventDefault();
      const flag= getFormData();
      const formData = new FormData();
      formData.append("id", flag.id);
      formData.append("name", flag.name);
      formData.append("age", flag.age);
      formData.append("size", flag.size);
      formData.append("gender", flag.gender);
      formData.append("priceStart", flag.priceStart);
      formData.append("file", image); // Directly append the file
      formData.append("breederId", flag.breederId); // Directly append the file


      try {
        const response = await fetch(`http://localhost:8080/auction/koi/create`, {
          method: 'POST',
          body: formData // Set FormData as the body
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


    } else {
      alert("Please fill in all the fields.");
    }
  };

  const handleEditProduct = (product) => {
    setFormData(product);
    setIsEditing(true);
  }

  const convertEntityToProduct = (koi) => {
    // Map over `koi` to create an array of products
    const newProducts = koi.map((product) => ({
      id: product[0],
      name: product[4],
      age: product[1],
      size: product[5],
      startTime: product[8],
      gender: product[6],
      priceStart: product[7],
      breederId:product[3]
    }));

    // Update state with the new products
    setProducts([]);
    setProducts((prevTest) => [...prevTest, ...newProducts]);
  };

  const getFormData = () =>{
    return formData;
  }
  const handleUpdateKoi = async (e) => {
    const flag= getFormData();
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", flag.id);
    formData.append("name", flag.name);
    formData.append("age", flag.age);
    formData.append("size", flag.size);
    formData.append("gender", flag.gender);
    formData.append("priceStart", flag.priceStart);
    formData.append("file", image); // Directly append the file
    formData.append("breederId",flag.breederId)
    try {
      const response = await fetch(`http://localhost:8080/auction/koi/update/${flag.id}`, {
        method: 'PUT',
        body: formData // Set FormData as the body
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


  }

  const postImage = async (e) => {
    e.preventDefault();
    try {
      // Create FormData object
      const formData = new FormData();
      formData.append("file", image);

      const response = await fetch("http://localhost:8080/auction/koi/update", {
        method: "POST",
        body: formData, // Set the FormData object as the request body
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        // Store the updated user data
        localStorage.setItem("formData", JSON.stringify(data));
        setFormData(data); // Update the state with the new data
        alert("Cập nhật thành công");
        window.location.reload();
      } else {
        throw new Error(data.message || "Failed to update");
      }
    } catch (error) {
      console.error("Lỗi:", error);
      alert("Đã xảy ra lỗi, vui lòng thử lại sau!");
    }
  };

  const changeImage = () =>{
    let inputFile = document.getElementById("img-koi");
    let showImage = document.getElementById("image_koi--change");
    showImage.src = URL.createObjectURL(inputFile.files[0]);
    setImage(inputFile.files[0]);
    console.log(inputFile.files[0]);
  }

  // const uploadImage = (imageData) => async dispatch => {
  //   if (imageData.entries().next().value[1] !== null) {
  //     const response = await axios.post(axios.defaults.baseURL + `/api/upload/image`, imageData, {
  //       onUploadProgress:progressEvent => {
  //         console.log("Uploading : " + ((progressEvent.loaded / progressEvent.total) * 100).toString() + "%")
  //       }
  //     });
  //     dispatch({
  //       type: UPLOAD_IMAGE,
  //       payload: response.data
  //     });
  //   }
  // };

  return (
    <div className="product-management">
      <h2>Manage Koi Fish Auction</h2>
      <div className="product-form">
        <div className="product-lf">
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
            <label>Gender</label>
            <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                style={{backgroundColor: "rgb(213, 213, 217)"}}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>breeder</label>
            <select
                name="breederId"
                value={formData.breederId}
                onChange={handleInputChange}
                style={{backgroundColor: "rgb(213, 213, 217)"}}
            >
              {(formData.breederId  === '') &&
                  <option value={-1}>
                    Chọn nhà cung cấp
                  </option>}
              {breeder.map((breede) => (
                  <option key={breede.breederId} value={breede.breederId}>
                    {breede.breederName}
                  </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Starting price</label>
            <input
                type="text"
                name="priceStart"
                value={formData.priceStart}
                onChange={handleInputChange}
            />
          </div>
          {/*<div className="form-group">*/}
          {/*  <label>Image</label>*/}
          {/*  <input*/}
          {/*      type="file"*/}
          {/*      name="imageKoi"*/}
          {/*      accept="image/*"*/}
          {/*      value={formData.priceStart}*/}
          {/*      onChange={handleInputChange}*/}
          {/*  />*/}
          {/*</div>*/}
          {isEditing ? (
              <button onClick={handleUpdateKoi}>Update koi</button>
          ) : (
              <button onClick={handleAddProduct}>Add Koi Fish</button>
          )}
        </div>

        <div className="product-rt">
          <div className="product-rt_image">
            <div className="product-rt_image--ifram">
              {formData.id !== null ? (
                  <img
                      id="image_koi--change"
                      src={`../img/h${formData.id}.jpg`}
                      alt="Product"
                  />
              ) : image !== null ? (
                  <img
                      id="image_koi--change"
                      src={URL.createObjectURL(image)}
                      alt="Product"
                  />
              ) : <img
                  id="image_koi--change"
                  alt="Product"
                  style={{ display: "none" }}
              />}
            </div>
            <div className="product-rt_image--button">
              <label for="img-koi" className="product-rt_image--button_style">CHỌN ẢNH</label>
              <input type="file" id="img-koi" name="img" accept="image/*" onChange={changeImage}/>
            </div>
          </div>
        </div>

      </div>

      <div className="product-list">
        <h3>Upcoming Auctions</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Size (cm)</th>
              <th>Gender</th>
              <th style={{width: "100vw", maxWidth: "250px",}}>Starting price</th>
              <th style={{width: "13vw", maxWidth: "150px"}}></th>
              {/*<th style={{width: "100vw", maxWidth: "250px"}}></th>*/}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.age}</td>
                <td>{product.size}</td>
                <td>{product.gender}</td>
                <td>{product.priceStart.toLocaleString()} $</td>
                <td><button onClick ={() => handleEditProduct(product) }>Chỉnh sửa</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
