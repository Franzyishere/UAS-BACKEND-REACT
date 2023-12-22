import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Orbie</h1>
            <p>“"Dengan rasa yang mendalam dan semangat yang berkobar, kami menciptakan roti segar yang melebur dalam mulut dengan kelembutan sempurna, menggugah indera penciuman Anda dengan aroma lezat, serta memberikan kehangatan dan kebahagiaan dalam setiap gigitan."</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Bangunsari, Caruban, Madiun</li>
              <li>Email: orbie123@gmail.com</li>
              <li>Phone: +6281912006281</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
