


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './frontend/components/header/Navbar';
import Home from './frontend/modules/home/Home';
import Tour from './frontend/modules/tour/Tour';
import Login from './frontend/modules/login/Login';
import Register from './frontend/modules/register/Register';
import Booking from './frontend/modules/home/Booking';

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser); 
    }
  }, []);

  return (
    <div className="App">
      <Router>
        
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book/:id" element={<Booking />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
