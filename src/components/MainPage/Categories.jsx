import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Laptop",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Handphone",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Accessories",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "ETC",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
