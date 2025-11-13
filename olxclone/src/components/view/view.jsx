
import './View.css';
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";


function View() {
    const [posts, setPosts] = useState([]);




     useEffect((  ) => {
    const fetchData = async () => {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(data);
    };

    fetchData();
  }, []);

   return (
    <div>
      {posts.map((post) => (
        <div className="viewParentDiv" key={post.id}>
          <div className="imageShowDiv">
            <img
              src={post.imageUrl } 
              alt={post.title}
            />
          </div>

          <div className="rightSection">
            <div className="productDetails">
              <p>&#x20B9; {post.price}</p>
              <span>{post.title}</span>
              <p>{post.category}</p>
              <span>
                {post.createdAt
                  ? new Date(post.createdAt.seconds * 1000).toDateString()
                  : "No date"}
              </span>
            </div>

            <div className="contactDetails">
              <p>Seller details</p>
              <p>{post.sellerName || "No name"}</p>
              <p>{post.sellerPhone || "1234567890"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default View;
