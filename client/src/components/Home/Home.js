import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Category from "../Category/Category";
import categories from "../Category/categories";
import Deals from "../Deals/Deals";
import dealsList from "../Deals/Deallist";

import male from "./pngegg (1).png";
import female from "./PngItem_384787.png";
// import adidas from "./pngimg.com - adidas_PNG14 (1).png";
// import nike from "./pngimg.com - nike_PNG19.png";
// import puma from "./pngwing.com (10).png";
// import ck from "./pngimg.com - calvin_klein_PNG19.png";

function createCategoryCard(category) {
  return (
    <Category
      key={category.id}
      img={category.img}
      name={category.name}
      discount={category.discount}
    />
  );
}

function createDealsCard(deals) {
  return (
    <Deals
      key={deals.id}
      img={deals.img}
      name={deals.name}
      discount={deals.discount}
    />
  );
}

function Home() {
  return (
    <div className="Home">
      {/* Navbar  */}

      {/* Landing Section  */}

      <div className="first-section">
        <div className="first-section-description">
          <h1 className="sale-heading">
            VALENTINE'S DAY <br></br>
            <span className="sale">SALE</span>
          </h1>
          <h2 className="discount">40-70% Off</h2>
          <button className="shop-now">Shop Now</button>
        </div>

        <img className="male" src={male} alt="" />
        <img className="female" src={female} alt="" />
      </div>

      {/* Category */}

      <div className="second-section">
        <h1 className="second-section-heading">SHOP BY CATEGORY</h1>
        <div className="category-wrapper">
          {categories.map(createCategoryCard)}
        </div>
      </div>

      {/* Deals of the day  */}

      <div className="third-section">
        <h1 className="third-section-heading">DEALS OF THE DAY</h1>
        <div className="deals-wrapper">{dealsList.map(createDealsCard)}</div>
      </div>

      {/* <div className="fourth-section">
        <h1 className="fourth-section-heading">TOP BRANDS</h1>
        <div className="brands-wrapper">
          <div className="brands-container">
            <div className="brands-left">
              <img className="brands-img adidas" src={adidas} alt="" />
            </div>
            <div className="brands-right">
              <h3 className="brand-description">Upto 25% Off</h3>
            </div>
          </div>

          <div className="brands-container">
            <div className="brands-left">
              <h3 className="brand-description">Upto 10% Off</h3>
            </div>
            <div className="brands-right">
              <img className="brands-img nike" src={nike} alt="" />
            </div>
          </div>

          <div className="brands-container">
            <div className="brands-left">
              <img className="brands-img puma" src={puma} alt="" />
            </div>
            <div className="brands-right">
              <h3 className="brand-description">Upto 30% Off</h3>
            </div>
          </div>

          <div className="brands-container">
            <div className="brands-left">
              <h3 className="brand-description">Upto 10% Off</h3>
            </div>
            <div className="brands-right">
              <img className="brands-img ck" src={ck} alt="" />
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

export default Home;
