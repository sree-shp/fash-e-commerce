import React from "react";
import "./Category.css";

function Category(props) {
  return (
    <div className="category">
      <img className="category-image" src={props.img} alt="" />
      <div className="category-details">
        <h1 className="category-name">{props.name}</h1>
        <h2 className="category-discount">{props.discount}</h2>
        <button className="category-shop-now">SHOP NOW</button>
      </div>
    </div>
  );
}

export default Category;
