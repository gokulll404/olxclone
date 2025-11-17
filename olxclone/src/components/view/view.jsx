import './View.css';
import { useLocation } from "react-router-dom";
import Product from '../../assets/bike.png'

function View() {
  const location = useLocation();
  const post = location.state; 

  if (!post) {
    return <h2>No product found</h2>;
  }


  const defaultImage = {Product};

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={post.imageUrl || defaultImage}
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
          <p>{post.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default View;
