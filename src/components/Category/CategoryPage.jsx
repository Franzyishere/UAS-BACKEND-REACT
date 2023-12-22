// CategoryPage.js
import React from "react";
import CategoryCart from "./CategoryCart";
import "./Category.css";

const CategoryPage = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='category-page background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row f_flex'>
                <h2>Mobile Phones</h2>
              </div>
              <div className='heading-right row'>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content grid1'>
              <CategoryCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
