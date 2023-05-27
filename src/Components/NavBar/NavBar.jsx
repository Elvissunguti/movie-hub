import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import { createImageFromInitials } from "../Utils/getInitials";
import { getRandomColor } from "../Utils/getRandomColor";



const NavBar = () => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);


    const navLinks = [
        {name: "Home"},
        {name: "About"},
        {name: "Contacts"}
    ];
   
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
      setIsAuthenticated(true)
    }
    
    return (
       <div className="mx-auto flex justify-center items-center max-w-4xl xl:max-w-6xl">
        <Link>
        <img src={logo} alt="logo" className="h-20 w-auto"/>
        </Link>
        <div className="flex flex-row items-center space-x-16">
            <ul className="hidden items-center flex-row">
                {navLinks.map((navLink, i) => (
                    <li key={i}
                     className="p-4 text-lg font-semibold hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54] ">
                        <Link to={navLink.name === "Home"
                     ? `/`
                     : `${
                        navLink.name.charAt(0).toLowerCase() +
                        navLink.name.slice(1)
                     }`}>
                        {navLink.name}
                        </Link>
                    </li>
                ))}

                {isAuthenticated ? (
                    <div className="relative h-max flex flex-row items-center">
              <li className="p-4 hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54]">
                <AiOutlineLogout onClick={handleLogout}
                className="cursor-pointer text-xl"/>
              </li>
              </div>

                ) : (
                  
            <div onClick={login}>
            <li>
                <Link
                 to="/login"
                 className=""
                 >
                    Sign in
                </Link>
            </li>
            </div>
                )}
  
            </ul>
        </div>
        
       </div>
    )
}
export default NavBar;