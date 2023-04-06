import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './Components/Forgot password/ForgotPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      

      
      </Routes>
      
      </BrowserRouter>
      <Login />
      <Footer />
      
    </div>
  );
}

export default App;
