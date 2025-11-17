import { useContext, Fragment, useState } from "react";
import { PostsContext } from "../../store/postcontext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Header from "../header/header";
import { db } from "../../firebase/firebaseConfig";


function Create() {
  const { setPosts } = useContext(PostsContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [phone, setPhone] = useState("");

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUrl, setImageUrl] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, category, price, imageUrl, createdAt: serverTimestamp(), sellerName, phone,image };
    const docRef = await addDoc(collection(db, "posts"), newPost);

    

    // Optionally attach id (Firestore returns it)
    const postWithId = { ...newPost, id: docRef.id };
    // Update context immediately for optimistic UI
    setPosts(prev => [postWithId, ...prev]);
    // (onSnapshot in provider will keep it in sync)
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

          <label htmlFor="price">SellerName</label>
          <br />
          <input
            className="input"
            type="text"
            id="seller"
            name="Seller"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
          />
          <br />

          <label htmlFor="price">Phone</label>
          <br />
          <input
            className="input"
            type="text"
            id="phone"
            name="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
