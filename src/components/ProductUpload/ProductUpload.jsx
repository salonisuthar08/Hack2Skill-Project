import React, { useState } from "react";
import "./ProductUpload.css";

const ProductUpload = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, description, story, image };
    addProduct(newProduct);
    setName("");
    setDescription("");
    setStory("");
    setImage("");
  };

  return (
    <form className="product-upload" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Short Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <textarea
        placeholder="Our Story"
        value={story}
        onChange={(e) => setStory(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Upload Product</button>
    </form>
  );
};

export default ProductUpload;
