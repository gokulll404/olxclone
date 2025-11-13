import React, { Fragment, useState } from "react";
import "./Create.css";
import Header from "../header/header";
import { db, storage } from "../../firebase/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Create() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !price) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        title,
        category,
        price,
        createdAt: serverTimestamp(),
      });

      alert("✅ Data added successfully!");
      setTitle("");
      setCategory("");
      setPrice("");
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error("❌ Error adding document:", error);
    }
  };

 

  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <label htmlFor="category">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />

          <label htmlFor="price">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="price"
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />

          {imagePreview && (
            <img
              alt="Preview"
              width="200px"
              height="200px"
              src={imagePreview}
            />
          )}
          <br />
          <input type="file" />
          <br />
          <button type="submit" className="uploadBtn">
            Upload and Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default Create;
