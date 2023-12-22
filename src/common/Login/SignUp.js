// SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import library axios
import './style.css';

const SignUp = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    name: '',
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
  
    // Check if name, email, and password are provided
    if (!formData.name || !formData.email || !formData.password) {
      console.log('Please provide name, email, and password');
      return;
    }
  
    try {
      // Send a POST request to CodeIgniter 4 backend
      const response = await axios.post('http://localhost:8080/insert-register', formData);
  
      console.log('Sign Up response:', response.data);
  
      // Assume signup logic here (e.g., API call)
      // For simplicity, I'm assuming signup is successful
      // Additional logic after signup if needed
      onSignup();
  
      // Show alert if signup is successful
      alert('Registrasi Berhasil!');
  
      // Redirect to the login page
      navigate('/login');
    } catch (error) {
      console.error('Error during Sign Up:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit" disabled={!formData.name || !formData.email || !formData.password}>
          Sign Up
        </button>
      </form>
      <p>
        Sudah punya akun? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
