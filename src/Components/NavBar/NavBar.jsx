import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.jpg";
import { AiOutlineLogout } from "react-icons/ai";



const NavBar = () => {
  const navigate = useNavigate();

  const [ isAuthenticated, setIsAuthenticated ] = useState(true);

  const handleLogout = async () => {
    try {
      // Make a POST request to the logout endpoint
      const response = await fetch('http://localhost:3000/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include the JWT token in the Authorization header
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
  
      if (response.ok) {
        // Logout was successful, perform any necessary cleanup or redirect
        console.log('Logout successful');
        // Remove the token from local storage
        localStorage.removeItem('token');
        // Redirect or perform any other desired action
        navigate("/"); // Redirect to the login page
      } else {
        // Handle error if logout failed
        console.error('Logout failed');
        // Handle the error or show an error message to the user
      }
    } catch (error) {
      // Handle any network or fetch API errors
      console.error('An error occurred:', error);
      // Handle the error or show an error message to the user
    }
  };
    const login = () => {
      setIsAuthenticated(true)
    };
   
    
    return (
       <div className="mx-auto flex justify-center items-center max-w-4xl xl:max-w-6xl">
        <Link>
        <img src={logo} alt="logo" className="h-20 w-auto"/>
        </Link>
        <div className="flex flex-row items-center space-x-16">
            <ul className="items-center flex-row">
        
            {isAuthenticated ? (
            <li className="p-4 hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54]">
              <div >
                <AiOutlineLogout className="cursor-pointer text-xl"  onClick={handleLogout} />
              </div>
            </li>
          ) : null}
          {!isAuthenticated ? (
            <li>
              <Link
                to="/sign in"
                className="text-black text-xl font-bold"
                onClick={login}
              >
                Sign In
              </Link>
            </li>
          ) : null}
  
            </ul>
        </div>
        
       </div>
    )
}
export default NavBar;