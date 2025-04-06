import { Product } from "../interfaces/Product";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import auth from '../utils/auth';
import { useParams } from "react-router";
import "../styles/ProductDetail.css";


const EditProduct = () => {
  const [thisProduct, setThisProduct] = useState< Product| null>(null);
  const [categories, setCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [username, setUserId] = useState(undefined);
  const params = useParams();
  // const { username } = jwtDecode(auth.getToken()) as { username: string };
  
  const getUserIdByUsername = async () => {
    const response = await fetch(`http://localhost:3001/api/users/username/${username}`);
    const data = await response.json();
    setUserId(data.id);
  }

  const fetchProduct = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products/" + params.id);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setThisProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    };
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/categories");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    };
  };

  useEffect(() => {
    fetchProduct();
    fetchCategories();
    getUserIdByUsername();
  }, []);

  const handleUpdateItem = async () => {
    const errorMessageElement = document.getElementById("error-message");
    if (document.getElementById("name") === null || document.getElementById("description") === null || document.getElementById("price") === null || document.getElementById("image") === null || document.getElementById("category") === null) {
      if (errorMessageElement) {
        errorMessageElement.innerHTML = "Please fill out all fields---they are all required.";
      }
      return;
    };

    const productId = params.id;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const description = (document.getElementById("description") as HTMLInputElement).value;
    const price = parseFloat((document.getElementById("price") as HTMLInputElement).value);
    const image_url = (document.getElementById("image") as HTMLInputElement).value;
    const category_id = parseInt((document.getElementById("category") as HTMLInputElement).value);
    if (errorMessageElement) {
      errorMessageElement.innerHTML = "Trying to update now...";
    }


    try {
      const response = await fetch(`http://localhost:3001/api/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price,
          image_url,
          category_id,
        }),
      });

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
        <p>Name:  </p><input className="edit-product-field" id="name" type="text" defaultValue={thisProduct?.name || ''} />
        <p>Description:  </p><input className="edit-product-field" id="description" type="text" defaultValue={thisProduct?.description || '' }  />
        <p>Price:  $</p><input className="edit-product-field" id="price" type="number || string" defaultValue={thisProduct?.price || 0}/>
        {/* <p>Available Quantity:  </p><input  className="edit-product-field" id="quantity" type="number" value={thisProduct?.quantity || 0}/> */}
        <p>Image URL:  </p><input  className="edit-product-field" id="image" type="text" defaultValue={thisProduct?.image_url} />
        <div className="image-preview-container">
          <img src={thisProduct?.image_url} alt="Product" className="edit-product-image"/>
        </div>
        <p>Category: </p>
        <select  className="edit-product-field drop-down" id="category" defaultValue={thisProduct?.category_id || 3}>
          {categories.map((category: { id: number; name: string}) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
          {/* Added the hard coding below because I could not get the .map to work. If we fix it, comment out the section below so as not to duplicate the values -JH */}
          <option value="1">Electronics</option>
          <option value="2">Clothing</option>
          <option value="3">Household</option>
          <option value="4">Books</option>
          <option value="5">Toys</option>
          <option value="6">Food</option>
        </select>
        <p></p>

        <div className="action-buttons">
        <button className="action-buttons" onClick={() => handleUpdateItem()}>Update Item</button>
        <div></div>
        <button className="action-buttons" onClick={() => window.location.assign("/sell")}>Nevermind!</button>
        <div></div>
        </div>
        <p id="error-message"></p>
    </div>
  );

};

export default EditProduct;

