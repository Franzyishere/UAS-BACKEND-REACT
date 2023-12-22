import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  );
};

const formatToRupiah = (price) => {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

  // Replace the currency symbol if it appears doubled
  const correctedPrice = formattedPrice.replace("IDR", "Rp");

  return correctedPrice;
};

const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItem) => (
          <div className='box' key={productItem.id}>
            <div className='product mtop'>
              <div className='img'>
                <img src={productItem.cover} alt='' />
                <div className='product-like'>
                  <button onClick={() => addToCart(productItem)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
              <div className='product-details'>
                <h3>{productItem.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>{formatToRupiah(productItem.price)}</h4>
                </div>
              </div>
              {/* Move the "Add to Cart" button here */}
              <button onClick={() => addToCart(productItem)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FlashCard;
