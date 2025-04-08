

import { Product } from "../interfaces/Product";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../styles/ProductDetail.css";
import { Category } from "../interfaces/Category";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

const EditProduct = () => {
  const [thisProduct, setThisProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const params = useParams<{ id: string }>();
  
  const fetchProduct = async () => {
    if (!params.id) {
      console.log("New product: Product ID is undefined");
      setIsLoading(false);
      return;
    }
    
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/api/products/${params.id}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch product (Status: ${response.status})`);
      }
      
      const data = await response.json();
      setThisProduct(data);
      setNewCategory(data.category_id);
    } catch (error) {
      console.error("Error fetching product:", error);
      setErrorMsg("Failed to load product details. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCategoryChange = (optionId: string) => {
    setNewCategory(+optionId);
  };
  
  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/categories`);
      
      if (!response.ok) {
        throw new Error(`Network response was not ok (Status: ${response.status})`);
      }
      
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setErrorMsg("Failed to load categories. Please try again.");
    }
  };
  
  useEffect(() => {
    const loadData = async () => {
      await Promise.all([fetchProduct(), fetchCategories()]);
    };
    
    loadData();
  }, [params.id]);
  
  const handleUpdateItem = async () => {
    setErrorMsg("");
    
    // Get form elements
    const nameEl = document.getElementById("name") as HTMLInputElement;
    const descriptionEl = document.getElementById("description") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;
    const imageEl = document.getElementById("image") as HTMLInputElement;
    
    // Validate form fields
    if (!nameEl?.value || !descriptionEl?.value || !priceEl?.value || !imageEl?.value || !newCategory) {
      setErrorMsg("Please fill out all fields—they are all required.");
      return;
    }
    
    const price = parseFloat(priceEl.value);
    if (isNaN(price) || price <= 0) {
      setErrorMsg("Please enter a valid price.");
      return;
    }
    
    const productData = {
      name: nameEl.value,
      description: descriptionEl.value,
      price,
      image_url: imageEl.value,
      category_id: newCategory
    };
    
    try {
      const response = await fetch(`${BASE_URL}/api/products/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to update product (Status: ${response.status})`);
      }
      
      setErrorMsg("Update was successful!");
      setTimeout(() => {
        window.location.assign("/sell");
      }, 3000);
    } catch (error) {
      console.error("Error updating product:", error);
      setErrorMsg(`Error updating product: ${error instanceof Error ? error.message : "Please try again."}`);
    }
  };
  
  if (isLoading) {
    return <div className="loading">Loading product details...</div>;
    
  }    
  return (
    <div className="form-container">
            <p>Name:  </p><input className="edit-product-field" id="name" type="text" defaultValue={thisProduct?.name || ''} />
            <p>Description:  </p><input className="edit-product-field" id="description" type="text" defaultValue={thisProduct?.description || '' }  />
            <p>Price:  $</p><input className="edit-product-field" id="price" type="number || string" defaultValue={thisProduct?.price as number}/>
            {/* <p>Available Quantity:  </p><input  className="edit-product-field" id="quantity" type="number" value={thisProduct?.quantity || 0}/> */}
            <p>Image URL:  </p><input  className="edit-product-field" id="image" type="text" defaultValue={thisProduct?.image_url} />
            <div className="image-preview-container">
              <img src={thisProduct?.image_url} alt="Product" className="edit-product-image"/>
            </div>
            <p>Category: </p>
            <select
              className="edit-product-field drop-down"
              id="category"
              defaultValue={thisProduct?.category_id || 3}
              onChange={(e) => handleCategoryChange(e.target.value)}>
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
            <p id="error-message">{errorMsg}</p>
        </div>
      );
    
    };
    
    export default EditProduct;
    
 

