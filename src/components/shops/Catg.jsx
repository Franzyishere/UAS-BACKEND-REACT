import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Brownies",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Chiffon Cake",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Traditional Cake",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Birthday Cake",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Cake",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>CAKE </h1>
          <h1>DRINK </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Our Menu</button>
        </div>
      </div>
    </>
  )
}

export default Catg
