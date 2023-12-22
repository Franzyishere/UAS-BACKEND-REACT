// Import FontAwesome styles (make sure to install @fortawesome/fontawesome-free)

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./style.css";

const Wrapper = () => {
  const data = [
    {
      cover: <i className="fas fa-id-card"></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className="fas fa-shield"></i>,
      title: "Shop With Confidence",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];

  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((val, index) => (
            <div className="product" key={index}>
              <div className="img icon-circle">
                <i>{val.cover}</i>
              </div>
              <h3>{val.title}</h3>
              <p>Rp.{val.decs}</p>
            </div>
          ))}
        </div>
        </section>
      {/* Use Link component for navigation */}
      <Link to="/riwayat/user">
  <button className="riwayat-button">Riwayat</button>
</Link>

    </>
  );
};

export default Wrapper;
