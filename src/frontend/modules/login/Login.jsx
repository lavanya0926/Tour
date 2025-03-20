

import React from 'react';
import Loginform from './loginform/Loginform';
import Footer from '../../components/footer/Footer';

const Login = ({ setUser }) => { 
  return (
    <div>
      <Loginform setUser={setUser} /> 
      <Footer />
    </div>
  );
};

export default Login;
