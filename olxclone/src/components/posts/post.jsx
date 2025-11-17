import { useContext } from "react";
import { PostsContext } from "../../store/postcontext";
import Heart from "../../assets/Heart";
import { useNavigate } from "react-router-dom";
import '../posts/post.css'

function Post() {
  const { posts } = useContext(PostsContext);
  const navigate = useNavigate();

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>

        <div className="cards">
          {posts.map((item) => (
            <div
              className="card"
              key={item.id}
              onClick={() => navigate("/viewpost", { state: item })}
              style={{ cursor: "pointer" }}
            >
              <div className="favorite">
                <Heart />
              </div>

              <div className="image">
                <img src={item.imageUrl} alt={item.title} />
              </div>

              <div className="content">
                <p className="rate">₹ {item.price}</p>
                <span className="kilometer">{item.category}</span>
                <p className="name">{item.title}</p>
              </div>

              <div className="date">
                <span>
                  {item.createdAt
                    ? item.createdAt.toDate().toLocaleString()
                    : "No date"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default Post;
