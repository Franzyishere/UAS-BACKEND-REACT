import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  // Toggle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenu(!MobileMenu);
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      // Lakukan aksi logout atau tampilkan menu pengguna
      console.log("Logout");
    } else {
      // Redirect ke halaman login jika belum login
      console.log("Redirect to Login");
    }
  };

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='navlink'>
            <ul
              className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"}
              onClick={() => {
                setMobileMenu(false);
                // Anda dapat menambahkan logika tambahan di sini jika diperlukan
              }}
            >
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/Category'>Category</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={handleMenuToggle}>
              {MobileMenu ? <FontAwesomeIcon icon={faTimes} className='close home-btn' /> : <FontAwesomeIcon icon={faBars} className='open' />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
