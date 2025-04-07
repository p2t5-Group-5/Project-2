import { Product } from "../interfaces/Product";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import auth from '../utils/auth';
import { useParams } from "react-router";
import "../styles/ProductDetail.css";
import { Category } from "../interfaces/Category";

const EditProduct = () => {
  const [thisProduct, setThisProduct] = useState< Product| null>(null);
  const [categories, setCategories] = useState<Category[]>([] as Category[]);
  //const [inputValue, setInputValue] = useState("");
  const [userId, setUserId] = useState(undefined);
  const params = useParams();
  console.log("params", params.id);
  const { username } = jwtDecode(auth.getToken()) as { username: string };
  
  const getUserIdByUsername = async () => {
    const response = await fetch(`http://localhost:3001/api/users/username/${username}`);
    const data = await response.json();
    console.log(userId);
    setUserId(data.id);
  }


  const fetchProduct = async () => {
    // if (params.id === undefined) {
    console.log("New product: Product ID is undefined");
    // } else {
        try {
          const response = await fetch("http://localhost:3001/api/products/" + params.id);
          console.log("response", response);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setThisProduct(data);
        } catch (error) {
          console.error("Error fetching product:", error);
        };
    // };
  };


  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/categories");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data)
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    };
  };

  useEffect(() => {
    fetchProduct();
    fetchCategories();
    console.log(categories)
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
        <p>Price:  $</p><input className="edit-product-field" id="price" type="number || string" defaultValue={thisProduct?.price || 4.04}/>
        {/* <p>Available Quantity:  </p><input  className="edit-product-field" id="quantity" type="number" value={thisProduct?.quantity || 0}/> */}
        <p>Image URL:  </p><input  className="edit-product-field" id="image" type="text" defaultValue={thisProduct?.image_url} />
        <div className="image-preview-container">
          <img src={thisProduct?.image_url} alt="Product" className="edit-product-image"/>
        </div>
        <p>Category: </p>
        <select  className="edit-product-field drop-down" id="category" defaultValue={thisProduct?.category_id || 3}>
          {categories.map((category: { id: number; category: string}) => (
            <option key={category.id} value={category.id}>
              {category.category}
            </option>
          ))}
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

