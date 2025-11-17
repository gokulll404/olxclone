import { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Arrow from "../../assets/Arrow";
import SellButtonPlus from "../../assets/SellButtonPlus";
import SellButton from "../../assets/SellButton";
import Search from "../../assets/Search";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../store/firebasecontext";





function Header() {

  const navigate = useNavigate();
  const { user, logout, userData } = useContext(AuthContext);


  const handleLogout = async () => {
    try {
      await logout();        // Firebase signOut()
      navigate("/login");    // Redirect
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };








  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}>
          <OlxLogo />
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>


        <div className="loginPage">
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <p> {userData?.userName}</p>

              <button
                onClick={handleLogout}
                style={{
                  background: "transparent",
                  border: "1px solid black",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "5px"
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <p>Please signUp</p>
            </Link>
          )}
          <hr />
        </div>


        <div className="sellMenu" onClick={() => navigate("/create")}
          style={{ cursor: "pointer" }}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
