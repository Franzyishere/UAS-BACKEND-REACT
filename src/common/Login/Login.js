// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email and password are provided
    if (!formData.email || !formData.password) {
      console.log('Please provide email and password');
      return;
    }

    try {
      // Send a POST request to CodeIgniter 4 backend
      const response = await axios.post('http://localhost:8080/login', formData);

      console.log('Login response:', response.data);

      // Check if login was successful
      if (response.data.code === 200) {
        // Show alert if login is successful
        alert('Login successful!');
        
        // Assume login logic here (e.g., API call)
        // Additional logic after login if needed
        onLogin();

        // Redirect to the homepage
        navigate('/');
      } else {
        // Show alert if login failed
        alert('Login failed. Please check your username and password.');
      }
    } catch (error) {
      console.error('Error during Login:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>
        Belum punya akun? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
