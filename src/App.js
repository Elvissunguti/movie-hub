import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './Components/Forgot password/ForgotPassword';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import BrowsePage from './Components/BrowsePage/BrowsePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign in' element={<SignIn />} />
        <Route path="/browse page" element={<BrowsePage />}  />
    
      </Routes>
      </BrowserRouter>
    
      <Footer />
      
    </div>
  );
}

export default App;
