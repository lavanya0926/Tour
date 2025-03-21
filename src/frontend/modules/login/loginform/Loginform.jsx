


import React, { useState } from "react";
import loginImg from "../../../../assets/images/login.png";
import userLogo from '../../../../assets/images/user.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Loginform = ({ setUser }) => { 
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); 
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
       const BASE_URL = "https://server-3-dul6.onrender.com"; 
      // const res = await axios.post('http://localhost:5000/api/authLogin/login', formData);
      const res = await axios.post(`${BASE_URL}/api/authLogin/login`, formData);
      console.log("Response from Backend:", res.data); 
      
      const { token, name } = res.data; 
  
      if (token && name) {
        localStorage.setItem('user', JSON.stringify({ token, name })); 
        setUser({ token, name }); 

        navigate('/'); 
      } else {
        console.error('Invalid response: Token or name not found');
      }
    } catch (err) {
      console.error('Login failed:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-start" style={{ minHeight: '100vh', marginTop: '90px' }}>
      <div className="row shadow-lg rounded bg-white p-4 w-100" style={{ maxWidth: '700px' }}>
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <img src={loginImg} alt="Login" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center p-4 bg-warning rounded-end">
          <img src={userLogo} alt="User" className="mb-3" style={{ width: '80px', height: '80px' }} />
          <form onSubmit={onSubmit} className="w-100">
            <h2 className="text-white text-center mb-3">Login</h2>
            <div className="mb-3">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                className="form-control" 
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                className="form-control" 
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
