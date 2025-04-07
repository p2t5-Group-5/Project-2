import { Product } from "../interfaces/Product";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import auth from '../utils/auth';
import { useParams } from "react-router";
import "../styles/ProductDetail.css";
import { Category } from "../interfaces/Category";




const NewProduct = () => {
  const [thisProduct, setThisProduct] = useState< Product| null>(null);
  const [name , setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image_url, setImageUrl] = useState("");
//   let categoryList = [] as Category[];
  const [categoryList, setCategoryList] = useState<Category[]>([] as Category[]);
  const [seller_id, setSellerId] = useState("");
  const params = useParams();

  const getUserIdByUsername = async () => {
    const { username } = jwtDecode(auth.getToken()) as { username: string };
    const response = await fetch(`http://localhost:3001/api/users/username/${username}`);
    const data = await response.json();
    setSellerId(data.id);
  }

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/categories");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
    //   categoryList = data.map((category: { id: number; name: string }) => ({
    //     id: category.id,
    //     name: category.name,
    //   }));
    setCategoryList(data);
    console.log(data)
    console.log(categoryList);
    } catch (error) {
      console.error("Error fetching categories:", error);
    };
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
    };

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
          name,
          description,
          seller_id,
          price,
          image_url,
        //   categoryId,
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
        <p>Name:  </p><input className="edit-product-field" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>Description:  </p><input className="edit-product-field" id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)}  />
        <p>Price:  $</p><input className="edit-product-field" id="price" type="number || string" value={price} onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}/>
        <p>Image URL:  </p><input  className="edit-product-field" id="image" type="text" value={image_url} onChange={(e) => setImageUrl(e.target.value)} />
        <div className="image-preview-container">
          <img src={thisProduct?.image_url} alt="Product" className="edit-product-image"/>
        </div>
        <p>Category: </p>
        <select  className="edit-product-field drop-down" id="category" defaultValue={thisProduct?.category_id || 3}>
          {categoryList.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
          {/* Added the hard coding below because I could not get the .map to work. If we fix it, comment out the section below so as not to duplicate the values -JH */}
          {/* <option value="1">Electronics</option>
          <option value="2">Clothing</option>
          <option value="3">Household</option>
          <option value="4">Books</option>
          <option value="5">Toys</option>
          <option value="6">Food</option> */}
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