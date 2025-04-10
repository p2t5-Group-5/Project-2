import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import auth from '../utils/auth';
import "../styles/ProductDetail.css";
import { Category } from "../interfaces/Category";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

const NewProduct = () => {
  const  navigate = useNavigate();
  const [name , setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image_url, setImageUrl] = useState("");
  const [categoryList, setCategoryList] = useState<Category[]>([] as Category[]);
  const [category_id, setCategoryId] = useState(1);

  // let sellerId: number;

  const getUserIdByUsername = async () => {
    const { username } = jwtDecode(auth.getToken()) as { username: string };
    const response = await fetch(`${BASE_URL}/api/users/username/${username}`);
    const data = await response.json();
    return data.id;
    // sellerId = data.id;
    // console.log("sellerId", sellerId);
  }

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/categories`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
    setCategoryList(data)
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };


  useEffect(() => {
    fetchCategories();
    getUserIdByUsername();
  }, []);

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setCategoryId(parseInt(e.target.value))
  }

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
      
      const sellerId = await getUserIdByUsername();
      console.log("category", category_id);
      const response = await fetch(`${BASE_URL}/api/products`, {
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
          navigate("/sell")
        }, 1000);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      if (errorMessageElement) {
        errorMessageElement.innerHTML = "Error updating product. Please try again. :(";
      }
    }
  };

  return (
    <div className="form-container new-product">
        <p>Name:  </p><input className="edit-product-field" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>Description:  </p><input className="edit-product-field" id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)}  />
        <p>Price:  $</p><input className="edit-product-field" id="price" type="number || string" value={price} onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}/>
        <p>Image URL:  </p><input  className="edit-product-field" id="image" type="text" value={image_url} onChange={(e) => setImageUrl(e.target.value)} />
        <div className="image-preview-container">
          {image_url ? <img src={image_url} alt="product-image" className="edit-product-image"/>: ''}
        </div>
        <p>Category: </p>
        <select  className="edit-product-field drop-down" id="category" defaultValue={3} onChange={(e) => handleCategoryChange(e)}>
          {categoryList.map((category) => (
            <option key={category.id} value={category.id}>
              {category.category}
            </option>
          ))}
        </select>
        <p></p>

        <div className="action-buttons">
        <button className="btn btn-primary" onClick={() => handlePostItem()}>Post</button>
        <button className="btn btn-primary" onClick={() => navigate("/sell")}>Cancel</button>
        </div>
        <p id="error-message"></p>
    </div>
  );

};

export default NewProduct;