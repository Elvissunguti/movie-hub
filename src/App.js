import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './Components/Forgot password/ForgotPassword';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/register' element={<Register />} />
    
      </Routes>
      </BrowserRouter>
    
      <Footer />
      
    </div>
  );
}

export default App;
