import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.jpg";
import { AiOutlineLogout } from "react-icons/ai";



const NavBar = () => {
  const navigate = useNavigate();

  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

   
    const handleLogout = async () => {
      try {
        // Call the logout endpoint
        const response = await fetch('/logout', {
          method: 'POST',
        });
        const data = await response.json();
  
        // Redirect to the specified page after logout
        navigate(data.redirectUrl);
        setIsAuthenticated(false);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const login = () => {
      setIsAuthenticated(false)
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
                <div onClick={handleLogout} >
                <AiOutlineLogout
                className="cursor-pointer text-xl" />
                </div>
              
              </li>
              
                ) : ( 
              <li>
                <Link
                 to="/sign in"
                 className="text-black text-xl font-bold"
                 onClick={login}
                 >
                    Sign In
                </Link>
              </li>
                )}
  
            </ul>
        </div>
        
       </div>
    )
}
export default NavBar;