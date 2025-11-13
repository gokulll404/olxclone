import React from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Arrow from "../../assets/Arrow";
import SellButtonPlus from "../../assets/SellButtonPlus";
import SellButton from "../../assets/SellButton";
import Search from "../../assets/Search";
import { Link, useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();




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
          <span>  <Link to="/login" style={{ textDecoration: "none" }}>Login</Link></span>
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
