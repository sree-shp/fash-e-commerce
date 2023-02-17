import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import profile from "./round-account-button-with-user-inside.png";
import settings from "./settings.png";
import men from "./boss.png";
import women from "./woman.png";
import kids from "./children.png";
import orders from "./shopping-list.png";
import user from "./user.png";
import cart from "./shopping-cart (3).png";
import heart from "./heart (1).png";

function Navbar() {
  var [isActive, active] = useState(false, () => {
    isActive = !isActive;
  });

  useEffect(() => {
    const hamburgerIcon = document.getElementsByClassName("hamburger-menu");
    const hamburgerWrapper =
      document.getElementsByClassName("hamburger-wrapper");

    hamburgerIcon[0].addEventListener("click", function () {
      active();
      hamburgerWrapper[0].classList.toggle("active");
    });
  }, [active, isActive]);

  return (
    <div className="navbar">
      <div className="hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="hamburger-wrapper active">
        <div className="screen"></div>
        <div className="hamburger-item profile-container">
          <img className="user-icon" src={user} alt="" />
          <h4 className="account-name">User</h4>
        </div>
        <div className="hamburger-item">
          <img className="men-icon" src={men} alt="" />
          <h4 className="men-name">Men</h4>
        </div>
        <div className="hamburger-item">
          <img className="women-icon" src={women} alt="" />
          <h4 className="women-name">Women</h4>
        </div>
        <div className="hamburger-item">
          <img className="kids-icon" src={kids} alt="" />
          <h4 className="kids-name">Kids</h4>
        </div>
        <div className="hamburger-item">
          <img className="orders-icon" src={orders} alt="" />
          <h4 className="orders-name">Orders</h4>
        </div>
        <div className="hamburger-item settings-container">
          <img className="settings-icon" src={settings} alt="" />
          <h4 className="settings-name">Settings</h4>
        </div>
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="brand-name">FASH</h1>
      </Link>
      <div className="categories">
        <div className="men-heading-container">
          <p className="category-item">Men</p>
        </div>
        <div className="men-wrapper">
          <div className="sub-category">
            <h3 className="men-sub-category-heading">TopWear</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> T-Shirts</p>
              <p className="sub-category-links">Casual Shirts</p>
              <p className="sub-category-links">Formal Shirts</p>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="men-sub-category-heading">BottomWear</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> Jeans</p>
              <p className="sub-category-links">Casual Trousers</p>
              <p className="sub-category-links">Formal Trousers</p>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="men-sub-category-heading">FootWear</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> Casual Shoes</p>
              <p className="sub-category-links">Sports Shoes</p>
              <p className="sub-category-links">Formal Shoes</p>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="men-sub-category-heading">ActiveWear</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> Active T-Shirts</p>
              <p className="sub-category-links">Track Pants & Shorts</p>
              <p className="sub-category-links">Tracksuits</p>
            </div>
          </div>
        </div>

        <div className="women-heading-container">
          <p className="category-item">Women</p>
        </div>

        <div className="women-wrapper">
          <div className="sub-category">
            <h3 className="women-sub-category-heading">Indian & Fusion wear</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> Kurtas & Suits</p>
              <p className="sub-category-links">Kurtis, Tunics & Tops</p>
              <p className="sub-category-links">Sarees</p>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="women-sub-category-heading">Western Wear</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> Dresses</p>
              <p className="sub-category-links">Tops</p>
              <p className="sub-category-links">Tshirts</p>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="women-sub-category-heading">FootWear</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> Flats</p>
              <p className="sub-category-links">Casual Shoes</p>
              <p className="sub-category-links">Heels</p>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="women-sub-category-heading">Sports & ActiveWear</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> Clothing</p>
              <p className="sub-category-links">Footwear</p>
              <p className="sub-category-links">Sports Accessories</p>
            </div>
          </div>
        </div>

        <div className="kids-heading-container">
          <p className="category-item">Kids</p>
        </div>

        <div className="kids-wrapper">
          <div className="sub-category">
            <h3 className="kids-sub-category-heading">Boys Clothing</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> T-Shirts</p>
              <p className="sub-category-links">Shirts</p>
              <p className="sub-category-links">Shorts</p>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="kids-sub-category-heading">Girls Clothing</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> Dresses</p>
              <p className="sub-category-links">Tops</p>
              <p className="sub-category-links">Tshirts</p>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="kids-sub-category-heading">FootWear</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> Flip Flops</p>
              <p className="sub-category-links">Casual Shoes</p>
              <p className="sub-category-links">Sports Shoes</p>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="kids-sub-category-heading">Infants</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> Bodysuits</p>
              <p className="sub-category-links">Rompers & Sleepsuits</p>
              <p className="sub-category-links">Clothing Sets</p>
            </div>
          </div>
        </div>

        <div className="lifestyle-heading-container">
          <p className="category-item">Lifestyle</p>
        </div>

        <div className="lifestyle-wrapper">
          <div className="sub-category">
            <h3 className="lifestyle-sub-category-heading">
              Bed Linen & Furnishing
            </h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> Bed Runners</p>
              <p className="sub-category-links">Mattress Protectors</p>
              <p className="sub-category-links">Bedsheets</p>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="lifestyle-sub-category-heading">Bath</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links">Bath Towels</p>
              <p className="sub-category-links">Hand & Face Towels</p>
              <p className="sub-category-links">Beach Towels</p>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="lifestyle-sub-category-heading">Lamps & Lighting</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links"> Floor Lamps</p>
              <p className="sub-category-links">Ceiling Lamps</p>
              <p className="sub-category-links">Table Lamps</p>
            </div>
          </div>
          <div className="sub-category">
            <h3 className="lifestyle-sub-category-heading">Home Décor</h3>
            <div className="sub-category-links-wrapper">
              <p className="sub-category-links">Plants & Planters</p>
              <p className="sub-category-links">Aromas & Candles</p>
              <p className="sub-category-links">Clocks</p>
            </div>
          </div>
        </div>
      </div>
      <input
        className="search-textbox"
        placeholder="Search for products, brands and more"
        type="text"
      />
      <div className="search-icon-container">
        <img className="search-icon" src={cart} alt="search" />
      </div>

      <div className="location-icon-container">
        <img className="location-icon" src={heart} alt="" />
      </div>

      <div className="profile-icon-container">
        <img className="profile-icon" src={profile} alt="" />
        <div className=""></div>
      </div>
      <div className="profile-wrapper">
        <h3 className="welcome">Welcome</h3>
        <Link to="/login">
          <button className="login-register-button" type="submit">
            LOGIN/REGISTER
          </button>
        </Link>
        <hr></hr>
        <div className="profile-links-wrapper">
          <p className="profile-links"> Orders</p>
          <p className="profile-links">Wishlist</p>
          <p className="profile-links">Gift Cards</p>
          <p className="profile-links">Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
