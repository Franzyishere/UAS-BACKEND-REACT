// CategoryCart.js
import React, { useState } from "react";
// import "./style.css";

const CategoryCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {shopItems.map((shopItem, index) => {
        return (
          <div className="box" key={index}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{shopItem.discount}% Off</span>
                <img src={shopItem.cover} alt="" />
                {/* Remove the "Love" icon */}
              </div>
              <div className="product-details">
                <h3>{shopItem.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>Rp.{shopItem.price}.00 </h4>
                  <button onClick={() => addToCart(shopItem)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CategoryCart;
