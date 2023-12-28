import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './common/header/Header';
import Pages from './pages/Pages';
import Data from './components/Data';
import Cart from './common/Cart/Cart';
import Transaksi from './common/Cart/transaksi'; // Import Transaksi component
import Checkout from './common/Cart/Checkout'; // Import the Checkout component
import Footer from './common/footer/Footer';
import Sdata from './components/shops/Sdata';
import ContactUs from './components/contact/Contactus';
import Login from './common/Login/Login';
import SignUp from './common/Login/SignUp';
import User from './components/riwayat/User';
import AddUser from './components/riwayat/AddUser';
import CategoryPage from './components/Category/CategoryPage';
import SdataCategory from './components/Category/Sdata';
import Update from './common/Cart/update';

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const existingItem = CartItem.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItem((prevItems) =>
        prevItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem((prevItems) => [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          qty: 1,
          cover: product.cover,
        },
      ]);
    }
  };

  const decreaseQty = (product) => {
    const existingItem = CartItem.find((item) => item.id === product.id);

    if (existingItem) {
      if (existingItem.qty === 1) {
        setCartItem((prevItems) =>
          prevItems.filter((item) => item.id !== existingItem.id)
        );
      } else {
        setCartItem((prevItems) =>
          prevItems.map((item) =>
            item.id === existingItem.id
              ? { ...item, qty: item.qty - 1 }
              : item
          )
        );
      }
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    // Additional logic after signup if needed
  };

  const excludeFooterRoutes = ["/login", "/signup", "/contact"];
  
  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Routes>
          <Route
            path="/"
            element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />}
          />
          <Route
            path="/cart"
            element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}
          />
          {/* Add route for Checkout */}
          <Route
            path="/transaksi"
            element={<Transaksi />}
          />
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/riwayat/user" element={<User />} />
          <Route path="/riwayat/adduser" element={<AddUser />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to="/" /> : <SignUp onSignup={handleSignup} />}
          />
          <Route path="/category" element={<CategoryPage addToCart={addToCart} shopItems={SdataCategory.shopItems} />} />
          <Route path="/transaksi/update/:id" element={<Update />} />
        </Routes>
        {!excludeFooterRoutes.includes(window.location.pathname) && <Footer />}
      </Router>
    </>
  );
}

export default App;
