import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import auth from '../utils/auth';
import "../styles/ProductDetail.css";
import { Category } from "../interfaces/Category";


const NewProduct = () => {
  const [name , setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image_url, setImageUrl] = useState("");
  const [categoryList, setCategoryList] = useState<Category[]>([] as Category[]);
  const [category_id, setCategoryId] = useState(1);

  let sellerId: number;

  const getUserIdByUsername = async () => {
    const { username } = jwtDecode(auth.getToken()) as { username: string };
    const response = await fetch(`http://localhost:3001/api/users/username/${username}`);
    const data = await response.json();
    sellerId = data.id;
    console.log("sellerId", sellerId);
    sellerId = data.id;
    console.log("sellerId", sellerId);
  }

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/categories");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
    setCategoryList(data)
    setCategoryList(data)
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };


  useEffect(() => {
    fetchCategories();
    getUserIdByUsername();
  }, []);

  const handlePostItem = async () => {
    const errorMessageElement = document.getElementById("error-message");
    if (name === '' || description === '' || price === 0 || image_url === '') {
      if (errorMessageElement) {
        errorMessageElement.innerHTML = "Please fill out all fields---they are all required.";
      }
      return;
    }

    if (errorMessageElement) {
      errorMessageElement.innerHTML = "Trying to update now...";
    }

    try {
      
      
      const response = await fetch(`http://localhost:3001/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
          category_id: category_id,
          seller_id: sellerId,
          price: price,
          image_url: image_url
      })
    })

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      if (errorMessageElement) {
        errorMessageElement.innerHTML = "Update was successful!";
        setTimeout(function() {
          window.location.assign("/sell")
        }, 3000);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      if (errorMessageElement) {
        errorMessageElement.innerHTML = "Error updating product. Please try again. :(";
      }
    }
  };

  return (
    <div className="form-container">
        <p>Name:  </p><input className="edit-product-field" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>Description:  </p><input className="edit-product-field" id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)}  />
        <p>Price:  $</p><input className="edit-product-field" id="price" type="number || string" value={price} onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}/>
        <p>Image URL:  </p><input  className="edit-product-field" id="image" type="text" value={image_url} onChange={(e) => setImageUrl(e.target.value)} />
        <div className="image-preview-container">
          <img src={image_url} alt="Product" className="edit-product-image"/>
        </div>
        <p>Category: </p>
        <select  className="edit-product-field drop-down" id="category" defaultValue={3} onChange={(e) => setCategoryId(parseInt(e.target.value))}>
          {categoryList.map((category) => (
            <option key={category.id} value={category.id}>
              {category.category}
            </option>
          ))}
        </select>
        <p></p>

        <div className="action-buttons">
        <button className="action-buttons" onClick={() => handlePostItem()}>Update Item</button>
        <div></div>
        <button className="action-buttons" onClick={() => window.location.assign("/sell")}>Nevermind!</button>
        <div></div>
        </div>
        <p id="error-message"></p>
    </div>
  );

};

export default NewProduct;